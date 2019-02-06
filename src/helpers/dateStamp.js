const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

/**
 * @description A function to Convert TimeStamp to valid date
 * @param {string} ts
 * @returns {string} Date string
 */
const convertTS = (ts) => {
  const date = new Date(ts);
  const month = date.getMonth();
  const day = date.getDate();
  const formattedDate = `${day} ${MONTHS[month]}`;
  return formattedDate;
};

export default convertTS;
