/*
7kyu

Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

function multi(arr) {
  return arr * arr;
}
function add(arr) {
  return arr + arr;
}
function reverse(str) {
  return str.reverse();
}

 */

const multi = arr => arr.reduce((acc, cur) => acc * cur, 1)

const add = arr => arr.reduce((acc, cur) => acc + cur, 0)

const reverse = str => str.split('').reverse().join('')

