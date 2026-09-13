(() => {
  const files = {
    Hannover: 'Neues Rathaus Hannover.jpg',
    Langenhagen: '2018-06-16 Pferderennbahn Neue Bult Hannover-Langenhagen (1775).jpg',
    Garbsen: 'Garbsen - Blauer See - 2004.JPG',
    Wunstorf: 'Wunstorf - Steinhude, Promenade am Steinhuder Meer.jpg',
    Neustadt: 'Bahnhof Neustadt am Rübenberge 2105031648.jpg',
    Burgwedel: 'Rathaus in Großburgwedel (Burgwedel) IMG 4690.jpg',
    Lehrte: 'Lehrte city hall.jpg',
    Laatzen: 'Rathaus Laatzen IMG 4251.jpg',
    Sehnde: 'Sehnde Rathaus.jpg',
    Barsinghausen: 'Rathaus Barsinghausen.jpg',
    Pattensen: 'Rathaus Pattensen.jpg',
    Springe: 'Deister bei Springe mit Buchenwald 01.jpg',
    Hemmingen: '2024-09-21 Hemmingen, Region Hannover, Teufelskuhle 2.jpg',
    Ronnenberg: 'Rathaus Ronnenberg.jpg',
    Gehrden: 'Rathaus Gehrden.jpg',
    Seelze: 'Seelze Rathaus.jpg',
    Wedemark: '2024-07-29 Gailhof in der Wedemark, Region Hannover 4.jpg',
    Isernhagen: 'Isernhagen, Hauptstraße 68 (Isernhagenhof).jpg',
    Wennigsen: 'Kloster Wennigsen.jpg',
    Uetze: 'St. Nicolai-Kirche in Obershagen (Uetze) IMG 6778.jpg'
  };

  const url = file => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`;

  function apply() {
    document.querySelectorAll('.placeCard').forEach(card => {
      const name = card.querySelector('.placeMeta strong')?.textContent?.trim();
      const file = files[name];
      const art = card.querySelector('.placeArt');
      if (file && art) {
        art.style.setProperty('--bg', `url("${url(file)}")`);
        art.classList.add('photoCard');
      }
    });
  }

  const observer = new MutationObserver(apply);
  observer.observe(document.getElementById('app') || document.body, { childList: true, subtree: true });
  apply();
})();
