import { FEED_LIST } from '../actions/constants';

const data = require('./data/feedList.json');

const INITIAL_STATE = {
  data: null,
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FEED_LIST:
      return {
        data,
      };
    default:
      return state;
  };
}