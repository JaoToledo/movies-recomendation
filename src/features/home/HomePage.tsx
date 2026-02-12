/**
 * @file Componente da página inicial (HomePage).
 *
 * Este componente de servidor (Server Component) é responsável por renderizar a página principal da aplicação.
 * Ele busca os dados de diferentes categorias de filmes (populares, mais votados, etc.) de forma assíncrona
 * e os passa para os componentes de UI responsáveis por exibi-los.
 */

import Link from "next/link";
import { popularMovies } from "../movies/services/moviesEndpoints";
import { MovieCard } from "../movies/components/MovieCard";
import { CategoryMovieTitle } from "@/shared/components/CategoryMovieTitle/CategoryMovieTitle";
import { MovieTitle } from "../movies/components/MovieCard/MovieCardMain/movieTitle";

/**
 * Componente assíncrono da página inicial.
 *
 * Realiza a busca dos filmes a partir dos parâmetros passados
 * e renderiza o layout principal da página.
 *
 * @returns {Promise<JSX.Element>} O JSX da página renderizada.
 */

export default async function HomePage() {
  const movies =  popularMovies;

  return (
    <div className="px-50 py-20 min-h-screen bg-linear-to-b from-linear-black to-linear-gray from-10%">
      
      <section>
        <CategoryMovieTitle>POPULAR</CategoryMovieTitle>

        <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden gap-10 scrollbar-thin scrollbar-thumb-amber-50 scrollbar-track-transparent">
          {movies.map((movie) => (
            <Link
             key={movie.id} 
             href={`/movies/${movie.id}`} 
             className="transition-transform hover:scale-105 shrink-0 ">
              <MovieCard.Root>
                <MovieCard.MovieImage
                  src={movie.image}
                  alt={movie.title}
                />
                <MovieTitle>{movie.title}</MovieTitle>
              </MovieCard.Root>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}