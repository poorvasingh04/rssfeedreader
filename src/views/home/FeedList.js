import React from 'react';
import {
  FlatList,
  TouchableHighlight,
} from 'react-native';

function FeedList({ navigation }) {
  var feedsData = [];

  openFeed = (feed) => {

  }

  renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        onPress={() => openFeed(item)}
      >
        <Text>Hello</Text>
      </TouchableHighlight>
    );
  }

  return (
    <FlatList
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      data={feedsData}
    />

  );
}

export default FeedList;