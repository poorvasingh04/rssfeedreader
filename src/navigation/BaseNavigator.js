import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedList from '../views/home/list/FeedList';
import SCREENS from '../constants/SCREENS';
import COLORS from '../constants/COLORS';
import FeedDetails from '../views/feed/FeedDetails';

const Stack = createStackNavigator();

const {
  WHITE,
  HEADER,
} = COLORS;

const {
  FEED_LIST,
  FEED_DETAILS,
} = SCREENS;

function BaseNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={FEED_LIST}
        screenOptions={{
          headerTintColor: WHITE,
          headerStyle: { backgroundColor: HEADER },
        }}
      >
        <Stack.Screen
          name={FEED_LIST}
          component={FeedList}
        />
        <Stack.Screen
          name={FEED_DETAILS}
          component={FeedDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default BaseNavigator;