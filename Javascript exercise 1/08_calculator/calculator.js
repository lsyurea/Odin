const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(container) {
  return container.reduce((x, y) => {return x + y;} , 0);
};

const multiply = function(container) {
  return container? container.reduce((x ,y) => {return x * y;}, 1): 0;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(n) {
  if (n < 2) return 1;
  let res = 1;
  for (let i = 2; i < n + 1; i ++) {
    res *= i;
  }
	return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
