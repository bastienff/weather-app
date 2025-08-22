import { DailyWeatherDataType } from "@/components/daily-weather/types";

export const mapProps = (dailyData: any): DailyWeatherDataType[] =>
  dailyData?.map((data: any) => {
    return {
      date: new Date(data.dt * 1000).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
      description: data.weather[0].description,
      highTemp: data.temp.max,
      lowTemp: data.temp.min,
      iconId: data.weather[0].icon,
    };
  }).slice(0, 5);
