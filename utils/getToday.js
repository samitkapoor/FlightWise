module.exports = () => {
  const d = new Date();
  var year = d.getFullYear().toString();
  var month = d.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  var date = d.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  return year + "-" + month + "-" + date;
};
