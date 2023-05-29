"use strict";

// обьявление переменных
let userName = document.getElementById('user_name').value;
let userLink= document.getElementById('user_link').value;
let userText;

//функция возвращения исправленного имени в чат
function sendName() {
    let firstLetter = userName[0].toUpperCase();
    const user = userName.slice(1).toLowerCase();
    userName = firstLetter + user;
    document.getElementById("resultName").innerText = userName;
}

function getText (){
    userText = document.querySelector('#user_text').value;
}

// обьявление спам-слов для замены
function checkSpam() {
    let newStr = userText.replace(/(xxx|viagra)/gi, "***");
    document.getElementById("resultText").innerText = newStr;
}

function sendAll() {
    document.getElementById('resultLink').src = userLink;
    sendName();
    checkSpam();
}