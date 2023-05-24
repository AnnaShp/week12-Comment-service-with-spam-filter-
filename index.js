'use strict';

let userName;
let userLink;
let userText;


let sendName = function () {
    userName = document.getElementById('user_name').value;
    console.log(userName);
};

function sendLink() {
    userLink = document.getElementById('user_link').value;
    console.log(userLink);
};

function sendText() {
    userText = document.getElementById('user_text').value;
    console.log(userText);
};

function sendAll() {
    document.getElementById('resultName').innerText = userName;
    document.getElementById('resultText').innerText = userText;
    document.getElementById('resultLink').src = userLink;
};










/*document.querySelector('.button').addEventListener('click', function sendAll() {
    let result = document.getElementById('result');
    let name = str.slice(0);
    console.log(name);

});*/