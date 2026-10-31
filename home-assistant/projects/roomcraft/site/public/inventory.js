/* Additional placeable objects. Stable type IDs keep exported layouts portable. */
(() => {
  'use strict';
  const groups = [
    ['baby-toys','Baby toys'], ['baby-activities','Baby activities'],
    ['baby-mats','Play mats'], ['baby-safety','Colorful safety walls & gates'],
    ['climbing','Soft climbing blocks'], ['fireplace','Fireplace & shelves'],
    ['balcony','Balcony plant sets'], ['fans','Ceiling fans'],
    ['cleaning','Robot vacuums'], ['toy-storage','Toy storage'],
    ['play-furniture','Play furniture']
  ];
  const colors = {
    sage:     ['Sage','#9bb599','#dce8cc','#f5edcf','#5b755e'],
    mint:     ['Mint','#95c8b5','#d6eee0','#f5f9e9','#4f8b7c'],
    sky:      ['Sky blue','#98c5d7','#d5ebf0','#f5f8f2','#557e91'],
    peach:    ['Peach','#e4ac94','#f6d5ba','#fff2dc','#ad7569'],
    coral:    ['Coral','#d58e7e','#f5c5ad','#ffe5d0','#9a5d55'],
    lavender: ['Lavender','#b6a8cf','#e4ddf0','#f6eff6','#756b9b'],
    butter:   ['Butter yellow','#e2c681','#f4e3af','#fff6dc','#a58a4e'],
    cream:    ['Cream','#e2d5bd','#f5eada','#fff9ec','#998972'],
    white:    ['Warm white','#e8e9de','#f8f8ee','#ffffff','#929990'],
    oak:      ['Oak','#bd8b62','#e2b786','#f5dfb7','#74523c'],
    walnut:   ['Walnut','#906347','#bb865c','#ebc69a','#513a2d'],
    charcoal: ['Charcoal','#39464d','#657680','#d6e0d6','#1d292f'],
    brass:    ['Brass','#c9a872','#e9d3a2','#fff2d0','#7f6744'],
    terracotta:['Terracotta','#b87859','#dba27b','#f1d3af','#744b3a'],
    forest:   ['Forest green','#668a63','#a3bb80','#e5e7bc','#355d45'],
    blush:    ['Blush','#dbb2a9','#f1d6cc','#fff1e4','#a67b79'],
    rainbow:  ['Multicolor','#e7ab9d','#9cc8bd','#edd18b','#6d7591'],
    teddy:    ['Teddy brown','#a98263','#cfab84','#ead5ae','#654c3d'],
    slate:    ['Soft gray','#929491','#bdc0bd','#f1f0e9','#55595b']
  };
  const templates = [];
  const icons = {
    'baby-toys':'◉','baby-activities':'✦','baby-mats':'▦','baby-safety':'▥',
    climbing:'▰',fireplace:'▤',balcony:'❀',fans:'✳',cleaning:'◉',
    'toy-storage':'▥','play-furniture':'▣'
  };
  const aliases = {
    'baby-safety':'safety wall',
    fireplace:'fireplace shelfs',
    fans:'seiling fan',
    cleaning:'robot vaccum'
  };
  function add(group,artFamily,form,key,label,w,h,colorKeys,options={}) {
    for(let index=0;index<colorKeys.length;index++){
      const color=colorKeys[index], swatch=colors[color];
      if(!swatch)throw new Error('Unknown inventory color: '+color);
      const type=`${group}-${key}-${color}`;
      templates.push({
        type,label:`${label} · ${swatch[0]}`,icon:icons[group],w,h,group,
        artFamily,form,
        palette:{base:swatch[1],accent:swatch[2],detail:swatch[3],dark:swatch[4]},
        tags:`${options.tags||''} ${aliases[group]||''}`.trim(),
        ...(options.atlas&&index===0?{atlas:options.atlas}:{}),
        ...(options.mount?{mount:options.mount}:{})
      });
    }
  }

  // Baby toys: deliberately large, soft, or enclosed shapes in the floor plan.
  add('baby-toys','softToy','ball','soft-ball','Soft play ball',48,48,['sage','peach','sky','butter'],{tags:'8 month baby roll'});
  add('baby-toys','softToy','texturedBall','sensory-ball','Textured sensory ball',48,48,['sky','mint','lavender','coral'],{atlas:'sensoryBall',tags:'8 month baby sensory'});
  add('baby-toys','softToy','book','cloth-book','Cloth crinkle book',61,48,['sage','peach','sky'],{tags:'baby fabric book'});
  add('baby-toys','softToy','book','board-book','Chunky board book',59,45,['butter','mint'],{tags:'baby books'});
  add('baby-toys','softToy','cups','stacking-cups','Large stacking cups',70,56,['peach','sage','sky','lavender'],{tags:'baby nesting cups'});
  add('baby-toys','softToy','rings','stacking-rings','Large stacking rings',68,68,['rainbow','butter','mint','coral'],{atlas:'stackRings',tags:'baby stacker'});
  add('baby-toys','softToy','blocks','soft-blocks','Soft fabric blocks',88,70,['sage','sky','peach','lavender'],{tags:'large baby blocks'});
  add('baby-toys','softToy','plush','plush-bear','Plush bear',58,65,['teddy','cream','blush'],{atlas:'plushBear',tags:'baby stuffed animal'});
  add('baby-toys','softToy','photoBunnyPlush','bunny-plush','Soft bunny plush',58,70,['cream'],{tags:'photo 1977 living room baby stuffed animal rabbit'});
  add('baby-toys','softToy','teether','teething-ring','Large teething ring',48,48,['mint','butter'],{tags:'baby silicone'});

  // Activity pieces can sit on top of a play mat or in a dedicated play zone.
  add('baby-activities','activityToy','playGym','play-gym','Floor play gym',160,126,['sage','peach','sky'],{atlas:'playGym',tags:'baby activity arch'});
  add('baby-activities','activityToy','photoWoodArch','wooden-play-arch','Wooden hanging-toy play arch',140,100,['oak'],{tags:'photo 1977 living room baby gym natural wood dangling toys'});
  add('baby-activities','activityToy','photoActivityTable','colorful-activity-table','Colorful activity table',118,90,['rainbow'],{tags:'photo 1977 living room baby sensory music table'});
  add('baby-activities','activityToy','activityCube','activity-cube','Activity cube',74,74,['oak','sky','mint'],{atlas:'activityCube',tags:'baby activity'});
  add('baby-activities','activityToy','activityBoard','activity-board','Large activity board',124,60,['oak','sage','sky'],{atlas:'activityBoard',tags:'baby sensory board'});
  add('baby-activities','activityToy','mirror','floor-mirror','Unbreakable play mirror',98,70,['cream','sage'],{tags:'baby floor mirror'});
  add('baby-activities','activityToy','tunnel','fabric-tunnel','Soft fabric crawl tunnel',130,74,['sky','butter'],{tags:'baby crawl'});
  add('baby-activities','activityToy','sensoryBasket','sensory-basket','Sensory play basket',73,65,['oak','mint'],{tags:'baby toys basket'});
  add('baby-activities','activityToy','largeRattle','large-rattle','Large handled rattle',56,42,['peach','sage'],{tags:'baby grasp'});

  add('baby-mats','playMat','tummy','tummy-mat','Tummy-time mat',182,130,['sage','peach','sky','butter'],{tags:'baby soft floor mat'});
  add('baby-mats','playMat','foam','foam-mat','Large foam play mat',215,155,['rainbow','cream','mint','lavender','coral'],{atlas:'mat',tags:'baby floor padded'});
  add('baby-mats','playMat','photoLeafMat','leaf-play-mat','Gray leaf play mat',240,170,['slate'],{tags:'photo 1977 living room baby quilted patterned padded mat'});
  add('baby-mats','playMat','photoCheckerMat','checker-puzzle-mat','Brown checker puzzle mat',210,140,['cream'],{tags:'photo 1977 living room baby foam tile checkerboard'});
  add('baby-mats','playMat','puzzle','puzzle-mat','Interlocking play mat',205,155,['sage','sky','butter','peach'],{tags:'baby padded puzzle'});
  add('baby-mats','playMat','round','round-mat','Round quilted play mat',160,160,['cream','blush','mint'],{tags:'baby floor rug'});

  // A stair gate can be snapped to a nearby wall in the second-floor plan.
  add('baby-safety','paddedPanel','wall','padded-wall','Padded safety wall',156,29,['sage','mint','sky','peach','lavender','butter'],{atlas:'wallPanels',mount:'wall',tags:'color padded wall panel'});
  add('baby-safety','paddedPanel','quilted','quilted-wall','Quilted wall panel',146,30,['cream','sky','blush','sage'],{mount:'wall',tags:'color soft wall'});
  add('baby-safety','paddedPanel','folding','folding-wall','Folding play barrier',174,34,['sage','peach','lavender'],{tags:'baby color safety wall'});
  add('baby-safety','paddedPanel','playpen','playpen','Panel playpen',182,143,['cream','sage','sky'],{tags:'baby enclosure'});
  add('baby-safety','paddedPanel','photoPlayYard','rainbow-play-yard','Multicolor bear-panel play yard',320,225,['rainbow'],{tags:'photo 1977 living room baby safety enclosure playpen fence'});
  add('baby-safety','paddedPanel','photoBearPanel','bear-panel','Bear-face play yard panel',94,34,['blush','white','mint','butter','sky','lavender'],{tags:'photo 1977 living room baby colorful modular safety gate fence panel'});
  add('baby-safety','paddedPanel','gate','stair-gate','Hardware-mounted stair gate',112,29,['white','oak','charcoal'],{atlas:'babyGate',tags:'top of stairs second floor baby gate'});
  add('baby-safety','paddedPanel','guard','fireplace-guard','Fireplace barrier',158,35,['charcoal','cream'],{tags:'fireplace baby screen guard'});

  add('climbing','foamBlock','cube','foam-cube','Large foam cube',76,76,['sage','sky','peach','butter'],{tags:'soft climbing baby'});
  add('climbing','foamBlock','wedge','foam-wedge','Foam climbing wedge',122,81,['rainbow','peach','sage','sky','lavender'],{atlas:'foamWedge',tags:'soft climbing ramp'});
  add('climbing','foamBlock','steps','foam-steps','Foam step set',130,102,['rainbow','sage','butter','sky','peach'],{atlas:'foamSteps',tags:'soft climbing blocks'});
  add('climbing','foamBlock','ramp','foam-ramp','Gentle foam ramp',157,91,['mint','peach','lavender'],{tags:'soft climbing'});
  add('climbing','foamBlock','arch','foam-arch','Foam crawling arch',126,105,['rainbow','sky','sage','butter'],{atlas:'foamArch',tags:'soft climbing'});
  add('climbing','foamBlock','tunnel','foam-tunnel','Foam crawl tunnel',155,112,['sage','peach','lavender'],{tags:'soft play climbing'});

  add('fireplace','fireplace','mantel','fireplace-mantel','Fireplace mantel',180,64,['oak','walnut','white'],{atlas:'fireplace',tags:'hearth fireplace shelf'});
  add('fireplace','fireplace','photoTiledMantel','white-tile-mantel','White mantel with dark tile hearth',180,95,['white'],{tags:'photo 1977 living room fireplace stone tile surround'});
  add('fireplace','fireplace','hearth','fireplace-hearth','Stone fireplace hearth',169,87,['cream','charcoal','terracotta'],{tags:'fireplace insert'});
  add('fireplace','fireplace','screen','fireplace-screen','Fireplace screen',172,31,['charcoal','brass'],{tags:'fireplace guard'});
  add('fireplace','shelf','floating','floating-shelf','Floating mantel shelf',162,40,['oak','walnut','white','charcoal'],{tags:'fireplace wall shelf'});
  add('fireplace','shelf','corner','corner-shelf','Corner display shelf',108,108,['oak','white'],{tags:'fireplace shelves'});
  add('fireplace','shelf','anchored','anchored-bookcase','Anchored book display shelf',87,152,['oak','white'],{tags:'anchored shelves bookcase'});
  add('fireplace','shelf','photoToyShelf','toy-side-shelf','Fireplace side toy shelf',85,130,['oak'],{tags:'photo 1977 living room toy display shelving'});

  add('balcony','planterSet','rail','rail-planters','Balcony rail planter set',179,53,['forest','terracotta','white','charcoal'],{atlas:'balconyPlants',tags:'balcony flowers plant set'});
  add('balcony','planterSet','cluster','pot-cluster','Balcony pot cluster',137,100,['terracotta','cream','sage','charcoal'],{tags:'balcony plant set'});
  add('balcony','planterSet','herbs','herb-trio','Balcony herb trio',133,60,['sage','terracotta','white'],{tags:'balcony plant set herbs'});
  add('balcony','planterSet','hanging','hanging-plants','Hanging basket pair',113,77,['forest','terracotta','cream'],{tags:'balcony plant set'});
  add('balcony','planterSet','vertical','vertical-garden','Vertical balcony garden',83,160,['forest','sage','walnut'],{tags:'balcony plant set'});
  add('balcony','planterSet','tall','tall-planters','Tall balcony planter set',138,119,['forest','terracotta','charcoal'],{tags:'balcony plant set'});

  add('fans','ceilingFan','three','three-blade-fan','Three-blade ceiling fan',150,150,['oak','white','charcoal'],{atlas:'ceilingFan',tags:'ceiling fan'});
  add('fans','ceilingFan','four','four-blade-fan','Four-blade ceiling fan',155,155,['white','walnut','brass'],{tags:'ceiling fan'});
  add('fans','ceilingFan','five','five-blade-fan','Five-blade ceiling fan',160,160,['oak','charcoal'],{tags:'ceiling fan'});
  add('fans','ceilingFan','light','fan-light','Ceiling fan with light',158,158,['white','brass'],{tags:'ceiling fan light'});
  add('fans','ceilingFan','palm','palm-fan','Palm-leaf ceiling fan',168,168,['forest'],{tags:'ceiling fan'});

  add('cleaning','robotVacuum','round','round-robot-vac','Round robot vacuum',76,76,['white','charcoal','sage','brass'],{atlas:'robotVacuum',tags:'robot vacuum cleaner'});
  add('cleaning','robotVacuum','docked','docked-robot-vac','Robot vacuum with dock',99,75,['white','charcoal'],{tags:'robot vacuum cleaner charging'});
  add('cleaning','robotVacuum','mop','robot-mop','Robot vacuum mop',78,78,['white','charcoal'],{tags:'robot vacuum cleaner'});
  add('cleaning','robotVacuum','slim','slim-robot-vac','Slim robot vacuum',84,64,['white','charcoal'],{tags:'robot vacuum cleaner'});

  add('toy-storage','storage','basket','toy-basket','Woven toy basket',85,76,['oak','cream','sage'],{tags:'baby toy storage'});
  add('toy-storage','storage','bin','soft-toy-bin','Soft toy bin',84,74,['sage','peach','sky'],{tags:'baby toy storage'});
  add('toy-storage','storage','cubby','low-cubby','Low toy cubby',136,67,['oak','white'],{tags:'baby toy storage shelf'});

  add('play-furniture','playFurniture','softPouf','soft-pouf','Soft play pouf',79,79,['sage','peach','lavender'],{tags:'baby soft seat'});
  add('play-furniture','playFurniture','photoBearChair','bear-floor-chair','Teddy bear toddler floor chair',86,85,['teddy'],{tags:'photo 1977 living room baby bear armchair'});
  add('play-furniture','playFurniture','photoBolster','gray-bolster','Long gray floor bolster',126,43,['slate'],{tags:'photo 1977 living room baby soft support pillow'});
  add('play-furniture','playFurniture','lowTable','low-play-table','Low play table',127,79,['oak','white'],{tags:'baby play furniture'});
  add('play-furniture','playFurniture','lowShelf','low-play-shelf','Low play shelf',129,52,['oak','white'],{tags:'baby play furniture'});

  const byType=Object.fromEntries(templates.map(t=>[t.type,t]));
  window.RoomcraftInventory={groups,templates,byType};
})();
