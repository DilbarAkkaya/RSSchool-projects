import('../styles/style.css')
import data from './data.js';
import noUiSlider from 'nouislider/dist/nouislider.mjs';
import {
  Card
} from './card.js';

const setting = {
  shape: ['колокольчик', 'шар', 'снежинка', 'фигурка', 'шишка'],
  color: ['желтый', 'синий', 'красный', 'белый', 'зеленый'],
  size: ['маленький', 'средний', 'большой'],
  year: [1940, 2020],
  count: [1, 12],
  favorite: true
};

if (localStorage.getItem('setting') === null || localStorage.getItem('setting') === '') {
  localStorage.setItem('setting', JSON.stringify(setting))
}
setSetting();
const sliderCount = document.getElementById('slider-count');

noUiSlider.create(sliderCount, {
  start: [1, 12],
  connect: true,
  range: {
    'min': 1,
    'max': 12
  },
  step: 1
})

const sliderYear = document.getElementById('slider-year');

noUiSlider.create(sliderYear, {
  start: [1940, 2020],
  connect: true,
  range: {
    'min': 1940,
    'max': 2020
  },
  step: 5
})

let nodes = [
  document.getElementById('min-card-count'),
  document.getElementById('max-card-count')
];

sliderCount.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
  nodes[handle].innerHTML = values[handle].slice(0, -3);
});

let nodesYear = [
  document.getElementById('min-card-year'),
  document.getElementById('max-card-year')
];

sliderYear.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
  nodesYear[handle].innerHTML = values[handle].slice(0, -3);
});



function setSetting() {
  let dataSetting = JSON.parse(localStorage.getItem('setting'));
  let colorsArray = document.querySelectorAll('.filter-color .filter-button');
  let shapeArray = document.querySelectorAll('.filter-shape .filter-button');
  let sizeArray = document.querySelectorAll('.filter-size .filter-button');
  let isFavorited = document.querySelector('.filter-favorite-label');
  colorsArray.forEach((item, index) => {
    dataSetting.color.includes(item.dataset.filter);
    if (dataSetting.color.includes(item.dataset.filter)) {
      item.classList.add('color-active');
    }
  })
  shapeArray.forEach((item, index) => {
    dataSetting.shape.includes(item.dataset.filter);
    if (dataSetting.shape.includes(item.dataset.filter)) {
      item.classList.add('active');
    }
  })
  sizeArray.forEach((item, index) => {
    dataSetting.size.includes(item.dataset.filter);
    if (dataSetting.size.includes(item.dataset.filter)) {
      item.classList.add('color-active');
    }
  })
  dataSetting.favorite === true;
  if(isFavorited.checked){
    !isFavorited.checked
  }
}



//const a = JSON.parse(localStorage.getItem('setting')).color;
//console.log(a)

const filterShape = document.querySelector('.filter-shape');

filterShape.addEventListener('click', function (e) {
  let dataSetting = JSON.parse(localStorage.getItem('setting'));
  if (e.target.classList.contains('filter-button')) {
    e.target.classList.toggle('active');
    let shapeArray = document.querySelectorAll('.filter-shape .active');
    let array = [];
    shapeArray.forEach(item => {
      array.push(item.dataset.filter);

    })
    dataSetting.shape = array;
    localStorage.setItem('setting', JSON.stringify(dataSetting))
    //console.log(e.target.dataset.filter)
    //console.log(array)
  }
})

const filterColor = document.querySelector('.filter-color');

filterColor.addEventListener('click', function (e) {
  let dataSetting = JSON.parse(localStorage.getItem('setting'));
  if (e.target.classList.contains('filter-button')) {
    e.target.classList.toggle('color-active');
    let colorArray = document.querySelectorAll('.filter-color .color-active');
    let array = [];
    colorArray.forEach(item => {
      array.push(item.dataset.filter);

    })
    dataSetting.color = array;
    localStorage.setItem('setting', JSON.stringify(dataSetting))
  }
})

const filterSize = document.querySelector('.filter-size');

filterSize.addEventListener('click', function (e) {
  let dataSetting = JSON.parse(localStorage.getItem('setting'));
  if (e.target.classList.contains('filter-button')) {
    e.target.classList.toggle('active');
    let sizeArray = document.querySelectorAll('.filter-size .active');
    let array = [];
    sizeArray.forEach(item => {
      array.push(item.dataset.filter);
    })
    dataSetting.size = array;
    localStorage.setItem('setting', JSON.stringify(dataSetting))
  }
})

const filterFavorite = document.querySelector('.filter-favorite-label');

filterFavorite.addEventListener('click', function (e) {
  let dataSetting = JSON.parse(localStorage.getItem('setting'));
    filterFavorite.classList.toggle('favorited');
    let isFavorited = true;
    dataSetting.favorite = isFavorited;
    localStorage.setItem('setting', JSON.stringify(dataSetting))
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
let count = 0;
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('card')) {
    e.target.children[3].classList.toggle('colored');
    if (e.target.children[3].classList.contains('colored')) {
      count++;
      e.target.querySelector('.favorite span').textContent = 'Да'
      counterFavorite.textContent = count
    } else {
      count--;
      e.target.querySelector('.favorite span').textContent = 'Нет'
      counterFavorite.textContent = count;
    }
  }
})

/* function countFavorite(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].favorite === "Да") {
    // counterFavorite.textContent = Number(data[i].favorite === "Да");
    }
  }
} */

const buttons = document.querySelectorAll('.filter-button');
let cards = document.querySelectorAll('.card');
const checkBox = document.getElementById('checkbox');


cards.forEach((item, index) => {
  item.dataset.num = index + 1;
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
    //button.classList.toggle('active');
    const currentCategory = button.dataset.filter;
    filterCategory(currentCategory, cards);
  })
})

cards.forEach((card) => {
  card.ontransitionend = function () {
    if (card.classList.contains('anime')) {
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

/*checkBox.addEventListener('change', () => {
  cards.forEach((card) => {
    if (card.children[2].children[5].textContent !== "Любимая: Да") {
      card.classList.add('anime');
    } else {
      card.classList.remove('hide-anime')
      card.classList.remove('anime');
    }
  })
})*/
