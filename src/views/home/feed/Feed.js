import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import style from './style';

const {
  container,
  linkStyle,
} = style;

function Feed({ item }) {

  const { name } = item;

  return (
    <TouchableOpacity
      style={container}
      onPress={() => openFeed(item)}
    >
      <Text style={linkStyle}>{name}</Text>
    </TouchableOpacity>
  );
}

export default Feed;