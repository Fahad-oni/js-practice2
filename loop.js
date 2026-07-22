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

// Task 10 — Using Break
// Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30.

for (let i = 1; i <= 50; i++) {
  console.log(i);
  if (i > 30) {
    break;
  }
}

// Task 11 — Using Continue
// Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.

for (let i = 1; i <= 20; i++) {
  // console.log(i);
  if (i % 4 === 0) {
    console.log(i);
    continue;
  }
}

// Task 12 — Do While Loop — Optional
// Write a do while loop that prints numbers from 1 to 5. Then modify the condition so it is false from the start (for example, i > 10) and observe that the loop still runs once.

let nums = 1;
do {
  console.log(nums);
  nums++;
} while (nums > 20);

// Task 13 — Comparing Loop Types
// Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.

let NuM = 1;

for (let NuM = 1; NuM <= 5; NuM++) {
  console.log(NuM);
}

// while (NuM <= 5) {
//   console.log(NuM);
//   NuM++;
// }

do {
  console.log(NuM);
  NuM++;
} while (NuM <= 5);

// Task 14 — Mini Challenge
// Write a program that:
// Loops from 1 to 100.
// Skips (continue) any number divisible by 5.
// Stops (break) completely once it reaches a number greater than 40.
// Prints every number that passes both checks.

for (let NUMB = 1; NUMB <= 100; NUMB++){
  if (NUMB % 2 === 0) {
    continue
  }

  if (NUMB > 40) {
    break
  }

  console.log(NUMB)
}