"use strict";

// обьявление переменных
let userName;
let userLink;
let userText;
const button = document.querySelector('button');


// функция возвращения имени c заглавной буквы в чат
function sendName() {
    let radio = document.querySelector('input[name="radio"]:checked').value;
    if ((radio === "Yes") && (userName !== "")) {
        userName = document.getElementById('user_name').value;
        let user = userName.substr(0, 1).toUpperCase() + userName.slice(1).toLowerCase();
        document.getElementById("resultName").textContent = user;
    }
    else if (radio === "No") {
        document.getElementById('div_user_name').style.display = "none";
        document.getElementById('resultName').textContent = "Username";
    }
}

// функция подставления ссылки юзера в чат в виде аватара
function sendAvatar() {
    userLink = document.getElementById('user_link').value;
    if (userLink !== "") {
        document.getElementById('resultLink').src = userLink;
    }
    else {
        document.getElementById('resultLink').src = image[random];
    }
}

// создание массива с картинками
let random = Math.floor(Math.random() * 6);
const image = [];
image[0] = "./img/crab.png";
image[1] = "./img/dolphin.png";
image[2] = "./img/fish.png";
image[3] = "./img/octopus.png";
image[4] = "./img/seahorse.png";
image[5] = "./img/koi-fish.png";

// функция обьявление спам-слов для замены
function checkSpam() {
    userText = document.querySelector('#user_text').value;
    let newStr = userText.replace(/(xxx|viagra)/gi, "***");
    document.getElementById('resultText').innerText = newStr;
}

// определение дня недели
let dayNumber = new Date().getDay();
let day =
    (dayNumber === 0) ? 'Воскресенье' :
        (dayNumber === 1) ? 'Понедельник' :
            (dayNumber === 2) ? 'Вторник' :
                (dayNumber === 3) ? 'Среда' :
                    (dayNumber === 4) ? 'Четверг' :
                        (dayNumber === 5) ? 'Пятница' :
                            (dayNumber === 6) ? 'Суббота' : 'Неизвестный день недели';

// определение даты и времени и функция подстановки времени в чат
let date = new Date();
function pullDate(date) {
    date = day + ',' + ' ' + date.getDate() + "." + "0" + (date.getMonth() + 1) + "." + date.getFullYear() + ' ' + 'в' + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    document.getElementById('resultDate').innerText = date;
}

// функция отправки имени, ссылки аватара, времени и текста в чат
button.onclick = function sendAll() {
    sendAvatar();
    sendName();
    checkSpam();
    pullDate(date);
}

