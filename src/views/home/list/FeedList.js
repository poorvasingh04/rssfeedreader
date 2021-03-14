import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  FlatList,
} from 'react-native';
import { getFeedList } from '../../../services/actions';
import Feed from '../feed/Feed';
import SCREENS from '../../../constants/SCREENS';

function FeedList({ navigation }) {
  const dispatch = useDispatch();

  const feedsData = useSelector(state => state.FeedList.data);

  useEffect(() => {
    let cancel = false;
    const runEffect = async () => {      
      if (cancel) {
        return;
      }
     
      dispatch(getFeedList());
    };
    runEffect();
  
    return () => {
      cancel = true;
    }
  }, []);

  openFeed = (feed) => {
    if(navigation) navigation.navigate(
      SCREENS.FEED_DETAILS,
      {
        feed,
      }
    );
  }

  renderItem = ({ item }) => <Feed item={item} openFeed={openFeed} />

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      data={feedsData}
    />

  );
}

export default FeedList;