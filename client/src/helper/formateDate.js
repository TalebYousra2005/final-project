import moment from "moment-js"
export const formatDate = (date) => {
  return moment(date).format("LLL");
};
