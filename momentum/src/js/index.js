import ('../styles/style.css')
//------------time----------
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
time.textContent = 'Text';
date.textContent = 'Text';
greeting.innerText = 'Text';

function showTime() {
  const day = new Date();
  let hours = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10){
  minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  time.textContent = `${hours}:${minutes}:${seconds}`;
  showDate();
  showGreeting();
  setTimeout(showTime, 1000);
}
showTime();
//-----------date----------------------
function showDate() {
const week = new Array('Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
const day = new Date();
const daysName = day.getDay();
const month = day.toLocaleString('default', { month: 'long' });
const today = day.getDate();
const dayOfWeek = week[daysName];
date.textContent = dayOfWeek + ',' + ' ' + month + ' ' + today;
}
//--------------greeting-------------------
function showGreeting(){
  const day = new Date();
  let hours = day.getHours();
  const arrayOfGreeting = ['morning', 'afternoon', 'evening', 'night'];
  if (hours < 6 && hours >= 0) {
    greeting.innerText = `Good ${arrayOfGreeting[3]}`;
  } else if (hours < 12 && hours >= 6) {
    greeting.innerText = `Good ${arrayOfGreeting[0]}`;
  } else if (hours >= 12 && hours < 18) {
    greeting.innerText  = `Good ${arrayOfGreeting[1]}`;
  } else {
    greeting.innerText  = `Good ${arrayOfGreeting[2]}`;
  }
}
//----------name------
const nameOfUser = document.querySelector('.name');

function setLocalStorage(){
  localStorage.setItem('name', nameOfUser.value);
  console.log(nameOfUser.value)
}

function getLocalStorage(){
  if(localStorage.getItem('name')) {
    nameOfUser.value = localStorage.getItem('name');
  }
}
nameOfUser.addEventListener('change', setLocalStorage)
window.addEventListener('load', getLocalStorage)
window.addEventListener('beforunload', setLocalStorage);
//-------------slider-----------------------
const bodyBgImage = document.body;
function getRandomNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(20);
  let bgNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return bgNum;
}
function getTimeOfDay(){
  const day = new Date();
  let hours = day.getHours();
  let timeOfDay = '';
  if (hours < 6 && hours >= 0) {
    timeOfDay = 'night';
  } else if (hours < 12 && hours >= 6) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'evening';
  }
  return timeOfDay
}
function setBg() {
  let timeOfDay = getTimeOfDay();
  let bgNum = getRandomNum().toString();
  console.log(bgNum)
  if(bgNum < 10) {
    bgNum = bgNum.padStart(2, '0');
  }
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    bodyBgImage.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`;
    bodyBgImage.style.backgroundSize = 'cover';

  }
}
setBg();
