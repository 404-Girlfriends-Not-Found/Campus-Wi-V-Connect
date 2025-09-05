import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch a random quote from ZenQuotes
    const res = await fetch("https://zenquotes.io/api/random", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    // ZenQuotes returns an array with one object
    const quote = data[0];

    return NextResponse.json({
      content: quote.q,
      author: quote.a,
    });
  } catch (err) {
    console.error("API fetch error:", err);
    return NextResponse.json({
      content: "Keep going, amazing things are coming your way!",
      author: "",
    });
  }
}
