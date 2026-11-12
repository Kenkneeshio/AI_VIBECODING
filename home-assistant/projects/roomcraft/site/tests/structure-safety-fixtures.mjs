export function validStructureProject() {
  return {
    version:2, editableReferenceVersion:10,
    rooms:[{id:'room', name:'Synthetic living room', surface:'oak',
      points:[{x:100,y:100},{x:500,y:100},{x:500,y:400},{x:100,y:400}]}],
    walls:[
      {id:'wall',x1:100,y1:100,x2:500,y2:100},
      {id:'wall-after-opening',x1:100,y1:160,x2:100,y2:400},
      {id:'fence',kind:'fence',x1:70,y1:100,x2:70,y2:400},
    ],
    items:[{id:'lamp',type:'lamp',name:'Fixture lamp',x:220,y:230,w:48,h:60,rotation:0}],
    hotspots:[],
    terrain:{cells:[{col:0,row:-8,height:64,prop:'pine',cover:'grass'}]},
    customFixture:{preserve:true},
  };
}

export function invalidStructureProjects() {
  const valid = validStructureProject();
  return [
    {
      label:'self-crossing room',
      project:{...valid,rooms:[{...valid.rooms[0],points:[
        {x:100,y:100},{x:500,y:400},{x:100,y:400},{x:500,y:100},
      ]}]},
      message:/room boundary crosses or touches itself/i,
    },
    {
      label:'collapsed wall',
      project:{...valid,walls:[{...valid.walls[0],x2:100}]},
      message:/both ends at the same point/i,
    },
    ...['rooms','walls','items'].map(key=>({
      label:'duplicate '+key+' IDs',
      project:{...valid,[key]:[valid[key][0],{...valid[key][0]}]},
      message:/duplicate IDs/i,
    })),
    {
      label:'invalid furniture dimension',
      project:{...valid,items:[{...valid.items[0],w:0}]},
      message:/invalid object geometry/i,
    },
    {
      label:'repairable repeated closing corner',
      project:{...valid,rooms:[{...valid.rooms[0],points:[...valid.rooms[0].points,valid.rooms[0].points[0]]}]},
      message:/repeated corners/i,
    },
    {
      label:'unsafe world extent',
      project:{...valid,walls:[{...valid.walls[0],x2:40000}]},
      message:/editing range/i,
    },
  ];
}
