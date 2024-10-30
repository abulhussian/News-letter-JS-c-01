"use strict";
const subscribeBtn = document.querySelector(".btn-main");
const dismissBtn = document.querySelector(".dismiss-btn");
const desktop = document.querySelector(".container-main");
const TqPage = document.querySelector(".conatiner-tq");
const inputEmail = document.querySelector(".email-input");
// const inputEmailWrong = document.querySelector(".email-input-wrong");
const emailText = document.querySelector(".Email-normal");
const emailTextWrong = document.querySelector(".Email-wrong");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

subscribeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const emailValue = inputEmail.value;
  console.log(emailValue);
  if (emailPattern.test(emailValue)) {
    desktop.classList.add("hidden");
    TqPage.classList.remove("hidden");
  } else {
    // subscribeBtn.addEventListener("click", function (e) {
    // inputEmailWrong.classList.add("hidden");
    inputEmail.classList.add("active");
    emailTextWrong.classList.remove("hidden");
    emailText.classList.add("hidden");
    // });
  }
});

dismissBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // desktop.classList.remove("hidden");
  // TqPage.classList.add("hidden");
  window.location.reload();
});
