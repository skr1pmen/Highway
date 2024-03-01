// document.querySelector(".burgerMenu").addEventListener("click", () => {
//     const nav = document.querySelector(".nav");
//     if (nav.classList.contains("active")) {
//         console.log(true)
//         nav.classList.add("active");
//     } else {
//         nav.classList.remove("active");
//     }
// });
const menu = document.querySelector(".burgerMenu"),
    nav = document.querySelector(".nav");
menu.addEventListener("click", () => {
    if (nav.classList.contains('active')) {
        nav.classList.remove("active");
    } else {
        nav.classList.add("active");
    }
});
