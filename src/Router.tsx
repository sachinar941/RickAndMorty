/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Image} from 'react-native';
import {Characters, Locations, Episodes, Profile} from './screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//To access Predefined styles, colors
import {colors, styles} from './theme';

const Router = () => {
  const Stack: any = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const screen = (
    name: string,
    component: any,
    title: string,
    headerShown: boolean,
  ) => {
    return (
      <Stack.Screen
        name={name}
        component={component}
        options={{
          headerShown,
          title,
          headerStyle: {backgroundColor: colors.bgColor},
          headerTintColor: colors.light,
        }}
      />
    );
  };

  const CharacterStack = () => {
    return (
      <Stack.Navigator
        initialRouteName={'Characters'}
        screenOptions={{
          headerStyle: componentStyle.headerStyle,
          presentation: 'modal',
        }}>
        {screen('Characters', Characters, '', false)}
        {screen('Profile', Profile, 'Profile', true)}
      </Stack.Navigator>
    );
  };

  const LocationStack = () => {
    return (
      <Stack.Navigator
        initialRouteName={'Locations'}
        screenOptions={{headerStyle: componentStyle.headerStyle}}>
        {screen('Locations', Locations, '', false)}
      </Stack.Navigator>
    );
  };

  const EpisodeStack = () => {
    return (
      <Stack.Navigator
        initialRouteName={'Episodes'}
        screenOptions={{headerStyle: componentStyle.headerStyle}}>
        {screen('Episodes', Episodes, '', false)}
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: componentStyle.tabBarStyle,
        tabBarLabelStyle: styles.fontFamily,
      })}>
      <Tab.Screen
        name="CharactersTab"
        component={CharacterStack}
        options={{
          tabBarLabel: 'Characters',
          tabBarIcon: () => (
            <Image
              style={componentStyle.tabIcon}
              source={require('./assets/images/characters.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LocationsTab"
        component={LocationStack}
        options={{
          tabBarLabel: 'Locations',
          tabBarIcon: () => (
            <Image
              style={componentStyle.tabIcon}
              source={require('./assets/images/locations.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="EpisodesTab"
        component={EpisodeStack}
        options={{
          tabBarLabel: 'Episodes',
          tabBarIcon: () => (
            <Image
              style={componentStyle.tabIcon}
              source={require('./assets/images/episodes.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const componentStyle = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.secondary,
    borderTopWidth: 0,
  },
  tabIcon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  headerStyle: {
    backgroundColor: colors.bgColor,
    elevation: 5,
  },
});

export default Router;
