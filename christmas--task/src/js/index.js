import('../styles/style.css')
import data from './data.js';
import noUiSlider from 'nouislider/dist/nouislider.mjs';

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

const cardBlock = document.querySelector('.card-block');

function drawToys(data) {
  for (let i = 0; i < data.length; i++) {
    let card = document.createElement('div');
    let cardH2 = document.createElement('h2');
    let cardDescr = document.createElement('div');
    let count = document.createElement('p');
    let year = document.createElement('p');
    let shape = document.createElement('p');
    let color = document.createElement('p');
    let size = document.createElement('p');
    let favorite = document.createElement('p');

    data[i].favorite = data[i].favorite ? "Да" : "Нет";

    card.innerHTML = `
        <div class="card" ${data[i].num}>
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
        </div>`

    cardDescr.appendChild(count, year, shape, color, size, favorite);
    card.appendChild(cardH2, cardDescr);
     cardBlock.appendChild(card);
  }
}

drawToys(data);

/*-----TODO-----*/
document.onclick = event => {
  let count = 0;
  if (event.target.classList.contains('card') && event.target.children[2].children[5].textContent == "Любимая: Да") {
    event.target.children[3].classList.add('colored');
    countFavorite(data);
    // countFavorite.innerHTML = countFavorite();
    // console.log(countFavorite(data))
  }
}

function countFavorite(data) {
  let counter = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].favorite === true) {
      counter++;
    }
  }
}

const buttons = document.querySelectorAll('.filter-button');
const cards = document.querySelectorAll('.card');
console.log(cards)

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
