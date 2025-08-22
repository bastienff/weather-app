import { DailyWeatherDataType } from "@/components/hourly-weather/types";

export const mapProps = (data: any): DailyWeatherDataType[] => {
  return data?.map((item: any) => ({
    iconId: item.weather[0]?.icon,
    time: new Date(item.dt * 1000).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    temperature: Number(item.temp.toFixed(0)),
    pop: (item.pop * 100).toFixed(0),
  }));
};
