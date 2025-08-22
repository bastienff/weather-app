import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CityType } from '@/app/api/weather/cities/types';

const fetchCities = async () => {
  const response = await axios.get("/api/weather/cities");
  return response.data;
};

type UseCitiesReturnType = {
  cities: CityType[];
  isLoading: boolean;
  error: Error | null;
};

export const useCities = (): UseCitiesReturnType => {
  const { data, isLoading, error } = useQuery<CityType[]>({
    queryKey: ["cities"],
    queryFn: fetchCities,
  });
  return { cities: data ?? [], isLoading, error };
}
