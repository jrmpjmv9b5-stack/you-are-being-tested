(()=>{
const PHOTOS=[
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/stadt-hannover/20800615-1-ger-DE/Stadt-Hannover.jpg',
'https://www.hannover.de/var/storage/images/_aliases/alias_1600xVariabel/media/01-data-neu/bilder/redaktion-hannover.de/a-z/m/mobilit%C3%A4t/flughafen-hannover/abflug_abendsonne_4_3/7835571-4-ger-DE/abflug_abendsonne_4_3.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/garbsen/panorama/sonnenuntergang-blauer-see/19879989-1-ger-DE/Sonnenuntergang-Blauer-See.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/wunstorf/panorama/steinhuder-meer/7435241-1-ger-DE/Lake-Steinhude.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/bilder-region-hannover/gebaeude-der-region/schloss-landestrost-aussenansicht-mit-wolke-panorama/21217239-3-ger-DE/Schloss-Landestrost-Aussenansicht-mit-Wolke-Panorama.jpg',
'https://www.visit-hannover.com/var/storage/images/_aliases/alias_1600xVariabel/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/bockwindm%C3%BChle-wettmar-burgwedel/15547717-1-ger-DE/Bockwindm%C3%BChle-Wettmar-Burgwedel.jpg',
'https://www.visit-hannover.com/var/storage/images/_aliases/alias_300xVariabel/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/wasserturm-im-hohnhorstpark-lehrte/15547189-1-ger-DE/Wasserturm-im-Hohnhorstpark-Lehrte.jpg',
'https://www.visit-hannover.com/var/storage/images/_aliases/image_full/media/01-data-neu/galerien/die-neuen-regionsmotive/laatzen/20800224-1-ger-DE/Laatzen.jpg',
'https://www.visit-hannover.com/var/storage/images/_aliases/alias_1600xVariabel/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/gutshof-sehnde/15547429-1-ger-DE/Gutshof-Sehnde.jpg',
'https://www.visit-hannover.com/var/storage/images/_aliases/panorama/media/01-data-neu/bilder/hmtg/niedersachsen/calenberger-land/panorama-des-kloster-barsinghausen/17917568-1-ger-DE/Panorama-des-Kloster-Barsinghausen.jpg',
'https://www.visit-hannover.com/var/storage/images/_aliases/full/4/2/0/1/29451024-1-ger-DE/6490db153200-Schloss-Marienburg.jpg',
'https://img.destination.one/remote/.webp?height=612&mode=crop&quality=90&scale=both&url=https%3A%2F%2Fdam.destination.one%2F666867%2F9aefe7c632377360639b9c95e6ed216e904f6300c24f7935cf0409b6f407ab8c%2Fwisentgehege-in-springe.jpg&width=1424',
'https://www.visit-hannover.com/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/strandbad-hemmingen/15547249-1-ger-DE/Strandbad-Hemmingen.jpg',
'https://www.visit-hannover.com/var/storage/images/_aliases/alias_1600xVariabel/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/benther-m%C3%BChle-ronnenberg2/15547477-1-ger-DE/Benther-M%C3%BChle-Ronnenberg.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/burgbergturm-gehrden/15546317-1-ger-DE/Burgbergturm-Gehrden.jpg',
'https://www.visit-hannover.com/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/trogbr%C3%BCcke-seelze/15546937-1-ger-DE/Trogbr%C3%BCcke-Seelze.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/data-kommunen/bilder-kommunen/wedemark/panorama/bissendorfer-moor/7434945-1-ger-DE/Bissendorfer-Moor.jpg',
'https://cloudfront-eu-central-1.images.arcpublishing.com/madsack/B7YR4SC7OJAUNBQDXMF7TEXYMM.jpg',
'https://www.visit-hannover.com/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/wennigsen/grafiken/kloster-wennigsen2/13390397-1-ger-DE/Kloster-Wennigsen.jpg',
'https://www.visit-hannover.com/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/irenensee-uetze/15547657-1-ger-DE/Irenensee-Uetze.jpg'
];
const POS=['50% 48%','50% 48%','50% 52%','50% 52%','50% 48%','50% 48%','50% 48%','50% 50%','50% 50%','50% 48%','50% 48%','50% 50%','50% 52%','50% 50%','50% 50%','50% 50%','50% 50%','50% 50%','50% 50%','50% 50%'];
function apply(){
 document.querySelectorAll('.placeCard').forEach((card,i)=>{
  const url=PHOTOS[i]||card.dataset.image;
  if(!url)return;
  card.dataset.image=url;
  const art=card.querySelector('.placeArt');
  if(art){
   art.style.backgroundImage=`url("${url}")`;
   art.style.backgroundSize='cover';
   art.style.backgroundPosition=POS[i]||'center';
  }
 });
 const first=document.querySelector('.placeCard.selected');
 const hero=document.querySelector('.hero');
 if(first&&hero&&first.dataset.image){
  const i=+first.dataset.i||0;
  hero.style.backgroundImage=`url("${first.dataset.image}")`;
  hero.style.backgroundSize='cover';
  hero.style.backgroundPosition=POS[i]||'center';
 }
}
new MutationObserver(apply).observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
setInterval(apply,800);
apply();
})();
