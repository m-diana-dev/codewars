/*
7kyu

Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.

var FilterNumbers = function(str) {
  return str.split('').filter(c => !parseInt(c)).join('');
}

 */

const FilterNumbers = str => str.split('').filter(c => isNaN(Number(c))).join('')


