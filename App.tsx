/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {colors} from './src/theme';
import Router from './src/Router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

const App = () => {
  //To define a default theme for navigation components
  const MyTheme = {
    ...DefaultTheme,
    colors: {...DefaultTheme.colors, primary: colors.primary},
  };

  return (
    <SafeAreaProvider>
      {/* Modify screen status bar to blend with app theme */}
      <StatusBar barStyle={'light-content'} backgroundColor={colors.bgColor} />
      <NavigationContainer theme={MyTheme}>
        <Router />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
