(()=>{
const OVERRIDES={
 Langenhagen:'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kongress-stadt/locations/panorama/locations-hannover/flughafen-hannover-langenhagen/10784144-1-ger-DE/Flughafen-Hannover-Langenhagen.jpg'
};
function apply(){
 document.querySelectorAll('.placeCard').forEach(card=>{
  const name=card.querySelector('.placeMeta strong')?.textContent?.trim();
  const url=OVERRIDES[name];
  if(url){
   const art=card.querySelector('.placeArt');
   if(art){art.style.setProperty('--bg',`url("${url}")`);art.style.backgroundImage=`url("${url}")`;art.dataset.photoOverride='1';}
  }
 });
}
new MutationObserver(apply).observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
apply();
})();
