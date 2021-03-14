import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SCREENS from '../constants/SCREENS';
import COLORS from '../constants/COLORS';

const Stack = createStackNavigator();

const {
  WHITE,
  HEADER,
} = COLORS;

const {
  FEED_LIST,
  FEED_DETAILS,
  FEED_ITEM_DETAILS,
} = SCREENS;

function BaseNavigator() {
  const screen = ({ title, component }) => (
    <Stack.Screen
      name={title}
      component={component}
      options={({ route }) => ({
        title: route.params && route.params.title,
      })}
    />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={FEED_LIST.title}
        screenOptions={{
          headerTintColor: WHITE,
          headerStyle: { backgroundColor: HEADER },
          headerBackTitle: 'Back',
        }}
      >
        {screen(FEED_LIST)}
        {screen(FEED_DETAILS)}
        {screen(FEED_ITEM_DETAILS)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default BaseNavigator;