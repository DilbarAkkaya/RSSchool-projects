import ('../styles/style.css')
import ('../styles/owfont-regular.css')
//import { library } from 'webpack';
import playList from './playList.js';

//------------time----------
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
const greetingId = document.getElementById('greeting');
time.textContent = 'Text';
date.textContent = 'Text';
greeting.innerText = 'Text';
let bgNum;
let min = 1;
let max = 20;
if (localStorage.getItem('language') === '' || localStorage.getItem('language') === null) localStorage.setItem('language', 'en');
const greetingTranslation = {
  ru: {
    greeting:{
      morning: 'Доброе утро',
      afternoon: 'Добрый день',
      evening: 'Добрый вечер',
      night: 'Доброй ночи'
    },
    wind: 'Скорость ветра',
    units: 'м/с',
    humidity: 'Влажность',
    now: 'Сейчас проигрывается',
    error: 'Ошибка, неверный город'
  },
  en: {
    greeting:{
      morning: 'Good morning',
      afternoon: 'Good aftenoon',
      evening: 'Good evening',
      night: 'Good night'
    },
    wind: 'Wind',
    units: 'm/s',
    humidity: 'Humidity',
    now: 'Now playing',
    error: 'Error, wrong city'
  },

}
function showGreeting(){
  let lang = localStorage.getItem('language');
  let langSetting = greetingTranslation[lang];
  greetingId.textContent = langSetting.greeting[localStorage.getItem('timeOfDay')]
}
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
const weekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'];
const day = new Date();
const daysName = day.getDay();
const month = day.toLocaleString(localStorage.getItem('language'), { month: 'long'});
const today = day.getDate();
if(localStorage.getItem('language') === 'en') {
  const dayOfWeek = week[daysName];
date.textContent = dayOfWeek + ',' + ' ' + month + ' ' + today;
}else {
  const dayOfWeek = weekRu[daysName];
date.textContent = dayOfWeek + ',' + ' ' + month + ' ' + today;
}

}
//--------------greeting-------------------
/*function showGreeting(){
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
}*/
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
window.addEventListener('load', getLocalStorage, getLocalStorageCity)
window.addEventListener('beforunload', setLocalStorage);
//-------------slider-----------------------
const bodyBgImage = document.body;
function getRandomNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(20);
  let bgNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return bgNum;
}
let timeOfDay = '';
function getTimeOfDay(){
  const day = new Date();
  let hours = day.getHours();
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
getTimeOfDay();
localStorage.setItem('timeOfDay',timeOfDay)

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

const errorContent = document.querySelector('.weather-error');
 function getLocalStorageCity(){
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  } else city.value = 'Minsk';
  getWeather();
}
 async function getWeather() {
  let lang = localStorage.getItem('language');
  let langSetting = greetingTranslation[lang];
  // getLocalStorageCity();
  try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=354e311f752282cc59a3b898c584baf1&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    //console.log(city.value)
    weatherIcon.style.display = 'block';
    weatherIcon.style.fontSize = '150px';
    weatherIcon.classList.add('weather-icon', 'owf');
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    wind.textContent = `${langSetting.wind}: ${data.wind.speed} ${langSetting.units}`;
    humidity.textContent = `${langSetting.humidity}:  ${data.main.humidity}`;
    weatherDescription.textContent = data.weather[0].description;
  } catch (e) {
    errorContent.textContent = `${langSetting.error}`;
    weatherIcon.style.display = 'none';
    wind.textContent ='';
    temperature.textContent = '';
    humidity.textContent = '';
    weatherDescription.textContent = '';

  }

}

city.addEventListener('change', getWeather);
window.addEventListener('load', getLocalStorageCity);

//------------quotes-----
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
async function  getQuotes() {
  if(localStorage.getItem('language') === 'en'){

    const res = await fetch('assets/json/quotes.json');
    const data = await res.json();
    let random = data[Math.floor(Math.random() * data.length)];
    quote.innerText = `" ${random.quote} "`;
    author.innerText = random.source;
  } else {
    const res = await fetch('assets/json/quotes_ru.json');
    const data = await res.json();
    let random = data[Math.floor(Math.random() * data.length)];
    quote.innerText = `" ${random.text} "`;
    author.innerText = random.author;
  }
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
audio.src = playList[playNum].src;
audio.currentTime = 0;

function playAudio(){
  if(!isPlay) {
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
  audio.addEventListener('ended', ()=>{
    playNextAudio();
  })
}
function playNextAudio(){
  playNum++;
  if(playNum > playList.length -1) playNum=0;
  playAudio();
}
function toggleBtn() {
  playBtn.classList.toggle('pause')
}

playBtn.addEventListener('click', playAudio);
playBtn.addEventListener('click', toggleBtn);

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
  chClassItemActive(musicIndex);
  audio.addEventListener('.ended', ()=>{
    nextMusic()
  })
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
  playMusic()
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
const playListContainer = document.querySelector('.play-list');
for (let i = 0; i < playList.length; i++){
  const li = document.createElement('li')
  li.classList.add('play-item');
  li.textContent = playList[i].title;
  playListContainer.append(li);
}
const liList = document.querySelectorAll('.play-item');
function chClassItemActive(){
  liList.forEach((el,i) => {
   if(musicIndex-1 !== i){
     el.classList.remove('item-active')
   } else{
     el.classList.add('item-active');
   }
  })
}
const volumeRange = wrapper.querySelector('.volume');
const volWrap = wrapper.querySelector('.volume-wr');
const ivolume = wrapper.querySelector('.i-volume');

function volumeToggle(){
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeRange.value = '0';
    volWrap.querySelector('i').innerText = 'volume_off';
    volumeRange.style.background = `linear-gradient(to right, rgba(238,130,238, 1) 0%, rgba(253,238,240, 1) 0%)`;
  } else {
   // video.muted = false;
    volumeRange.value = audio.volume * 100;
    volWrap.querySelector('i').innerText = 'volume_up';

  }
};
volumeRange.addEventListener('input', function(e) {
  volumeRange.style.background = `linear-gradient(to right, rgba(238,130,238, 1) ${this.value}%, rgba(253,238,240, 1) ${this.value}%)`;
  audio.volume = volumeRange.value / 100;
 if (volumeRange.value <= 0) {
  volWrap.querySelector('i').innerText = 'volume_off';
 } else {
  volWrap.querySelector('i').innerText = 'volume_up';
 }
 }, false);

window.addEventListener('load', ()=> {
  volumeRange.style.background = `linear-gradient(to right, rgba(238,130,238, 1) 30%, rgba(253,238,240, 1) 30%)`;
})
 ivolume.addEventListener('click', volumeToggle);

 //------setting------
 const settingBtn = document.querySelector('.i-setting i');
 settingBtn.addEventListener('click', ()=> {
  settingList.classList.toggle('none');
 })
const now = document.getElementById('now');
let lang = localStorage.getItem('language');
let langSetting = greetingTranslation[lang];
now.textContent = langSetting.now;

function changeLanguage(e) {
  localStorage.setItem('language', e.target.textContent);
  let lang = localStorage.getItem('language');
  let langSetting = greetingTranslation[lang];

 getWeather();
 getQuotes();

now.textContent = langSetting.now;
}
 const ruBtn = document.querySelector('.rus');
 const enBtn = document.querySelector('.eng');
 const settingList = document.querySelector('.setting-list');

ruBtn.addEventListener('click', changeLanguage)
enBtn.addEventListener('click', changeLanguage)
//settingList.addEventListener('click', changeLanguage)

async function getLinkToImage(){
  const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17'
  const res = await fetch(url);
  const data = await res.json();
  let dataUrl = data.urls.regular;
  let imageFromApi = new Image();
  imageFromApi.src = `${dataUrl}`;
  imageFromApi.addEventListener('load', ()=> {
    body.style.backgroundImage = `url('${dataUrl}')`;
  })}
const fotoApi = document.querySelector('.api');
fotoApi.addEventListener('click', getLinkToImage)
