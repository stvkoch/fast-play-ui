import React from "react";
import { View, Image } from "react-native";
import flow from "lodash.flow";

import { useAppStyle } from "../../styles/app";

function withAppStyle(Component) {
  return props => {
    const { appStyles } = useAppStyle();
    return <Component appStyles={appStyles} {...props} />;
  };
}

function withBackground(Component) {
  return ({
    lightShades,
    lightAccent,
    mainBrandColor,
    darkAccent,
    darkShades,
    style,
    ...props
  }) => {
    const { appStyles } = useAppStyle();

    const stylesColor =
      (lightShades && appStyles.lightShadesBackground) ||
      (lightAccent && appStyles.lightAccentBackground) ||
      (mainBrandColor && appStyles.mainBrandColorBackground) ||
      (darkAccent && appStyles.darkAccentBackground) ||
      (darkShades && appStyles.darkShadesBackground) ||
      appStyles.defaultColorBackground;

    const styles = { ...style, ...stylesColor };
    return <Component {...props} style={styles} />;
  };
}
const withRule = propName => styleName => Component => {
  return ({ style, ...props }) => {
    const { appStyles } = useAppStyle();

    const styles = {
      ...(props[propName] && appStyles[styleName]),
      ...style
    };
    return <Component style={styles} {...props} />;
  };
};

const withHalf = withRule("half");
const withShadow = withRule("shadow")("cardShadow");
const withHorizontal = withRule("horizontal");
const withFlatBorderBottom = withRule("flatBottom")(
  "cardImageFlatBorderBottom"
);

export const Card = flow(
  withHalf("cardHalf"),
  withHorizontal("cardHorizontal"),
  withShadow,
  withBackground
)(function({ style, children }) {
  const { appStyles } = useAppStyle();

  return <View style={{ ...appStyles.card, ...style }}>{children}</View>;
});

export const CardImage = flow(
  withHalf("cardImageHalf"),
  withHorizontal("cardImageHorizontal"),
  withFlatBorderBottom
)(({ flatBottom, style, image }) => {
  const { appStyles } = useAppStyle();

  const styles = {
    ...appStyles.cardImage,
    ...style
  };

  return (
    <View style={appStyles.cardImageContainer}>
      <Image resizeMode="cover" style={styles} source={image} />
    </View>
  );
});

export function CardDescription({ style, padding, children }) {
  const { appStyles } = useAppStyle();

  const styles = {
    ...appStyles.cardDescription,
    ...(padding && appStyles.cardPadding),
    ...style
  };

  return <View style={styles}>{children}</View>;
}
export function CardFooter({ style, padding, children }) {
  const { appStyles } = useAppStyle();

  const styles = {
    ...appStyles.cardFooter,
    ...(padding && appStyles.cardPadding),
    ...style
  };
  return <View style={styles}>{children}</View>;
}

export function CardRow({ style, margin, padding, children }) {
  const { appStyles } = useAppStyle();

  const styles = {
    ...(margin && appStyles.cardRowMargin),
    // ...(padding && appStyles.cardRowPadding),
    ...style
  };

  return <View style={styles}>{children}</View>;
}
export function CardColumnTextContent({ style, children }) {
  const { appStyles } = useAppStyle();
  const styles = {
    ...appStyles.cardColumnTextContent,
    ...style
  };
  return <View style={styles}>{children}</View>;
}

export function CardColumnImage({ style, children }) {
  const { appStyles } = useAppStyle();

  const styles = {
    ...appStyles.CardColumnImage,
    ...style
  };
  return <View style={styles}>{children}</View>;
}

export function CardStyle({ children }) {
  const { appStyles } = useAppStyle();
  return <Card>{children(appStyles)}</Card>;
}
