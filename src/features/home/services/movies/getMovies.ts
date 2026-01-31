import { TSortBy } from "@/app/api/movies/config/endpoints";
import { listMoviesUsecase } from "@/app/api/movies/useCases/listMoviesUsecase";

export async function getMovies(sortBy?: TSortBy){
  
  return await listMoviesUsecase({ sortBy });
}

export const popularMovies = await getMovies('popularity.desc');
export const newReleases = await getMovies('primary_release_date.desc');
export const topRated = await getMovies('vote_average.desc');
