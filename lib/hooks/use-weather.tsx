import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "@/lib/store";
import { GetWeatherDataParams, GetWeatherDataResponse } from "@/app/api/weather/weather.types";
import { getFormattedDate } from "@/utils/date";
import { WEATHER_DATETIME_UPDATE_KEY } from "@/lib/contants";

export const useWeather = () => {
  const { selectedCity } = useStore();
  const setWeatherLatestUpdate = useStore(state => state.setWeatherLatestUpdate);
  const { lat, lon, city_name } = selectedCity;

  const fetchWeather = async ({ lat, lon }: GetWeatherDataParams): Promise<GetWeatherDataResponse> => {
    const response = await axios.get<GetWeatherDataResponse>("/api/weather", {
      params: { lat, lon },
    });
    const formattedDate = getFormattedDate();
    localStorage.setItem(WEATHER_DATETIME_UPDATE_KEY, formattedDate);
    setWeatherLatestUpdate(formattedDate);
    return response.data;
  };

  const { data, isLoading, isRefetching, error, refetch } = useQuery({
    queryKey: ["weatherData", city_name],
    queryFn: () => fetchWeather({ lat, lon }),
    enabled: !!city_name,
    retry: 3,
  });

  return {
    weatherData: data,
    isLoading: isLoading || isRefetching,
    error,
    refetch
  };
};
