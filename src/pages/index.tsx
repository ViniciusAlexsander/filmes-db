import NextLink from "next/link";
import { Flex, Heading, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      width="100%"
      height="100vh"
      my="6"
      maxWidth={1480}
      mx="auto"
      px="6"
      alignItems="center"
      flexDirection="column"
    >
      <Heading marginTop="20">Filmes DB</Heading>
      <Flex
        marginTop="20"
        width="60%"
        alignItems="center"
        justifyContent="space-between"
      >
        <NextLink href="/tradicional" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            color="white"
            backgroundColor="azul"
          >
            Listagem tradicional
          </Button>
        </NextLink>
        <NextLink href="/stale" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            color="white"
            backgroundColor="azul"
          >
            Listagem com react query
          </Button>
        </NextLink>
        <NextLink href="/react-query" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            color="white"
            backgroundColor="azul"
          >
            Listagem com react query e pagination
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  );
}
