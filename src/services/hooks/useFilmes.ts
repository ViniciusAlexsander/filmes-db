import { useQuery } from "react-query";
import { axiosMovies, axiosMoviesUrl } from "../api";

export type movie = {
  poster_path: string | null;
  title: string;
  genre_ids: number[];
  id: number;
  release_date: string;
  original_title: string;
  vote_average: number;
  overview: string;
};

export type GetTopRatedMoviesResponse = {
  movies: movie[];
  totalResults: number;
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

  console.log(movies);

  return { movies, totalResults: data.total_results };
}

export function useTopRatedMovies(page: number) {
  return useQuery(["topRatedMovies", page], () => getTopRatedMovies(page), {
    staleTime: 1000 * 60 * 10,
  });
}
