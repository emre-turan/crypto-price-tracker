import React, { useState, useEffect } from "react";

interface PriceChangeProps {
  currentPrice: number;
}

const PriceChange: React.FC<PriceChangeProps> = ({ currentPrice }) => {
  const [previousPrice, setPreviousPrice] = useState<number | null>(null);
  const [priceColor, setPriceColor] = useState<string>("");

  useEffect(() => {
    let temporaryColor = "";
    if (previousPrice !== null) {
      if (currentPrice > previousPrice) {
        temporaryColor = "text-green-600";
      } else if (currentPrice < previousPrice) {
        temporaryColor = "text-red-600";
      }
    }
    if (temporaryColor) {
      setPriceColor(temporaryColor);
      const timer = setTimeout(() => {
        setPriceColor("");
      }, 1000);

      return () => clearTimeout(timer);
    }
    setPreviousPrice(currentPrice);
  }, [currentPrice]);

  return (
    <span className={`${priceColor}`}>
      {currentPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}
    </span>
  );
};

export default PriceChange;
