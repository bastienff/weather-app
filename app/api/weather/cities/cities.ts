import axios from "axios";
import { parse } from "csv-parse/sync";
import { City } from "@/app/api/weather/cities/types";

export async function getCitiesJSON(citiesCsvUrl: string): Promise<City[]> {
  const response = await axios.get(citiesCsvUrl);
  if (response.status !== 200) throw new Error("Can't fetch cities csv");
  return parse(response.data, { columns: true, skip_empty_lines: true });
}
