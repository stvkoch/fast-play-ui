import React, { useContext } from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import getColors from "../../styles/colors";
import { themeContext } from "../../context/theme";
import { useAppStyle } from "../../styles/app";

export function TinyRank({ rank = 0, size = 11, ...props }) {
  const { appStyles } = useAppStyle();
  const [themeName] = useContext(themeContext);
  const colors = getColors(themeName);

  const colorKey = Object.keys(props).find(k => colors[k]) || "darkShades";
  const color = colors[colorKey];

  return (
    <View style={appStyles.tinyRank}>
      {Array(rank)
        .fill()
        .map((_, i) => i)
        .map(key => (
          <AntDesign key={key} size={size} name="star" color={color} />
        ))}
    </View>
  );
}
