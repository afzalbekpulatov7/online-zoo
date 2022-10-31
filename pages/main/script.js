"use strict";

//hamburger menu -hide after click
const hamburger = document.querySelectorAll(".menu li a");
const navbar = document.querySelector(".navbar");
const toggle = document.querySelector("#toggle");

const hide = function () {
  navbar.style.transform = "scale(0)";
  toggle.checked = false;
};
const show = function () {
  navbar.style.transform = "scale(1)";
};

for (let i = 0; i < hamburger.length; i++) {
  hamburger[i].addEventListener("click", hide);
}
navbar.addEventListener("click", show);

