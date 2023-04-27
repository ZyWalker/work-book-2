"use strict";

//define function
function showGreeting(){
    const messageDiv = document.getElementById("messageDiv");
    //console.log(messageDiv);
    messageDiv.innerHTML = "Hi there!";
}

//call function
showGreeting();