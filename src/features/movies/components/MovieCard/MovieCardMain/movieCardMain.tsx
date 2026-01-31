"use client"

import { MovieCardMainProps } from "./interfaces"
import { MovieImage } from "./movieImage"
import { MovieTitle } from "./movieTitle"
import { Root } from "./root"

export function MovieCardMain({ movies }: MovieCardMainProps) {

  return (
    <div className="flex flex-nowrap overflow-x-auto gap-10 no-scrollbar  ">
      {movies.map((movie) => (
        <Root
          className="" 
          key={movie.id}>
            <MovieImage 
              src={movie.image}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </Root>
        ))}
      </div>
  )
}