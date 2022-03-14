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
// const arrayTotal = (numbers) => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };

// const total = arrayTotal([5, 7, 9, 5, 4]);
// console.log(total);

// Largest element in an array
// const largestElement = numbers => {
//     let largest = numbers[0];
//     let len = numbers.length;
//     for (let i = 0; i < len; i++) {
//         if (numbers[i] < largest) {
//             largest = numbers[i];
//         }
//     }
//     return largest;
// }

// const largeItem = largestElement([10, 20, 30, 40, 50, 60]);
// console.log(largeItem);

// Fibonacci series
/*
let fibo = [0, 1];
for (let i = 2; i < 10; i++) {
    // nth = (n - 1)th + (n - 2)th;
    fibo[i] = fibo[i - 1] + fibo[i - 2];    
}
console.log(fibo);
*/

// Fibonacci series with function
// const fiboFunc = (times) => {
//   if (typeof times != 'number') {
//     return 'Please enter valid data!'    
//   }
//   let fibo = [0, 1];
//   for (let i = 2; i < times; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// };

// const tenTimesFibonacci = fiboFunc('[15]');
// console.log(tenTimesFibonacci);

// Remove Duplicates Array in an Array
// const friends = ['Tusar', 'Rakib', 'Sharif', 'Shuvo', 'Tusar', 'Rakib', 'Selim', 'Manun', 'Sharif', 'Rabbi']

// const removeDuplicates = names => {
//     const uniqueValue = [];
//     for (let i = 0; i < names.length; i++) {
//         if (uniqueValue.indexOf(names[i]) == -1) {
//             uniqueValue.push(names[i])
//         }
//     }
//     // for (const name of names) {
//     //     if (uniqueValue.indexOf(name) == -1) {
//     //         uniqueValue.push(name)
//     //     }
//     //     console.log(name);
//     // }

//     return uniqueValue;
// }
// console.log(removeDuplicates(friends));

// String Reverse 
// const reverseString = text => {
//     let reverse = '';
//     for (const item of text) {
//         reverse = item + reverse;
//     }
//     return reverse;
// }

// const greetings = reverseString('Hi, good morning~')
// console.log(greetings);

// Foo bar challenge
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, 'Foo-bar');      
    } else if (i % 3 == 0) {
        console.log(i, 'Foo');      
    } else if (i % 5 == 0) {
        console.log(i, 'bar');
    } else {
        console.log(i);
    }
}