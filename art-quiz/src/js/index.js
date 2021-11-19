import ('../styles/style.css')
import images from './images.js';

const pages = document.querySelectorAll('.page');
const bloks = document.querySelectorAll('.quiz-blok');
const btnHome = document.querySelector('.category-btn');
const pageHome = document.querySelector('.quiz-list');
const boxBlok = document.querySelector('.blok-box');
const questionBox = document.querySelector('.question-box');

localStorage.setItem('currentRaund', 0);
localStorage.setItem('currentQuestion', 0);

let array =[];
for(let i= 0; i < 12; i++) {
  array.push(null);
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
//----создание блоков под раунды-----
class Raund {
  constructor(el, cont) {
    let raundBox = document.createElement("div");
    raundBox.classList.add("child-blok");
    raundBox.innerText = cont;
    this.el = raundBox;
    el.append(raundBox);
  }
}

for (let i = 0; i < 12; i++) {
  let cubes = new Raund(boxBlok, `Raund ${i+1}`);
  }
let cubes = boxBlok.querySelectorAll('.child-blok');

 cubes.forEach((item, index) => {
    item.style.backgroundImage = `url(./assets/img/${index * 10}.jpg)`;
    item.dataset.raund = index;
 })

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
console.log(questions)
console.log(answers)
const raund1 = document.querySelectorAll('.child-blok');
const artBox = document.querySelector('.art-box');




function getQuestion(raundNum, quesNum) {
  boxBlok.classList.add('hide');
  questionBox.classList.remove('hide');
  let imgQ = document.createElement('img');
    imgQ.src = `./assets/img/${raundNum * 10 + quesNum}.jpg`;
    artBox.append(imgQ);
}

function getAnswers(){
  const uniqAnswersByAuthors = [...new Set(questionByAuthor.map(item => item.author))];
  let arrayOfAnswers = [];

  function shuffle(uniqAnswersByAuthors) {
    for (let i = uniqAnswersByAuthors.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [uniqAnswersByAuthors[i], uniqAnswersByAuthors[j]] = [uniqAnswersByAuthors[j], uniqAnswersByAuthors[i]];
    }
  }
}

 raund1.forEach(item => item.addEventListener('click', ()=>{
   let currRaund = +localStorage.getItem('currentRaund');
   let currQues = +localStorage.getItem('currentQuestion');
   console.log(currQues,currRaund);
   getQuestion(currRaund, currQues);
 }))
