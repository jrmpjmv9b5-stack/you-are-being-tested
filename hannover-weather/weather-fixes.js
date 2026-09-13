(()=>{
const GEHRDEN='https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/ottomar-von-reden-park-gehrden/15547753-1-ger-DE/Ottomar-von-Reden-Park-Gehrden.jpg';
function fix(){
 document.querySelectorAll('.placeCard').forEach(card=>{
  const name=card.querySelector('.placeMeta strong')?.textContent?.trim();
  if(name==='Gehrden'){
   const art=card.querySelector('.placeArt');
   if(art){art.style.backgroundImage=`url("${GEHRDEN}")`;art.style.backgroundSize='cover';}
  }
 });
 const foot=document.querySelector('.radarFoot'), original=document.getElementById('radarPlay');
 if(foot && original && !document.getElementById('radarPlayFixed')){
  const b=document.createElement('button'); b.id='radarPlayFixed'; b.type='button'; b.textContent='▶';
  b.title='Radar abspielen';
  b.style.cssText='position:absolute;left:16px;top:-54px;width:46px;height:46px;border:2px solid #fff;background:#2d72b8;color:#fff;border-radius:50%;z-index:20;font-size:18px;box-shadow:0 4px 14px #0006;display:grid;place-items:center;';
  b.onclick=()=>original.click();
  foot.parentElement.appendChild(b);
 }
}
new MutationObserver(fix).observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
fix();
})();
