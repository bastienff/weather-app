import { getCitiesJSON } from "@/app/api/weather/cities/cities";
import { UNKNOWN_ERROR_MESSAGE } from "@/lib/contants";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cities = await getCitiesJSON();
    return NextResponse.json(cities, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE;
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
