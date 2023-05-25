'use strict';

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
    return userName;
}

//функция "забирает" высланную ссылку
function sendLink() {
    userLink = document.getElementById('user_link').value;
}

//функция "забирает" высланный текст
function getText() {
    userText = document.getElementById('user_text').value;
}

// let str = getText(); - нужно?

//обьявление спам-слов и замена их на ***
function checkSpam(str) {
    const spam1 = viagra;
    const spam2 = /xxx/ig;
    str = str.replace(/spam1/ig, '***');
    str = str.replace(spam2, '***');
    return str;
}

// userText = checkSpam(); - нужно?

function sendAll() {
    document.getElementById('resultLink').src = userLink;
    document.getElementById('resultName').innerText = userName;
    document.getElementById('resultText').innerText = userText;
}










/*document.querySelector('.button').addEventListener('click', function sendAll() {
    let result = document.getElementById('result');
    let name = str.slice(0);
    console.log(name);

});*/