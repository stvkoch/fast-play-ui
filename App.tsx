import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeProvider } from "./src/share/context/theme";

import StyleGuideScreen from "./src/StyleGuide";

export default function App() {
  return (<ThemeProvider defaultTheme="Dark">{()=>
    <StyleGuideScreen />
  }</ThemeProvider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
