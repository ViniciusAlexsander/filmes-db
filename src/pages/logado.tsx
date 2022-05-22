import NextLink from "next/link";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { createAccessToken } from "../services/hooks/auth";
import { parseCookies } from "nookies";

export default function Home() {
  const handleCreateToken = async () => {
    const request_token = localStorage.getItem("request_token");
    const accessToken = await createAccessToken(request_token);
    console.log(accessToken);
  };

  useEffect(() => {
    handleCreateToken();
  }, []);

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
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
}
