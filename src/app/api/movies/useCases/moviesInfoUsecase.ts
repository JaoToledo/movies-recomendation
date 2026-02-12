import { TMBD_ENDPOINTS, TSortBy } from "../../config/endpoints";
import { IMovieDTO, ITMDBMovie,  } from "./interfaces";
import { TMDB_IMAGE_BASE_URL } from "../../config/tmdb";
import { fetchFromTMDB } from "../../utils/api";
import { errorHandler } from "../../errors/errorHandler";

export async function MoviesInfoUsecase(params: { sortBy: TSortBy} ) { 

  try {
    const data = await fetchFromTMDB(TMBD_ENDPOINTS.DISCOVER, {
      sort_by: params.sortBy, 
    });
    
    const results = data.results as ITMDBMovie[];

    return results.map((movie): IMovieDTO => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      image: `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
    }))
  }catch (error) {
    errorHandler(error)
    return[];
 }
}
  