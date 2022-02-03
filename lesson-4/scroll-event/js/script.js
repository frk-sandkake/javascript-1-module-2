// On scroll event

const nav = document.querySelector("nav");

function handleScroll() {
    console.log(window);
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}

window.onscroll = handleScroll;

// Can also use addEventListener like this:

// window.addEventListener("scroll", handleScroll);