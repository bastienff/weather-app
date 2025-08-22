import { getWeatherData } from "@/app/api/weather/weather";
import { UNKNOWN_ERROR_MESSAGE } from "@/lib/contants";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const weatherData = await getWeatherData({ lat, lon });
    return NextResponse.json(weatherData, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE;
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
