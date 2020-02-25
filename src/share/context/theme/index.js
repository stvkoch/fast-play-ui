import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import * as Font from "expo-font";

const themeContext = React.createContext([{}, () => {}]);

const ThemeProvider = ({
  defaultTheme = "defaultTheme",
  fonts = {},
  children
}) => {
  const [state, setState] = useState(defaultTheme);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      const theme = await AsyncStorage.getItem("theme");
      await Font.loadAsync(fonts);

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
      {children({ loading })}
    </themeContext.Provider>
  );
};

export { themeContext, ThemeProvider };
