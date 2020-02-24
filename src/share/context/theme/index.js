import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import * as Font from 'expo-font';

const themeContext = React.createContext([{}, () => {}]);

const ThemeProvider = ({ defaultTheme = "defaultTheme", children }) => {
  const [state, setState] = useState(defaultTheme);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      const theme = await AsyncStorage.getItem("theme");
      await Font.loadAsync({
        'font-tiny':   require('../../../assets/fonts/Heebo-Thin.ttf'),
        'font-normal': require('../../../assets/fonts/Heebo-Regular.ttf'),
        'font-bold':   require('../../../assets/fonts/Heebo-Bold.ttf'),
        'font-exbold': require('../../../assets/fonts/Heebo-ExtraBold.ttf'),
      });

      theme && setState(theme);
      setLoading(false);
    };

    bootstrapAsync();
  }, []);

  React.useEffect(() => {
    AsyncStorage.setItem("theme", state);
  }, [state]);

  return (
    <themeContext.Provider
      value={[
        state,
        value => {
          setState(value);
        },
        loading
      ]}
    >
      {children(loading)}
    </themeContext.Provider>
  );
};

export { themeContext, ThemeProvider };
