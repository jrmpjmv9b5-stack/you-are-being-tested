(()=>{
function stateClass(el){
 const c=el.className||'';
 if(c.includes('storm')) return 'storm';
 if(c.includes('snowWorld')) return 'snow';
 if(c.includes('rainWorld')) return 'rain';
 if(c.includes('cloudWorld')) return 'cloudy';
 if(c.includes('fogWorld')) return 'cloudy';
 return 'clear';
}
function weatherLayer(el){
 const type=stateClass(el); const a=el.querySelector('.weather-art'); if(!a)return;
 a.classList.remove('rain','snow','storm','cloudy'); a.classList.add(type);
 a.querySelectorAll('.rain,.snow,.flash,.cloud').forEach(x=>x.remove());
 if(type==='rain'||type==='storm') a.insertAdjacentHTML('beforeend','<div class="rain"><i></i><i></i><i></i><i></i></div>');
 if(type==='snow') a.insertAdjacentHTML('beforeend','<div class="snow">✦　·　❄　·　✦　·　❄</div>');
 if(type==='cloudy') a.insertAdjacentHTML('beforeend','<div class="cloud"></div>');
 if(type==='storm') a.insertAdjacentHTML('beforeend','<div class="flash"></div>');
}
function hero(){
 const w=document.querySelector('#world'); if(!w||w.dataset.finalHero)return;
 w.dataset.finalHero='1';
 const old=w.querySelector('.city'); if(old)old.remove();
 const art=document.createElement('div'); art.className='hero-art';
 art.innerHTML='<div class="hsky"></div><div class="hsun"></div><div class="hground"></div><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet"><g><path d="M75 245V150h250v95z"/><path d="M55 150l75-52 70 52 75-52 70 52"/><path d="M175 150V72l25-23 25 23v78"/><circle cx="200" cy="80" r="10" fill="#c7bca8"/><path d="M120 150l80-60 80 60"/></g></svg>';
 w.appendChild(art);
}
function run(){document.querySelectorAll('.placeScene').forEach(weatherLayer);hero()}
const s=document.createElement('style');s.textContent=`
.hero-art{position:absolute;inset:0;z-index:30;overflow:hidden;pointer-events:none}.hero-art .hsky{position:absolute;inset:0;background:linear-gradient(180deg,#82bdd7,#d9e7e4 58%,#9eaf88 59%,#60765a)}.hero-art .hsun{position:absolute;right:12%;top:13%;width:72px;height:72px;border-radius:50%;background:#ffe29a;box-shadow:0 0 0 16px #ffe29a22,0 0 60px #fff1a866}.hero-art .hground{position:absolute;left:-5%;right:-5%;bottom:0;height:35%;background:linear-gradient(165deg,#71885f,#41543f);clip-path:polygon(0 40%,12% 24%,22% 43%,33% 12%,44% 40%,55% 20%,66% 44%,78% 15%,89% 39%,100% 24%,100% 100%,0 100%)}.hero-art svg{position:absolute;left:9%;right:9%;bottom:7%;width:82%;height:65%;z-index:3}.hero-art g{fill:#e8dcc5;stroke:#29403f;stroke-width:3;stroke-linejoin:round}.placeScene .weather-art .rain{display:block}.weather-art .rain{position:absolute;inset:0;z-index:25}.weather-art .rain i{position:absolute;width:2px;height:21px;background:#fff9;transform:rotate(16deg);animation:fvRain .75s linear infinite}.weather-art .rain i:nth-child(1){left:16%;top:-20px}.weather-art .rain i:nth-child(2){left:42%;top:-70px;animation-delay:-.25s}.weather-art .rain i:nth-child(3){left:68%;top:-30px;animation-delay:-.5s}.weather-art .rain i:nth-child(4){left:88%;top:-90px;animation-delay:-.15s}@keyframes fvRain{to{transform:translateY(220px) rotate(16deg);opacity:0}}.weather-art .snow{position:absolute;inset:0;z-index:25;color:#fff;font-size:13px;letter-spacing:9px;padding:12px;animation:fvSnow 4s linear infinite}@keyframes fvSnow{to{transform:translateY(150px);opacity:0}}.weather-art .cloud{position:absolute;width:105px;height:29px;left:-120px;top:18%;border-radius:30px;background:#fff9;z-index:22;animation:fvCloud 18s linear infinite}.weather-art .cloud:before,.weather-art .cloud:after{content:'';position:absolute;border-radius:50%;background:inherit}.weather-art .cloud:before{width:44px;height:44px;left:14px;top:-18px}.weather-art .cloud:after{width:52px;height:46px;right:10px;top:-23px}@keyframes fvCloud{to{transform:translateX(430px)}}.weather-art .flash{position:absolute;right:26%;top:7%;width:27px;height:60px;background:#fff;clip-path:polygon(45% 0,100% 0,66% 38%,92% 38%,20% 100%,42% 50%,8% 50%);z-index:26;animation:fvFlash 5s infinite}@keyframes fvFlash{0%,86%,100%{opacity:0}89%,91%{opacity:1}92%{opacity:0}}
`;
document.head.appendChild(s);run();new MutationObserver(run).observe(document.body,{childList:true,subtree:true});
})();