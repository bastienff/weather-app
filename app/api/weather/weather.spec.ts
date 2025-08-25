import { MOCK_DATA } from "@/lib/contants";
import { getWeatherData } from "./weather";
import axios from "axios";
import { mapWeatherData } from "@/app/api/weather/weather.mapper";

jest.mock("axios");
const axiosMocked = axios.get as jest.Mock;

beforeEach(() => {
  jest.clearAllMocks();
});

describe("getWeatherData", () => {
  const mockLat = "40.3";
  const mockLon = "21.78";
  const mockWeatherData = MOCK_DATA;
  const mappedWeatherData = mapWeatherData(mockWeatherData);

  it("should return weather data on success", async () => {
    axiosMocked.mockResolvedValue({
      status: 200,
      data: mockWeatherData,
    });

    const result = await getWeatherData({ lat: mockLat, lon: mockLon });
    expect(result).toEqual(mappedWeatherData);
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(`lat=${mockLat}&lon=${mockLon}`)
    );
  });

  it("should throw error if response status is not 200", async () => {
    axiosMocked.mockResolvedValue({
      status: 500,
      data: {},
    });

    await expect(getWeatherData({ lat: mockLat, lon: mockLon })).rejects.toThrow("Can't fetch weather data");
  });
});
