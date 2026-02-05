import { DEFAULT_OPTIONS } from "../config/tmdb";

export async function fetchFromTMDB(path: string, params: Record<string, string> = {}) {
  const queryParams = new URLSearchParams(params);
  const url = `${path}?${queryParams}`;

  const response = await fetch(url, DEFAULT_OPTIONS);

  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.statusText}`);
  }

  return response.json();
}