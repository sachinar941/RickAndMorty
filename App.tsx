/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { colors } from './src/theme';
import Router from './src/Router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const App = () => {

  const MyTheme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, primary: colors.primary }};

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.bgColor}/>
      <NavigationContainer theme={MyTheme}>
        <Router/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;