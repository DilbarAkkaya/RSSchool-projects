import ('../styles/style.css')
import images from './images.js';
import { Raund } from './raund.js';

const pages = document.querySelectorAll('.page');
const bloks = document.querySelectorAll('.quiz-blok');
const btnHome = document.querySelector('.category-btn');
const pageHome = document.querySelector('.quiz-list');
const boxBlok = document.querySelector('.blok-box');
const questionBox = document.querySelector('.question-box');
const COUNT_OF_RAUNDS = 12;
localStorage.setItem('currentRaund', 0);
localStorage.setItem('currentQuestion', 0);

let arrayOfRaunds =[];
for(let i= 0; i < COUNT_OF_RAUNDS; i++) {
  arrayOfRaunds.push(null);
}
if(localStorage.getItem('authorsAnswer') === null || localStorage.getItem('authorsAnswer') === '') {
  localStorage.setItem('authorsAnswer', JSON.stringify(array))
}
if(localStorage.getItem('picturesAnswer') === null || localStorage.getItem('picturesAnswer') === '') {
  localStorage.setItem('picturesAnswer', JSON.stringify(array))
}

bloks.forEach(blok => blok.addEventListener('click', function() {
  const pageName = this.dataset.page;
  this.parentNode.classList.add('hide');
  setImageForRaunds()
  pages.forEach(page => {
    if(page.classList.contains(pageName)) {
      page.classList.remove('hide')
    }
  })
}))

btnHome.addEventListener('click', function(){
  this.parentNode.classList.add('hide');
  pageHome.classList.remove('hide');
  questionBox.classList.add('hide');
})


function createRaunds(){
  for (let i = 0; i < 12; i++) {
    new Raund(boxBlok, `Raund ${i+1}`);
  }
}
createRaunds()

function setImageForRaunds(){
  let raunds = boxBlok.querySelectorAll('.child-blok');

  raunds.forEach((item, index) => {
     item.style.backgroundImage = `url(./assets/img/${index * 10}.jpg)`;
     item.dataset.raund = index;
  })
}


const splitArr = (arr,chunks) =>[
  ...Array(chunks),
].map((_,c) => arr.filter((n, index) => index % chunks === c));
const questionByAuthor =[];
const questionByName = [];
images.forEach((item, index) => {
  if(index % 2===0){
    questionByAuthor.push({
      ...item,
      type: 'author',
    });
  }
  if(index %2 !== 0){
    questionByName.push({
      ...item,
      type: 'name',
  });
 }
});

const uniqAnswersByAuthors = [...new Set(questionByAuthor.map(item => item.author))];
const uniqAnswersByName = [...new Set(questionByName.map(item => item.author))];

const newQuestionsByAuthor = splitArr(questionByAuthor, 12);
const newQuestionsByName = splitArr(questionByName, 12);

const answers ={
  uniqAnswersByAuthors,
  uniqAnswersByName,
}
const questions ={
  questionByAuthor,
  questionByName,
}

const artBox = document.querySelector('.art-box');
const answersBox = document.querySelector('.answers-box');

function getQuestion(raundNum, quesNum) {
  const array = getAnswers();
  boxBlok.classList.add('hide');
  questionBox.classList.remove('hide');
  let imgQ = document.createElement('img');
    imgQ.src = `./assets/img/${raundNum * 10 + quesNum}.jpg`;
    artBox.append(imgQ);
    for(let i = 0; i <= 3; i++){
      let but = document.createElement('button');
      but.classList.add('btn');
      but.textContent = array[i];
      answersBox.append(but);
    }
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
}

function getAnswers(){
  const uniqAnswersByAuthors = [...new Set(questionByAuthor.map(item => item.author))];
  let arrayOfAnswers = [];
  let currRaund = +localStorage.getItem('currentRaund');
  let currQues = +localStorage.getItem('currentQuestion');
  arrayOfAnswers.push(images[currRaund*10+currQues].author);
  for(let i = 0; i < 3; i++){
    let ranNum = getRandom(1,67);
    if(arrayOfAnswers.some(el => el === uniqAnswersByAuthors[ranNum])) {
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

let raunds = boxBlok.querySelectorAll('.child-blok');
 raunds.forEach(raund => raund.addEventListener('click', ()=>{

   let currRaund = +localStorage.getItem('currentRaund');
   let currQues = +localStorage.getItem('currentQuestion');
   getQuestion(currRaund, currQues);
   getAnswers()
 }))
