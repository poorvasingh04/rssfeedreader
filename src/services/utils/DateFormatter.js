import moment from 'moment';

const sortItemsByDate = (items) => {
  return items.sort((a,b) => {
    const date1 = moment(a.date, "MM-DD-YYYY hh:mm a");
    const date2 = moment(b.date, "MM-DD-YYYY hh:mm a");

    return date2.diff(date1);
  });
}

const formatDateForDisplay = (date) => {
  return moment(date, "MM-DD-YYYY hh:mm a").format("LLLL");
}

export {
  sortItemsByDate,
  formatDateForDisplay,
};