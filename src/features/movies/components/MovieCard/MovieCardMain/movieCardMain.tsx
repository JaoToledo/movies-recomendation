"use client"

import { CategoryMovieTitle } from "@/shared/components/CategoryMovieTitle/CategoryMovieTitle"
import { MovieCardMainProps } from "./interfaces"
import { MovieImage } from "./movieImage"
import { MovieTitle } from "./movieTitle"
import { Root } from "./root"

export function MovieCardMain({ movies, title }: MovieCardMainProps) {

  return (
    <div data-testid="movie-card-main">
      {title && <CategoryMovieTitle>{title}</CategoryMovieTitle>}
      <div className="flex flex-nowrap overflow-x-auto gap-10  scrollbar scrollbar-thumb-gray-50 scrollbar-track-transparent "
      >
        {movies.map((movie) => (
            <Root key={movie.id}>
              <MovieImage
                src={movie.image}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </Root>          
        ))}
      </div>
    </div>
  )
}