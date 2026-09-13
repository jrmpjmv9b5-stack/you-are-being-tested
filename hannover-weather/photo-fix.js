(()=>{
const PHOTOS=[
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/stadt-hannover/20800615-1-ger-DE/Stadt-Hannover.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kongress-stadt/locations/panorama/locations-hannover/flughafen-hannover-langenhagen/10784144-1-ger-DE/Flughafen-Hannover-Langenhagen.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/data-kommunen/bilder-kommunen/panorama/garbsen-blauer-see/6964186-1-ger-DE/Garbsen-Blauer-See.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/wunstorf/20800211-1-ger-DE/Wunstorf.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/neustadt/20800372-1-ger-DE/Neustadt.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/burgwedel/20800320-1-ger-DE/Burgwedel.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/lehrte/20800333-1-ger-DE/Lehrte.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/laatzen/20800224-1-ger-DE/Laatzen.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/sehnde/20800577-1-ger-DE/Sehnde.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/barsinghausen/20800237-1-ger-DE/Barsinghausen.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/pattensen/20800406-1-ger-DE/Pattensen.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/springe/20800419-1-ger-DE/Springe.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/hemmingen/20800445-1-ger-DE/Hemmingen.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/ronnenberg/20800250-1-ger-DE/Ronnenberg.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/gehrden/20800359-1-ger-DE/Gehrden.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/seelze/20800484-1-ger-DE/Seelze.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/wedemark/20800346-1-ger-DE/Wedemark.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/isernhagen/20800458-1-ger-DE/Isernhagen.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/wennigsen/20800590-1-ger-DE/Wennigsen.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/uetze/20800432-1-ger-DE/Uetze.jpg'
];
function apply(){
 document.querySelectorAll('.placeCard').forEach((card,i)=>{
  const url=PHOTOS[i]||card.dataset.image;
  if(!url)return;
  card.dataset.image=url;
  const art=card.querySelector('.placeArt');
  if(art){
   art.style.backgroundImage=`url("${url}")`;
   art.style.backgroundSize='cover';
   art.style.backgroundPosition='center';
  }
 });
 const first=document.querySelector('.placeCard.selected');
 const hero=document.querySelector('.hero');
 if(first&&hero&&first.dataset.image)hero.style.backgroundImage=`url("${first.dataset.image}")`;
}
new MutationObserver(apply).observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
setInterval(apply,800);
apply();
})();
