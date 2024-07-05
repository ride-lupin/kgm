import { ThemeColors, vars } from "../assets/styles/theme.css";

export const isThemeColor = (colorName: string): colorName is ThemeColors => {
  return colorName in vars.colors;
};
