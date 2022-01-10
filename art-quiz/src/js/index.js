import '../styles/style.css';
import images from './images';
import Raund from './raund';
import {
  pages,
  bloks,
  btnHome,
  pageHome,
  boxBlok,
  questionBox,
  artBox,
  answersBox,
  COUNT_OF_RAUNDS,
  EVERY_TENS_PICTURE,
  COUNT_OF_UNIQUM,
  COUNT_OF_BUTTONS,
} from './variables';

localStorage.setItem('currentRaund', 0);
localStorage.setItem('currentQuestion', 0);

let arrayOfRaunds = [];
for (let i = 0; i < COUNT_OF_RAUNDS; i++) {
  arrayOfRaunds.push(null);
}
if (localStorage.getItem('authorsAnswer') === null || localStorage.getItem('authorsAnswer') === '') {
  localStorage.setItem('authorsAnswer', JSON.stringify(arrayOfRaunds));
}
if (localStorage.getItem('picturesAnswer') === null || localStorage.getItem('picturesAnswer') === '') {
  localStorage.setItem('picturesAnswer', JSON.stringify(arrayOfRaunds));
}

function setImageForRaunds() {
  let raunds = boxBlok.querySelectorAll('.child-blok');
  raunds.forEach((item, index) => {
    item.style.backgroundImage = `url(./assets/img/${index * EVERY_TENS_PICTURE}.jpg)`;
    item.dataset.raund = index;
  });
}

function getRandom(min, max) {
  let minOfRandom = Math.ceil(min);
  let maxOfRandom = Math.floor(max);
  let ranNum = Math.floor(Math.random() * (maxOfRandom - minOfRandom + 1)) + minOfRandom;
  return ranNum;
}

bloks.forEach(blok => blok.addEventListener('click', function () {
  const pageName = this.dataset.page;
  this.parentNode.classList.add('hide');
  setImageForRaunds();
  pages.forEach(page => {
    if (page.classList.contains(pageName)) {
      page.classList.remove('hide');
    }
  });
}));

btnHome.addEventListener('click', function () {
  this.parentNode.classList.add('hide');
  pageHome.classList.remove('hide');
  questionBox.classList.add('hide');
});

function createRaunds() {
  for (let i = 0; i < COUNT_OF_RAUNDS; i++) {
    new Raund(boxBlok, `Raund ${i + 1}`);
  }
}

createRaunds();

const questionByAuthor = [];
const questionByName = [];

images.forEach((item, index) => {
  if (index % 2 === 0) {
    questionByAuthor.push({
      ...item,
      type: 'author',
    });
  }
  if (index % 2 !== 0) {
    questionByName.push({
      ...item,
      type: 'name',
    });
  }
});

const uniqAnswersByAuthors = [...new Set(questionByAuthor.map(item => item.author))];

function getAnswers() {
  let arrayOfAnswers = [];
  let currRaund = +localStorage.getItem('currentRaund');
  let currQues = +localStorage.getItem('currentQuestion');
  arrayOfAnswers.push(images[currRaund * EVERY_TENS_PICTURE + currQues].author);
  for (let i = 0; i < COUNT_OF_BUTTONS; i++) {
    let ranNum = getRandom(1, COUNT_OF_UNIQUM);
    if (arrayOfAnswers.some(el => el === uniqAnswersByAuthors[ranNum])) {
      i--;
    } else {
      arrayOfAnswers.push(uniqAnswersByAuthors[ranNum]);
    }
  }

  function shuffle(uniqArray) {
    for (let i = uniqArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [uniqArray[i], uniqArray[j]] = [uniqArray[j], uniqArray[i]];
    }
  }
  shuffle(arrayOfAnswers);
  return arrayOfAnswers;
}

function getQuestion(raundNum, quesNum) {
  const arrayOfGettingAnswers = getAnswers();
  boxBlok.classList.add('hide');
  questionBox.classList.remove('hide');
  let imgQ = document.createElement('img');
  imgQ.src = `./assets/img/${raundNum * EVERY_TENS_PICTURE + quesNum}.jpg`;
  artBox.append(imgQ);
  for (let i = 0; i <= COUNT_OF_BUTTONS; i++) {
    let but = document.createElement('button');
    but.classList.add('btn');
    but.textContent = arrayOfGettingAnswers[i];
    answersBox.append(but);
  }
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('child-blok')) {
    let currRaund = +localStorage.getItem('currentRaund');
    let currQues = +localStorage.getItem('currentQuestion');
    getQuestion(currRaund, currQues);
    getAnswers();
  }
});
