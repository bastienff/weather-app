import { MOCK_DATA } from "@/lib/contants";
import { getWeatherData } from "./weather";
import axios from "axios";

jest.mock("axios");
const axiosMocked = axios.get as jest.Mock;

describe("getWeatherData", () => {
  const lat = "40.3";
  const lon = "21.78";
  const mockWeatherData = MOCK_DATA;

  it("should return weather data on success", async () => {
    axiosMocked.mockResolvedValue({
      status: 200,
      data: mockWeatherData,
    });

    const result = await getWeatherData({ lat, lon });
    expect(result).toEqual(mockWeatherData);
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(`lat=${lat}&lon=${lon}`)
    );
  });

  it("should throw error if response status is not 200", async () => {
    axiosMocked.mockResolvedValue({
      status: 500,
      data: {},
    });

    await expect(getWeatherData({ lat, lon })).rejects.toThrow("Can't fetch weather data");
  });
});
