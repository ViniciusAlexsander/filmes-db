import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MoviesList } from "../../../components/moviesList";
import { Pagination } from "../../../components/Pagination";
import { getTopRatedMovies, movie } from "../../../services/hooks/useFilmes";

export default function Tradicional() {
  const [page, setPage] = useState(1);
  const [topRated, setTopRated] = useState<movie[] | undefined>(undefined);
  const [totalResults, setTotalResults] = useState<number | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const obterTopRated = async () => {
      setIsLoading(true);
      const response = await getTopRatedMovies(page);
      setTopRated(response.movies);
      setTotalResults(response.totalResults);
      setIsLoading(false);
    };
    obterTopRated();
  }, [page]);

  return (
    <Box width="100%" height="100vh" my="6" maxWidth={1480} mx="auto" px="6">
      <Heading my="10">Listagem tradicional</Heading>

      {isLoading ? (
        <Flex justify="center">
          <Spinner />
        </Flex>
      ) : (
        <Box>
          <MoviesList movies={topRated} />
          <Flex p="10" justifyContent="center">
            <Pagination
              totalCountOfRegisters={totalResults}
              registersPerPage={20}
              currentPage={page}
              onPageChange={setPage}
            />
          </Flex>
        </Box>
      )}
    </Box>
  );
}
