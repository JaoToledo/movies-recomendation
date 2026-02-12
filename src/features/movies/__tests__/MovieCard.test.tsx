import { MovieCardMain } from "@/features/movies/components/MovieCard/MovieCardMain/movieCardMain";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IMovieDTO } from "@/app/api/movies/useCases/interfaces";
import '@testing-library/jest-dom/vitest';

const mockMovies: IMovieDTO[] = [
  {
    id: 1,
    title: 'Spooder-Man',
    image: '/Spooder-man.jpg',
  },
  {
    id: 2,
    title: 'Shrek 2',
    image: '/Shrek-2.jpg',
  }
]

describe('MovieCardMain component', () => {
  it('It should render the MovieCard component on screen', () => {
    render(<MovieCardMain movies={mockMovies} title="Test Category"/>)

    // Check if the category title is rendered
    const categoryTitle = screen.getByText('Test Category');
    expect(categoryTitle).toBeInTheDocument();

    // Check if the movies title are rendered
    const moviesTitle1 = screen.getByText('Spooder-Man');
    const moviesTitle2 = screen.getByText('Shrek 2');
    expect(moviesTitle1).toBeInTheDocument();
    expect(moviesTitle2).toBeInTheDocument();
  });

  it('Should render without a title', () => {
    render(<MovieCardMain movies={mockMovies}/>);

    // Check if the category title is not in the document
    const categoryTitle = screen.queryByText('Test Category');
    expect(categoryTitle).not.toBeInTheDocument();

    // Check if the movies are still rendered withouth the title
    expect(screen.getByText('Spooder-Man')).toBeInTheDocument();
    expect(screen.getByText('Shrek 2')).toBeInTheDocument();
  })
})