import { Text, Heading, Table, Button, Input } from "./components";
import { colors, shadows, fonts } from "./foundations";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors,
  shadows,
  fonts,
  components: { Text, Heading, Table, Button, Input },
});
export default theme;
