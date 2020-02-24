import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  ActivityIndicator
} from "react-native";

import { useAppStyle } from "./../../styles/app";
// import appStyles from "./../../styles/app";

function getStyleButton(
  appStyles,
  { primary, info, success, warning, danger, disabled }
) {
  let style = {};
  if (disabled) style = appStyles.disabledButton;

  if (primary) return { ...style, ...appStyles.primaryButton };
  if (info) return { ...style, ...appStyles.infoButton };
  if (success) return { ...style, ...appStyles.successButton };
  if (warning) return { ...style, ...appStyles.warningButton };
  if (danger) return { ...style, ...appStyles.dangerButton };

  return null;
}

function getStyleTextButton(
  appStyles,
  { primary, info, success, warning, danger }
) {
  if (primary) return appStyles.primaryTextButton;
  if (info) return appStyles.infoTextButton;
  if (success) return appStyles.successTextButton;
  if (warning) return appStyles.warningTextButton;
  if (danger) return appStyles.dangerTextButton;

  return null;
}

export default function Default({
  children,
  style,
  styleText,
  onPress,
  onLongPress,
  loading,
  ...props
}) {
  const { appStyles } = useAppStyle();
  const styleButton = {
    ...appStyles.defaultButton,
    ...getStyleButton(appStyles, props),
    ...style
  };
  const styleTextButton = {
    ...appStyles.defaultTextButton,
    ...getStyleTextButton(appStyles, props),
    ...styleText
  };
  return (
    <TouchableNativeFeedback
      onPress={() => !props.disabled && !loading && onPress()}
      onLongPress={onLongPress}
    >
      <View style={styleButton}>
        {loading && <ActivityIndicator size="small" />}
        {!loading && <Text style={styleTextButton}>{children}</Text>}
      </View>
    </TouchableNativeFeedback>
  );
}

export function PromptButton({ children, onPress, prompt, ...props }) {
  const [ask, setAsk] = useState(false);
  const onPressAsk = useCallback(() => {
    if (ask) onPress();
    setAsk(true);
  }, [onPress, ask]);
  const onLongPress = useCallback(() => {
    setAsk(false);
  }, []);

  return (
    <Default {...props} onLongPress={onLongPress} onPress={onPressAsk}>
      {ask ? prompt : children}
    </Default>
  );
}
