export type GetCitiesDataParams = {
  lat: string | null;
  lon: string | null;
};

export interface CityType {
  city_id: string;
  city_name: string;
  state_code: string;
  country_code: string;
  country_full: string;
  lat: string;
  lon: string;
}
