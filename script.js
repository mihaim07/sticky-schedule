const time = document.querySelector('.time');
const dateTime = document.getElementById('date-time');
const countDown = document.getElementById('countdown');
const testButton = document.getElementById('test-button');
const hourglass = document.getElementById('hourglass');
const clock = document.getElementById('clock');
const cardListItems = document.querySelectorAll('.card-list-items');

console.log(cardListItems[0].children[0])

cardListItems.forEach(card => {
    let children = card.children;
    console.log(children);
    var arr = [].slice.call(children);
    console.log('arr', arr)
})

let isClock = 1;

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

setInterval(displayTime, 1000);

// On Load
displayTime();
hourglass.addEventListener('click', changeTime);
clock.addEventListener('click', changeTime);