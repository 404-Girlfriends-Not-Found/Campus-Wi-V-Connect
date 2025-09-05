"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [quote, setQuote] = useState("Loading inspiring quote...");

  const fetchQuote = async () => {
    try {
      const res = await fetch("/api/quote"); // fetch from local API
      const data = await res.json();
      if (data.content) {
        setQuote(`${data.content}${data.author ? " — " + data.author : ""}`);
      } else {
        setQuote("Keep going, amazing things are coming your way!");
      }
    } catch {
      setQuote("Keep going, amazing things are coming your way!");
    }
  };

  useEffect(() => {
    fetchQuote(); // fetch immediately on mount
    const interval = setInterval(fetchQuote, 180000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Banner */}
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full text-neutral font-semibold">
            🎓 Don&apos;t have anything of value on your CV?
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 text-white">
          Worry not, Campus Wi-V Connect got you covered, like really covered.
        </h1>

        {/* Subheading */}
        <p className="text-center text-xl text-white/50 mt-8">
          Together we strive. Calling all talent, discovered or undiscovered, to
          take part in a fruitful journey that might change your life, impact
          it, or change the way you think.
        </p>

        {/* Quote + Sign Up */}
        <form className="flex border border-white/15 rounded-full p-2 mt-8 w-full max-w-xl mx-auto bg-purple-950/10 items-center">
          <textarea
            readOnly
            value={quote}
            className="bg-transparent text-white px-4 py-2 rounded-l-full flex-1 resize-none outline-none text-center"
            rows={2}
          />
          <Link href="/auth/sign-up">
            <button
              type="button"
              className="border border-white/30 h-10 rounded-full px-4 font-medium bg-purple-950 text-white whitespace-nowrap"
            >
              Sign up
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
}
