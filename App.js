import React from 'react';
import { Provider } from 'react-redux';

import reduxStore from './src/services/reduxStore/initializeStore';
import BaseNavigator from './src/navigation/BaseNavigator';

const App = () => {
  const { store, storeStyle } = reduxStore();
  const { viewStyle } = storeStyle;

  return (
    <Provider store={store} style={viewStyle}>
      <BaseNavigator />
    </Provider>
  );
};

export default App;
