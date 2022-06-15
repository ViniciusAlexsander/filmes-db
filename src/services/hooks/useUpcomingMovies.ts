import { useQuery, useQueryClient } from "react-query";
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

export async function getUpcomingMovies(
  page: number
): Promise<GetTopRatedMoviesResponse> {
  const { data } = await axiosMovies.get(`/movie/upcoming`, {
    params: { page, region: "BR" },
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

export function useUpcomingMovies(page: number) {
  return useQuery(["upcomingMovies", page], () => getUpcomingMovies(page), {});
}
