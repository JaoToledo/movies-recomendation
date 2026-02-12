const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const TMBD_ENDPOINTS = {
  
  DISCOVER: `${TMDB_BASE_URL}//discover/movie?language=pt-BR&sort_by=popularity.desc`
}

 // values for the sort_by parameter
export type TSortBy = 
  
  | 'top_rated.desc'
  | 'popularity.desc'