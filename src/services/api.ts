import axios from "axios";

export const axiosMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY,
    language: "pt-BR",
  },
});

export const axiosMoviesUrl = {
  small: "https://image.tmdb.org/t/p/w185",
  medium: "https://image.tmdb.org/t/p/w300",
  large: "https://image.tmdb.org/t/p/w1280",
  original: "https://image.tmdb.org/t/p/original",
};
