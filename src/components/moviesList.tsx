import { Box, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import { getTopRatedMovies, movie } from "../services/hooks/useFilmes";
import { MovieCard } from "./movieCard";

interface MoviesListProps {
  movies: movie[];
}

export function MoviesList({ movies }: MoviesListProps) {
  return (
    <SimpleGrid minChildWidth="300px" spacing="8">
      {movies &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </SimpleGrid>
  );
}
