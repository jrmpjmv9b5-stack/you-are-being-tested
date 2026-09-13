(()=>{
function apply(){
 document.querySelectorAll('.placeCard').forEach(card=>{
  const art=card.querySelector('.placeArt');
  const url=card.dataset.image;
  if(art&&url){
   art.style.backgroundImage=`url("${url}")`;
   art.style.backgroundSize='cover';
   art.style.backgroundPosition='center';
  }
 });
 const first=document.querySelector('.placeCard.selected');
 const hero=document.querySelector('.hero');
 if(first&&hero&&first.dataset.image&&!hero.dataset.photoReady){
  hero.style.backgroundImage=`url("${first.dataset.image}")`;
  hero.dataset.photoReady='1';
 }
}
new MutationObserver(apply).observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
setInterval(apply,500);
apply();
})();
