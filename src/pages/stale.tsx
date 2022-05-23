import { Box, Heading, Flex, Spinner, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { MoviesList } from "../components/moviesList";
import { Pagination } from "../components/Pagination";
import { useTopRatedMoviesStale } from "../services/hooks/useFilmes";

export default function ReactQuery() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching, error } = useTopRatedMoviesStale(page);

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
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            color="white"
            backgroundColor="azul"
            onClick={() => {
              queryClient.invalidateQueries("topRatedMoviesStale");
            }}
          >
            Invalidar todo cache
          </Button>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            color="white"
            backgroundColor="azul"
            onClick={() => {
              queryClient.invalidateQueries(["topRatedMoviesStale", page]);
            }}
          >
            Invalidar cache da página atual
          </Button>
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
