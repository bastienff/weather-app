export type MenuCityType = {
  city_name: string;
  lat: string;
  lon: string;
};

export const MENU_CITIES: MenuCityType[] = [
  {
    city_name: "Rio de Janeiro",
    lat: "-22.90278",
    lon: "-43.2075"
  },
  {
    city_name: "Beijing",
    lat: "39.9075",
    lon: "116.39723"
  },
  {
    city_name: "Los Angeles",
    lat: "34.05223",
    lon: "-118.24368"
  },
];

export const MOCK_DATA = {
  lat: "-22.90278",
  lon: "-43.2075",
  timezone: "America/Sao_Paulo",
  timezone_offset: -10800,
  hourly: [
    {
      dt: 1728018000,
      temp: 21.97,
      feels_like: 22.83,
      pressure: 1017,
      humidity: 100,
      dew_point: 21.97,
      uvi: 0,
      clouds: 75,
      visibility: 10000,
      wind_speed: 2.4,
      wind_deg: 179,
      wind_gust: 3.63,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      pop: 1,
      rain: {
        "1h": 0.57,
      },
    },
    {
      dt: 1728018000,
      temp: 21.97,
      feels_like: 22.83,
      pressure: 1017,
      humidity: 100,
      dew_point: 21.97,
      uvi: 0,
      clouds: 75,
      visibility: 10000,
      wind_speed: 2.4,
      wind_deg: 179,
      wind_gust: 3.63,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      pop: 1,
      rain: {
        "1h": 0.57,
      },
    },
  ],
  daily: [
    {
      dt: 1728050400,
      sunrise: 1728030598,
      sunset: 1728075159,
      moonrise: 1728033660,
      moonset: 1728081180,
      moon_phase: 0.06,
      temp: {
        day: 20.89,
        min: 20.15,
        max: 22.1,
        night: 20.15,
        eve: 20.54,
        morn: 21.53,
      },
      feels_like: {
        day: 21.44,
        night: 20.52,
        eve: 21,
        morn: 22.22,
      },
      pressure: 1020,
      humidity: 92,
      dew_point: 19.61,
      wind_speed: 4.33,
      wind_deg: 134,
      wind_gust: 7.44,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 14.64,
      uvi: 1.12,
    },
    {
      dt: 1728050400,
      sunrise: 1728030598,
      sunset: 1728075159,
      moonrise: 1728033660,
      moonset: 1728081180,
      moon_phase: 0.06,
      temp: {
        day: 20.89,
        min: 20.15,
        max: 22.1,
        night: 20.15,
        eve: 20.54,
        morn: 21.53,
      },
      feels_like: {
        day: 21.44,
        night: 20.52,
        eve: 21,
        morn: 22.22,
      },
      pressure: 1020,
      humidity: 92,
      dew_point: 19.61,
      wind_speed: 4.33,
      wind_deg: 134,
      wind_gust: 7.44,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 14.64,
      uvi: 1.12,
    },
  ],
};

export const UNKNOWN_ERROR_MESSAGE = "An unknown error occurred";

export const WEATHER_DATETIME_UPDATE_KEY = "weather_latest_update";
