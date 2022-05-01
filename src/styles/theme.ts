import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    azul: "#22445B",
    cinza: "#EDECEB",
    azulEscuro: "#1A232D",
  },
  fonts: {
    body: "Roboto Mono",
    heading: "Roboto Mono",
  },
  styles: {
    global: {
      body: {
        bg: "cinza",
        color: "azulEscuro",
      },
    },
  },
});
