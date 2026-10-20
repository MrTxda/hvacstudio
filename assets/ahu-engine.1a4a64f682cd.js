/* Air-side AHU/FAHU design duty, not manufacturer coil selection.
   Inlet volume flows refer to each stream's own state; balances use dry air.
   Condensate sensible enthalpy, fan heat, leakage and recovery are excluded. */
(function(root){'use strict';
const psy=typeof module!=='undefined'&&module.exports?require('./psychro-engine.js'):root;
function ahu(x){
 const range=(key,lo,hi)=>{if(!Number.isFinite(x[key])||x[key]<lo||x[key]>hi)throw Error('input:'+key);};
 if(!['fahu','ahu'].includes(x.mode))throw Error('input:mode');
 range('pressure',60,110);range('flow',0,1000000);range('outTemp',-20,60);range('outRh',0,100);range('leaveTemp',1,40);range('leaveRh',0,100);range('waterIn',1,30);range('waterDt',.1,30);range('cpWater',3,5);range('margin',0,50);
 const p=x.pressure*1000,oa=psy.psyState(x.outTemp,'rh',x.outRh,p);
 let ra=null,returnMass=0;
 if(x.mode==='ahu'){range('returnFlow',0,1000000);range('returnTemp',-20,60);range('returnRh',0,100);ra=psy.psyState(x.returnTemp,'rh',x.returnRh,p);returnMass=x.returnFlow/3600/ra.v;}
 const outdoorMass=x.flow/3600/oa.v,mass=outdoorMass+returnMass;if(mass<=0)throw Error('flow');
 const outdoorFraction=outdoorMass/mass;
 let mixed;try{mixed=returnMass>0?psy.psyMix(oa,ra,outdoorFraction):oa;}catch{throw Error('mixSaturation');}
 const leaving=psy.psyState(x.leaveTemp,'rh',x.leaveRh,p);
 if(leaving.t>mixed.t+1e-8)throw Error('heating');
 if(leaving.w>mixed.w+1e-10)throw Error('humidification');
 const total=Math.max(0,mass*(mixed.h-leaving.h)),sensible=Math.max(0,mass*(1.006+1.86*mixed.w)*(mixed.t-leaving.t)),latent=Math.max(0,total-sensible),condensate=Math.max(0,mass*(mixed.w-leaving.w)*3600);
 if(total>1e-8&&x.waterIn>=x.leaveTemp)throw Error('waterApproach');
 if(total>1e-8&&x.waterIn+x.waterDt>=mixed.t)throw Error('waterOutlet');
 const waterTemp=x.waterIn+x.waterDt/2;if(waterTemp>80)throw Error('input:waterDt');
 const rhoWater=1000*(1-(waterTemp+288.9414)/(508929.2*(waterTemp+68.12963))*(waterTemp-3.9863)**2),design=total*(1+x.margin/100),waterFlow=total/(rhoWater*x.cpWater*x.waterDt)*3600,designWaterFlow=waterFlow*(1+x.margin/100);
 return {oa,ra,mixed,leaving,outdoorMass,returnMass,mass,outdoorFraction,total,sensible,latent,shr:total>1e-8?sensible/total:null,condensate,design,waterFlow,designWaterFlow,waterTemp,rhoWater,waterOut:x.waterIn+x.waterDt,mixedFlow:mass*mixed.v*3600,supplyFlow:mass*leaving.v*3600};
}
root.HVACAHU={ahu};if(typeof module!=='undefined'&&module.exports)module.exports={ahu};
})(typeof window!=='undefined'?window:globalThis);
