import React, { useContext } from 'react';
import { Text, View, TouchableNativeFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

import { themeContext } from "../../context/theme";
import getColors from "../../styles/colors";
import { useAppStyle } from "./../../styles/app";
import { Sentence } from '../typo';
import { useTypeStyles } from "../../styles/typo";

export default ({ children, icon, ...sentenceProps }) => {
    const [themeName] = useContext(themeContext);
    const { appStyles } = useAppStyle();
    const colors = getColors(themeName);

    return (<View style={appStyles.tagContainer}>
        <Sentence {...sentenceProps}>{children}</Sentence>
        {icon && (
            <Feather
                color={colors.darkAccent}
                size={16}
                name="minus-circle"
                style={appStyles.tagIcon}
            />
        )}
    </View>);
}