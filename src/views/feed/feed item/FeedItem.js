import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import style from './style';

const {
  container,
  dateStyle,
  titleStyle,
} = style;

function FeedItem({
  item,
  openItem,
}) {

  const {
    url,
    title,
    description,
    date,
  } = item;

  return (
    <TouchableOpacity
      style={container}
      onPress={() => openItem(item)}
    >
      <Text style={dateStyle}>{date}</Text>
      <Text style={titleStyle}>{title}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
}

export default FeedItem;