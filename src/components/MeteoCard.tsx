"use client"; // Assure que ce composant est côté client

import { useEffect, useState } from "react";
import Link from "next/link";
import LikeSection from "./LikeSection";

interface MeteoCardProps {
  city: string;
}

function MeteoCard({ city }: MeteoCardProps) {
  const [temp, setTemp] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Accédez à la variable d'environnement exposée au client
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
        );
        if (!response.ok) {
          throw new Error("Ville non trouvée");
        }
        const data = await response.json();
        setTemp(data.main.temp);
      } catch (err) {
        setError("Erreur lors de la récupération des données météo");
      }
    };

    fetchWeather();
  }, [city, API_KEY]); // Ajoutez API_KEY dans les dépendances si nécessaire

  return (
    <div className="border m-6 rounded-xl p-6 bg-sky-200 bg-opacity-40">
      <LikeSection />
      <div className="font-bold">{city}</div>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div>{temp !== null ? `${temp}°C` : "Chargement..."}</div>
      )}
      <Link
        href={`/city/${city}`}
        className="text-blue-900 underline font-bold"
      >
        Voir + de détails
      </Link>
    </div>
  );
}

export default MeteoCard;
