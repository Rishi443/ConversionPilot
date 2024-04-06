import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  field: {
    color: "gray.400",
    fontSize: "14px",
    gap: "6px",
    borderColor: "gray.500",
    borderWidth: "1px",
    bg: "white.A700",
    flexGrow: 1,
    borderRadius: "4px",
  },
});

const sizes = {
  sm: defineStyle({
    field: {
      fontSize: "14px",
      height: "62px",
      px: "12px",
    },
  }),
  xs: defineStyle({
    field: {
      fontSize: "14px",
      px: "11px",
      height: "35px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_100: {
        field: {
          bg: "gray.100",
          color: "gray.400",
        },
      },
      gray_50_01: {
        field: {
          bg: "gray.50_01",
          color: "gray.700",
        },
      },
      white_A700: {
        field: {
          bg: "white.A700",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["white_A700"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Input;
