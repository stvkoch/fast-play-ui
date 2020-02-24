import React from "react";
import { View } from "react-native";

import { useAppStyle } from "../../styles/app";

export default function Divisor({ children }) {
  const { appStyles } = useAppStyle();
  return <View style={appStyles.divisor} />;
}
