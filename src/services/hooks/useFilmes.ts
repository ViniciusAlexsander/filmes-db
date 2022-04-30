import { axiosMovies, axiosMoviesUrl } from "../api";

export type movie = {
  poster_path: string | null;
  title: string;
  genre_ids: number[];
  id: number;
};

export type GetTopRatedMoviesResponse = {
  movies: movie[];
};

export async function getTopRatedMovies(
  page: number
): Promise<GetTopRatedMoviesResponse> {
  const { data } = await axiosMovies.get(`/movie/top_rated`, {
    params: { page },
  });

  const movies = data.results.map((movie) => {
    return {
      ...movie,
      poster_path: `${axiosMoviesUrl.small}${movie.poster_path}`,
    };
  });

  return { movies };
}
