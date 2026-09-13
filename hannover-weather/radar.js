(()=>{
const API='https://api.rainviewer.com/public/weather-maps.json';
const DWD='https://maps.dwd.de/geoserver/dwd/wms';
let map=null,frames=[],index=0,radarLayer=null,dwdLayer=null,playing=false,timer=null,mode='rainviewer',apiHost='https://tilecache.rainviewer.com';
const HANNOVER=[52.3759,9.732];
function el(id){return document.getElementById(id)}
function setStatus(text){const e=el('radarStatus');if(e)e.textContent=text}
function clock(ts){return new Date(ts*1000).toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})}
function ensureLeaflet(){return new Promise((resolve,reject)=>{if(window.L)return resolve();const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';document.head.appendChild(css);const s=document.createElement('script');s.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';s.onload=resolve;s.onerror=reject;document.head.appendChild(s)})}
function initMap(){
 map=L.map('map',{zoomControl:true,attributionControl:true,minZoom:7,maxZoom:12,preferCanvas:true,zoomSnap:.5,zoomDelta:.5}).setView(HANNOVER,9);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{subdomains:'abc',maxZoom:19,attribution:'© OpenStreetMap contributors',updateWhenIdle:true,keepBuffer:2}).addTo(map);
 dwdLayer=L.tileLayer.wms(DWD,{layers:'dwd:Radar_rv_product_1x1km_ger',format:'image/png',transparent:true,opacity:.55,version:'1.3.0',styles:'',attribution:'DWD'});
 dwdLayer.on('tileerror',()=>{if(mode==='dwd')setStatus('DWD · NICHT ERREICHBAR')});
 addMarkers();
 addRadarBadge();
}
function addRadarBadge(){
 const c=L.control({position:'topright'});c.onAdd=()=>{const d=L.DomUtil.create('div','radarControl');d.innerHTML='<button data-mode="rainviewer" class="active">RAIN</button><button data-mode="dwd">DWD</button>';L.DomEvent.disableClickPropagation(d);d.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;setMode(b.dataset.mode)});return d};c.addTo(map);
}
function addMarkers(){
 const P=window.WEATHER_APP?.PLACES||[];
 P.forEach((p,i)=>{const icon=L.divIcon({className:'radarPlace',html:`<span>${i===0?'H':''}</span>`,iconSize:[14,14],iconAnchor:[7,7]});L.marker([p.lat,p.lon],{icon,interactive:true}).addTo(map).bindTooltip(p.name,{direction:'top',offset:[0,-7]})});
}
function makeRadarLayer(){
 const size=window.devicePixelRatio>=2?512:256;
 return L.tileLayer('',{tileSize:256,maxNativeZoom:7,maxZoom:12,opacity:.78,updateWhenIdle:true,keepBuffer:2,attribution:'Weather data by RainViewer'});
}
function setRadarUrl(frame){
 if(!radarLayer)radarLayer=makeRadarLayer();
 const size=window.devicePixelRatio>=2?512:256;
 radarLayer.setUrl(`${apiHost}${frame.path}/${size}/{z}/{x}/{y}/2/1_1.png`);
 if(!map.hasLayer(radarLayer))radarLayer.addTo(map);
 radarLayer.setOpacity(.78);
}
function show(i){
 if(!frames.length)return;
 index=(i+frames.length)%frames.length;const f=frames[index];
 if(mode==='rainviewer'){
  setRadarUrl(f);
  setStatus(`RAINVIEWER · ${index+1}/${frames.length}`);
  const t=el('radarTime');if(t)t.textContent=`RADAR · ${clock(f.time)}`;
 } else {
  if(!map.hasLayer(dwdLayer))dwdLayer.addTo(map);
  setStatus('DWD · LIVE');
  const t=el('radarTime');if(t)t.textContent='RADAR · DWD LIVE';
 }
 const r=el('radarRange');if(r){r.value=index;r.max=Math.max(0,frames.length-1)}
 if(playing){clearTimeout(timer);timer=setTimeout(()=>show(index+1),700)}
}
function setMode(next){
 mode=next;
 const buttons=document.querySelectorAll('.radarControl button');buttons.forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
 if(mode==='dwd'){
  if(radarLayer&&map.hasLayer(radarLayer))radarLayer.setOpacity(0);
  if(dwdLayer)dwdLayer.addTo(map);
  setStatus('DWD · LIVE');if(el('radarTime'))el('radarTime').textContent='RADAR · DWD LIVE';
 }else{
  if(dwdLayer&&map.hasLayer(dwdLayer))map.removeLayer(dwdLayer);
  show(index);
 }
}
function controls(){
 const r=el('radarRange'),b=el('radarPlay');if(!r||!b)return;
 r.disabled=false;r.min=0;r.max=Math.max(0,frames.length-1);r.value=frames.length-1;
 r.oninput=()=>{playing=false;clearTimeout(timer);b.textContent='▶';show(+r.value)};
 b.onclick=()=>{playing=!playing;b.textContent=playing?'Ⅱ':'▶';clearTimeout(timer);if(playing)show(index+1)};
}
async function load(){
 try{
  await ensureLeaflet();initMap();setStatus('RADAR · VERBINDE …');
  const res=await fetch(API,{cache:'no-store'});if(!res.ok)throw Error('RainViewer '+res.status);
  const j=await res.json();apiHost=j.host||apiHost;frames=(j.radar?.past||[]).slice(-13);if(!frames.length)throw Error('Keine Radarframes');
  controls();show(frames.length-1);
  window.addEventListener('resize',()=>map.invalidateSize());setTimeout(()=>map.invalidateSize(),250);
 }catch(e){console.error(e);setMode('dwd');setStatus('DWD · LIVE');if(el('radarTime'))el('radarTime').textContent='RADAR · DWD LIVE'}
}
load();
})();
