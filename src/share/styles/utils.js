import { Dimensions } from "react-native";
import Color from "color";

const COEFFICIENT = 8;

export function calcSize(size) {
  return size * COEFFICIENT;
}

/*
8
16
32
40
48
*/
export const { width, height } = Dimensions.get("window");
export const vw = width / 100;
export const vh = height / 100;
export const vmin = Math.min(vw, vh);
export const vmax = Math.max(vw, vh);

export const getColors = (color, selected = false) => {
  if (selected) {
    return {
      text: Color(color)
        .lighten(0.5)
        .hsl()
        .string(),
      bck: Color(color)
        .darken(0.3)
        .hsl()
        .string(),
      border: color
    };
  }
  return {
    text: Color(color)
      .darken(0.3)
      .hsl()
      .string(),
    bck: Color(color)
      .lighten(0.5)
      .hsl()
      .string(),
    border: color
  };
};