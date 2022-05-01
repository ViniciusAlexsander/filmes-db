import { Flex, Heading, Box, Text, Image } from "@chakra-ui/react";
import { movie } from "../services/hooks/useFilmes";

interface MovieCardProps {
  movie: movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Flex p={5} shadow="md" borderWidth="1px">
      <Box>
        <Image
          alt={"poster do filme" + movie.title}
          src={movie.poster_path}
          width="400px"
          height="200px"
        />
        <Text fontSize="small" marginTop="1">
          {movie.release_date}
        </Text>
        <Text fontSize="small">Nota: {movie.vote_average}</Text>
      </Box>
      <Box marginLeft="4" maxWidth="50%">
        <Heading fontSize="md">{movie.title}</Heading>
        <Heading fontSize="x-small" marginTop="1">
          - {movie.original_title}
        </Heading>
        <Text fontSize="xx-small">{movie.overview}</Text>
      </Box>
    </Flex>
  );
}
