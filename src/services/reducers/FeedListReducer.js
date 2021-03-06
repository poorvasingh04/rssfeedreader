import { FEED_LIST } from '../actions/constants';

const INITIAL_STATE = {
  data: null,
}

export default function (state = INITIAL_STATE, action) {
  const { payload } = action;
  switch (action.type) {
    case FEED_LIST:
      const { data } = payload;
      return {
        data,
      };
    default:
      return state;
  };
}