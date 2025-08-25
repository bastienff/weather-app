export type GetWeatherDataParams = {
  lat: string | null;
  lon: string | null;
};

export type GetWeatherDataResponse = {
  hourly: GetWeatherForecast[],
  daily: GetWeatherForecast[],
}

export type GetWeatherForecast = {
  date: string,
  time: string,
  description: string,
  highTemp: number,
  lowTemp: number,
  iconId: string,
  temperature: number,
  pop: number,
}

export type OpenweatherForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: OpenweatherForecast[];
  city: City;
}

export type OpenweatherForecast = {
  dt: number;
  main: MainConditions;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
  rain?: Rain;
}

type MainConditions = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
}

type Clouds = {
  all: number;
}

type Wind = {
  speed: number;
  deg: number;
  gust: number;
}

type Sys = {
  pod: string;
}

type Rain = {
  '3h': number;
}

type City = {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

type Coordinates = {
  lat: number;
  lon: number;
}
