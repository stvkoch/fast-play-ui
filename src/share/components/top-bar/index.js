import React, { useState } from "react";
import { View, StatusBar, TouchableNativeFeedback, Text } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

import { Subtitle } from "../../components/typo";
import { Input } from "../../components/form";
import { useAppStyle } from "../../styles/app";
import getColors from "../../styles/colors";

const ICON_SIZE = 21;

export function TopBar({ title, style, children, ...props }) {
  const { appStyles, colors } = useAppStyle();

  const styles = appStyles.topBarContainer;
  return (
    <View style={styles}>
      <StatusBar
        backgroundColor={colors.lightAccent}
        // barStyle="light-content"
        translucent
      />

      {children}
    </View>
  );
}

export function TopBarSearch({
  onPress,
  onChangeText,
  defaultValue,
  ...props
}) {
  const { appStyles } = useAppStyle();
  const [value, setValue] = useState(defaultValue);
  const { textTopbar } = getColors();

  return (
    <View
      style={{
        ...appStyles.topBarPadding,
        ...appStyles.topBarRow,
        ...appStyles.topBarSearch
      }}
    >
      <Input
        defaultValue={value}
        onChangeText={newValue => {
          setValue(newValue);
          onChangeText && onChangeText(newValue);
        }}
        style={appStyles.topBarSearchInput}
        {...props}
      />
      <TouchableNativeFeedback onPress={() => onPress(value)}>
        <AntDesign size={ICON_SIZE} name="search1" color={textTopbar} />
      </TouchableNativeFeedback>
    </View>
  );
}

export function TopBarTitle({ title }) {
  const { appStyles } = useAppStyle();
  const styles = { ...appStyles.topBarTitle, ...appStyles.topBarPadding };

  return (
    <View style={styles}>
      <TopBarSubtitle>{title}</TopBarSubtitle>
    </View>
  );
}

export function TopBarLogoAndCommand({
  title,
  onPressLeft,
  onPressRight,
  onPressTitle,
  children,
  iconLeft,
  iconRight,
  iconsColor
}) {
  const { appStyles } = useAppStyle();
  const colors = getColors();

  return (
    <View
      style={{
        ...appStyles.topBarRow
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50
        }}
      >
        {iconLeft && (
          <TouchableNativeFeedback onPress={onPressLeft}>
            <Feather
              size={ICON_SIZE}
              name={iconLeft}
              color={iconsColor || colors.textTopbar}
            />
          </TouchableNativeFeedback>
        )}
      </View>
      {title && <TopBarSubtitle onPress={onPressTitle}>{title}</TopBarSubtitle>}
      {children && <TopBarSubtitle>{children}</TopBarSubtitle>}
      <View style={{ justifyContent: "center", width: 30, height: 50 }}>
        {iconRight && (
          <TouchableNativeFeedback onPress={onPressRight}>
            <Feather
              size={ICON_SIZE}
              name={iconRight}
              color={iconsColor || colors.textTopbar}
            />
          </TouchableNativeFeedback>
        )}
      </View>
    </View>
  );
}
const TopBarSubtitle = ({ onPress, ...props }) => {
  const colors = getColors();
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Subtitle {...props} style={{ color: colors.textTopbar }} />
    </TouchableNativeFeedback>
  );
};
