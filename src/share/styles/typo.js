import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import getColors from "../styles/colors";
import { calcSize } from "../styles/utils";
import { themeContext } from "../context/theme";

const WEIGHT_LIGHT = "300";
const WEIGHT_NORMAL = "400";
const WEIGHT_BOLD = "800";
const WEIGHT_XBOLD = "800";

export const FONT_SIZE_TEXT = calcSize(1.6);
export const FONT_SIZE_TINY_TEXT = calcSize(1.3);
export const FONT_SIZE_TITLE = calcSize(2.5);
export const FONT_SIZE_SUBTITLE = calcSize(2);

let typoStyle = null;
let typoThemeName = null;
export function useTypeStyles(theme) {
  const [themeName] = useContext(themeContext);
  const colors = getColors(themeName);

  if (!typoThemeName || (typoThemeName && themeName !== typoThemeName)) {
    // console.log("generating typo style");
    typoThemeName = themeName;
    typoStyle = StyleSheet.create({
      center: {
        textAlign: "center"
      },
      truncate: {
        flex: 1
      },
      text: {
        fontFamily: 'font-normal',
        fontSize: FONT_SIZE_TEXT,
        textAlign: "left",
        color: colors.darkShades
      },
      strongText: {
        fontFamily: 'font-exbold',
        fontSize: FONT_SIZE_TEXT,
        fontWeight: WEIGHT_XBOLD,
        textAlign: "left",
        color: colors.darkShades
      },
      tinyText: {
        fontFamily: 'font-tiny',
        fontSize: FONT_SIZE_TINY_TEXT,
        textAlign: "left",
        color: colors.darkShades
      },
      tinyStrongText: {
        fontFamily: 'font-exbold',
        fontSize: FONT_SIZE_TINY_TEXT,
        letterSpacing: -0.3,
        textAlign: "left",
        color: colors.darkShades
      },
      link: {
        fontFamily: 'font-normal',
        fontSize: FONT_SIZE_TEXT,
        color: colors.darkAccent,
        fontWeight: WEIGHT_NORMAL,
        color: colors.darkShades
      },
      linkIcon: {
        fontFamily: 'font-normal',
        color: colors.darkShades
      },
      title: {
        fontFamily: 'font-exbold',
        fontSize: FONT_SIZE_TITLE,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.darkShades
      },
      exbold: {
        fontFamily: 'font-exbold',
      },
      bold: {
        fontFamily: 'font-bold',
      },
      tiny: {
        fontFamily: 'font-tiny',
      },
      subtitle: {
        fontFamily: 'font-normal',
        fontSize: FONT_SIZE_SUBTITLE,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.darkShades
      },
      lightShades: {
        color: colors.lightShades
      },
      lightAccent: {
        color: colors.lightAccent
      },
      mainBrandColor: {
        color: colors.mainBrandColor
      },
      darkAccent: {
        color: colors.darkAccent
      },
      darkShades: {
        color: colors.darkShades
      },
      defaultColorType: {
        color: colors.darkShades
      }
    });
  }
  return typoStyle;
}
