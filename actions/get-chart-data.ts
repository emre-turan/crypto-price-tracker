export interface CryptoCurrencyHistory {
  timestamp: number;
  value: number;
}

export async function getChartData(
  coinId: string,
  days: number = 30
): Promise<CryptoCurrencyHistory[]> {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?interval=daily&vs_currency=usd&days=${days}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch chart data: ${response.status}`);
    }
    const data = await response.json();
    console.log(">>ChartData", data);
    return data.prices.map((price: [number, number]) => ({
      timestamp: price[0],
      value: price[1],
    }));
  } catch (error) {
    console.error("Error fetching chart data:", error);
    return [];
  }
}