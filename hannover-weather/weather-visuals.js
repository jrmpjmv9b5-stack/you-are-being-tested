(()=>{
const A=window.WEATHER_APP;
const codeType=c=>{if([95,96,99].includes(c))return'storm';if([71,73,75].includes(c))return'snow';if([51,53,55,61,63,65,80,81,82].includes(c))return'rain';if([45,48].includes(c))return'fog';if([2,3].includes(c))return'cloud';return'clear'};
function layer(type,hero=false){
 const cls=hero?'heroWeatherLayer':'weatherLayer';
 if(type==='rain'||type==='storm'){
  const drops=Array.from({length:hero?34:14},(_,i)=>`<i class="weatherDrop" style="left:${(i*37)%101}%;animation-delay:-${(i%9)*.11}s"></i>`).join('');
  return `<div class="${cls}">${drops}${type==='storm'?'<i class="weatherFlash"></i>':''}</div>`;
 }
 if(type==='snow'){
  const flakes=Array.from({length:hero?24:12},(_,i)=>`<i class="weatherSnow" style="left:${(i*43)%101}%;animation-delay:-${(i%8)*.55}s"></i>`).join('');
  return `<div class="${cls}">${flakes}</div>`;
 }
 if(type==='cloud')return `<div class="${cls}"><i class="weatherCloud"></i><i class="weatherCloud two"></i></div>`;
 if(type==='fog')return `<div class="${cls}"><i class="weatherMist one"></i><i class="weatherMist two"></i></div>`;
 return `<div class="${cls}"><i class="weatherSun"></i><i class="weatherRay"></i></div>`;
}
function paint(){
 if(!A?.data?.length)return;
 document.querySelectorAll('.placeCard').forEach((card,i)=>{
  const w=A.data[i];if(!w)return;
  const type=codeType(w.current.weather_code);
  card.classList.remove('wx-clear','wx-cloud','wx-fog','wx-rain','wx-snow','wx-storm');card.classList.add('wx-'+type);
  const old=card.querySelector('.weatherLayer');if(old)old.remove();
  const art=card.querySelector('.placeArt');if(art)art.insertAdjacentHTML('beforeend',layer(type));
 });
 const selected=document.querySelector('.placeCard.selected');
 if(selected){const i=+selected.dataset.i,w=A.data[i],hero=document.querySelector('.hero');if(hero&&w){const old=hero.querySelector('.heroWeatherLayer');if(old)old.remove();hero.insertAdjacentHTML('beforeend',layer(codeType(w.current.weather_code),true));}}
}
let last=0;
function schedule(){const now=Date.now();if(now-last<150)return;last=now;requestAnimationFrame(paint)}
new MutationObserver(schedule).observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
document.addEventListener('click',e=>{if(e.target.closest('.placeCard'))setTimeout(schedule,30)});
const boot=setInterval(()=>{if(A?.data?.length){paint();clearInterval(boot)}},300);
setTimeout(()=>clearInterval(boot),15000);
})();
