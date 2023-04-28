"use strict";

function greet() {
  const firstNameElement = document.getElementById("nameField");
  const messageParagraphElement = document.getElementById("messageParagraph");
  const firstName = firstNameElement.value;
  let greeting = `What's Up ${firstName}`;
  messageParagraph.innerText = greeting;
}
