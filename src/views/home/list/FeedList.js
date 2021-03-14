import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  FlatList,
} from 'react-native';
import { getFeedList } from '../../../services/actions';
import Feed from '../feed/Feed';

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

  }

  renderItem = ({ item }) => <Feed item={item} />

  return (
    <FlatList
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      data={feedsData}
    />

  );
}

export default FeedList;