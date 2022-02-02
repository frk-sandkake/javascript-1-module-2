// Key Up Event

const textArea = document.querySelector('textarea');
const charsCounter = document.querySelector(".character-count span");
const formBtn = document.querySelector("button");
console.dir(formBtn);

textArea.onkeyup = function (e) {
    console.log("Event:", e);
    console.log("Key:", e.key);
    console.log("Value:", e.target.value);
    const numOfCharsEnter = e.target.value.length;
    console.log("Number of characters entered:", numOfCharsEnter);
    charsCounter.innerHTML = numOfCharsEnter;
    // if (numOfCharsEnter >= 5) {
    //     formBtn.disabled = false;
    // } else {
    //     formBtn.disabled = true;
    // }
    formBtn.disabled = numOfCharsEnter <= 5; // shorter if/else conditions
};

