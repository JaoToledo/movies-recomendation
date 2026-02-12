import { getMovies } from "./getMovies";

export const popularMovies = await getMovies('popularity.desc');
