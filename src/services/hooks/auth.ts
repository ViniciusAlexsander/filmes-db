import { useQuery } from "react-query";
import { axiosMoviesV4 } from "../api";

export type CreateRequestTokenResponse = {
  account_id: string;
  status_message: string;
  request_token: string;
  success: boolean;
  status_code: number;
};

export type CreateAccessTokenResponse = {
  account_id: string;
  status_message: string;
  success: boolean;
  status_code: number;
  access_token: string;
};

export async function createRequestToken(): Promise<CreateRequestTokenResponse> {
  const { data } = await axiosMoviesV4.post(`/auth/request_token`, {
    redirect_to: "http://localhost:3000/movies/watchlist/tradicional",
  });

  return data;
}

export async function createAccessToken(
  request_token: string
): Promise<CreateAccessTokenResponse> {
  const { data } = await axiosMoviesV4.post(`/auth/access_token`, {
    request_token,
  });

  return data;
}

// export function useCreateRequestToken(page: number) {
//   return useQuery(["topRatedMovies", page], () => getTopRatedMovies(page), {
//     staleTime: 1000 * 60 * 10,
//   });
// }
