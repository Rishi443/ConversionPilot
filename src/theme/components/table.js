import { defineStyle, createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { tableAnatomy as parts } from "@chakra-ui/anatomy";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = defineStyle({
  thead: {
    th: {
      p: "inherit",
    },
  },
});

const sizes = {
  xs: defineStyle({
    tbody: {
      tr: {
        td: {
          p: "12px",
        },
      },
    },
  }),
};

const Table = defineMultiStyleConfig({
  baseStyle,
  sizes,

  defaultProps: {},
});
export default Table;
