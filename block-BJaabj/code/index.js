/*
1. Create a function named `sayHello` that alerts a message `Hello World!`.
*/

function sayHello() {
    let message = `Hello World!`
    alert(message);
}
sayHello();

/*
2. Create a function named `fullName` with the following steps:

  - Prompts a message saying `Enter your first name` and store the value into variable named `firstName`
  - Prompts a message saying `Enter your last name` and store the value into variable named `lastName`
  - Concat the value of fistName and lastName and store it in another variable named `fullName`.
  - Alert `fullName`
*/
function fullName() {
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var fullName = (firstName + " " + lastName)
    alert(fullName)
}
fullName();
/*
3. Create a function named `addTwoNumbers` with the following steps:

  - Prompts a message saying `Enter the first number` and store the value into variable named `firstNum`
  - Prompts a message saying `Enter the second` and store the value into variable named `secondNum`
  - Add the value of firstNum and secondNum and store it in another variable named `sum`.
  - Alert `sum`
*/
function addTwoNumbers() {
    let firstNum = +prompt("Enter the first number");
    let secondNum = +prompt("Enter the second number");
    var sum = (firstNum + secondNum);
    alert(sum);
}
addTwoNumbers();

/*
4. Create a function named `getTable` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named `num`
  - Using `console.log` logs the Multiplication Table of the number entered by the user.
  - Example: Number is 9

  9 * 1 = 9
  9 * 2 = 18
  9 * 3 = 27
  9 * 4 = 36
  9 * 5 = 45
  9 * 6 = 54
  9 * 7 = 63
  9 * 8 = 72
  9 * 9 = 81
  9 * 10 = 90
*/
function getTable() {
    var num = prompt("Enter a number");
    console.log(`
    ${num} * 1 = ${num*1}\n
    ${num} * 2 = ${num*2}\n
    ${num} * 3 = ${num*3}\n
    ${num} * 4 = ${num*4}\n
    ${num} * 5 = ${num*5}\n
    ${num} * 6 = ${num*6}\n
    ${num} * 7 = ${num*7}\n
    ${num} * 8 = ${num*8}\n
    ${num} * 9 = ${num*9}\n
    ${num} * 10 = ${num*10}\n`);
}
getTable();

/*
5. Create a function named `isLeapYear` with the following steps:

  - Prompts a message saying `Enter a year` and store the value into variable named`year`
  - Alert `[year] is a leap year` otherwise `[year] is not a leap year`
*/
function isLeapYear() {
    var year = +prompt("Enter a year");
    if (year % 4 === 0 || year % 4 === 400 && year % 4 === 100) {
        alert(`${year} is a leap year`)
    } else {
        alert(`${year} is not a leap year`);
    }
}
isLeapYear()


/*
6. Create a function named `
            getFactorial ` with the following steps:

  - Prompts a message saying `
            Enter a number ` and store the value into variable named`
            number `
  - Alert `
            The factorial of[number] is[factorial]
            `

*/
function getFactorial() {
    var number = prompt(" Enter a number");
    var factorial = 1;
    for (i = number; i >= 1; i--) {
        factorial = factorial * i
    }
    alert(`The factorial of ${number} is ${factorial}`);
}
getFactorial()