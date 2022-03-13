// Test Math.abs();
// const myNumber = 0;
// const absoluteNumber = Math.abs(myNumber)
// console.log(absoluteNumber);

// Test Math.ceil();
// const myNumber = 4.1;
// const output = Math.ceil(myNumber);
// console.log(output);

// Test Math.floor()
// const myNumber = -0.9;
// const output = Math.floor(myNumber);
// console.log(output);

// TEst Math.round()
// const myNumber = 4.4;
// const output = Math.round(myNumber);
// console.log(output);

// Test Random Number
// const myRandomNumber = Math.random();
// const multiplyByTen = myRandomNumber * 10;
// const toRoundMyRandomNumber = Math.round(multiplyByTen)
// console.log(toRoundMyRandomNumber);

// Generate Random Number in 10 Times
// const customRanNumberGenerate = (min, max, times) => {
//   for (let i = 0; i < times; i++) {
//     const customRandomNumber = Math.round(Math.random() * (max - min) + min);
//     console.log(customRandomNumber);
//   }
// };
// customRanNumberGenerate(1, 5, 10);

// Swapping Variable
// let first = 5;
// let second = 7;
// console.log(first, second);

// First Approach [Using temporary variable]
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// Second Approach [Using destructuring assignment]
// [first, second] = [second, first]
// console.log(first, second);

// Third Approach [Using Arithmetic Operators]
// let a = 4;
// let b = 2;
// console.log(a, b);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

// Fourth Approach [Using XOR Operator]
// let first = 4;
// let second = 2;
// console.log(first, second);
// first = first ^ second;
// second = first ^ second;
// first = first ^ second;
// console.log(first, second);

// Find Maximum Number and Minimum Number
/*
const maxNumber = (num1, num2, num3) => {
    console.log(num1, num2, num3);
    if (num1 > num2 && num1 > num3) {
        console.log('Largest one: ', num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log('Largest one: ', num2);
    } else {
        console.log('Largest one: ', num3);
    }
}
maxNumber(45, 21, 320)

const minNumber = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        console.log('Smallest one: ', num1);
    } else if (num2 < num1 && num2 < num3) {
        console.log('Smallest one: ', num2);
    } else {
        console.log('Smallest one: ', num3);
    }
}
minNumber(45, 21, 320)
*/

// Array Sum
const arrayTotal = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const total = arrayTotal([5, 7, 9, 5, 4]);
console.log(total);