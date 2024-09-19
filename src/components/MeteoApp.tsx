"use client"; // Assure que ce composant est côté client

import { useState } from "react";
import MeteoCard from "./MeteoCard";

// Fonction pour transformer en "Title Case"
const capitalizeCity = (city: string) => {
  return city
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

function MeteoApp() {
  const [cities, setCities] = useState<string[]>([
    "Paris",
    "Alger",

    "Montpellier",
    "Lyon",
    "Biarritz",
    "Tournon-sur-Rhône ",
    "vensac",
    "Soulac-sur-mer",
    "Perpignan",
  ]); // Liste de villes par défaut

  const handleAddCity = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let newCity = formData.get("city") as string;

    // Capitaliser correctement le nom de la ville
    newCity = capitalizeCity(newCity);

    if (newCity && !cities.includes(newCity)) {
      setCities([...cities, newCity]);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-center mb-6">
        <form onSubmit={handleAddCity}>
          <div className="flex items-center">
            <input
              type="text"
              name="city"
              placeholder="Ajouter une ville"
              className="border p-2 rounded-l-lg w-64"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-lg"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {cities.map((city) => (
          <MeteoCard key={city} city={city} />
        ))}
      </div>
    </div>
  );
}

export default MeteoApp;
