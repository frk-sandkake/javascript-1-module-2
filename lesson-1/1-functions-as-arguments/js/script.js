// These are often called callbacks. It is very common
// to pass functions as arguments to other ***
// functions and have the receiving function execute them.

function showMeMessage() {
    console.log("Hello one");
}

showMeMessage();

// IIFE Immediately Invocate Function Exec

(function doSomething() {
    console.log("Hello two");
})();

// Hoisting: call the function before creating it
// only when you create a function, not when you do function assign to variable

showMeNewMessage();

function showMeNewMessage() {
    console.log("Hello three");
}

// This will not work:
// doSomething();

// const doSomething = function () {
//     console.log("Hello, I'm anonymous function");
// };

// Callback functions - functions as arguments

function logTheArgument(someFunction) {
    console.log(someFunction);
}

logTheArgument(function () {
    console.log("Hello, Linda");
});


function logTypeOf(someArgument) {
    console.log(typeof someArgument);
}

logTypeOf("Linda"); // string
logTypeOf(764758); // number

const obj = {};

logTypeOf(obj); // object

const someArray = [];

logTypeOf(someArray); // object, because JS sees both object and array as objects


function justSomeFunction() {
    console.log("Hello, I'm a happy function!");
}

logTypeOf(justSomeFunction); // Function

