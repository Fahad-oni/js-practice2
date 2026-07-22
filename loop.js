// Task 1 — Print "Hello" Five Times
// Write a for loop that prints "Hello" 5 times.

for (let i = 0; i < 5; i++) {
  console.log(`Hello`);
}

// Task 2 — Print Numbers 1 to 10
// Write a for loop that prints numbers from 1 to 10.

let number = 0;

for (let number = 1; number <= 10; number++) {
  console.log(number);
}

// Task 3 — Countdown with While Loop
// Write a while loop that prints numbers from 10 down to 1.

let num = 10;

while (num > 0) {
  console.log(num);
  num--;
}

// Task 4 — Repeat a Message
// Using a while loop, print "Loop চলছে" exactly 7 times.

let message = 'Loop চলছে';
let i = 1;

while (i <= 7) {
  console.log('the count is', i, message);
  i++;
}

// Task 5 — Even Numbers
// Write a for loop that prints all even numbers between 1 and 30.

for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Task 6 — Sum of Numbers
// Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.

let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
  console.log(`the sum is ${sum}`);
}

// Task 7 — Multiplication Table
// Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.

let UserNumber = 7;

for (let i = 1; i <= 10; i++) {
  numberr = UserNumber * i;
  console.log(`${UserNumber} X ${i} = ${numberr}`);
}

// Task 8 — Count Down from 20
// Write a for loop that counts down from 20 to 1.

let Num;
for (let Num = 20; Num > 0; Num--) {
  console.log(Num);
}

// Task 9 — Sum of Even Numbers
// Write a for loop that calculates the sum of all even numbers from 2 to 50.

let SUM = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    SUM += i;
    console.log(SUM);
  }
}
