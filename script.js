const time = document.querySelector('.time');
const dateTime = document.getElementById('date-time');
const countDown = document.getElementById('countdown');
const testButton = document.getElementById('test-button');
const hourglass = document.getElementById('hourglass');
const clock = document.getElementById('clock');
const cardList = document.querySelectorAll('.card-list');
const cardListItems = document.querySelectorAll('.card-list-items');
const generalList = document.getElementById('card-list-1');
const todayList = document.getElementById('card-list-2');
const progressList = document.getElementById('card-list-3');
const doneList = document.getElementById('card-list-4');
const extendList1 = document.getElementById('card-list-5');
const extendList2 = document.getElementById('card-list-6');
const extendList3 = document.getElementById('card-list-7');


let isClock = 1;
let updatedOnLoad = false;

let generalArray = [];
let todayArray = [];
let progressArray = [];
let doneArray = [];
let extendArray1 = [];
let extendArray2 = [];
let extendArray3 = [];
let listArrays = [];


function changeTime() {
    if(!isClock) {
        clock.hidden = true;
        hourglass.hidden = false;
        isClock = 1;
    } else {
        hourglass.hidden = true;
        clock.hidden = false;
        isClock = 0;
    }
}


function displayTime() {
    const currentTime = new Date();
    const localTime = `${new Date(currentTime.getTime() - currentTime.getTimezoneOffset() * 60000).toISOString().split('T')[0]} ${new Date(currentTime.getTime() - currentTime.getTimezoneOffset() * 60000).toISOString().split('T')[1].split('.')[0]}`;
    dateTime.textContent = localTime;
}

function getSavedItems() {
    if (localStorage.getItem('generalItems')) {
        generalArray = JSON.parse(localStorage.generalItems);
    } else {
        generalArray = ['First thing', 'Second thing']
    }
    if (localStorage.getItem('generalItems')) {
        todayArray = JSON.parse(localStorage.generalItems);
    } else {
        todayArray = ['First thing', 'Second thing']
    }
    if (localStorage.getItem('generalItems')) {
        progressArray = JSON.parse(localStorage.generalItems);
    } else {
        progressArray = ['First thing', 'Second thing']
    }
    if (localStorage.getItem('generalItems')) {
        doneArray = JSON.parse(localStorage.generalItems);
    } else {
        doneArray = ['First thing', 'Second thing']
    }
}

function setSavedItems() {
    listArrays = [generalArray, todayArray, progressArray, doneArray];
    const arrayNames = ['general', 'today', 'progress', 'done'];
    arrayNames.forEach((arrayName, index) => {
        localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[index]));
    });
}

function createCardItem(cardEl, cardNumber, item, index) {
    const listEl = document.createElement('li');
    listEl.textContent = item;
    listEl.draggable = true;
    listEl.setAttribute('ondragstart', 'drag(event)');
    listEl.contentEditable = true;
    listEl.id = index;
    cardEl.appendChild(listEl);
}

function deleteEmptyEntry() {

}


function updateDOM(){
    setInterval(displayTime, 1000);
    if (!updatedOnLoad) {
        getSavedItems();
    }
    // General List
    generalList.textContent = '';
    generalArray.forEach((generalItem, index) => {
        createCardItem(generalList, 0, generalItem, index);
    });
    deleteEmptyEntry();
    // Today List
    todayList.textContent = '';
    todayArray.forEach((todayItem, index) => {
        createCardItem(todayList, 1, todayItem, index);
    });
    deleteEmptyEntry();
    // Progress List
    progressList.textContent = '';
    progressArray.forEach((progressItem, index) => {
        createCardItem(progressList, 2, progressItem, index);
    });
    deleteEmptyEntry();
    // Done List
    doneList.textContent = '';
    doneArray.forEach((doneItem, index) => {
        createCardItem(doneList, 3, doneItem, index);
    });
    deleteEmptyEntry();
    updatedOnLoad = true;
    setSavedItems();


}

// On Load
updateDOM();

hourglass.addEventListener('click', changeTime);
clock.addEventListener('click', changeTime);