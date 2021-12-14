import('../styles/style.css')
import data from './data.js';
import noUiSlider from 'nouislider/dist/nouislider.mjs';
import { Card } from './card.js';

const sliderCount = document.getElementById('slider-count');

noUiSlider.create(sliderCount, {
  start: [20, 80],
  connect: true,
  range: {
    'min': 1,
    'max': 12
  }
})

const sliderYear = document.getElementById('slider-year');

noUiSlider.create(sliderYear, {
  start: [20, 80],
  connect: true,
  range: {
    'min': 1940,
    'max': 2020
  }
})

const pages = document.querySelectorAll('.page');
const links = document.querySelectorAll('.link');
const cardBlock = document.querySelector('.card-block');
const counterFavorite = document.querySelector('.favorite-count');

links.forEach(link => link.addEventListener('click', function () {
  const pageName = this.dataset.page;
  pages.forEach(page => {
    if (page.classList.contains(pageName)) {
      page.classList.remove('hide');
    } else {
      page.classList.add('hide');
    }
  })
}))

for (let i = 0; i < data.length; i++) {
  data[i].favorite = data[i].favorite ? "Да" : "Нет";
  let card = new Card(cardBlock, `
        <h2 class="card-title">${data[i].name}</h2>
        <img src="/assets/toys/${i+1}.png" alt="toy" class="card-img">
        <div class="card-descr">
          <p class="count">Количество: <span>${data[i].count}</span></p>
          <p class="year">Год покупки: <span>${data[i].year}</span></p>
          <p class="shape">Форма: <span>${data[i].shape}</span></p>
          <p class="color">Цвет: <span>${data[i].color}</span></p>
          <p class="size">Размер: <span>${data[i].size}</span></p>
          <p class="favorite">Любимая: <span>${data[i].favorite}</span></p>
        </div>
        <div class="ribbon"></div>
  </div>`);
  }

/*-----TODO-----*/
document.onclick = event => {
  let count = 0;
  if (event.target.classList.contains('card') && event.target.children[2].children[5].textContent == "Любимая: Да") {
    event.target.children[3].classList.add('colored');
    countFavorite(data);
   // cards++;
  }
}

function countFavorite(data) {
 // let counter = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].favorite === "Да") {
     // cards++;
     counterFavorite.textContent = Number(data[i].favorite === "Да");
    }
  }
}

const buttons = document.querySelectorAll('.filter-button');
let cards = document.querySelectorAll('.card');
const checkBox = document.getElementById('checkbox');


cards.forEach((item, index) => {
  item.dataset.num = index+1;
})

function filterCategory(category, items) {
  items.forEach((item) => {
    if (item.children[2].children[2].lastChild.textContent !== category) {
      item.classList.add('anime');
    } else {
      item.classList.remove('hide-anime')
      item.classList.remove('anime');
    }
  })
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
   button.classList.add('active');
   const currentCategory = button.dataset.filter;
   filterCategory(currentCategory, cards);
  })
})

cards.forEach((card)=>{
  card.ontransitionend = function () {
    if(card.classList.contains('anime')){
      card.classList.add('hide-anime')
    }
  }
})

/*cards.forEach((card)=> {
  if (checkBox.checked) {
    if(card.children[2].children[5].textContent == "Любимая: Да"){
      card.style.display = "block";
  } else {
    card.style.display = "none";
}
}
})*/

checkBox.addEventListener('change', () => {
  cards.forEach((card)=> {
      if(card.children[2].children[5].textContent !== "Любимая: Да"){
        card.classList.add('anime');
      } else {
        card.classList.remove('hide-anime')
        card.classList.remove('anime');
      }
    })
  })
