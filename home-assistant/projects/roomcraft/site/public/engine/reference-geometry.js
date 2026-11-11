(function(root) {
  'use strict';

  const wallKeys = ['x1', 'y1', 'x2', 'y2'];
  const matchesWall = (wall, coordinates) => wall && wallKeys.every((key, index) => wall[key] === coordinates[index]);
  const wallAt = (id, [x1, y1, x2, y2]) => ({id, x1, y1, x2, y2});
  const matchesRoom = (room, coordinates) => room?.points.length === coordinates.length &&
    coordinates.every(([x, y], index) => room.points[index].x === x && room.points[index].y === y);
  const setRoom = (room, coordinates) => { room.points = coordinates.map(([x, y]) => ({x, y})); };

  function isOpenThreshold(wall) {
    return (wall.id === 'w3' && matchesWall(wall, [400,408,342,468])) ||
      (wall.id === 'w7' && matchesWall(wall, [248,590,302,651]));
  }

  // These repairs describe the approved reference in its 1536 × 1024 plan
  // space. An edited group is left intact so a source repair never redraws it.
  function repair(project) {
    const rooms = project.rooms.map(room => ({...room}));
    const items = project.items.map(item => ({...item}));
    const walls = new Map(project.walls.map(wall => [wall.id, {...wall}]));
    const byRoom = id => rooms.find(room => room.id === id);
    const groupMatches = group => group.every(([id, before]) => matchesWall(walls.get(id), before));
    function updateWalls(group) {
      for (const [id, , after] of group) {
        if (after) walls.set(id, {...walls.get(id), ...wallAt(id, after)});
        else walls.delete(id);
      }
    }

    const bedroom = byRoom('bedroom');
    const rear = [
      ['w1', [400,193,788,193], [400,193,799,193]],
      ['w11', [1485,178,1133,178], [1485,178,1066,178]],
      ['w12', [799,193,1066,193], [799,193,1066,193]],
    ];
    if (groupMatches(rear) && !walls.has('reference-rear-step')) {
      updateWalls(rear);
      walls.set('reference-rear-step', wallAt('reference-rear-step', [1066,178,1066,193]));
      if (matchesRoom(bedroom, [[1133,178],[1485,178],[1485,552],[1133,552]])) {
        setRoom(bedroom, [[1066,178],[1485,178],[1485,552],[1133,552],[1133,485],[1066,485]]);
      }
    }

    const studyRecess = [
      ['w16', [1066,193,1066,322], [1066,193,1066,350]],
      ['w18', [1133,178,1133,289], [1133,178,1133,210]],
      ['w19', [1133,333,1133,485], [1133,289,1133,485]],
    ];
    if (groupMatches(studyRecess) && !walls.has('reference-study-jamb')) {
      updateWalls(studyRecess);
      walls.set('reference-study-jamb', wallAt('reference-study-jamb', [1066,442,1066,485]));
    }

    const bathOne = byRoom('bath-one');
    const bathTwo = byRoom('bath-two');
    const closet = byRoom('closet');
    const baths = [
      ['w20', [1133,552,1284,552], [1055,552,1284,552]],
      ['w22', [865,642,945,642], [865,642,945,642]],
      ['w24', [865,642,865,800], [860,642,860,800]],
      ['w26', [1115,642,1264,642], [1104,642,1264,642]],
      ['w27', [1345,642,1394,642], null],
      ['w28', [1115,642,1115,800], [1104,552,1104,642]],
      ['w29', [1394,642,1394,800], [1394,656,1394,800]],
      ['w30', [1394,574,1394,642], null],
      ['w31', [1394,574,1485,574], null],
      ['w33', [848,550,848,642], [860,550,860,630]],
    ];
    if (groupMatches(baths) && !walls.has('reference-bath-header') && !walls.has('reference-closet-jamb') &&
        matchesRoom(bathOne, [[865,642],[1104,642],[1104,800],[865,800]]) &&
        matchesRoom(bathTwo, [[1115,642],[1394,642],[1394,800],[1115,800]]) &&
        matchesRoom(closet, [[1395,574],[1485,574],[1485,800],[1395,800]])) {
      updateWalls(baths);
      // Use the same end-joining operation as the editor on this traced seam.
      const header = wallAt('reference-bath-header', [860,552,945,552]);
      const kitchenBathJoin = root.RoomcraftWallJoins.joinNearby(
        [walls.get('w22'), walls.get('w24'), walls.get('w33'), header], ['w24', header.id]);
      for (const wall of kitchenBathJoin.walls) walls.set(wall.id, wall);
      walls.set('reference-closet-jamb', wallAt('reference-closet-jamb', [1394,552,1394,574]));
      setRoom(bathOne, [[860,552],[927,552],[927,642],[1104,642],[1104,800],[860,800]]);
      setRoom(bathTwo, [[1104,552],[1394,552],[1394,800],[1104,800]]);
      setRoom(closet, [[1394,552],[1485,552],[1485,800],[1394,800]]);
    }

    const bed = items.find(item => item.id === 'i6' && item.type === 'bed');
    if (bed && bed.x === 1331 && bed.y === 373 && bed.w === 213 && bed.h === 194 && bed.rotation === 0) {
      Object.assign(bed, {x:1355, y:374, w:194, h:213, rotation:90});
    }
    return {...project, rooms, walls:[...walls.values()], items};
  }

  root.RoomcraftReferenceGeometry = Object.freeze({repair, isOpenThreshold});
})(typeof window === 'undefined' ? globalThis : window);
