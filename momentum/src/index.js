import ('./styles/style.css')
//------------time----------
const time = document.querySelector('.time');
time.textContent = 'Text';
function showTime() {
  const date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10){
  minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  time.textContent = hours + ":" + minutes + ":" + seconds;
  setTimeout(showTime, 1000);
}
showTime();

