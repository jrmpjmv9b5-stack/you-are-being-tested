// Zeitreise-Einkaufswagen – echte historische Preisbeobachtungen
// Quellen: SupermarktCheck (gemeldete Preise), Stand 28.09.2026.
// Wichtig: Diese Werte sind keine amtlichen Deutschland-Durchschnittspreise.
// Der Jahres-Ø wird aus den vorhandenen Preisbeobachtungen des jeweiligen Jahres gebildet.

const priceDB = {
  meta: {
    schemaVersion: "2.0",
    source: "SupermarktCheck",
    sourceUrl: "https://www.supermarktcheck.de/",
    updated: "2026-09-28",
    methodology: "Jahresmittel aus öffentlich gemeldeten Preisbeobachtungen; Händler werden zusätzlich gruppiert.",
    officialIndexSource: "https://www.destatis.de/DE/Themen/Wirtschaft/Preise/Verbraucherpreisindex/_inhalt.html"
  },
  retailers: [
    {id:"rewe",name:"REWE"},
    {id:"edeka",name:"EDEKA"},
    {id:"aldi",name:"Aldi"},
    {id:"lidl",name:"Lidl"},
    {id:"kaufland",name:"Kaufland"},
    {id:"penny",name:"Penny"},
    {id:"netto",name:"Netto"},
    {id:"other",name:"Sonstiger Händler"}
  ],
  sources: [
    {id:"supermarktcheck",type:"public_web",name:"SupermarktCheck",url:"https://www.supermarktcheck.de/"},
    {id:"user_receipt",type:"user_receipt",name:"Nutzer-Kassenbon"},
    {id:"user_manual",type:"user_manual",name:"Nutzereingabe"}
  ],
  products: [
    {id:1,name:"Frische Vollmilch ESL",brand:"Gut & Günstig",size:"1 l",cat:"Milch & Kühlung",sourceUrl:"https://www.supermarktcheck.de/product/5212-gut-guenstig-frische-vollmilch-esl-1l",obs:[
      ["2008-03-29","EDEKA",0.73],["2008-11-03","EDEKA",0.68],["2009-05-05","diska (EDEKA Partner)",0.48],
      ["2011-08-30","Marktkauf",0.60],["2012-05-02","Marktkauf",0.57],["2012-10-24","EDEKA",0.51],
      ["2013-03-11","Netto Marken-Discount",0.60],["2013-08-31","EDEKA",0.65],["2014-11-08","EDEKA",0.69],
      ["2015-05-12","EDEKA",0.55],["2021-02-12","EDEKA",0.79],["2026-05-19","Marktkauf",0.95]
    ]},
    {id:2,name:"Markenbutter",brand:"ja!",size:"250 g",cat:"Milch & Kühlung",sourceUrl:"https://www.supermarktcheck.de/product/5352-ja-markenbutter-mild-gesaeuert-250g",obs:[
      ["2009-02-05","REWE Dortmund",0.65],["2009-10-05","REWE",0.85],["2009-12-22","REWE",0.99],
      ["2010-02-01","REWE",0.79],["2010-05-17","REWE",0.85],["2010-05-18","REWE",1.05],
      ["2011-01-31","REWE",0.99],["2011-10-06","REWE",1.15],["2012-07-16","REWE",0.75],
      ["2013-01-22","REWE",0.95],["2013-09-30","REWE",1.19],["2013-10-01","REWE",1.19],
      ["2013-10-02","REWE",1.29],["2013-12-03","REWE",1.29],["2014-01-02","REWE",1.19],
      ["2014-03-04","REWE",1.09],["2014-06-17","REWE",0.99],["2014-11-11","REWE",0.85],
      ["2017-06-08","REWE",1.49],["2017-07-08","REWE",1.79],["2017-09-02","REWE",1.99],
      ["2017-11-01","REWE",1.99],["2018-04-11","REWE",1.59],["2019-09-21","REWE",1.29],
      ["2020-01-21","REWE",1.39],["2020-06-03","REWE",1.25],["2021-02-04","REWE",1.34],
      ["2022-03-21","REWE",1.65],["2022-04-04","REWE",2.09],["2022-04-04","REWE",2.09],
      ["2022-07-18","REWE",2.19],["2022-12-20","REWE",2.29],["2023-01-31","REWE",1.99],
      ["2023-03-01","REWE",1.59],["2023-05-10","REWE",1.45],["2023-11-09","REWE",1.59],
      ["2024-01-19","REWE",1.69],["2024-06-22","REWE",1.85],["2024-07-15","REWE",1.99],
      ["2024-09-03","REWE",2.09],["2025-04-15","REWE",1.99],["2025-12-06","REWE",0.99],
      ["2026-01-21","REWE",0.99],["2026-09-21","Hit",1.19]
    ]},
    {id:3,name:"Kerrygold Original Butter",brand:"Kerrygold",size:"250 g",cat:"Milch & Kühlung",sourceUrl:"https://www.supermarktcheck.de/product/25990-kerrygold-original-irische-butter-250g",obs:[
      ["2008-05-04","Lidl",1.29],["2008-06-08","Kaufland",1.29],["2008-11-03","Marktkauf",1.29],["2008-08-31","diska (EDEKA Partner)",1.39],["2008-09-07","diska (EDEKA Partner)",1.39],
      ["2009-02-22","AEZ",1.39],["2009-03-08","Netto Marken-Discount",1.29],["2009-03-15","Wasgau",1.39],["2009-03-22","Kaufland",1.29],["2009-03-29","Kaufland",1.29],["2009-04-27","Wasgau",0.99],["2009-05-17","diska (EDEKA Partner)",1.39],["2009-06-10","diska (EDEKA Partner)",1.39],["2009-09-06","Globus",1.29],["2009-10-11","diska West (EDEKA Partner)",1.29],["2009-12-22","REWE",1.69],
      ["2010-01-31","AEZ",1.49],["2010-02-07","AEZ",1.49],["2010-05-09","Lidl",1.29],["2010-05-16","Lidl",1.29],["2010-12-26","Kaufland",1.49],
      ["2011-01-01","Kaufland",1.49],["2011-05-01","Netto Marken-Discount",1.69],["2011-07-17","Kaufland",1.49],["2012-01-22","Kaufland",1.69],["2012-07-23","REWE",1.55],["2012-11-18","Marktkauf",1.49],["2012-11-18","Tegut",1.69],
      ["2013-06-09","Lidl",1.49],["2013-06-16","Lidl",1.49]
    ]},
    {id:4,name:"Frische Eier aus Bodenhaltung",brand:"ja!",size:"10 Stück M-L",cat:"Milch & Kühlung",sourceUrl:"https://www.supermarktcheck.de/product/76846-ja-10-frische-eier-aus-bodenhaltung-",obs:[
      ["2011-10-06","REWE",1.29],["2017-05-26","REWE",1.09],["2021-02-04","REWE",1.29],
      ["2024-01-22","REWE",1.99],["2026-02-01","REWE",2.49]
    ]},
    {id:5,name:"Weizenmehl Type 405",brand:"ja!",size:"1 kg",cat:"Grundnahrung",sourceUrl:"https://www.supermarktcheck.de/product/6391-ja-weizenmehl-type-405-1kg",obs:[
      ["2008-09-25","REWE",0.52],["2009-10-19","REWE",0.39],["2009-10-22","REWE",0.39],
      ["2011-10-10","REWE",0.25],["2011-11-06","REWE",0.25],["2012-02-06","AEZ",0.45],
      ["2019-07-15","REWE",0.39],["2020-11-11","REWE",0.37],["2021-02-10","REWE",0.39],
      ["2023-03-01","REWE",0.79],["2024-07-25","REWE",0.65],["2026-02-02","REWE",0.59]
    ]},
    {id:6,name:"Spaghetti",brand:"ja!",size:"500 g",cat:"Grundnahrung",sourceUrl:"https://www.supermarktcheck.de/product/80482-ja-spaghetti-500g",obs:[
      ["2014-10-09","REWE",0.49],["2019-07-15","REWE",0.39],["2021-03-11","REWE",0.49],
      ["2023-03-01","REWE",0.99],["2025-04-15","REWE",0.79],["2026-02-06","REWE",0.69]
    ]},
    {id:7,name:"Jacobs Krönung Mild",brand:"Jacobs",size:"500 g",cat:"Getränke & Kaffee",sourceUrl:"https://www.supermarktcheck.de/product/5905-jacobs-kroenung-",obs:[
      ["2008-06-01","Kaufland",4.59],["2008-06-08","Kaufland",4.59],["2008-07-20","Lidl",4.29],["2008-07-27","Akzenta",3.98],
      ["2009-06-07","diska (EDEKA Partner)",4.29],["2009-07-12","diska (EDEKA Partner)",4.29],
      ["2011-12-22","mein real",4.99],["2012-11-04","Globus",4.99],["2012-11-11","Globus",4.99],["2012-11-11","famila Nordwest",5.49],
      ["2013-06-12","Globus",4.99],["2013-12-19","Globus",4.99],["2014-01-03","REWE",5.29],
      ["2015-05-31","Globus",5.99],["2015-09-06","Globus",5.69],["2021-03-12","EDEKA",5.99],
      ["2022-02-17","REWE",6.49],["2022-03-21","REWE",6.99],["2022-03-24","Globus",6.49],["2022-04-04","EDEKA",6.99],["2022-04-04","Globus",6.49],
      ["2023-02-20","EDEKA Center",6.99],["2023-02-27","Globus",6.99],["2023-05-29","REWE",7.49],["2023-06-19","REWE",7.49],["2023-06-27","EDEKA Center",4.99],["2023-07-14","Globus",6.99],
      ["2024-01-22","REWE",7.49],["2026-08-24","Lidl",9.99]
    ]},
    {id:8,name:"Bananen",brand:"Lose",size:"1 kg",cat:"Obst & Gemüse",sourceUrl:"https://www.supermarktcheck.de/product/29732-bananen",obs:[
      ["2008-07-29","REWE",0.99],["2009-05-28","Lidl",1.19],["2009-10-13","Lidl",0.99],["2009-11-08","Globus",1.05],
      ["2011-06-05","Kaufland",1.15],["2011-06-12","Kaufland",1.15],["2013-03-10","Netto Marken-Discount",1.59],["2013-03-17","Netto Marken-Discount",1.59],["2013-04-07","Netto Marken-Discount",1.79],["2013-09-08","NP Discount (EDEKA Partner)",1.09],
      ["2014-01-04","EDEKA",1.49],["2014-01-04","NP Discount (EDEKA Partner)",1.19],["2014-11-02","diska (EDEKA Partner)",1.19],
      ["2015-01-04","EDEKA",1.49],["2015-01-04","NP Discount (EDEKA Partner)",1.19],["2015-09-06","Kaufland",1.19],["2015-09-20","Kaufland",1.25],["2015-09-27","Kaufland",1.39],
      ["2017-11-27","Kaufland",1.15],["2020-01-23","Kaufland",0.99],["2020-10-25","Netto Marken-Discount",1.05],["2021-03-04","REWE",1.99],["2024-04-28","Netto Marken-Discount",2.29],["2026-09-09","Hit",1.29]
    ]},
    {id:9,name:"Speisekartoffeln vorwiegend festkochend",brand:"Deutschland",size:"2,5 kg",cat:"Obst & Gemüse",sourceUrl:"https://www.supermarktcheck.de/product/72552-speisekartoffeln-deutschland",obs:[
      ["2026-09-28","Kaufland",2.99],["2026-09-28","Penny",1.49],["2026-09-28","Lidl",0.85]
    ]},
    {id:10,name:"Ja! Sonnenblumenöl",brand:"ja!",size:"1 l",cat:"Öle & Fette",sourceUrl:"https://www.supermarktcheck.de/product/4189-ja-sonnenblumenoel-1l",obs:[
      ["2009-09-17","REWE",0.99],["2011-10-10","REWE",0.99],["2014-10-10","REWE",1.19],["2015-03-14","REWE",1.19],["2016-03-11","REWE",1.29],
      ["2018-09-18","REWE",0.99],["2023-10-23","REWE",1.79],["2025-01-25","REWE",1.59],["2025-04-15","REWE",1.49],["2026-05-16","REWE",1.79],["2026-09-03","REWE",1.89]
    ]},
    {id:11,name:"ja! Natives Olivenöl extra",brand:"ja!",size:"750 ml",cat:"Öle & Fette",sourceUrl:"https://www.supermarktcheck.de/product/58158-ja-natives-olivenoel-extra-750ml",obs:[
      ["2009-09-17","REWE",2.79],["2011-10-10","REWE",2.59],["2014-09-20","REWE",2.99],["2015-03-14","REWE",3.19],["2016-03-11","REWE",3.49],
      ["2019-07-15","REWE",3.59],["2020-11-11","REWE",3.48],["2022-01-15","REWE",3.89],["2022-10-31","REWE",4.49],["2023-03-01","REWE",4.99],["2024-07-24","REWE",9.49],["2026-09-03","Hit",5.99]
    ]},
    {id:12,name:"ja! Kernige Haferflocken",brand:"ja!",size:"500 g",cat:"Frühstück & Cerealien",sourceUrl:"https://www.supermarktcheck.de/product/463929-ja-kernige-haferflocken-500g",obs:[
      ["2020-01-21","REWE",0.49],["2020-11-11","REWE",0.47],["2021-02-10","REWE",0.49],["2022-03-19","REWE",0.59],["2023-03-01","REWE",0.79],["2026-02-02","REWE",0.69]
    ]},
    {id:13,name:"ja! Thunfischfilets in Sonnenblumenöl",brand:"ja!",size:"195 g",cat:"Konserven",sourceUrl:"https://www.supermarktcheck.de/product/207236-ja-thunfischfilets-in-sonnenblumenoel-195g",obs:[
      ["2019-04-05","REWE",1.19],["2020-11-11","REWE",1.15],["2021-02-04","REWE",1.19],["2023-03-01","REWE",1.49],["2026-09-07","Hit",1.29]
    ]},
    {id:14,name:"Ja! Sonnenblumen Margarine",brand:"ja!",size:"500 g",cat:"Öle & Fette",sourceUrl:"https://www.supermarktcheck.de/product/38725-ja-sonnenblumen-margarine-500g",obs:[
      ["2025-04-15","REWE",1.49],["2026-08-09","REWE",1.59]
    ]}
    {id:15,name:"ja! H-Milch 1,5%",brand:"ja!",size:"1 l",cat:"Milch & Kühlung",sourceUrl:"https://www.supermarktcheck.de/product/1325-ja-h-milch-15-1l",obs:[
      ["2009-10-19","REWE",0.42],["2011-03-31","REWE",0.50],["2012-07-23","REWE",0.45],["2012-11-03","REWE",0.54],
      ["2014-09-20","REWE",0.65],["2014-11-11","REWE",0.55],["2017-05-26","REWE",0.63],["2018-04-11","REWE",0.68],
      ["2020-01-21","REWE",0.65],["2020-11-11","REWE",0.68],["2021-03-11","REWE",0.71],["2022-12-16","REWE",0.99],
      ["2023-03-01","REWE",1.05],["2023-06-09","REWE",0.95],["2024-07-24","REWE",0.99],["2026-05-16","REWE",0.85]
    ]},
    {id:16,name:"ja! Raffinade Zucker",brand:"ja!",size:"1 kg",cat:"Grundnahrung",sourceUrl:"https://www.supermarktcheck.de/product/33375-ja-raffinade-zucker-1kg",obs:[
      ["2009-10-22","REWE",0.85],["2010-05-25","Hit",0.69],["2011-10-09","REWE",0.65],["2014-09-20","REWE",0.85],
      ["2014-11-11","REWE",0.65],["2017-05-26","REWE",0.69],["2019-07-15","REWE",0.59],["2021-02-04","REWE",0.79],
      ["2022-11-07","REWE",1.29],["2024-07-24","REWE",1.49],["2026-02-05","REWE",0.99]
    ]},
    {id:17,name:"ja! Zarte Haferflocken",brand:"ja!",size:"500 g",cat:"Frühstück & Cerealien",sourceUrl:"https://www.supermarktcheck.de/product/37860-ja-zarte-haferflocken-500g",obs:[
      ["2022-02-17","REWE",0.49],["2023-10-23","REWE",0.79],["2026-05-18","REWE",0.69]
    ]},
    {id:18,name:"ja! Tomaten fein gehackt",brand:"ja!",size:"400 g",cat:"Konserven",sourceUrl:"https://www.supermarktcheck.de/product/37851-ja-tomaten-fein-gehackt-in-tomatensaft-400g",obs:[
      ["2022-07-18","REWE",0.55],["2022-11-20","REWE",0.69],["2023-03-01","REWE",0.85],["2026-05-16","REWE",0.59]
    ]},
    {id:19,name:"ja! Tomaten passiert",brand:"ja!",size:"500 g",cat:"Konserven",sourceUrl:"https://www.supermarktcheck.de/product/37850-ja-tomaten-passiert-500g",obs:[
      ["2023-09-01","REWE",0.85],["2024-01-22","REWE",0.79],["2026-05-16","REWE",0.65]
    ]},
  ]
  // Normalisierte Rohbeobachtungen für die spätere Datenbankmigration.
  // id bleibt deterministisch: Produkt + Datum + Händler + Preis.
  priceObservations: [],
  submissions: [],
  validationRules: {
    nearMatchPercent: 5,
    minIndependentMatches: 3,
    autoApprove: true,
    keepOutliers: true
  }
};

function normalizeRetailerName(name){
  const s=(name||"").toLowerCase();
  if(s.includes("rewe")||s.includes("nahkauf")) return "rewe";
  if(s.includes("edeka")||s.includes("marktkauf")||s.includes("diska")||s.includes("np discount")||s.includes("e aktiv")) return "edeka";
  if(s.includes("aldi")) return "aldi";
  if(s.includes("lidl")) return "lidl";
  if(s.includes("kaufland")) return "kaufland";
  if(s.includes("penny")) return "penny";
  if(s.includes("netto")) return "netto";
  return "other";
}

priceDB.priceObservations = priceDB.products.flatMap(p =>
  p.obs.map((o,i) => ({
    id: `obs-${p.id}-${i+1}`,
    productId: p.id,
    retailerId: normalizeRetailerName(o[1]),
    retailerRaw: o[1],
    date: o[0],
    year: Number(o[0].slice(0,4)),
    price: Number(o[2]),
    currency: "EUR",
    unit: p.size,
    sourceId: "supermarktcheck",
    status: "verified-source",
    confidence: 1
  }))
);

// Platzhalter für spätere Nutzerbeiträge. Nutzer ändern niemals Rohdaten direkt.
// Ein Beitrag wird erst nach Validierung in priceObservations übernommen.
priceDB.submissions = [];
