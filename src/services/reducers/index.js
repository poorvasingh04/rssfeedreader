import { combineReducers } from 'redux';
import FeedListReducer from './FeedListReducer';
import FeedDetailsReducer from './FeedDetailsReducer';

const appReducer = combineReducers({
  FeedList: FeedListReducer,
  FeedDetails: FeedDetailsReducer,
});

export default (state, action) => {
  return appReducer(state, action);
};