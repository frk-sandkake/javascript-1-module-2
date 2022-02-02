// onchange event

const dropdown = document.querySelector("select");
const circleContainer = document.querySelector(".circles");

dropdown.onchange = function (event) {
    console.log("here");
    console.log("using this ", this.value);
    console.log("using event target value", event.target.value);
    console.log(event);
    circleContainer.innerHTML = "";
    for (let i = 1; i <= event.target.value; i++) {
        console.log(i);
        circleContainer.innerHTML += `<li class="circle">${i}</li>`;
    }
};

