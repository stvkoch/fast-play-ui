import React, { useState } from "react";
import { TextInput, Text, View, Picker } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useAppStyle } from "../../styles/app";
import getColors from "../../styles/colors";

export function Input({
  label,
  error,
  isSuccess,
  style,
  defaultValue,
  onChangeText,
  ...props
}) {
  const { appStyles } = useAppStyle();
  const colors = getColors();
  const [value, setValue] = useState(defaultValue);
  const hasError = !!error;
  const labelStyles = {
    ...appStyles.inputLabel,
    ...(hasError && appStyles.inputLabelError),
    ...(isSuccess && appStyles.inputLabelSuccess)
  };
  return (
    <View>
      {label && <Text style={labelStyles}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={newValue => {
          setValue(newValue);
          onChangeText && onChangeText(newValue);
        }}
        style={{ ...appStyles.input, ...style }}
        {...props}
      />
      {isSuccess !== true ? null : (
        <Feather
          size={16}
          name="check"
          color={colors.success}
          style={appStyles.inputIcon}
        />
      )}
      {hasError !== true ? null : (
        <Feather
          size={16}
          name="alert-octagon"
          color={colors.danger}
          style={[
            appStyles.inputLabel,
            appStyles.inputIcon,
            appStyles.inputLabelError
          ]}
        />
      )}

      {error && <Text style={appStyles.inputLabelError}>{error}</Text>}
    </View>
  );
}

const defaultGetItem = (item, indx) => (item && item[indx] || item);

export function SelectBox({
  label,
  hasError,
  isSuccess,
  style,
  data,
  getItem = defaultGetItem,
  ...props
}) {
  const { appStyles } = useAppStyle();
  const colors = getColors();


  const labelStyles = {
    ...appStyles.inputLabel,
    ...(hasError && appStyles.inputLabelError),
    ...(isSuccess && appStyles.inputLabelSuccess)
  };

  return (
    <View style={[appStyles.pickerContainer, style]}>
      <Text style={labelStyles}>{label}</Text>
      <Picker style={appStyles.picker} {...props}>
        {data &&
          data.map(item => (
            <Picker.Item
              label={getItem(item, 'label')}
              value={getItem(item, 'id')}
              key={getItem(item, 'key')}
            />
          ))}
      </Picker>
    </View>
  );
}
