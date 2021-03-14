import { combineReducers } from 'redux';
import FeedListReducer from './FeedListReducer';

const appReducer = combineReducers({
  FeedList: FeedListReducer,
});

export default (state, action) => {
  return appReducer(state, action);
};