import { useQuery } from "react-query";
import { axiosMoviesV4, axiosMoviesUrl } from "../api";

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

export async function getMovieWatchlist(
  account_id: string,
  page: number
): Promise<GetTopRatedMoviesResponse> {
  const { data } = await axiosMoviesV4.get(
    `/account/${account_id}/movie/watchlist`,
    {
      params: { page },
    }
  );

  const movies = data.results.map((movie) => {
    return {
      ...movie,
      poster_path: `${axiosMoviesUrl.small}${movie.poster_path}`,
    };
  });

  console.log(movies);

  return { movies, totalResults: data.total_results };
}

export function useMovieWatchlist(account_id: string, page: number) {
  return useQuery(
    ["movieWatchlist", page],
    () => getMovieWatchlist(account_id, page),
    {
      staleTime: 1000 * 60 * 10,
    }
  );
}
