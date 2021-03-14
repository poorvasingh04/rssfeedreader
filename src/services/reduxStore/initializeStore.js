import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import { createPromise } from 'redux-promise-middleware';

import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(createPromise(), thunk, createLogger()),
);

const storeStyle = {
  viewStyle: {
    flex: 1,
  },
};

export default () => {
  return { store, storeStyle };
}
