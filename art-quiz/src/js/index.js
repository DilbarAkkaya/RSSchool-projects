import ('../styles/style.css')
import images from './images.js';

const pages = document.querySelectorAll('.page');
const bloks = document.querySelectorAll('.quiz-blok');
const btnHome = document.querySelector('.category-btn');
const pageHome = document.querySelector('.quiz-list');

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
})
//----создание блоков под раунды-----
const boxBlok = document.querySelector('.blok-box');
class Raund {
  constructor(el, cont) {
    let raundBox = document.createElement("div");
    let imgRaund = document.createElement('img');
    raundBox.classList.add("child-blok");
    raundBox.innerText = cont;

    let arr =[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
    for(let j = 0; j < arr.length;j=j+10){
  //  imgRaund.src = `./assets/img/${arr[j]}.jpg`;
//raundBox.setAttribute('data-key', arr[j]);
    raundBox.style.backgroundImage = `url(./assets/img/${arr[j]}.jpg)`;
    raundBox.style.backgroundRepeat = "no-repeat"}
  /*  raundBox.onclick = () => {
      this.onClick();
    };*/
    this.el = raundBox;
    el.append(raundBox);
 el.append(imgRaund);
  }
}
for (let i = 1; i < 13; i++) {
  const cube = new Raund(boxBlok, `Raund ${i}`);
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
console.log(questions)
console.log(answers)

/*let childBlok = document.createElement('div');
let imgRaund1 = document.createElement('img');
let array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
for(let i = 0; i< array.length; i++){
  imgRaund1.src = `./assets/img/${array[i]}.jpg`;
  childBlok.className = 'child-blok';
childBlok.innerHTML = `Raund ${array[i]}`;
childBlok.append(imgRaund1);
const categoryBlok = document.querySelector('.category');
categoryBlok.appendChild(childBlok);
}*/

//------получение изображений из файла*/
/*function setBg() {
  let bgNum = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
  for(let i = 0; i < bgNum.length; i++){
    let imgRaund1 = document.createElement('img');
  imgRaund1.src = `.assets/img/${bgNum[i]}.jpg`;
  cube.append(imgRaund1);
  }
}
setBg()*/
