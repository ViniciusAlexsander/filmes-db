import { Box, Heading, Flex, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MoviesList } from "../components/moviesList";
import { Pagination } from "../components/Pagination";
import { useTopRatedMovies } from "../services/hooks/useFilmes";

export default function ReactQuery() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useTopRatedMovies(page);

  return (
    <Box width="100%" height="100vh" my="6" maxWidth={1480} mx="auto" px="6">
      <Heading my="10"> Listagem com react query</Heading>
      {isLoading ? (
        <Flex justify="center">
          <Spinner />
        </Flex>
      ) : error ? (
        <Flex justify="center">
          <Text>Falha</Text>
        </Flex>
      ) : (
        <Box>
          <MoviesList movies={data.movies} />
          <Flex p="10" justifyContent="center">
            <Pagination
              totalCountOfRegisters={data.totalResults}
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
