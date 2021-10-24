import ('../styles/style.css')
import ('../styles/owfont-regular.css')
import { library } from 'webpack';
import playList from './playList.js';

//------------time----------
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
time.textContent = 'Text';
date.textContent = 'Text';
greeting.innerText = 'Text';
let bgNum;
let min = 1;
let max = 20;

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
    greeting.innerText = `Good ${arrayOfGreeting[3]}, dear`;
  } else if (hours < 12 && hours >= 6) {
    greeting.innerText = `Good ${arrayOfGreeting[0]}, dear`;
  } else if (hours >= 12 && hours < 18) {
    greeting.innerText  = `Good ${arrayOfGreeting[1]}, dear`;
  } else {
    greeting.innerText  = `Good ${arrayOfGreeting[2]}, dear`;
  }
}
//----------name------
const nameOfUser = document.querySelector('.name');
function setLocalStorage(){
  localStorage.setItem('name', nameOfUser.value);
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
function getSlidePrev() {
 bgNum = bgNum - 1;
 if(bgNum === min - 1) {
   bgNum = 20;
 }setBg();
}
slidePrev.addEventListener('click', getSlidePrev);
function getSlideNext() {
  bgNum = bgNum + 1;
  if(bgNum === max + 1) {
    bgNum = 0;
  }setBg();
 }
 slideNext.addEventListener('click', getSlideNext);

 const weatherIcon = document.querySelector('.weather-icon');
 const temperature = document.querySelector('.temperature');
 const wind = document.querySelector('.wind');
 const humidity = document.querySelector('.humidity');
 const weatherDescription = document.querySelector('.weather-description');
 const city = document.querySelector('.city');

 /*function setLocalStorageCity(){
   localStorage.setItem('city', city.value);
 }

 function getLocalStorageCity(){
   if(localStorage.getItem('city')) {
     city.value = localStorage.getItem('city');
   }
 }*/

 async function getWeather() {
  // getLocalStorageCity();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=354e311f752282cc59a3b898c584baf1&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  //console.log(data)
  weatherIcon.style.display = 'block';
  weatherIcon.style.fontSize = '150px';
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  wind.textContent = `Wind: ${data.wind.speed} м/с`;
  humidity.textContent = `Humidity:  ${data.main.humidity}`
  weatherDescription.textContent = data.weather[0].description;
}

city.addEventListener('change', () => {
  //setLocalStorageCity
  getWeather(city.value)
 });
 // window.addEventListener('load', getLocalStorageCity, getWeather)
  //window.addEventListener('beforunload', setLocalStorageCity, getWeather);

//------------quotes-----
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
async function  getQuotes() {
  const res = await fetch('assets/json/quotes.json');
  const data = await res.json();
  let random = data[Math.floor(Math.random() * data.length)];
  quote.innerText = `" ${random.quote} "`;
  author.innerText = random.source;
}
getQuotes();
window.addEventListener('load', getQuotes())
changeQuote.addEventListener('click', getQuotes)
//-------------player-----------------
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
const playBtn = document.querySelector('.play');
let isPlay = false;

let playNum = 0;
const audio = new Audio();
function playAudio(){
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  if(!isPlay) {
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
}

const playListContainer = document.querySelector('.play-list');
for (let i = 0; i < playList.length; i++){
const li = document.createElement('li')
li.classList.add('play-item');
li.textContent = playList[i].title;
playListContainer.append(li);
}
const liList = document.querySelectorAll('.play-item');

function addClassItemActive(){
  liList.forEach((el,i) => {
   if(playNum !== i){
     el.classList.remove('item-active')
   } else{
     el.classList.add('item-active');
   }
  })
}
function toggleBtn() {
  playBtn.classList.toggle('pause')
}

playBtn.addEventListener('click', playAudio);
playBtn.addEventListener('click', toggleBtn);
playBtn.addEventListener('click', addClassItemActive);
//-------avd player-----
const wrapper = document.querySelector('.player-wrapper');
const musicName = wrapper.querySelector('.song-details .song-title');
const playPauseBtn = wrapper.querySelector('.play-pause');
const prevBtn = wrapper.querySelector('#prev');
const nextBtn = wrapper.querySelector('#next');
const progressBar = wrapper.querySelector('.progress-bar');
const musicList = wrapper.querySelector('.music-list');
const showMoreBtn = wrapper.querySelector('#more-music');
const hideMoreBtn = musicList.querySelector('#close');


let musicIndex = 1;
window.addEventListener('load', ()=>{
  loadMusic(musicIndex);
})
function loadMusic(indexNumb){
  musicName.innerText = playList[indexNumb-1].title;
  audio.src = playList[indexNumb - 1].src;
}
function playMusic(){
  wrapper.classList.add('paused');
  playPauseBtn.querySelector('i').innerText='pause';
  audio.play();
  addClassItemActive(playNum);
}

function pauseMusic(){
  wrapper.classList.remove('paused');
  playPauseBtn.querySelector('i').innerText='play_arrow';
  audio.pause();
}
function nextMusic(){
  musicIndex++;
  musicIndex > playList.length ? musicIndex = 1 : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
}
function prevMusic(){
  musicIndex--;
  musicIndex < 1 ? musicIndex = playList.length : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
}
playPauseBtn.addEventListener('click', ()=>{
  const isMusicPaused = wrapper.classList.contains('paused');
  isMusicPaused ? pauseMusic() : playMusic();
})

nextBtn.addEventListener('click', ()=>{
  nextMusic();
})
prevBtn.addEventListener('click', ()=>{
  prevMusic();
})
audio.addEventListener('timeupdate', (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  let musicCurrentTime = wrapper.querySelector('.current-time');
  let musicDuration = wrapper.querySelector('.max-duration');
  audio.addEventListener('loadeddata', ()=> {
   //update song totaal duration
    let audioDuration = audio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10){
      totalSec = `0${totalSec}`;
    }
    musicDuration.innerText = `${totalMin}:${totalSec}`;
  });
  //update playing song current time
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if(currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});
const progressArea = wrapper.querySelector('.progress-area');
progressArea.addEventListener('click', (e)=>{
  let progressWidthval = progressArea.clientWidth;
  let clickedOffSetX = e.offsetX;
  let songDuration = audio.duration;
  audio.currentTime = (clickedOffSetX / progressWidthval)* songDuration
  audio.play();
});
const repeatBtn = wrapper.querySelector('#repeat-plist');
repeatBtn.addEventListener('click', ()=>{
  let getText = repeatBtn.innerText;
  switch(getText){
    case "repeat":
      repeatBtn.innerText = "repeat_one";
      repeatBtn.setAttribute('title','Song looped');
      break;
      case "repeat_one":
        repeatBtn.innerText = "shuffle";
        repeatBtn.setAttribute('title','Playback shuffle');
        break;
        case "shuffle":
          repeatBtn.innerText = "repeat";
          repeatBtn.setAttribute('title',"Playlist looped");
          break;
  }
})
audio.addEventListener('ended', ()=> {
  let getText = repeatBtn.innerText;
  switch(getText){
    case "repeat":
      nextMusic();
      break;
      case "repeat_one":
       audio.currentTime = 0;
       loadMusic(musicIndex);
       playMusic();
        break;
        case "shuffle":
          let randIndex = Math.floor((Math.random() * playList.length) + 1);
          do{
            randIndex = Math.floor((Math.random() * playList.length) + 1);
          }while(musicIndex == randIndex);
          musicIndex = randIndex;
          loadMusic(musicIndex);
          playMusic();
          break;
  }
});
showMoreBtn.addEventListener('click', ()=>{
  musicList.classList.toggle('show');
});
hideMoreBtn.addEventListener('click',()=>{
  showMoreBtn.click();
});
