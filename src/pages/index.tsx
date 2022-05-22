import NextLink from "next/link";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { setCookie } from "nookies";

import { createRequestToken, createAccessToken } from "../services/hooks/auth";

export default function Home() {
  const handleCreateToken = async () => {
    const { request_token } = await createRequestToken();
    localStorage.setItem("request_token", request_token);
    window.location.href = `https://www.themoviedb.org/auth/access?request_token=${request_token}`;
  };

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
        <Button
          as="a"
          size="sm"
          fontSize="sm"
          color="white"
          backgroundColor="azul"
          onClick={handleCreateToken}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
}
