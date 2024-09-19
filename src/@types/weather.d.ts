interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  vitesse: number;
  deg: number;
  rafale: number;
}

interface Sys {
  type: number;
  id: number;
  pays: string;
  lever_du_soleil: number;
  coucher_du_soleil: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Clouds {
  tous: number;
}

interface WeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  nuages: Clouds;
  dt: number;
  sys: Sys;
  fuseau_horaire: number;
  id: number;
  nom: string;
  cod: number;
}
