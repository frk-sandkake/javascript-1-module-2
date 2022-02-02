// The setInterval method is similar to
// setTimeout but it executes a function at
// a certain interval until it is cleared.

// let count = 0;

// const stopInterval = setInterval(function () {
//     count++;
//     if (count === 5)
//         clearInterval(stopInterval);
//     console.log("Hi, I'm Thea and I want attention!");
// }, 2000);

// let count1 = 0;

// const intervalId = setInterval(function () {
//     console.log("Here");
//     count1++;
//     console.log(count1);
//     if (count1 === 5) {
//         console.log("Finished interval");
//         clearInterval(intervalId);
//     }
// }, 2300);

const container = document.querySelector(".container");
let count3 = 0;
const liCountStop = setInterval(() => {
    count3++;
    let addLi = document.createElement("li");
    addLi.innerHTML = count3;
    container.append(addLi);
    if (count3 === 10) {
        clearInterval(liCountStop);
    }
}, 2000);

// setInterval

const word = "Patrik&Thea💝";
let count = 1;
function logMyWord() {
    if (count === 5) {
        clearInterval(wordCount);
    }
    console.log(count + " " + word);
    count++;
}

let wordCount = setInterval(logMyWord, 2000);
