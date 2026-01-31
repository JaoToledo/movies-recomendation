import { AUTH_HEADER } from "./auth";

export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export const DEFAULT_OPTIONS = {
  method: 'GET',
  headers: AUTH_HEADER,
  next: { revalidate: 3600 }
}