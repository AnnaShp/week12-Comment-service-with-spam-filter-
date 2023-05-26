'use strict';
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

//обьявление спам-слов и замена их на ***
let str = getText();
let spam1;
let spam2;
let newStr;

function checkSpam() {
    spam1 = /viagra/gi;
    spam2 = /xxx/gi;
    newStr = str.replaceAll((spam1 | spam2), '***');
    return newStr;
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