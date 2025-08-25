import { mapWeatherData } from "@/app/api/weather/weather.mapper";
import { GetWeatherDataParams, GetWeatherDataResponse, OpenweatherForecastResponse } from "@/app/api/weather/weather.types";
import { OPENWEATHER_API_KEY, OPENWEATHER_FORECAST_API } from "@/lib/contants";
import axios from "axios";

export async function getWeatherData({ lat, lon }: GetWeatherDataParams): Promise<GetWeatherDataResponse | null> {
  const weatherUrl = `${OPENWEATHER_FORECAST_API}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
  const response = await axios.get<OpenweatherForecastResponse>(weatherUrl);
  if (response.status !== 200) throw new Error("Can't fetch cities csv");
  return mapWeatherData(response.data);;
}
