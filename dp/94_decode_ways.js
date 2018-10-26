/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  var answer = 0;
  var chars = produceChars();

  if (isValidForSingleChar(s, chars)) answer += 1;
  answer = isValidForDoubleChar(s, chars, answer)

  return answer;
};

var produceChars = function() {
  var chars = [null];
  var code = 65;
  for (var i = 1; i <= 26; i++) {
    chars.push(String.fromCharCode(code));
    code += 1;
  }

  return chars;
};

var isValidForSingleChar = function(s, chars) {
  for (var i = 0; i < s.length; i++) {
    if (!chars[s[i]]) return false;
  }

  return true;
};

var isValidForDoubleChar = function(s, chars, answer) {
  for (var i = 0; i < s.length; i++) {
    if (parseInt(s[i], 10) === 0) continue;
    var j = i + 1;
    if (j < s.length) {
      var position = parseInt(s[i] + s[j], 10);
      if (position > chars.length) continue;
      if (!chars[position]) continue;
      answer += 1;
    }
  }

  return answer;
}
