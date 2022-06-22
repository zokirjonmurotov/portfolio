"use strict";


// selecting elements
const dropMenu = document.querySelector(".nav-drop"),
  header = document.querySelector("header"),
  bars = document.querySelector(".bars"),
  cancel = document.querySelector(".cancel"),
  navItem2 = document.querySelectorAll(".navbar-item_2"),
  totop = document.querySelector("#scroll");


  // scroll actions
window.addEventListener("scroll", function() {
  header.classList.toggle("red", window.scrollY > 10);
  totop.classList.toggle("active", window.scrollY > 10);
});


// drop menu
bars.addEventListener("click", menu.bind("0"));
cancel.addEventListener("click", menu.bind("-100vw"));

navItem2.forEach(item => {
  item.addEventListener('click', menu.bind("-100vw"));
});

//functions
function menu() {
  dropMenu.style.right = this;
};