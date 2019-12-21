class Util {
  static formatTime(date) {

    let hour = date.getHours();
    let minute = date.getMinutes();
    return hour*100+minute
  };
  static formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  };
};

module.exports = Util;
