let popUp = document.querySelector(".window");
let buttons = document.querySelectorAll(".open-window");
let closeButton = document.getElementById("close");

buttons.forEach(button => button.addEventListener("click", function () {
    console.log('im working');

    popUp.style.display = 'block';
    popUp.classList.toggle('visible');
    popUp.querySelector("h1").innerText = "Hello, I'm a pop-up";

    closeButton.addEventListener("click", function () {
        popUp.classList.toggle('visible');
        popUp.style.display = 'none';
    });
}));

let menuIcon = document.getElementById("menu-icon");
let menuBar = document.getElementById("menu");
let closeMenu = document.getElementById("menu-close");

menuIcon.addEventListener("click", function () {
   menuIcon.style.display = "none";
   menuBar.style.display = "block";
});
closeMenu.addEventListener("click", function () {
    menuBar.style.display = "none";
    menuIcon.style.display = "block";
});

