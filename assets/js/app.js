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
const customRanNumberGenerate = (min, max, times) => {
  for (let i = 0; i < times; i++) {
    const customRandomNumber = Math.round(Math.random() * (max - min) + min);
    console.log(customRandomNumber);
  }
};
customRanNumberGenerate(1, 5, 10);

// Swapping Variable
