const add = function(num1,num2) {
	return num1 + num2
};

const subtract = function(num1,num2) {
	return num1 - num2
};

const sum = function(arr) {
  ans=0
  size=arr.length
  if ( size == 0 ) { return 0}
  for (i=0; i < size; i++) {
    ans=ans+arr[i]
  } 
	
  return ans
};

function myFunc(total, num) {
  return total + num;
}

const sum2 = function(arr) {return arr.reduce((myFunc),0)};

const multiply = function(arr) {
  ans=1
  size=arr.length
  if ( size == 0 ) { return 0}
  for (i=0; i < size; i++) {
    ans=ans*arr[i]
  } 
	
  return ans
};

const power = function(num1,num2) {
	return Math.pow(num1,num2)
};

const factorial = function(num) {
	if (num == 0) { return 1}
  else { return num * factorial(num-1)}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
  sum2
};

