import {
  FEED_LIST,
} from './constants';

import API_STAGE from './API_STAGE';

const Response =  (action, data = null) => {
  return {
    type: action,
    payload: {
      data,
    },
  };
};

const getFeedList = () => dispatch => {
  dispatch(
    {
      type: FEED_LIST
    }
  );
}

export {
  getFeedList,
};