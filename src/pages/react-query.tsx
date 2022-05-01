import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MoviesList } from "../components/moviesList";
import { useTopRatedMovies } from "../services/hooks/useFilmes";

export default function ReactQuery() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useTopRatedMovies(page);

  return (
    <Box width="100%" height="100vh" my="6" maxWidth={1480} mx="auto" px="6">
      <Heading my="10"> Listagem com react query</Heading>
      {data && <MoviesList movies={data.movies} />}
    </Box>
  );
}
