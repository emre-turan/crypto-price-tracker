"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const TrackCoin = ({ coinId }: { coinId: string }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Load the user's favorite status from localStorage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(coinId));
  }, [coinId]);

  // When the user toggles their favorite status, save the new status to localStorage
  const handleFavoriteToggle = () => {
    const currentFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const updatedFavorites = isFavorite
      ? currentFavorites.filter((id: string) => id !== coinId)
      : [...currentFavorites, coinId];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <StarIcon
      className={cn(
        "size-4 hover:cursor-pointer",
        isFavorite && "text-yellow-500 fill-current"
      )}
      onClick={handleFavoriteToggle}
    />
  );
};

export default TrackCoin;
