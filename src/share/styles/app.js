import React, { useContext } from "react";
import Constants from "expo-constants";
import { StyleSheet, Platform } from "react-native";
import getColors from "../styles/colors";
import { calcSize } from "../styles/utils";
import { vw, vh, width, height } from "../styles/utils";
import { themeContext } from "../context/theme";
import {
  FONT_SIZE_TEXT,
  FONT_SIZE_TINY_TEXT,
  FONT_SIZE_TITLE,
  FONT_SIZE_SUBTITLE
} from "../styles/typo";

export const PADDING_HORIZONTAL = 22;

let appStyles = null;
let appThemeName = null;

export function useAppStyle(theme) {
  const [themeName] = useContext(themeContext);
  const colors = getColors(theme || themeName);

  if (!appThemeName || (appThemeName && themeName !== appThemeName)) {
    appThemeName = themeName;
    appStyles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.lightShades,
        minHeight: height,
        minWidth: width
      },
      containerCenter: {
        alignItems: "center",
        flex: 1
      },
      // --- show scheme and guide style
      schemeColorContainer: {
        borderWidth: StyleSheet.hairlineWidth
      },
      lightShades: {
        backgroundColor: colors.lightShades,
        flex: 1,
        height: 10 * vh
      },
      lightAccent: {
        backgroundColor: colors.lightAccent,
        flex: 1,
        height: 10 * vh
      },
      mainBrandColor: {
        backgroundColor: colors.mainBrandColor,
        flex: 1,
        height: 10 * vh
      },
      darkAccent: {
        backgroundColor: colors.darkAccent,
        flex: 1,
        height: 10 * vh
      },
      darkShades: {
        backgroundColor: colors.darkShades,
        flex: 1,
        height: 10 * vh
      },
      //--- section ---
      spaceTiny: {
        marginVertical: PADDING_HORIZONTAL / 2,
        marginHorizontal: PADDING_HORIZONTAL / 2
      },
      space: {
        marginVertical: PADDING_HORIZONTAL,
        marginHorizontal: PADDING_HORIZONTAL
      },
      section: {
        // flex: 1,
        marginVertical: PADDING_HORIZONTAL,
        marginHorizontal: PADDING_HORIZONTAL
        // width: "auto"
        // flexDirection: "column",
        // justifyContent: "flex-start",
        // flexWrap: "nowrap"
      },
      sectionRow: {
        display: "flex",
        flex: 1,
        marginVertical: PADDING_HORIZONTAL,
        marginHorizontal: PADDING_HORIZONTAL,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
      },
      sectionCenter: {
        justifyContent: "center"
      },
      //--- divisor ---
      divisor: {
        borderStyle: "solid",
        borderBottomColor: colors.darkAccent,
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: "100%"
      },
      //--- card ---
      cardColumnTextContent: {
        // width: ((100 * vw) / 3) * 2 - 30,
        // paddingLeft: PADDING_HORIZONTAL,
        flex: 2
      },
      CardColumnImage: {
        flex: 1
      },
      card: {
        width: 100 * vw - 44,
        borderRadius: 3,
        marginVertical: 30,
        alignItems: "stretch"
      },
      cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
      },
      cardHalf: {
        width: 50 * vw - 30,
        marginVertical: PADDING_HORIZONTAL
      },
      cardHorizontal: {
        flexDirection: "row"
      },
      cardImageContainer: {},
      cardImage: {
        borderRadius: 3,
        width: 100 * vw - 44,
        height: 70 * vw
      },
      cardImageHalf: {
        width: 50 * vw - 30,
        height: 30 * vw
      },
      cardImageHorizontal: {
        width: (100 * vw) / 3 - 30,
        height: ((100 * vw) / 3) * 0.7
      },

      cardImageFlatBorderBottom: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      cardRowMargin: { marginBottom: 7 },
      cardRowPadding: {
        paddingVertical: 12,
        paddingHorizontal: 16
      },
      cardPadding: {
        padding: 16
      },
      cardFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "auto"
      },
      //--- buttons ---
      opacityTouchable: {
        backgroundColor: colors.lightShades
      },
      defaultButton: {
        backgroundColor: colors.default,
        borderRadius: 3,
        padding: 10
      },
      disabledButton: {
        opacity: 0.5
      },
      primaryButton: {
        backgroundColor: colors.primary
      },
      infoButton: {
        backgroundColor: colors.info
      },
      successButton: {
        backgroundColor: colors.success
      },
      warningButton: {
        backgroundColor: colors.warning
      },
      dangerButton: {
        backgroundColor: colors.danger
      },

      defaultTextButton: {
        textAlign: "center",
        color: colors.negative,
        textTransform: "uppercase"
      },
      primaryTextButton: {},
      infoTextButton: {},
      successTextButton: {},
      warningTextButton: {},
      dangerTextButton: {},

      lightShadesBackground: {
        backgroundColor: colors.lightShades
      },
      lightAccentBackground: {
        backgroundColor: colors.lightAccent
      },
      mainBrandColorBackground: {
        backgroundColor: colors.mainBrandColor
      },
      darkAccentBackground: {
        backgroundColor: colors.darkAccent
      },
      darkShadesBackground: {
        backgroundColor: colors.darkShades
      },
      defaultColorBackground: {
        backgroundColor: colors.lightShades
      },
      // --- ranks ---
      tinyRank: {
        flexDirection: "row",
        justifyContent: "flex-start"
      },
      //--- forms ---
      input: {
        borderBottomColor: colors.lightAccent,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderStyle: "dotted",
        fontSize: FONT_SIZE_TEXT,
        color: colors.darkShades
      },
      inputIcon: {
        position: "absolute",
        right: 1,
        top: 18
      },
      inputLabel: {
        opacity: 0.8,
        fontSize: FONT_SIZE_TINY_TEXT,
        color: colors.darkShades
      },
      inputLabelSuccess: {
        color: colors.success
      },
      inputLabelError: {
        fontSize: FONT_SIZE_TINY_TEXT,
        color: colors.danger
      },
      picker: {
        fontSize: FONT_SIZE_TEXT,
        color: colors.darkShades
      },
      pickerContainer: {
        borderBottomColor: colors.lightAccent,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderStyle: "dotted"
      },
      //--- topBar ---
      topBarTitle: {
        width,
        marginTop: 3,
        marginBottom: 10,
        color: colors.darkAccent
      },
      topBarContainer: {
        backgroundColor: colors.lightAccent,
        paddingTop: Constants.statusBarHeight + 5,
        paddingBottom: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
      },
      topBarPadding: {
        paddingHorizontal: PADDING_HORIZONTAL
      },
      topBarRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 15
      },
      topBarSearch: {
        width
      },
      topBarSearchInput: {
        backgroundColor: colors.lightShades,
        padding: 12,
        width: width - (60 + PADDING_HORIZONTAL),
        color: colors.darkShades
      },
      // tag
      tagContainer: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ccc',
        marginHorizontal: 3,
        marginVertical: 5,
        flexDirection: 'row',
        // alignContent: 'center',
        // justifyContent: 'center',
      },
      tagIcon: {
        marginLeft: 5,
        alignSelf: 'center'
      }
    });
  }
  return { appStyles, colors };
}
