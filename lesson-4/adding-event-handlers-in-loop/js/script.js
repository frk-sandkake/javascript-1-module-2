const allDivs = document.querySelectorAll(".container > div");
console.log(allDivs);

for (var i = 0; i < allDivs.length; i++) {
    // console.log(allDivs[i].dataset.price);
    allDivs[i].onclick = function (e) {
        console.log("Price: " + e.target.dataset.price);
        console.log(this.dataset.price);
    };
}