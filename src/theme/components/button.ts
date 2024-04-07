import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer" });

const sizes = {
  sm: defineStyle({
    h: "44px",
    fontSize: "16px",
    px: "18px",
  }),
  md: defineStyle({
    h: "76px",
    fontSize: "14px",
    px: "24px",
  }),
  lg: defineStyle({
    h: "84px",
    fontSize: "14px",
    px: "13px",
  }),
  xs: defineStyle({
    h: "36px",
    fontSize: "14px",
    px: "10px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        bg: "white.A700",
        color: "deep_purple.A400",
      },
      gray_50: {
        bg: "gray.50",
        color: "deep_purple.A400",
      },
      deep_purple_A400: {
        bg: "deep_purple.A400",
        color: "white.A700",
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["deep_purple_A400"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Button;
