import React, { useContext } from "react";
import Color from "color";
import { themeContext } from "../context/theme";

// import { getTheme } from "share/context/theme";
// http://colormind.io/bootstrap/#

const defaultTheme = {
  /*
    Light shades
    Use this color as the background for your dark-on-light designs,
    or the text color of an inverted design.
    */
  lightShades: "#FBFBFA",
  /*
    Light accent
    Accent colors can be used to bring attention to design elements by contrasting
    with the rest of the palette.
    */
  lightAccent: "#A1DBC1",
  /*76[87p]
    Main brand color
    This color should be eye-catching but not harsh.
    It can be liberally applied to your layout as its main identity.
    */
  mainBrandColor: "#9EC6C8",
  /*
    Dark accent
    Another accent color to consider. Not all colors have to be used - 
    sometimes a simple color scheme works best.
    */
  darkAccent: "#636363",
  /*
    Dark shades
    Use as the text color for dark-on-light designs, or as the background for inverted designs.
    */
  darkShades: "#383838",

  default: "#999999",
  negative: "#fff"
};

// export const newSchema = {
//   backgroundTopbar: defaultTheme.mainBrandColor,
//   textTopbar: "#FFF",
//   backgroundContainer: defaultTheme.lightShades,
//   textContainer: defaultTheme.darkShades,
//   borderContainer: defaultTheme.darkShades,
//   backgroundInfo: "#4b9be1",
//   textInfo: "#FFF",
//   backgroundWarning: "#fd8009",
//   textWarning: "#FFF",
//   backgroundError: "#ff2c2c",
//   textError: "#FFF",
//   backgroundSuccess: "#3bc74a",
//   textSuccess: "#FFF",
//   backgroundDefault: defaultTheme.mainBrandColor,
//   textDefault: "#FFF"
// };

const Desert = {
  ...defaultTheme,
  lightShades: "#F9F9F8",
  lightAccent: "#A09D9E",
  mainBrandColor: "#C06441",
  darkAccent: "#8F784C",
  darkShades: "#272025"
};

const Porcelain = {
  ...defaultTheme,
  lightShades: "#FCFAFA",
  lightAccent: "#C0DFD2",
  mainBrandColor: "#B4CED2",
  darkAccent: "#8C8CA0",
  darkShades: "#408BB9"
};

const Alabaster = {
  ...defaultTheme,
  lightShades: "#FAFAFA",
  lightAccent: "#F2C21E",
  mainBrandColor: "#8ABBDA",
  darkAccent: "#DE4F84",
  darkShades: "#4C5E9E"
};

const Wewak = {
  ...defaultTheme,
  lightShades: "#F2FAFA",
  lightAccent: "#EEC4C4",
  mainBrandColor: "#FAB2BC",
  darkAccent: "#F096A1",
  darkShades: "#EF4F65"
};

const Edward = {
  ...defaultTheme,
  lightShades: "#F4F6F7",
  lightAccent: "#9FA6A7",
  mainBrandColor: "#B2A586",
  darkAccent: "#95898A",
  darkShades: "#4C6170"
};

const Dark = {
  ...defaultTheme,
  lightShades: "#2B3340",
  lightAccent: "#36445a",
  mainBrandColor: "#31a3e3",
  darkAccent: "#eeeeee",
  darkShades: "#eeeeee"
};

export const themes = {
  defaultTheme,
  Desert,
  Porcelain,
  Alabaster,
  Wewak,
  Edward,
  Dark
};
export const themesNames = Object.keys(themes);




export default function getColors(name) {
  const [themeName] = useContext(themeContext);
  const colorSchema = themes[name || themeName];

  const darkText =
    colorSchema.darkShades ||
    Color(colorSchema.darkShades)
      .darken(0.5)
      .hsl()
      .string();
  const darkInfo = Color(colorSchema.darkShades)
    .darken(0.2)
    .hsl()
    .string();

  const newSchema = {
    backgroundTopbar: colorSchema.mainBrandColor,
    textTopbar: colorSchema.textTopbar || "#FFF",
    backgroundContainer: colorSchema.lightShades,
    textContainer: colorSchema.darkShades,
    borderContainer: colorSchema.darkShades,
    backgroundInfo: colorSchema.backgroundInfo || "#4b9be1",
    textInfo: colorSchema.textInfo || "#FFF",
    backgroundWarning: colorSchema.backgroundWarning || "#fd8009",
    textWarning: colorSchema.textWarning || "#FFF",
    backgroundError: colorSchema.backgroundError || "#ff2c2c",
    textError: colorSchema.textError || "#FFF",
    backgroundSuccess: colorSchema.backgroundSuccess || "#3bc74a",
    textSuccess: colorSchema.textSuccess || "#FFF",
    backgroundDefault: colorSchema.mainBrandColor,
    textDefault: colorSchema.textDefault || "#FFF",
    backgroundAvatar: "#c9c9c9",
    textAvatar: "#FFF"
  };

  return {
    primary: colorSchema.mainBrandColor,
    info: darkInfo,
    success: "#3cdf05",
    warning: "#f27f00",
    danger: "#f41c0c",
    default: colorSchema.default,
    textColor: darkText,
    ...colorSchema,
    ...newSchema
  };
}
