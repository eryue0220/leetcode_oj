/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  var stack = [];
  var operators = '+-*/';
  var num1, num2;

  for (var i = 0, len = tokens.length; i < len; i++) {
    if (!isNaN(Number(tokens[i]))) {
      stack.push(tokens[i]);
    } else if (operators.indexOf(tokens[i]) > -1) {
      num1 = Number(stack.pop());
      num2 = Number(stack.pop());

      switch (tokens[i]) {
        case '+':
          stack.push(num2 + num1);
          break;
        case '-':
          stack.push(num2 - num1);
          break;
        case '*':
          stack.push(num2 * num1);
          break;
        case '/':
          stack.push(num2 / num1);
          break;
      }
    }
  }

  return Math.floor(stack.pop());
};

evalRPN(["2", "1", "+", "3", "*"]);
evalRPN(["4", "13", "5", "/", "+"]);
evalRPN(["0","3","/"]);
evalRPN(["3","11","5","+","-"]);
evalRPN(["4","13","5","/","+"]);