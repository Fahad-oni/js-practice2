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
for (let i = 1; i <= 20; i++){
  sum += i;
  console.log(`the sum is ${sum}`);
}
