(()=>{
const PHOTOS=[
'https://www.hannover.de/content/download/870509/file/Neues-Rathaus.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kongress-stadt/locations/panorama/locations-hannover/flughafen-hannover-langenhagen/10784144-1-ger-DE/Flughafen-Hannover-Langenhagen.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/data-kommunen/bilder-kommunen/panorama/garbsen-blauer-see/6964186-1-ger-DE/Garbsen-Blauer-See.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/wunstorf/panorama/steinhuder-meer/7435241-1-ger-DE/Lake-Steinhude.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/bilder-region-hannover/gebaeude-der-region/schloss-landestrost-aussenansicht-mit-wolke-panorama/21217239-3-ger-DE/Schloss-Landestrost-Aussenansicht-mit-Wolke-Panorama.jpg',
'https://www.hannover.de/var/storage/images/_aliases/full/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/springhorstsee-burgwedel/15546757-1-ger-DE/Springhorstsee-Burgwedel.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/lehrte/panorama/30.-lehrter-weinfest/13609614-1-ger-DE/30.-Lehrter-Weinfest.jpg',
'https://www.hannover.de/var/storage/images/_aliases/alias_1600xVariabel/media/01-data-neu/bilder/hmtg/geocaching/park-der-sinne2/10854397-1-ger-DE/Park-der-Sinne.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/data-kommunen/bilder-kommunen/sehnde/panorama/willkommen-in-sehnde/7430556-1-ger-DE/Willkommen-in-Sehnde.jpg',
'https://www.hannover.de/var/storage/images/_aliases/alias_1600xVariabel/6/8/0/8/28798086-1-ger-DE/34ce0c5b512d-Deister_22_025_2834c-kirsch43.jpeg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/fuchsbachpark-pattensen/15546377-1-ger-DE/Fuchsbachpark-Pattensen.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/bilder-region-hannover/naherholung2/calenberger-landsommer/blick-%C3%BCber-springe/9136735-2-ger-DE/Blick-%C3%BCber-Springe.jpg',
'https://www.hannover.de/var/storage/images/_aliases/alias_300x225px/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/strandbad-hemmingen2/15547561-1-ger-DE/Strandbad-Hemmingen.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/ronnenberg/grafiken/stadtfest-ronnenberg/8627362-1-ger-DE/Stadtfest-Ronnenberg.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/burgbergturm-gehrden/15546317-1-ger-DE/Burgbergturm-Gehrden.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/yachthafen-seelze/15546305-1-ger-DE/Yachthafen-Seelze.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/data-kommunen/bilder-kommunen/wedemark/panorama/bissendorfer-moor/7434945-1-ger-DE/Bissendorfer-Moor.jpg',
'https://www.hannover.de/var/storage/images/_aliases/alias_300x225px/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/w%C3%B6hler-dusche-hof-isernhagen/15547225-1-ger-DE/W%C3%B6hler-Dusche-Hof-Isernhagen.jpg',
'https://www.hannover.de/var/storage/images/_aliases/image_full/media/01-data-neu/bilder/hmtg/kommunen/wennigsen/grafiken/kloster-wennigsen2/13390397-1-ger-DE/Kloster-Wennigsen.jpg',
'https://www.hannover.de/var/storage/images/_aliases/alias_300x225px/media/01-data-neu/bilder/hmtg/kommunen/entdecke-deine-region/wackerwinkel-uetze/15547057-1-ger-DE/Wackerwinkel-Uetze.jpg'
];
function apply(){document.querySelectorAll('.placeCard').forEach((card,i)=>{const url=PHOTOS[i]||card.dataset.image;if(!url)return;card.dataset.image=url;const art=card.querySelector('.placeArt');if(art){art.style.backgroundImage=`url("${url}")`;art.style.backgroundSize='cover';art.style.backgroundPosition='center';}});const first=document.querySelector('.placeCard.selected'),hero=document.querySelector('.hero');if(first&&hero&&first.dataset.image)hero.style.backgroundImage=`url("${first.dataset.image}")`}
new MutationObserver(apply).observe(document.getElementById('app')||document.body,{childList:true,subtree:true});setInterval(apply,800);apply();
})();