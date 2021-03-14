import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

import BaseNavigator from './src/navigation/BaseNavigator';

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <BaseNavigator />
    </View>
  );
};

export default App;
