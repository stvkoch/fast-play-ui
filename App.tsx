import React from "react";

import { ThemeProvider } from "./src/share/context/theme";

import StyleGuideScreen from "./src/StyleGuide";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="Dark"
      fonts={{
        "font-tiny": require("./src/assets/fonts/Heebo-Thin.ttf"),
        "font-normal": require("./src/assets/fonts/Heebo-Regular.ttf"),
        "font-bold": require("./src/assets/fonts/Heebo-Bold.ttf"),
        "font-exbold": require("./src/assets/fonts/Heebo-ExtraBold.ttf")
      }}
    >
      {({ loading }) => !loading && <StyleGuideScreen />}
    </ThemeProvider>
  );
}
