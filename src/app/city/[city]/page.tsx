"use client";

import { useEffect, useState } from "react";
import type { Weather } from "@/@types/weather";

async function fetchWeather(city: string): Promise<Weather> {
  const API_KEY = process.env.API_KEY;
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );
  if (!result.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return result.json();
}

function CityPage({ params }: { params: { city: string } }) {
  const { city } = params;
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(city);
        setWeather(data);
      } catch (error) {
        setError("Error fetching weather data");
      } finally {
        setLoading(false);
      }
    };

    getWeather();
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, [city]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen  text-white">
      <div className="p-12 bg-blue-400 rounded-3xl shadow-lg max-w-3xl w-full text-center">
        <h2 className="text-5xl font-bold mb-6">{city}</h2>
        <p className="text-3xl mb-6">{weather?.weather[0].description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
          alt={weather?.weather[0].description}
          className="w-56 h-56 mx-auto"
        />
      </div>
    </div>
  );
}

export default CityPage;
