const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, current) => (sum = sum + current), 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, current) => (product = product * current), 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  if (number === 0) return 1;
  
  let factorial = number;
	for (let i = number-1; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
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
