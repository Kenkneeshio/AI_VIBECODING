import {normalizeWorldLifeSettings} from './storybook-world-life-settings.mjs';

// A regional illustration catalog, not telemetry or a claim of a current sighting.
// Each entry has habitat, silhouette, palette and signature activity. The 120
// persistent identities are sampled in bounded groups rather than all drawn.
const entries=[
  ['bobcat','Bobcat','canyon','cat','#b18f68',7,'stalk'],
  ['coyote','Coyote','scrub','canid','#aa9378',7,'trot'],
  ['raccoon','Raccoon','riparian','mammal','#8a8178',5,'wash'],
  ['gray-fox','Gray fox','canyon','canid','#a18b77',5,'pounce'],
  ['kit-fox','Kit fox','desert','canid','#c2a982',4,'pounce'],
  ['mule-deer','Mule deer','canyon','deer','#b49a7b',10,'graze'],
  ['bighorn-sheep','Peninsular bighorn sheep','desert','deer','#b6a082',10,'climb'],
  ['desert-cottontail','Desert cottontail','scrub','rabbit','#b8a18b',3,'hop'],
  ['california-ground-squirrel','California ground squirrel','scrub','rabbit','#987d62',3,'dig'],
  ['california-pocket-mouse','California pocket mouse','desert','rodent','#b69a7e',2,'dig'],
  ['merriams-kangaroo-rat','Merriam’s kangaroo rat','desert','rodent','#b9a27e',2,'hop'],
  ['crawfords-gray-shrew','Crawford’s gray shrew','canyon','rodent','#85786d',2,'forage'],
  ['american-badger','American badger','desert','mammal','#9d9580',5,'dig'],
  ['striped-skunk','Striped skunk','scrub','mammal','#333a39',4,'forage'],
  ['virginia-opossum','Virginia opossum','riparian','mammal','#a49a8f',4,'climb'],
  ['canyon-bat','Canyon bat','canyon','bird','#776b64',2,'flit'],
  ['western-mastiff-bat','Western mastiff bat','canyon','bird','#675f5a',3,'flit'],
  ['greater-roadrunner','Greater roadrunner','desert','bird','#897a67',5,'sprint'],
  ['california-quail','California quail','scrub','bird','#98745f',3,'scratch'],
  ['california-scrub-jay','California scrub-jay','scrub','bird','#597c9e',3,'cache'],
  ['annas-hummingbird','Anna’s hummingbird','scrub','bird','#6a9c85',2,'hover'],
  ['american-crow','American crow','canyon','bird','#303940',4,'forage'],
  ['common-raven','Common raven','desert','bird','#343940',5,'soar'],
  ['red-tailed-hawk','Red-tailed hawk','canyon','bird','#8e6c52',5,'soar'],
  ['peregrine-falcon','Peregrine falcon','canyon','bird','#6d7a83',4,'dive'],
  ['american-kestrel','American kestrel','scrub','bird','#ad8167',3,'hover'],
  ['osprey','Osprey','riparian','bird','#8f806d',5,'dive'],
  ['great-egret','Great egret','riparian','bird','#efe9db',5,'wade'],
  ['black-phoebe','Black phoebe','riparian','bird','#43484c',2,'flit'],
  ['bewicks-wren','Bewick’s wren','scrub','bird','#9d8b6e',2,'forage'],
  ['house-finch','House finch','scrub','bird','#b26e62',2,'flit'],
  ['mourning-dove','Mourning dove','scrub','bird','#b4a18e',3,'coo'],
  ['california-gnatcatcher','California gnatcatcher','scrub','bird','#83908d',2,'flit'],
  ['western-gull','Western gull','riparian','bird','#e7e7df',4,'soar'],
  ['whimbrel','Whimbrel','riparian','bird','#ac9b82',4,'wade'],
  ['coast-horned-lizard','Coast horned lizard','desert','lizard','#a79272',3,'bask'],
  ['san-diego-alligator-lizard','San Diego alligator lizard','canyon','lizard','#777d62',3,'bask'],
  ['chuckwalla','Chuckwalla','desert','lizard','#937f6b',4,'bask'],
  ['desert-iguana','Desert iguana','desert','lizard','#b7a789',4,'bask'],
  ['red-diamond-rattlesnake','Red diamond rattlesnake','desert','snake','#aa7d6d',4,'coil'],
  ['california-kingsnake','California kingsnake','canyon','snake','#55504b',4,'coil'],
  ['garden-slender-salamander','Garden slender salamander','riparian','lizard','#675c52',2,'hide'],
];

export const INLAND_SPECIES=Object.freeze(entries.map(([id,name,habitat,shape,color,size,signature])=>
  Object.freeze({id,name,habitat,shape,color,size,signature})));
export const INLAND_POPULATION=120;
const habitats=['canyon','riparian','desert','scrub'];
const hash=(seed,index)=>{let n=Math.imul((seed|0)^(index*0x9e3779b9),0x85ebca6b);n=Math.imul(n^(n>>>16),0xc2b2ae35);return((n^(n>>>16))>>>0)/4294967296;};

/** World-coordinate pairs stay beyond the home and road. `canPlace` is the
 * shared structure/road/terrain exclusion used by the editor and live scene. */
export function planInlandWildlife({plan,heightAt,canPlace=()=>true}={}){
  const bounds=plan?.houseBounds??plan?.bounds;
  if(!bounds||![bounds.minX,bounds.maxX,bounds.maxZ].every(Number.isFinite)||typeof heightAt!=='function')return[];
  const cx=(bounds.minX+bounds.maxX)/2,groups=[];
  for(let i=0;i<60;i++){
    const habitat=habitats[i%4],a=hash(37,i*7+1),b=hash(37,i*7+2);
    const x=habitat==='desert'?bounds.maxX+780+a*1250:habitat==='riparian'?bounds.maxX+310+a*520:
      habitat==='canyon'?cx-1400+a*2100:cx-1750+a*2100;
    const z=bounds.maxZ+290+b*1080;
    const candidates=[[x,z],[x+90,z+75],[x-115,z+85]];
    const point=candidates.find(([px,pz])=>[
      [0,0],[16,0],[-16,0],[0,16],[0,-16],
    ].every(([dx,dz])=>canPlace(px+dx,pz+dz)&&Number.isFinite(heightAt(px+dx,pz+dz))));
    if(!point)continue;
    const species=INLAND_SPECIES.filter(v=>v.habitat===habitat);
    const first=species[Math.floor(hash(41,i*9)*species.length)];
    const second=species[Math.floor(hash(43,i*11)*species.length)];
    groups.push(Object.freeze({id:`wild-pair-${String(i).padStart(2,'0')}`,habitat,x:point[0],y:heightAt(...point),z:point[1],
      members:Object.freeze([0,1].map((side)=>Object.freeze({id:`wild-${String(i*2+side).padStart(3,'0')}`,
        species:side?second:first,side}))),
    }));
  }
  return groups;
}

/** Pure explicit-time scheduler. Every identity gets walk/forage/rest plus a
 * species signature and a paired encounter. No Math.random or wall clock. */
export function sampleInlandWildlife(groups,seconds=0,options={}){
  const settings=normalizeWorldLifeSettings(options.worldLife);
  if(!settings.enabled||!settings.landWildlife||settings.density===0)return[];
  const time=options.reduceMotion?0:Math.max(0,Number.isFinite(seconds)?seconds:0)*settings.pace;
  const cycle=Math.floor(time/24),phase=time%24;
  const perHabitat=Math.max(1,Math.ceil(settings.density*4));
  const actors=[];
  for(const habitat of habitats){
    const eligible=groups.filter(group=>group.habitat===habitat);
    if(!eligible.length)continue;
    for(let j=0;j<Math.min(perHabitat,eligible.length);j++){
      const group=eligible[(cycle*perHabitat+j*3+habitats.indexOf(habitat))%eligible.length];
      const encounter=phase>=18;
      for(const member of group.members){
        const mode=encounter?'interact':phase<6?'forage':phase<11?'walk':phase<15?'rest':member.species.signature;
        const side=member.side?1:-1,beat=options.reduceMotion?0:Math.sin(time*2+member.side);
        const x=group.x+side*(encounter?3:7)+Math.sin(time*.22+member.side)*2;
        const z=group.z+Math.cos(time*.19+member.side)*3;
        const bird=member.species.shape==='bird';
        const flying=bird&&['hover','soar','dive','flit'].includes(mode);
        actors.push({id:member.id,partnerId:group.members[1-member.side].id,species:member.species.id,
          name:member.species.name,habitat,shape:member.species.shape,color:member.species.color,
          size:member.species.size*(.86+.22*hash(settings.seed,Number(member.id.slice(-3)))),
          x,y:options.heightAt?.(x,z)??group.y,z,flyHeight:flying?10+member.species.size*2:0,
          yaw:side>0?Math.PI:0,mode,interaction:encounter?(member.species.shape==='bird'?'flock':
            member.species.shape==='cat'||member.species.shape==='canid'?'watch':'greet'):null,
          beat,visible:options.night===true?['raccoon','coyote','bobcat','kit-fox','canyon-bat','western-mastiff-bat','american-badger','striped-skunk','virginia-opossum'].includes(member.species.id):
            !['canyon-bat','western-mastiff-bat'].includes(member.species.id),
        });
      }
    }
  }
  return actors.filter(actor=>actor.visible&&Number.isFinite(actor.y)).slice(0,32);
}
