import axios from "axios";
import { parse } from "csv-parse/sync";
import { CityType } from "@/app/api/weather/cities/types";

const CITIES_CSV = process.env.CITIES_CSV!;

export async function getCitiesJSON(): Promise<CityType[]> {
  const response = await axios.get(CITIES_CSV);
  if (response.status !== 200) throw new Error("Can't fetch cities csv");
  return parse(response.data, { columns: true, skip_empty_lines: true });
}
