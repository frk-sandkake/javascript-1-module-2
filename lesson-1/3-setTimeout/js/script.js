// The setTimeout method is used to execute a
// function after a specified period of time.

setTimeout(function () {
    console.log("Hello there!");
}, 5000);

// Select the class .loader
// use setTimeout
// Change the innerHTML to finish loading

const loading = document.querySelector(".loader");

setTimeout(function () {
    loading.innerHTML = "Finished downloading!";
}, 5000);

