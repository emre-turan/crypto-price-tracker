import { CryptoCurrencyPrice } from "@/components/table/columns";

export async function getTableData(): Promise<CryptoCurrencyPrice[]> {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,litecoin,cardano,tether,solana";

  try {
    const response = await fetch(url, {
      cache: "no-store",
      // next: {
      //   revalidate: 0,
      // },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    const coins: CryptoCurrencyPrice[] = await response.json();

    return coins.map((coin) => ({
      id: coin.id,
      name: coin.name,
      image: coin.image,
      symbol: coin.symbol,
      current_price: coin.current_price,
    }));
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
    return [];
  }
}
