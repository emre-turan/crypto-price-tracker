"use server";

export async function fetchCryptoPrices() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.CG_API_KEY || "",
    },
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    return null;
  }
}
