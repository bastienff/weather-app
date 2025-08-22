import { getCitiesJSON } from "@/app/api/weather/cities/cities";
import axios from "axios";

jest.mock("axios");
const axiosMocked = axios.get as jest.Mock;
const CITIES_CSV = "somecsvurl";

const mockCitiesCSV = `
city_id,city_name,state_code,country_code,country_full,lat,lon
735563,Kozáni,ESYE13,GR,Piraiós Nomós,40.30069,21.78896
`;

describe("getCities", () => {
  it("should get cities JSON", async () => {
    axiosMocked.mockResolvedValue({ status: 200, data: mockCitiesCSV });
    const cities = await getCitiesJSON(CITIES_CSV);
    expect(cities.length).toBe(1);
    expect(cities).toStrictEqual([
      {
        city_id: "735563",
        city_name: "Kozáni",
        state_code: "ESYE13",
        country_code: "GR",
        country_full: "Piraiós Nomós",
        lat: "40.30069",
        lon: "21.78896",
      },
    ]);
  });

  it("should throw on fetch error", async () => {
    axiosMocked.mockResolvedValue({ status: 500, data: "" });
    await expect(getCitiesJSON(CITIES_CSV)).rejects.toThrow("Can't fetch cities csv");
  });
});
