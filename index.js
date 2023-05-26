"use strict";

// обьявление переменных
let userName;
let userLink;
let userText;

//функция возвращения исправленного имени в чат
function sendName() {
    userName = document.getElementById('user_name').value;
    userName = userName.replaceAll(' ', '');
    let firstLetter = userName[0].toUpperCase();
    const user = userName.slice(1).toLowerCase();
    userName = firstLetter + user;
    document.getElementById("resultName").innerText = userName;
}

//функция "забирает" высланную ссылку
function sendLink() {
    userLink = document.getElementById('user_link').value;
}

//функция "забирает" высланный текст
function getText() {
    userText = document.getElementById('user_text').value;
}

// обьявление спам-слов для замены
function checkSpam () {
    let newStr = userText.replace(/(xxx|viagra)/gi, "***");
    document.getElementById("resultText").innerText = newStr;
}

function sendAll() {
    document.getElementById('resultLink').src = userLink;
    sendName();
    checkSpam ();
}