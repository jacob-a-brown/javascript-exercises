const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let total = arr.reduce(function (sum, num) {
    return sum += num;
  }, 0);
  return total;
};

const multiply = function(arr) {
  let total = arr.reduce (function (product, num) {
    return product *= num;
  }, 1);
  return total;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
  let f = 1;
  for (let i = 1; i <= n; i++){
    f *= i;
  }
  return f;
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
