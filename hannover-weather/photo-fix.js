(()=>{
const PHOTOS=[
'./region-photos/hannover.jpg',
'./region-photos/langenhagen.jpg',
'./region-photos/garbsen.jpg',
'./region-photos/wunstorf.jpg',
'./region-photos/neustadt.jpg',
'./region-photos/burgwedel.jpg',
'./region-photos/lehrte.jpg',
'./region-photos/laatzen.jpg',
'./region-photos/sehnde.jpg',
'./region-photos/barsinghausen.jpg',
'./region-photos/pattensen.jpg',
'./region-photos/springe.jpg',
'./region-photos/hemmingen.jpg',
'./region-photos/ronnenberg.jpg',
'./region-photos/gehrden.jpg',
'./region-photos/seelze.jpg',
'./region-photos/wedemark.jpg',
'./region-photos/isernhagen.jpg',
'./region-photos/wennigsen.jpg',
'./region-photos/uetze.jpg'
];
const HERO_HQ={
'./region-photos/langenhagen.jpg':'https://www.hannover.de/var/storage/images/_aliases/alias_1600xVariabel/media/01-data-neu/bilder/redaktion-hannover.de/a-z/m/mobilit%C3%A4t/flughafen-hannover/abflug_abendsonne_4_3/7835571-4-ger-DE/abflug_abendsonne_4_3.jpg'
};
function apply(){
 document.querySelectorAll('.placeCard').forEach((card,i)=>{
  const url=PHOTOS[i]||card.dataset.image;if(!url)return;
  card.dataset.image=url;
  const art=card.querySelector('.placeArt');
  if(art){art.style.backgroundImage=`url("${url}")`;art.style.backgroundSize='cover';art.style.backgroundPosition='center center';}
 });
 const first=document.querySelector('.placeCard.selected'),hero=document.querySelector('.hero');
 if(first&&hero&&first.dataset.image){const url=HERO_HQ[first.dataset.image]||first.dataset.image;hero.style.backgroundImage=`url("${url}")`;hero.style.backgroundSize='cover';hero.style.backgroundPosition='center center';}
}
new MutationObserver(apply).observe(document.getElementById('app')||document.body,{childList:true,subtree:true});setInterval(apply,800);apply();
})();