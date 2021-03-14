import { useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import {
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedDetails } from '../../services/actions';
import FeedItem from './feed item/FeedItem';

function FeedDetails() {

  const feed = useRoute().params.feed || {};
  const { id } = feed;
  const dispatch = useDispatch();

  const feedsDetails = useSelector(state => state.FeedDetails.data);

  useEffect(() => {
    let cancel = false;
    const runEffect = async () => {      
      if (cancel) {
        return;
      }
     
      dispatch(getFeedDetails(id));
    };
    runEffect();
  
    return () => {
      cancel = true;
    }
  }, []);

  openItem = () => {

  }

  renderItem = ({ item }) => <FeedItem item={item} openItem={openItem} />

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      data={feedsDetails}
    />
  );
}

export default FeedDetails;