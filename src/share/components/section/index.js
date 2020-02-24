import React from "react";
import { View } from "react-native";

import { useAppStyle } from "../../styles/app";

export default function Section({ row, center, style, ...props }) {
  const { appStyles } = useAppStyle();

  const styles = row ? appStyles.sectionRow : appStyles.section;
  const centerStyles = center ? appStyles.sectionRow : appStyles.section;

  return <View style={{ ...styles, ...centerStyles, ...style }} {...props} />;
}

export function Space({ style, tiny, ...props }) {
  const { appStyles } = useAppStyle();
  const styles = tiny ? appStyles.spaceTiny : appStyles.space;
  return <View style={{ ...styles, ...style }} {...props} />;
}

export function Container({ style, center, ...props }) {
  const { appStyles } = useAppStyle();
  const styleCenter = center ? appStyles.containerCenter : {};

  return (
    <View
      style={{ ...appStyles.container, ...styleCenter, ...style }}
      // contentContainerStyle={{ marginTop: -80 }}
      {...props}
    />
  );
}
