import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../../constants/COLORS';
import { formatDateForDisplay } from '../../../services/utils/DateFormatter';

import style from './style';

const {
  container,
  dateStyle,
  titleStyle,
  linkStyle,
} = style;

function FeedItem({
  item,
  openItem,
  markAsFavoriteAction,
}) {

  const {
    title,
    description,
    date,
    isFavorite,
  } = item;

  const dateToDisplay = () => {
    return formatDateForDisplay(date);
  }

  return (
    <TouchableOpacity
      style={container}
      onPress={() => openItem(item)}
    >
      <Text style={dateStyle}>{dateToDisplay()}</Text>
      <Text style={titleStyle}>{title}</Text>
      <Text>{description}</Text>
      <Text
        style={[
          linkStyle,
          { backgroundColor: (isFavorite ? COLORS.GREEN: COLORS.WHITE)
        }]}
        onPress={() => markAsFavoriteAction(item)}>
        Mark as favorite
      </Text>
    </TouchableOpacity>
  );
}

export default FeedItem;