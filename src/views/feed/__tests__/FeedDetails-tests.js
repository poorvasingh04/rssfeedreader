import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import FeedDetails from '../FeedDetails';
import { FlatList, Text, TouchableOpacity } from 'react-native';

jest.mock('react-native-webview', () => 'WebView');

jest.mock('@react-navigation/core', () => ({
  useRoute: () => {
    return {
      params: {
        feed: { id: '2', name: 'BBC'},
      }
    }
  },
 }));

describe('FeedDetails test cases-----', () => {
  const firstFeed = {
    "id": "1",
    "title": "Myanmar protests: Protesters killed in bloody Yangon crackdown",
    "description": "At least 14 protesters have been killed in clashes in Myanmar's main city Yangon as politicians ousted by the military coup called for \"revolution\".\nSecurity forces opened fire in the Yangon area of Hlaing Tharyar as protesters used sticks and knives....",
    "date": "03-14-2021 7:11 pm",
    "url": "https://www.bbc.com/news/world-asia-56395085"
  };

  const mockStore = configureStore()
  let store, wrapper;
  const navigateAction = jest.fn();
  const navigation = {
    navigate: (props, data) => navigateAction(props, data),
  }

  beforeEach(() => {
    store = mockStore({
      FeedDetails: {
        data: [firstFeed],
      }
    });
    wrapper = renderer.create(
      <Provider store={store}>
        <FeedDetails navigation={navigation} />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders correct number of components', () => {
    const testInstance = wrapper.root;
    expect(testInstance.findByType(FlatList).props.data.length).toBe(1);
  });

  it('test render item', () => {
    const testInstance = wrapper.root;
    expect(testInstance.findAllByType(TouchableOpacity).length).toBe(1);
    expect(testInstance.findAllByType(Text).length).toBe(4);
  });

  it('should open feed details on tap', () => {
    const feedCard = wrapper.root.findAllByType(TouchableOpacity)[0];
    feedCard.props.onPress();
    expect(navigateAction).toBeCalledWith('FeedItem Details', {
      url: firstFeed.url,
      title: firstFeed.title,
    });
  });
  
})