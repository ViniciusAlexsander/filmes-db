import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MoviesList } from "../components/moviesList";
import { getTopRatedMovies, movie } from "../services/hooks/useFilmes";

export default function Tradicional() {
  const [topRated, setTopRated] = useState<movie[] | undefined>(undefined);

  useEffect(() => {
    const obterTopRated = async () => {
      const response = await getTopRatedMovies(1);
      setTopRated(response.movies);
    };

    obterTopRated();
  }, []);

  return (
    <Box width="100%" height="100vh" my="6" maxWidth={1480} mx="auto" px="6">
      <Heading my="10">Listagem tradicional</Heading>
      <MoviesList movies={topRated} />
    </Box>
  );
}
