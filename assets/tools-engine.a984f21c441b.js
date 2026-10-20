/* Engineering kernels. SI internally; display flows in m3/h, dimensions in mm.
   Fitting K and equipment losses are project inputs, not a fitting catalogue. */
(function(root){
'use strict';
const g=9.80665;
function requirePositive(...a){if(a.some(v=>!Number.isFinite(v)||v<=0))throw new Error('positive');}
function friction(Re,relative){requirePositive(Re);let f=64/Re;if(Re<2300)return f;let ft=.02;for(let i=0;i<50;i++)ft=1/(-2*Math.log10(relative/3.7+2.51/(Re*Math.sqrt(ft))))**2;return Re>=4000?ft:f+(ft-f)*(Re-2300)/1700;}
function density(t){return 1000*(1-(t+288.9414)/(508929.2*(t+68.12963))*(t-3.9863)**2);}
function motor(kw){return [.09,.12,.18,.25,.37,.55,.75,1.1,1.5,2.2,3,4,5.5,7.5,11,15,18.5,22,30,37,45,55,75,90,110,132,160,200,250,315,355,400,500].find(v=>v>=kw)||null;}
function fan(x,rows){
 requirePositive(x.flow,x.rho,x.mu,x.eff,x.motorEff,x.outArea);if(!rows.length)throw new Error('rows');
 const detail=rows.map(r=>{requirePositive(r.flow,r.a,r.b);if(r.flow>x.flow+1e-9)throw new Error('branchFlow');const A=r.shape==='round'?Math.PI*(r.a/1000)**2/4:r.a*r.b/1e6,D=r.shape==='round'?r.a/1000:2*r.a*r.b/(r.a+r.b)/1000,V=r.flow/3600/A,Re=x.rho*V*D/(x.mu*1e-6),f=friction(Re,x.rough/1000/D),vp=x.rho*V*V/2,straight=f*r.length/D*vp,local=r.k*vp,equipment=r.device;return{...r,A,D,V,Re,f,straight,local,equipment,total:straight+local+equipment};});
 const loss=detail.reduce((a,b)=>a+b.total,0)+x.extra,total=loss*(1+x.margin/100),outVelocity=x.flow/3600/x.outArea,outVp=x.rho*outVelocity**2/2,staticPressure=total-outVp,airKW=x.flow/3600*total/1000,shaft=airKW/(x.eff/100),electric=shaft/(x.motorEff/100);return{detail,loss,total,outVelocity,outVp,staticPressure,airKW,shaft,electric,motor:motor(shaft)};
}
function pump(x,rows){
 requirePositive(x.flow,x.eff,x.motorEff);if(!rows.length)throw new Error('rows');const rho=density(x.temp),mu=2.414e-5*10**(247.8/(x.temp+133.15));
 const detail=rows.map(r=>{requirePositive(r.flow,r.d);if(r.flow>x.flow+1e-9)throw new Error('branchFlow');const D=r.d/1000,A=Math.PI*D*D/4,V=r.flow/3600/A,Re=rho*V*D/mu,f=friction(Re,x.rough/1000/D),straight=f*r.length/D*V*V/(2*g),local=r.k*V*V/(2*g),equipment=r.device*1000/(rho*g);return{...r,V,Re,f,straight,local,equipment,total:straight+local+equipment};});
 const pipe=detail.reduce((a,b)=>a+b.total,0),staticHead=x.system==='closed'?0:x.height,terminal=x.system==='closed'?0:x.terminal*1000/(rho*g),loss=pipe+staticHead+terminal+x.extra,head=loss*(1+x.margin/100),hydraulic=rho*g*x.flow/3600*head/1000,shaft=hydraulic/(x.eff/100),electric=shaft/(x.motorEff/100);return{detail,rho,pipe,staticHead,terminal,loss,head,pressure:rho*g*head/1000,hydraulic,shaft,electric,motor:motor(shaft)};
}
function flow(x){requirePositive(x.load,x.airDt,x.waterDt,x.rhoAir,x.cpAir,x.cpWater);const kw=x.unit==='btu'?x.load/3412.141633:x.unit==='tr'?x.load*3.51685284:x.load,rho=density(x.waterTemp),sensible=kw*x.sensible/100,air=sensible/(x.rhoAir*x.cpAir*x.airDt)*3600,water=kw/(rho*x.cpWater*x.waterDt)*3600;return{kw,sensible,air,water,rho,btu:kw*3412.141633,tr:kw/3.51685284};}
function ventilation(x){requirePositive(x.area,x.height);if(x.method==='combined')requirePositive(x.ez);const people=x.people*x.rp,area=x.area*x.ra,bz=people+area,outdoor=x.ez>0?bz/x.ez*3.6:0,achFlow=x.area*x.height*x.ach,personFlow=x.people*x.personRate*3.6,areaFlow=x.area*x.areaRate*3.6,chosen=x.method==='combined'?outdoor:x.method==='ach'?achFlow:x.method==='people'?personFlow:areaFlow;return{people,area,bz,outdoor,achFlow,personFlow,areaFlow,chosen,volume:x.area*x.height,ach:chosen/(x.area*x.height)};}
function grille(x){requirePositive(x.flow,x.velocity,x.free,x.count,x.width,x.height);const kind=x.kind||'rect';if(!['rect','round','fourway','linear'].includes(kind)||!Number.isInteger(x.count)||x.free>100)throw new Error('grilleInputs');const each=x.flow/x.count,freeArea=each/3600/x.velocity,faceArea=freeArea/(x.free/100),area=(a,b)=>kind==='round'?Math.PI*(a/1000)**2/4:a*b/1e6,actualArea=area(x.width,kind==='fourway'?x.width:x.height),actualFree=actualArea*x.free/100,actualVelocity=each/3600/actualFree,candidates=[];function add(a,b){const A=area(a,b);if(A+1e-12>=faceArea)candidates.push({a,b,area:A,v:each/3600/(A*x.free/100)});}if(kind==='round'||kind==='fourway'){for(let a=100;a<=2000;a+=50)add(a,a);}else if(kind==='linear'){for(let a=300;a<=2000;a+=50)for(const b of [50,75,100,150,200,250,300])if(a/b>=3)add(a,b);}else{for(let a=100;a<=2000;a+=50)for(let b=100;b<=a;b+=50)if(a/b<=4)add(a,b);}candidates.sort((a,b)=>a.area-b.area||a.a/a.b-b.a/b.b||a.a-b.a);return{kind,each,freeArea,faceArea,actualArea,actualFree,actualVelocity,candidates:candidates.slice(0,10)};}

function dewPoint(t,rh){requirePositive(rh);const a=17.62,b=243.12,y=Math.log(rh/100)+a*t/(b+t);return b*y/(a-y);}
function insulation(x){
 const rect=x.application==='duct'&&x.shape==='rect';requirePositive(x.k,x.h,x.rh,rect?x.width:x.d);if(rect)requirePositive(x.height);
 const dp=dewPoint(x.ambient,x.rh),target=dp+x.margin,r1=x.d/2000,P=rect?2*(x.width+x.height)/1000:Math.PI*x.d/1000;
 function at(mm){let q,surface;if(rect){q=P*(x.ambient-x.pipe)/(mm/1000/x.k+1/x.h);surface=x.ambient-q/P/x.h;}else{const r2=r1+mm/1000,Rc=mm===0?0:Math.log(r2/r1)/(2*Math.PI*x.k),Ro=1/(x.h*2*Math.PI*r2);q=(x.ambient-x.pipe)/(Rc+Ro);surface=x.ambient-q*Ro;}return {mm,q,surface,pass:surface>=target&&(x.application!=='refrigerant'||mm>=(x.manufacturerMin||0))};}
 const sizes=x.candidateSizes||[0,6,9,13,19,25,32,38,50,63,75,100,125,150,200,250,300];if(!Array.isArray(sizes)||!sizes.length||sizes.some(v=>!Number.isFinite(v)||v<0||v>300))throw new Error('input:thickness');
 const selected=at(x.thickness),candidates=[...new Set(sizes)].sort((a,b)=>a-b).map(at),chosen=candidates.find(v=>v.pass);let minimum=null;
 if(x.pipe>=target)minimum=0;else if(x.ambient>target&&at(300).surface>=target){let lo=0,hi=300;for(let i=0;i<60;i++){let m=(lo+hi)/2;if(at(m).surface>=target)hi=m;else lo=m;}minimum=hi;}
 return {dp,target,selected,candidates,chosen,minimum,rect,perimeter:P,possible:x.ambient>target||x.pipe>=target,totalHeat:Math.abs(selected.q)*x.length};
}

function expansion(x){requirePositive(x.volume,x.atm);if(x.hot<=x.cold)throw new Error('temperatureOrder');if(x.pre>x.fill||x.max<=x.fill)throw new Error('pressureOrder');if(x.reserve>0&&x.pre===x.fill)throw new Error('reservePressure');const rhoCold=density(x.cold),rhoHot=density(x.hot),e=x.fluid==='custom'?x.expansion/100:rhoCold/rhoHot-1;if(e<0)throw new Error('expansionRange');const p0=x.pre+x.atm,pi=x.fill+x.atm,pmax=x.max+x.atm,accept=p0*(1/pi-1/pmax);requirePositive(accept);const expanded=x.volume*e,required=expanded/accept*(1+x.margin/100),initialFraction=1-p0/pi,reserveCheck=required*initialFraction,reserveRequired=initialFraction>0?x.reserve/initialFraction:Infinity,nominal=Math.max(required,x.reserve>0?reserveRequired:0),sizes=[8,12,18,24,25,35,50,60,80,100,140,150,200,250,300,400,500,600,750,800,1000,1500,2000,3000,5000],chosen=sizes.find(v=>v>=nominal)||null;return{rhoCold,rhoHot,e,expanded,accept,required,nominal,initialFraction,reserveCheck,chosen,p0,pi,pmax};}
function fittings(x){
 requirePositive(x.flow,x.a);if(!Number.isInteger(x.quantity)||x.quantity<1||!Number.isFinite(x.k)||x.k<0)throw new Error('fittingInputs');
 if(!['air','water'].includes(x.medium)||!['rect','round'].includes(x.shape)||!['m3h','ls','cfm'].includes(x.flowUnit)||x.medium==='water'&&(x.shape!=='round'||x.flowUnit==='cfm'))throw new Error('fittingInputs');
 const q=x.flow*(x.flowUnit==='ls'?.001:x.flowUnit==='cfm'?.00047194745:1/3600);if(x.shape==='rect')requirePositive(x.b);const A=x.shape==='round'?Math.PI*(x.a/1000)**2/4:x.a*x.b/1e6,D=x.shape==='round'?x.a/1000:2*x.a*x.b/(x.a+x.b)/1000;
 if(x.medium==='water'&&(x.temp<1||x.temp>80))throw new Error('fittingInputs');const rho=x.medium==='water'?density(x.temp):x.rho;requirePositive(rho);const v=q/A,vp=rho*v*v/2,single=x.k*vp,total=x.quantity*single;return{q,flow:q*3600,A,D,rho,v,vp,single,total,kTotal:x.quantity*x.k,head:total/(rho*g),mmWater:total/(1000*g)*1000};
}
const api={fittings,friction,density,motor,fan,pump,flow,ventilation,grille,dewPoint,insulation,expansion};root.HVACTools=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
