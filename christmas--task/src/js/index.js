import('../styles/style.css')
import data from './data.js';
import noUiSlider from 'nouislider/dist/nouislider.mjs';
import {
  Card
} from './card.js';

const setting = {
  shape: ['колокольчик', 'шар', 'снежинка', 'фигурка', 'шишка'],
  color: ['желтый', 'синий', 'красный', 'белый', 'зелёный'],
  size: ['малый', 'средний', 'большой'],
  year: [1940, 2020],
  count: [1, 12],
  favorite: true
};

const isMyFavoriteToy = {
  isFavorites: false
}

if(localStorage.getItem('isMyFavoriteToy') === null || localStorage.getItem('isMyFavoriteToy') === '') {
  localStorage.setItem('isMyFavoriteToy', JSON.stringify(isMyFavoriteToy))
};

if (localStorage.getItem('setting') === null || localStorage.getItem('setting') === '') {
  localStorage.setItem('setting', JSON.stringify(setting))
};
const mainButton = document.querySelector('.main-page-button');
const sliderCount = document.getElementById('slider-count');
const cardBlock = document.querySelector('.card-block');
const sliderYear = document.getElementById('slider-year');
const checkBox = document.getElementById('checkbox');
const pages = document.querySelectorAll('.page');
const mainPage = document.querySelector('.main-page');
const toysPage = document.querySelector('.toys-page');
const links = document.querySelectorAll('.link');
const filterShape = document.querySelector('.filter-shape');
const filterColor = document.querySelector('.filter-color');
const filterSize = document.querySelector('.filter-size');
const counterFavorite = document.querySelector('.favorite-count');
const dataSetting = JSON.parse(localStorage.getItem('setting'));
const search = document.querySelector('.search');
const select = document.querySelector('.filter-select');
const searchBlok = document.querySelector('.header-search-block');
const alertD = document.querySelector('.alert');
const alertC = document.querySelector('.alert-count');
const reset = document.querySelector('.reset');
const resetLocal = document.querySelector('.reset-local');
let card = new Card(cardBlock);

setSetting();

function createCountSlider() {
  const dataSetting = JSON.parse(localStorage.getItem('setting'));
  noUiSlider.create(sliderCount, {
    start: [dataSetting.count[0], dataSetting.count[1]],
    connect: true,
    range: {
      'min': 1,
      'max': 12
    },
    step: 1
  })
}

function createYearSlider() {
  const dataSetting = JSON.parse(localStorage.getItem('setting'));
  noUiSlider.create(sliderYear, {
    start: [dataSetting.year[0], dataSetting.year[1]],
    connect: true,
    range: {
      'min': 1940,
      'max': 2020
    },
    step: 5
  })
}

let nodes = [
  document.getElementById('min-card-count'),
  document.getElementById('max-card-count')
];

sliderCount.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
  const dataSetting = JSON.parse(localStorage.getItem('setting'));
  nodes[handle].innerHTML = values[handle].slice(0, -3);
  dataSetting.count[0] = parseInt(values[0].slice(0, -3));
  dataSetting.count[1] = parseInt(values[1].slice(0, -3));
  localStorage.setItem('setting', JSON.stringify(dataSetting));
  createCard();
});

let nodesYear = [
  document.getElementById('min-card-year'),
  document.getElementById('max-card-year')
];

sliderYear.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
  const dataSetting = JSON.parse(localStorage.getItem('setting'));
  nodesYear[handle].innerHTML = values[handle].slice(0, -3);
  dataSetting.year[0] = parseInt(values[0].slice(0, -3));
  dataSetting.year[1] = parseInt(values[1].slice(0, -3));
  localStorage.setItem('setting', JSON.stringify(dataSetting));
  createCard();
});

function setSetting() {
  let dataSetting = JSON.parse(localStorage.getItem('setting'));
  let colorsArray = document.querySelectorAll('.filter-color .filter-button');
  let shapeArray = document.querySelectorAll('.filter-shape .filter-button');
  let sizeArray = document.querySelectorAll('.filter-size .filter-button');
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
      item.classList.add('active');
    }
  })
  checkBox.checked = dataSetting.favorite;
  createCountSlider();
  createYearSlider();
}

//const a = JSON.parse(localStorage.getItem('setting')).color;
//console.log(a)

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
    localStorage.setItem('setting', JSON.stringify(dataSetting));
    createCard();
  }
})

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
    localStorage.setItem('setting', JSON.stringify(dataSetting));
    createCard();
  }
})

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
    localStorage.setItem('setting', JSON.stringify(dataSetting));
    createCard();
  }
})

checkBox.addEventListener('change', function (e) {
  let dataSetting = JSON.parse(localStorage.getItem('setting'));
  if (e.target.closest('.filter-favorite-form')) {
    dataSetting.favorite = checkBox.checked;
    localStorage.setItem('setting', JSON.stringify(dataSetting));
    createCard();
  }
})

function filterCards() {
  let dataSetting = JSON.parse(localStorage.getItem('setting'));
  const colorFilter = new Set(dataSetting.color);
  const shapeFilter = new Set(dataSetting.shape);
  const sizeFilter = new Set(dataSetting.size);

  let dataFilter = data.filter(item => item.count >= dataSetting.count[0] && item.count <= dataSetting.count[1])
    .filter(item => item.year >= dataSetting.year[0] && item.year <= dataSetting.year[1])
    .filter(item => colorFilter.has(item.color))
    .filter(item => sizeFilter.has(item.size))
    .filter(item => shapeFilter.has(item.shape))
    .filter(item => dataSetting.favorite === true ? item.favorite === true : item);

  dataFilter = sort(dataFilter);
  dataFilter = searchInData(dataFilter);

  return dataFilter;
}

links.forEach(link => link.addEventListener('click', function () {
  searchBlok.classList.remove('hide');
  document.getElementById('searchId').focus();
  document.getElementById('searchId').select();
  const pageName = this.dataset.page;
  if (pageName == "main-page") {
    searchBlok.classList.add('hide')
  }
  pages.forEach(page => {
    if (page.classList.contains(pageName)) {
      page.classList.remove('hide');
    } else {
      page.classList.add('hide');
    }
  })
}))

function createCard() {
  cardBlock.innerHTML = "";
  const dataAfterFilter = filterCards();
  card.renderCard(dataAfterFilter);
}
createCard();

const favoriteToys = document.querySelector('.favorite-toys');
let count = 0;
document.addEventListener('click', (e) => {
  let isMyFavoriteToy = JSON.parse(localStorage.getItem('isMyFavoriteToy'));
  if (e.target.classList.contains('card')) {
    e.target.children[3].classList.toggle('colored');
    if (e.target.children[3].classList.contains('colored')) {
      count++;
      e.target.querySelector('.favorite span').textContent = 'Да';
      counterFavorite.textContent = count;
      e.target.dataset.favor = 'true';
     // isMyFavoriteToy.isFavorites = e.target.dataset.favor;
     // localStorage.setItem('isMyFavoriteToy', JSON.stringify(isMyFavoriteToy));
      let containerForToys = document.createElement('div');
      containerForToys.classList.add('item-toys');
      containerForToys.append(e.target.children[1].cloneNode());
      containerForToys.append(e.target.children[2].children[0].lastChild.innerHTML);
      favoriteToys.append(containerForToys);
      if (count > 20) {
        count = 20;
        counterFavorite.textContent = count;
        e.target.children[3].classList.toggle('colored');
        setTimeout(() => alertC.classList.remove('hide'));
        setTimeout(() => alertC.classList.add('hide'), 1500);
        e.target.querySelector('.favorite span').textContent = 'Нет';
      }
    } else {
      count--;
      e.target.querySelector('.favorite span').textContent = 'Нет'
      counterFavorite.textContent = count;
      e.target.dataset.favor = 'false';
      isMyFavoriteToy.isFavorites = e.target.dataset.favor;
      localStorage.setItem('isMyFavoriteToy', JSON.stringify(isMyFavoriteToy));
    }
  }
})

mainButton.addEventListener('click', function () {
  mainPage.classList.add('hide');
  toysPage.classList.remove('hide');
  searchBlok.classList.remove('hide');
  document.getElementById('searchId').focus();
  document.getElementById('searchId').select();
})

resetLocal.addEventListener('click', () => {
  localStorage.clear();
  document.location.reload();
})

search.addEventListener('input', function () {
  if(filterCards() == false){
    alertD.classList.remove('hide')
  } else{
    alertD.classList.add('hide')
  }
  createCard();
})

window.addEventListener('load', () => {
  document.getElementById('searchId').focus();
  document.getElementById('searchId').select();
})

function searchInData(data) {
  let val = search.value.toLowerCase().trim();
  let result = data.filter(toy => toy.name.toLowerCase().trim().includes(val));
 if (val === '') {
    alertD.classList.add('hide')
  }
  return result
}

select.addEventListener('change', function () {
  filterCards();
  createCard();
})

function sort(data) {
  let result;
  if (select.value == 'max-name') {
    result = data.sort((a, b) => a.name.localeCompare(b.name));
  } else if (select.value == 'min-name') {
    result = data.sort((a, b) => b.name.localeCompare(a.name));
  } else if (select.value == 'max-count') {
    result = data.sort((a, b) => +a.year - +b.year);
  } else if (select.value == 'min-count') {
    result = data.sort((a, b) => +b.year - +a.year);
  }
  return result;
}

function unSetting() {
  let dataSetting = JSON.parse(localStorage.getItem('setting'));
  let colorsArray = document.querySelectorAll('.filter-color .filter-button');
  let shapeArray = document.querySelectorAll('.filter-shape .filter-button');
  let sizeArray = document.querySelectorAll('.filter-size .filter-button');
  colorsArray.forEach((item, index) => {
    dataSetting.color.includes(item.dataset.filter);
    if (dataSetting.color.includes(item.dataset.filter)) {
      item.classList.remove('color-active');
    }
  })
  shapeArray.forEach((item, index) => {
    dataSetting.shape.includes(item.dataset.filter);
    if (dataSetting.shape.includes(item.dataset.filter)) {
      item.classList.remove('active');
    }
  })
  sizeArray.forEach((item, index) => {
    dataSetting.size.includes(item.dataset.filter);
    if (dataSetting.size.includes(item.dataset.filter)) {
      item.classList.remove('active');
    }
  })
  checkBox.checked = false;
  resetSliders();
  cardBlock.innerHTML = "";
}

function resetSliders() {
  sliderYear.noUiSlider.set([1940, 2020]);
  sliderCount.noUiSlider.set([1, 12]);
}

reset.addEventListener('click', () => {
  unSetting();
})

const treeBlock = document.querySelector('.tree-block');
//const trees = document.querySelectorAll('.tree');
const choosedTree = document.querySelector('.choose-tree-block');
const choosedBg = document.querySelector('.bg-block')

choosedTree.addEventListener('click', (e) => {
  let treeNum = e.target.dataset.tree;
    if(treeNum) {
      treeBlock.innerHTML = `<img src="./assets/tree/${treeNum}.png" alt="tree" class="tree-img">`
    }
})

choosedBg.addEventListener('click', (e) => {
  let bgNum = e.target.dataset.bg;
    if(bgNum) {
      treeBlock.style.backgroundImage = `url(../assets/bg/${bgNum}.jpg)`
    }
})
