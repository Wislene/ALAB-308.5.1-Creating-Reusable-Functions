// Part 1: Thinking Functionally

// With that in mind, write functions that accomplish the following:

// -Take an array of numbers and return the sum.
// -Take an array of numbers and return the average.
// -Take an array of strings and return the longest string.
// -Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// -For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// -Take a number, n, and print every number between 1 and n without using loops. Use recursion.

 1. Take an array of numbers and return the sum.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sum (numbers) {
let total = 0;
  for (let i=0; i<numbers.length; i++){
  total+= numbers[i];

}
return total;
}
console.log (sum(numbers))

Output: 55



2. Take an array of numbers and return the average.

const numbers = [1, 2, 3, 4, 5, 6];
function average(numbers) {
  let average = 0;
  for (let i = 0; i < numbers.length; i++) {
    average += numbers[i];
  }
  return average;
}
console.log(average(numbers));

Output: 21



3. Take an array of strings and return the longest string.

let strings = ["Jacket", "pants", "shirt", "socks", "dresses"];
function longestString(strings) {
  let longestString = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  }
  return longestString;
}

console.log(longestString(strings));

Output: dresses



4. Take an array of strings, and a number and return an array of the strings that are longer than the given number.


let strings = ["boat", "plane", "car", "helicopter", "train"];
let number = 4;

function stringLongerThanNumber(strings, number) {
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > number) {
      console.log(strings[i] + " is longer than " + number);
    } else {
      console.log(strings[i] + " is not longer than " + number);
    }

  }
}
stringLongerThanNumber(strings, number);

// Output: car is not longer than 4
// helicopter is longer than 4
// train is longer than 4



5. Take a number, n, and print every number between 1 and n without using loops. Use recursion.

I need help figuring with understanding this more. I need to come back to it

