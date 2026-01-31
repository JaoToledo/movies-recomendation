export const TMDB_TOKEN = process.env.TMDB_ACCESS_TOKEN

export const AUTH_HEADER = {
  accept: 'application/json',
  Authorization: `Bearer ${TMDB_TOKEN}`
}