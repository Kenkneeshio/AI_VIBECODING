export const FAMILY_PRIORITY_KEY='roomcraft.family-priority.v1';
export const FAMILY_PRIORITIES=Object.freeze(['random','dad','mom','baby']);
export function normalizeFamilyPriority(value){return FAMILY_PRIORITIES.includes(value)?value:'random';}

/** Visual casting, not person identification. Every look is used before one
 * repeats; the preferred look gets the first anonymous radar track. */
export function chooseStorybookFamilyLook(id,counts,preference='random'){
  const least=Math.min(...counts),options=counts.flatMap((count,index)=>count===least?[index]:[]);
  const preferred={dad:0,mom:1,baby:2}[normalizeFamilyPriority(preference)];
  if(preferred!==undefined){
    for(let step=0;step<3;step++){
      const candidate=(preferred+step)%3;
      if(options.includes(candidate))return candidate;
    }
  }
  let hash=2166136261;
  for(const char of String(id))hash=Math.imul(hash^char.charCodeAt(0),16777619);
  return options[(hash>>>0)%options.length];
}
