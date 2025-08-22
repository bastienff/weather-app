import { getCitiesJSON } from "@/app/api/weather/cities/cities";
import { NextResponse } from "next/server";

const UNKNOWN_ERROR_MESSAGE = 'Unknown error occurred';

export async function GET() {
  const CITIES_CSV = process.env.NEXT_PUBLIC_CITIES_CSV!;
  try {
    const cities = await getCitiesJSON(CITIES_CSV);
    return NextResponse.json(cities, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE;
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
