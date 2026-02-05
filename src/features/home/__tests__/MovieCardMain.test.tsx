import { MovieCardMain } from "@/features/movies/components/MovieCard/MovieCardMain/movieCardMain";
import { popularMovies } from "@/features/movies/services/moviesEndpoints";
import { render, screen } from "@testing-library/react";

describe('MovieCardMain component', () => {
  it('Should render the MovieCardMain component on screen', () => {
    render(<MovieCardMain movies={popularMovies}/>);

    const movieCardMain = screen.getByTestId('movie-main-card');
    expect(movieCardMain).toBeInTheDocument();
  });
})