import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import FeedList from '../list/FeedList';
import { FlatList, Text, TouchableOpacity } from 'react-native';

jest.mock('react-native-webview', () => 'WebView');

describe('FeedList test cases-----', () => {
  const mockStore = configureStore()
  let store, wrapper;
  const navigateAction = jest.fn();
  const navigation = {
    navigate: (props, data) => navigateAction(props, data),
  }

  const firstFeed = {
    id: '1', name: 'Google',
  };

  beforeEach(() => {
    store = mockStore({
      FeedList: {
        data: [firstFeed],
      }
    });
    wrapper = renderer.create(
      <Provider store={store}>
        <FeedList navigation={navigation} />
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
    expect(testInstance.findAllByType(Text).length).toBe(1);
  });

  it('should open feed on feed tap', () => {
    const feedCard = wrapper.root.findAllByType(TouchableOpacity)[0];
    feedCard.props.onPress();
    expect(navigateAction).toBeCalledWith('Feed Details', { feed: firstFeed });
  });
  
})