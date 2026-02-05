import { describe, it, expect, vi } from 'vitest';
import { MoviesInfoUsecase } from './moviesInfoUsecase';
import { fetchFromTMDB } from '../../utils/api';
import { errorHandler } from '../../errors/errorHandler';
import { TMBD_ENDPOINTS } from '../../config/endpoints';
import { TMDB_IMAGE_BASE_URL } from '../../config/tmdb';

vi.mock('../../utils/api');
vi.mock('../../errors/errorHandler');

describe('MoviesInfoUsecase', () => {
  it('should return mapped movie data on successful fetch', async () => {
    const mockMoviesData = {
      results: [
        { id: 1, title: 'Movie 1', overview: 'Overview 1', poster_path: '/path1.jpg' },
        { id: 2, title: 'Movie 2', overview: 'Overview 2', poster_path: '/path2.jpg' },
      ],
    };
    const expectedMovies = [
      { id: 1, title: 'Movie 1', overview: 'Overview 1', image: `${TMDB_IMAGE_BASE_URL}/path1.jpg` },
      { id: 2, title: 'Movie 2', overview: 'Overview 2', image: `${TMDB_IMAGE_BASE_URL}/path2.jpg` },
    ];

    vi.mocked(fetchFromTMDB).mockResolvedValue(mockMoviesData);

    const result = await MoviesInfoUsecase({ sortBy: 'popularity.desc' });

    expect(fetchFromTMDB).toHaveBeenCalledWith(TMBD_ENDPOINTS.DISCOVER, {
      sort_by: 'popularity.desc',
    });
    expect(result).toEqual(expectedMovies);
    expect(errorHandler).not.toHaveBeenCalled();
  });

  it('should call errorHandler and return an empty array on fetch error', async () => {
    const mockError = new Error('Fetch failed');
    vi.mocked(fetchFromTMDB).mockRejectedValue(mockError);

    const result = await MoviesInfoUsecase({ sortBy: 'popularity.desc' });

    expect(fetchFromTMDB).toHaveBeenCalledWith(TMBD_ENDPOINTS.DISCOVER, {
      sort_by: 'popularity.desc',
    });
    expect(errorHandler).toHaveBeenCalledWith(mockError);
    expect(result).toEqual([]);
  });
});
