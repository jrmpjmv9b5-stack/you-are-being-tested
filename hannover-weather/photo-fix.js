(()=>{
const PHOTOS=[
'./region-photos/hannover.jpg','./region-photos/langenhagen.jpg','./region-photos/garbsen.jpg','./region-photos/wunstorf.jpg','./region-photos/neustadt.jpg','./region-photos/burgwedel.jpg','./region-photos/lehrte.jpg','./region-photos/laatzen.jpg','./region-photos/sehnde.jpg','./region-photos/barsinghausen.jpg','./region-photos/pattensen.jpg','./region-photos/springe.jpg','./region-photos/hemmingen.jpg','./region-photos/ronnenberg.jpg','./region-photos/gehrden.jpg','./region-photos/seelze.jpg','./region-photos/wedemark.jpg','./region-photos/isernhagen.jpg','./region-photos/wennigsen.jpg','./region-photos/uetze.jpg'];
function apply(){
 document.querySelectorAll('.placeCard').forEach((card,i)=>{
  const url=PHOTOS[i]||card.dataset.image;if(!url)return;
  card.dataset.image=url;
  const art=card.querySelector('.placeArt');
  if(art){art.style.backgroundImage=`url("${url}")`;art.style.backgroundSize='cover';art.style.backgroundPosition='center center';}
 });
 const first=document.querySelector('.placeCard.selected'),hero=document.querySelector('.hero');
 if(first&&hero&&first.dataset.image){hero.style.backgroundImage=`url("${first.dataset.image}")`;hero.style.backgroundSize='100% auto';hero.style.backgroundPosition='center top';hero.style.backgroundRepeat='no-repeat';}
}
new MutationObserver(apply).observe(document.getElementById('app')||document.body,{childList:true,subtree:true});setInterval(apply,1500);apply();
})();