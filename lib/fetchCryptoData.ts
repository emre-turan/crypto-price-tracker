import { CryptoCurrencyPrice } from "@/components/table/columns";

// utils/fetchCryptoData.ts
async function fetchCryptoData(): Promise<CryptoCurrencyPrice[]> {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,litecoin,cardano,tether,solana";
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  return response.json();
}

export default fetchCryptoData;
