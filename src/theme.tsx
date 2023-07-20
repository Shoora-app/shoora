import { extendTheme } from "@chakra-ui/react";

const colors = {
  colors: {
    primary: {
      100: "#FFFAF0",
      200: "FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      900: "#652B19"
    },
  },
};

export const theme = extendTheme({
  fonts: {
    html: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  ...colors,
});
