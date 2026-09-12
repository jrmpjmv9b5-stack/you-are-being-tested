export type Place={name:string;lat:number;lon:number};
export type Weather={current:{temperature_2m:number;apparent_temperature:number;precipitation:number;weather_code:number;wind_speed_10m:number;relative_humidity_2m:number};hourly:{time:string[];temperature_2m:number[];precipitation_probability:number[];weather_code:number[]}};
export const places:Place[]=[
['Hannover',52.3759,9.7320],['Langenhagen',52.447,9.743],['Garbsen',52.426,9.600],['Wunstorf',52.423,9.427],['Neustadt',52.505,9.462],['Burgwedel',52.500,9.863],['Lehrte',52.375,9.980],['Burgdorf',52.447,10.006],['Laatzen',52.315,9.797],['Barsinghausen',52.300,9.460],['Springe',52.208,9.552],['Seelze',52.397,9.598],['Wedemark',52.545,9.733],['Isernhagen',52.480,9.840],['Ronnenberg',52.319,9.655],['Hemmingen',52.322,9.742],['Pattensen',52.265,9.768],['Gehrden',52.313,9.600],['Wennigsen',52.275,9.570],['Uetze',52.465,10.205]
].map(([name,lat,lon])=>({name,lat,lon}));
export const condition=(code:number)=>({0:'Klar',1:'Überwiegend klar',2:'Leicht bewölkt',3:'Bedeckt',45:'Nebel',48:'Nebel',51:'Leichter Nieselregen',53:'Nieselregen',55:'Starker Nieselregen',61:'Leichter Regen',63:'Regen',65:'Starker Regen',71:'Leichter Schneefall',73:'Schneefall',75:'Starker Schneefall',80:'Regenschauer',81:'Regenschauer',82:'Starke Regenschauer',95:'Gewitter',96:'Gewitter mit Hagel',99:'Starkes Gewitter'} as Record<number,string>)[code]??'Wechselhaft';
export const isRain=(code:number)=>[51,53,55,61,63,65,80,81,82,71,73,75].includes(code);
export const isStorm=(code:number)=>[95,96,99].includes(code);
export async function getWeather():Promise<Weather[]>{
 const latitude=places.map(p=>p.lat).join(','),longitude=places.map(p=>p.lon).join(',');
 const url=`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,relative_humidity_2m&hourly=temperature_2m,precipitation_probability,weather_code&forecast_days=2&timezone=Europe%2FBerlin`;
 const r=await fetch(url); if(!r.ok) throw new Error('Wetterdaten konnten nicht geladen werden.');
 const json=await r.json(); return (Array.isArray(json)?json:[json]) as Weather[];
}