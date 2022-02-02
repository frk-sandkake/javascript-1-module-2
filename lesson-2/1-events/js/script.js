// A function expression is a
// function assigned to a variable

const myFunctionExpression = function () {
    console.log("This is a function expression");
};

myFunctionExpression();

// How to detect an event on a button
// Select the button with class .btn

const button = document.querySelector(".btn");

// 1: Use a function expression
// const handleClick = function () {
//     console.log("I clicked the BTN");
// };

// 2: Set the addEventListener
// button.addEventListener("click", handleClick);

// Way 2
button.onclick = function () {
    console.log("I clicked the BTN again");
};

// Question 3 key press
//
// The onKeyDown event is triggered when the user presses a key.
// The onKeyUp event is triggered when the user releases a key.
// The onKeyPress event
// is triggered when the user presses & releases
// a key (onKeyDown followed by onKeyUp).
// not used anymore

const myFirstNameInput = document.querySelector("#firstName");

const handleKeyPress = function (event) {
    console.log("A key is pressed");
    console.log(event);
    console.log(event.target);
};

myFirstNameInput.addEventListener("keydown", handleKeyPress);

const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function (event) {
    theHoverBtn.classList.add("hover");
    console.log(event.target.dataset.animal);
};

theHoverBtn.addEventListener("mouseover", handleMouseOver);

const handleMouseOut = function (event) {
    theHoverBtn.classList.remove("hover");
};

theHoverBtn.addEventListener("mouseout", handleMouseOut);

// On mouse over show the dataset

const dataAnimal = document.querySelectorAll("li");

for (let i = 0; i < dataAnimal.length; i++) {
    dataAnimal[i].addEventListener("mouseover", hoverDataAnimal);
}

function hoverDataAnimal(event) {
    console.log(event.target.dataset.animal);
}

// extends
