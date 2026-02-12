import { TSortBy } from "@/app/api/config/endpoints";
import { MoviesInfoUsecase } from "@/app/api/movies/useCases/moviesInfoUsecase";

export async function getMovies(sortBy: TSortBy){
  
  return await MoviesInfoUsecase({ sortBy });
}
