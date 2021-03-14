import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import FeedList from '../views/home/list/FeedList';
import SCREENS from '../constants/SCREENS';
import COLORS from '../constants/COLORS';
import FeedDetails from '../views/feed/FeedDetails';
import FeedItemDetails from '../views/feed/feed item details/FeedItemDetails';

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
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={FEED_LIST}
        screenOptions={{
          headerTintColor: WHITE,
          headerStyle: { backgroundColor: HEADER },
          headerBackTitle: 'Back',
        }}
      >
        <Stack.Screen
          name={FEED_LIST}
          component={FeedList}
        />
        <Stack.Screen
          name={FEED_DETAILS}
          component={FeedDetails}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
        <Stack.Screen
          name={FEED_ITEM_DETAILS}
          component={FeedItemDetails}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default BaseNavigator;