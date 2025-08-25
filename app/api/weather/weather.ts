import { mapWeatherData } from "@/app/api/weather/weather.mapper";
import { GetWeatherDataParams, GetWeatherDataResponse, OpenweatherForecastResponse } from "@/app/api/weather/weather.types";
import { OPENWEATHER_API_KEY, OPENWEATHER_FORECAST_API } from "@/lib/contants";
import axios from "axios";

export async function getWeatherData({ lat, lon }: GetWeatherDataParams): Promise<GetWeatherDataResponse | null> {
  const weatherUrl = `${OPENWEATHER_FORECAST_API}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
  console.log(weatherUrl)
  let mappedWeatherData = null;
  try {
    const response = await axios.get<OpenweatherForecastResponse>(weatherUrl);
    mappedWeatherData = mapWeatherData(response.data);
  } catch (error) {
    throw new Error("Can't fetch weather data", { cause: error });
  }
  return mappedWeatherData;
}
