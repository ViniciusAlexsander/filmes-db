import axios from "axios";

export const axiosMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY,
    language: "pt-BR",
  },
});
