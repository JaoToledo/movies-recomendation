import { TMBD_ENDPOINTS, TSortBy } from "../config/endpoints";
import { IMovieDTO, ITMDBMovie,  } from "../config/interfaces";
import { DEFAULT_OPTIONS, TMDB_IMAGE_BASE_URL } from "../config/tmdb";

export async function listMoviesUsecase(params: { sortBy?: TSortBy} ) { 

  const sortBy = params.sortBy || 'popularity.desc';

  try {

    const url = `${TMBD_ENDPOINTS.DISCOVER}&sort_by=${sortBy}`

    const response = await fetch(url, DEFAULT_OPTIONS);

    if(!response.ok) throw new Error('Erro no TMDB');

    const data = await response.json()
   const results = data.results as ITMDBMovie[];

   return results.map((movie): IMovieDTO => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    image: `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
   }))
  }catch (error) {
    console.error(error)
    return[];
 }
}

  