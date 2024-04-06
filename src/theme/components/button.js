import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer" });

const sizes = {
  xl: defineStyle({
    h: "52px",
    fontSize: "14px",
    px: "35px",
  }),
  xs: defineStyle({
    h: "24px",
    fontSize: "11px",
    px: "8px",
  }),
  sm: defineStyle({
    h: "30px",
    fontSize: "11px",
    px: "7px",
  }),
  lg: defineStyle({
    h: "44px",
    fontSize: "16px",
    px: "18px",
  }),
  "2xl": defineStyle({
    h: "76px",
    fontSize: "14px",
    px: "24px",
  }),
  "3xl": defineStyle({
    h: "84px",
    fontSize: "14px",
    px: "24px",
  }),
  md: defineStyle({
    h: "36px",
    fontSize: "14px",
    px: "13px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_50_02: {
        bg: "gray.50_02",
        color: "light_blue.500",
      },
      red_50: {
        bg: "red.50",
        color: "red.600",
      },
      white_A700: {
        bg: "white.A700",
        color: "deep_purple.A400",
      },
      gray_100_01: {
        bg: "gray.100_01",
        color: "deep_purple.A400",
      },
      gray_50_01: {
        bg: "gray.50_01",
        color: "deep_purple.A400",
      },
      deep_purple_A400: {
        bg: "deep_purple.A400",
        color: "white.A700",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["deep_purple_A400"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "md",
  },
});
export default Button;
