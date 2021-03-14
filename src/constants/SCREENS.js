import FeedItemDetails from "../views/feed/feed item details/FeedItemDetails";
import FeedDetails from "../views/feed/FeedDetails";
import FeedList from "../views/home/list/FeedList";

const SCREENS = {
  FEED_LIST: {
    title: 'News Feed',
    component: FeedList,
  },
  FEED_DETAILS: {
    title: 'Feed Details',
    component: FeedDetails,
  },
  FEED_ITEM_DETAILS: {
    title: 'FeedItem Details',
    component: FeedItemDetails,
  },
};

export default SCREENS;