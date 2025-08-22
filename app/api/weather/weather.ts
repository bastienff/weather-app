import { GetWeatherDataParamsType } from "@/app/api/weather/types";
import axios from "axios";

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY!;

export async function getWeatherData({ lat, lon }: GetWeatherDataParamsType) {
  const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
  const response = await axios.get(weatherUrl);
  if (response.status !== 200) throw new Error("Can't fetch weather data");
  return response.data;
}
