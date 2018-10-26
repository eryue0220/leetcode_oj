/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x % 10 === 0 || x < 0) return false;

  var doubles = [11, 22, 33, 44, 55, 66, 77, 88, 99];

  if (x < 100)  {
    if (doubles.indexOf(x) > -1) {
      return true;
    } else {
      return false;
    }
  }

  var str = String(x);
  var result = [];

  for (var i = 0; i < str.length; i++) {
    result.push(str[i]);
  }

  result = result.reverse().join('');
  return result == str;
};
