import { TSortBy } from "./endpoints";

export interface ITMDBMovie {
  id: number;
  title: string;
  poster_path: string;
  overview?: string;
}

export interface IMovieDTO {
  id: number;
  title: string;
  image: string;
  overview?: string;
}