import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    azul: "#22445B",
    cinza: "#EDECEB",
    bege: "#C9A37F",
    azulEscuro: "#1A232D",
  },
  fonts: {
    body: "Montserrat",
    heading: "Montserrat",
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
