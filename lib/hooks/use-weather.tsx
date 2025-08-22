import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "@/lib/store";
import { CityType } from "@/app/api/weather/cities/types";
import { saveDateToLocalStorage } from "@/utils/date";

const fetchWeather = async ({ lat, lon }: Partial<CityType>) => {
  const response = await axios.get("/api/weather", {
    params: { lat, lon },
  });
  saveDateToLocalStorage();
  return response.data;
};

export const useWeather = () => {
  const { selectedCity } = useStore();
  const { lat, lon, city_name } = selectedCity;
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["weatherData", city_name],
    queryFn: () => fetchWeather({ lat, lon }),
    enabled: !!city_name,
    retry: false,
  });

  return { weatherData: data, isLoading, error, refetch };
};
