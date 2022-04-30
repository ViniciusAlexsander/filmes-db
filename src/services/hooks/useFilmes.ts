import { axiosMovies } from "../api";

export type movie = {
  poster_path: string | null;
  title: string;
  genre_ids: number[];
  id: number;
};

export type GetTopRatedMoviesResponse = {
  results: movie[];
};

export async function getTopRatedMovies(
  page: number
): Promise<GetTopRatedMoviesResponse> {
  const { data } = await axiosMovies.get(`/movie/top_rated`, {
    params: { page },
  });

  return data;
}
