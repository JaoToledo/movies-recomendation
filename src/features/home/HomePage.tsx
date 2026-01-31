/**
 * @file Componente da página inicial (HomePage).
 *
 * Este componente de servidor (Server Component) é responsável por renderizar a página principal da aplicação.
 * Ele busca os dados de diferentes categorias de filmes (populares, mais votados, etc.) de forma assíncrona
 * e os passa para os componentes de UI responsáveis por exibi-los.
 */

import { CategoryMovieTitle } from "../../shared/components/CategoryMovieTitle/CategoryMovieTitle";
import { MovieCardMain } from "../movies/components/MovieCard/MovieCardMain/movieCardMain";
import { newReleases, popularMovies, topRated } from "./services/movies/getMovies";

/**
 * Componente assíncrono da página inicial.
 *
 * Realiza a busca dos filmes para as seções 'Popular' e 'Top Rated'
 * e renderiza o layout principal da página, incluindo os carrosséis de filmes.
 *
 * @returns {Promise<JSX.Element>} O JSX da página renderizada.
 */
export default async function HomePage(){


  
  return(
    <div className="px-50 py-20 min-h-screen bg-linear-to-b from-linear-black to-linear-gray from-10%">

      <div>
        <CategoryMovieTitle>| POPULAR</CategoryMovieTitle>
        <MovieCardMain movies={popularMovies} />
      </div>
      
      <div className="mt-50">
        <CategoryMovieTitle>| TOP RATED</CategoryMovieTitle>
        <MovieCardMain movies={topRated } />
      </div>
        
      </div>
  );
}