const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function fetchQuotes() {
  const res = await fetch(`${API_BASE_URL}/quotes`);
  if (!res.ok) throw new Error("Failed to fetch quotes");
  return res.json();
}
