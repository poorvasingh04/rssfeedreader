import { useRoute } from '@react-navigation/core';
import React from 'react';

import { WebView } from 'react-native-webview';

function FeedItemDetails() {
  const uri = useRoute().params.url || {};

  return (
    <WebView
      source={{ uri }}
    />
  );
}

export default FeedItemDetails;