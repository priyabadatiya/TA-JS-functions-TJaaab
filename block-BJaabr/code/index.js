// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
    return String(n);
}
String();


// - Write a Function Expression
let ConvertToString = function convertToString(n) {
    return String(n);
}
String();

// - Write an Arrow Function without curly brackets (if possible)
let converttoString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let cOnvertToString = (n) => {
    return String(n);
};

// - Execute the function
convertToString(21);


// - Execute the function and store the return value in a variable.
var returnValue = convertToString(21);


// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n) {
    return n + 1
}
// - Write a Function Expression
let one = function addOne(n) {
    return n + 1
}

// - Write an Arrow Function without curly brackets(if possible)

let addOne = (n) => n + 1;

// - Write an Arrow Function with curly brackets

let addOne = (n) => { return n + 1 };

// - Execute the function
addOne(9);

// - Execute the function and store the return value in a variable.
var returnValue = addOne(9);


// - What is the typeof returnValue
// typeof returnValue is "string"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(n) {
    return n - 1
}

// - Write a Function Expression
let substract = function(n) {
    return n - 1
}

// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (n) => n - 1;


// - Write an Arrow Function with curly brackets
let substractOne = (n) => { return n - 1 };

// - Execute the function
substractOne(25);

// - Execute the function and store the return value in a variable.
var returnValue = substractOne(25);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(a, b) {
    return a + b
}
// - Write a Function Expression
let add = function(n) {
    return a + b
}

// - Write an Arrow Function without curly brackets(if possible)
let sum = (a, b) => a + b;


// - Write an Arrow Function with curly brackets
let sum = (a, b) => { return a + b };

// - Execute the function
sum(2, 5);

// - Execute the function and store the return value in a variable
var returnValue = sum(7);


// - What is the typeof returnValue
// typeof returnValue is number.

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(n) {
    return n ** 2
}

// - Write a Function Expression
let squ = function square(n) {
    return n ** 2
}

// - Write an Arrow Function without curly brackets(if possible)
let square = (n) => n ** 2;


// - Write an Arrow Function with curly brackets
let square = (a, b) => { return n ** 2 };

// - Execute the function
square(2 ** 2);

// - Execute the function and store the return value in a variable
var returnValue = square(2 ** 2);

// - What is the typeof returnValue
// typeof returnValue is number.

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y) {
    if (x > y) {
        return true
    } else {
        return false
    }
}

// - Write a Function Expression
let is = function isGreater(x, y) {
    if (x > y) {
        return true
    } else {
        return false
    }
}

// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x, y) => (x > y) ? true : false

// - Write an Arrow Function with curly brackets
let isGreater = (x, y) => {
    if (x > y) {
        return true
    } else {
        return false
    }
}

// - Execute the function
isGreater(9, 90);

// - Execute the function and store the return value in a variable
var returnValue = isGreater(9, 90);

// - What is the typeof returnValue
// thr typeof return value is boolean.
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(n) {
    if (n / 2) {
        return "Number is even"
    } else {
        return "Number is odd"
    }
}

// - Write an anonymous Function Expression
let oreven = function(n) {
    if (n / 2) {
        return "Number is even"
    } else {
        return "Number is odd"
    }
}

// - Write an named Function Expression
let oreven = function oddOrEven(n) {
    if (n / 2) {
        return "Number is even"
    } else {
        return "Number is odd"
    }
}


// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (n) => (n / 2) ? "Number is even" : "Number is odd";

// - Write an Arrow Function with curly brackets
let oddOrEven = (n) => {
    if (n / 2) {
        return "Number is even"
    } else {
        return "Number is odd"
    }
}

// - Execute the function
oddOrEven(4);


// - Execute the function and store the return value in a variable
var returnValue = oddOrEven(4);

// - What is the typeof returnValue
// the typeof returnValue string.