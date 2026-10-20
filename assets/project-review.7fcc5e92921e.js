/* Conservative dependency warnings: saved calculations are never recalculated here. */
(function(root){
  'use strict';
  const dependencies={heat:['flow'],flow:['duct','grille','fan','water','pump'],ventilation:['ahu','duct','grille','fan'],ahu:['duct','fan','water','pump'],duct:['fan','fabrication','supports'],fabrication:['supports'],water:['pump'],fittings:['fan','pump']};
  function stable(value){
    if(Array.isArray(value))return value.map(stable);
    if(value&&typeof value==='object')return Object.fromEntries(Object.keys(value).sort().map(k=>[k,stable(value[k])]));
    return value;
  }
  function fingerprint(saved){return JSON.stringify(stable({values:saved.values,extra:saved.extra,valid:saved.valid}));}
  function affected(source){const result=new Set();function visit(k){for(const next of dependencies[k]||[])if(!result.has(next)){result.add(next);visit(next);}}visit(source);return [...result];}
  function changed(project,key,previous,current,now){
    if(previous?.reviewRequired)current.reviewRequired=previous.reviewRequired;
    if(previous&&fingerprint(previous)===fingerprint(current))return false;
    for(const dependent of affected(key)){
      const saved=project.tools[dependent];if(!saved)continue;
      const sources=new Set(saved.reviewRequired?.sources||[]);sources.add(key);
      saved.reviewRequired={sources:[...sources].sort(),changedAt:now};
    }
    return true;
  }
  const api={fingerprint,affected,changed};root.HVACProjectReview=api;
  if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
