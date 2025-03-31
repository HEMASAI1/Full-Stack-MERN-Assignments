// 1. Declare age and isAdult
let age = 25;
let isAdult = age >= 18;
console.log("Is Adult:", isAdult);

// 2. Arithmetic operations with x and y
let x = 10;
let y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

// 3. Check if n is even or odd
let n = 7; // Example value
let result = (n % 2 === 0) ? "Even" : "Odd";
console.log(`Number ${n} is ${result}`);

// 4. Store numbers from 1 to 5 in an array
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log("Array:", numbers);

// 5. Function to square a number
function square(number) {
    return number * number;
}

console.log("Square of 4:", square(4));