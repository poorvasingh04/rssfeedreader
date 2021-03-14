import {
  FEED_DETAILS,
  FEED_LIST,
} from './constants';

const getFeedList = () => dispatch => {
  dispatch(
    {
      type: FEED_LIST,
      payload: {
        data: require('../data/feedList.json')
      }
    }
  );
}

const getFeedDetails = (id) => dispatch => {
  const data = require('../data/feedDetails.json');
  const details = data.filter(feed => feed.id === id);
  const { items = [] } = details.length > 0 ? details[0] : {};

  dispatch(
    {
      type: FEED_DETAILS,
      payload: {
        data: items,
      }
    }
  );
}

export {
  getFeedList,
  getFeedDetails,
};