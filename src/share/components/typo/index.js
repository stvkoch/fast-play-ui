import React, { useContext } from "react";
import { Text, View, TouchableNativeFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useTypeStyles } from "../../styles/typo";
import { themeContext } from "../../context/theme";
import getColors from "../../styles/colors";
import Section from "../../../share/components/section";

const withWeight = (Component) => ({ tiny, bold, exbold, style, ...props }) => {
  const typeStyles = useTypeStyles();
  const styleTiny = tiny && typeStyles.tiny;
  const styleBold = bold && typeStyles.bold;
  const styleExBold = exbold && typeStyles.exbold;
  return <Component {...props} style={{
    ...styleTiny,
    ...styleBold,
    ...styleExBold,
    ...style,
  }} />;
}

function withTruncate(Component) {
  return ({ truncate, style, ...props }) => {
    const typeStyles = useTypeStyles();
    const opts = truncate ? { numberOfLines: 1 } : {};
    const styles = truncate ? { ...style, ...typeStyles.truncate } : style;
    return <Component {...opts} {...props} style={styles} />;
  };
}

function withColors(Component) {
  return ({
    lightShades,
    lightAccent,
    mainBrandColor,
    darkAccent,
    darkShades,
    style,
    ...props
  }) => {
    const typeStyles = useTypeStyles();
    const stylesColor =
      (lightShades && typeStyles.lightShades) ||
      (lightAccent && typeStyles.lightAccent) ||
      (mainBrandColor && typeStyles.mainBrandColor) ||
      (darkAccent && typeStyles.darkAccent) ||
      (darkShades && typeStyles.darkShades) ||
      typeStyles.defaultColorType;

    const styles = { ...stylesColor, ...style };
    return <Component {...props} style={styles} />;
  };
}

export const Title = withColors(
  withTruncate(function ({ style, center, ...props }) {
    const typeStyles = useTypeStyles();
    const styleCenter = center && typeStyles.center;
    const styles = {
      ...typeStyles.title,
      ...styleCenter,
      ...style
    };

    return <Text {...props} style={styles} />;
  })
);


export const Subtitle = withWeight(
  withColors(
    withTruncate(function ({ style, center, ...props }) {
      const typeStyles = useTypeStyles();
      const styleCenter = center && typeStyles.center;

      return (
        <Text
          {...props}
          style={{
            ...typeStyles.subtitle,
            ...styleCenter,
            ...style
          }}
        />
      );
    })
  )
);

export const Sentence = withWeight(withColors(
  withTruncate(function ({ style, ...props }) {
    const typeStyles = useTypeStyles();
    return (
      <Text
        {...props}
        style={{
          ...style,
          ...typeStyles.text
        }}
      />
    );
  })
));

export const StrongText = withColors(
  withTruncate(function ({ style, ...props }) {
    const typeStyles = useTypeStyles();
    return (
      <Text
        {...props}
        style={{
          ...style,
          ...typeStyles.strongText
        }}
      />
    );
  })
);

export const TinyText = withColors(
  withTruncate(function ({ style, ...props }) {
    const typeStyles = useTypeStyles();
    return (
      <Text
        {...props}
        style={{
          ...style,
          ...typeStyles.tinyText
        }}
      />
    );
  })
);

export const TinyStrongText = withColors(
  withTruncate(function ({ style, ...props }) {
    const typeStyles = useTypeStyles();
    return (
      <Text
        {...props}
        style={{
          ...style,
          ...typeStyles.tinyStrongText
        }}
      />
    );
  })
);
export const Link = withColors(
  withTruncate(function ({ style, onPress, left = false, ...props }) {
    const [themeName] = useContext(themeContext);
    const typeStyles = useTypeStyles();
    const colors = getColors(themeName);
    const right = !left;
    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            ...style
          }}
        >
          {left && (
            <Feather
              color={colors.darkAccent}
              size={20}
              name="chevron-left"
              style={typeStyles.linkIcon}
            />
          )}
          <Text
            {...props}
            style={{
              ...typeStyles.link
            }}
          >
            {props.children}
          </Text>
          {right && (
            <Feather
              color={colors.darkAccent}
              size={20}
              name="chevron-right"
              style={typeStyles.linkIcon}
            />
          )}
        </View>
      </TouchableNativeFeedback>
    );
  })
);
