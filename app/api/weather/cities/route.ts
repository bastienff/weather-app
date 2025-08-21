import { NextResponse } from "next/server";
import axios from "axios";
import { parse } from "csv-parse/sync";
import { City } from "@/app/api/weather/cities/types";


export async function GET() {
  const CITIES_CSV = process.env.NEXT_PUBLIC_CITIES_CSV!;

  try {
    const response = await axios.get(CITIES_CSV);

    if (response.status !== 200) {
      throw new Error("Can't fetch cities csv");
    }

    const cities: City[] = parse(response.data, {
      columns: true,
      skip_empty_lines: true,
    });

    return NextResponse.json(cities, { status: 200 });
  } catch (error) {
    console.error("Error:", error);

    return NextResponse.json(
      { message: "Internal Server Error." },
      { status: 500 },
    );
  }
}
