import { OpenweatherForecastResponse } from "@/app/api/weather/weather.types";
import { MenuCity } from "@/lib/store.types";

export const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY!;
export const OPENWEATHER_FORECAST_API = process.env.OPENWEATHER_FORECAST_API!;

export const MENU_CITIES: MenuCity[] = [
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

export const MOCK_DATA: OpenweatherForecastResponse = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1756026000,
      "main": {
        "temp": 5.29,
        "feels_like": 3.69,
        "temp_min": 5.29,
        "temp_max": 5.29,
        "pressure": 1029,
        "sea_level": 1029,
        "grnd_level": 1011,
        "humidity": 83,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.02,
        "deg": 27,
        "gust": 5.17
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-08-24 09:00:00"
    },
    {
      "dt": 1756036800,
      "main": {
        "temp": 5.52,
        "feels_like": 3.87,
        "temp_min": 5.52,
        "temp_max": 5.99,
        "pressure": 1029,
        "sea_level": 1029,
        "grnd_level": 1011,
        "humidity": 81,
        "temp_kf": -0.47
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.11,
        "deg": 13,
        "gust": 6.39
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-08-24 12:00:00"
    },
    {
      "dt": 1756047600,
      "main": {
        "temp": 7.02,
        "feels_like": 5.67,
        "temp_min": 7.02,
        "temp_max": 7.89,
        "pressure": 1029,
        "sea_level": 1029,
        "grnd_level": 1011,
        "humidity": 76,
        "temp_kf": -0.87
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.05,
        "deg": 4,
        "gust": 5.69
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-08-24 15:00:00"
    },
    {
      "dt": 1756058400,
      "main": {
        "temp": 10.3,
        "feels_like": 9.34,
        "temp_min": 10.3,
        "temp_max": 10.3,
        "pressure": 1027,
        "sea_level": 1027,
        "grnd_level": 1010,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.29,
        "deg": 355,
        "gust": 2.34
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-08-24 18:00:00"
    },
    {
      "dt": 1756069200,
      "main": {
        "temp": 11.88,
        "feels_like": 11.08,
        "temp_min": 11.88,
        "temp_max": 11.88,
        "pressure": 1027,
        "sea_level": 1027,
        "grnd_level": 1010,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 0.98,
        "deg": 128,
        "gust": 0.78
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-08-24 21:00:00"
    },
    {
      "dt": 1756080000,
      "main": {
        "temp": 7.75,
        "feels_like": 6.93,
        "temp_min": 7.75,
        "temp_max": 7.75,
        "pressure": 1028,
        "sea_level": 1028,
        "grnd_level": 1010,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 69
      },
      "wind": {
        "speed": 1.64,
        "deg": 140,
        "gust": 1.99
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-08-25 00:00:00"
    },
    {
      "dt": 1756090800,
      "main": {
        "temp": 7.21,
        "feels_like": 5.96,
        "temp_min": 7.21,
        "temp_max": 7.21,
        "pressure": 1028,
        "sea_level": 1028,
        "grnd_level": 1010,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 1.98,
        "deg": 182,
        "gust": 2.58
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-08-25 03:00:00"
    },
  ],
  "city": {
    "id": 3882428,
    "name": "Los Ángeles",
    "coord": {
      "lat": -37.4697,
      "lon": -72.3537
    },
    "country": "CL",
    "population": 125430,
    "timezone": -14400,
    "sunrise": 1756034508,
    "sunset": 1756074122
  }
};

export const UNKNOWN_ERROR_MESSAGE = "An unknown error occurred";

export const WEATHER_DATETIME_UPDATE_KEY = "weather_latest_update";
