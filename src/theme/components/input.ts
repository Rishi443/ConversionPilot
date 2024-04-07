import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ field: { borderColor: "gray.500", borderWidth: "1px", borderRadius: "4px" } });

const sizes = {
  md: defineStyle({
    field: {
      fontSize: "16px",
      px: "15px",
      height: "43px",
    },
  }),
  sm: defineStyle({
    field: {
      fontSize: "14px",
      height: "35px",
      px: "12px",
    },
  }),
  xs: defineStyle({
    field: {
      fontSize: "18px",
      height: "34px",
      px: "20px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        field: {
          bg: "white.A700",
        },
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["white_A700"];
  }),
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_500: {
        field: {
          borderColor: "gray.500",
          borderWidth: "1px",
          borderStyle: "solid",
          color: "gray.900_01",
        },
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["gray_500"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "outline",
    size: "md",
  },
});
export default Input;
