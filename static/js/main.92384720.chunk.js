"use strict";

setInterval(function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    console.log(contactForm);
    contactForm.addEventListener("submit", function () {
      console.log("hello");
    });
    // clearInterval(timer);
  }
}, 500);
