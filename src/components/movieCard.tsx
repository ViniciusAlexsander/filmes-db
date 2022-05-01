import { Flex, Heading } from "@chakra-ui/react";

interface MovieCardProps {
  title: string;
  poster_path: string;
}

export function MovieCard({ poster_path, title }: MovieCardProps) {
  return (
    <Flex p={5} shadow="md" borderWidth="1px">
      <img src={poster_path}></img>
      <Heading fontSize="md" marginLeft="4">
        {title}
      </Heading>
    </Flex>
  );
}
