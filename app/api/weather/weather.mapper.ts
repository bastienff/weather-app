import { OpenweatherForecast, GetWeatherDataResponse, GetWeatherForecast, OpenweatherForecastResponse } from "@/app/api/weather/weather.types";

function mapHourlyData(forecasts: OpenweatherForecast[]): GetWeatherForecast[] {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayStart = today.getTime() / 1000;
  const todayEnd = todayStart + 86400;
  const filteredForecasts = forecasts.filter(forecast =>
    forecast.dt >= todayStart && forecast.dt < todayEnd
  );
  return mapForecast(filteredForecasts);
}

function mapDailyData(forecasts: OpenweatherForecast[]): GetWeatherForecast[] {
  const dailyForecasts = [];
  const seenDays = new Set();

  for (const forecast of forecasts) {
    const date = forecast.dt_txt.split(' ')[0];
    const today = new Date().toISOString().split('T')[0];
    if (date === today) {
      continue;
    }
    if (!seenDays.has(date)) {
      seenDays.add(date);
      dailyForecasts.push(forecast);
    }
  }
  return mapForecast(dailyForecasts);
}

export function mapForecast(data: OpenweatherForecast[]): GetWeatherForecast[] {
  return data?.map((item: OpenweatherForecast) => ({
    date: new Date(item.dt * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }),
    time: new Date(item.dt * 1000).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    description: item.weather[0].description,
    highTemp: item.main.temp_max,
    lowTemp: item.main.temp_min,
    iconId: item.weather[0].icon,
    temperature: Number(item.main.temp.toFixed(0)),
    pop: Number((item.pop * 100).toFixed(0)),
  }));
}

export function mapWeatherData(data: OpenweatherForecastResponse): GetWeatherDataResponse {
  const dailyForecast = mapDailyData(data.list);
  const hourlyForecast = mapHourlyData(data.list);

  return {
    hourly: hourlyForecast,
    daily: dailyForecast,
  };
}
