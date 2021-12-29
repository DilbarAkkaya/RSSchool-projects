import('../styles/style.css')
import data from './data.js';
import noUiSlider from 'nouislider/dist/nouislider.mjs';
import {
  Card
} from './card.js';
import {
  createSnowFlake,
  updateSnow
} from './snow.js';
import {
  createRainGarland
} from './garland.js';
import {
  createRedGarland
} from './garland.js';
import {
  createBlueGarland
} from './garland.js';
import {
  createYellowGarland
} from './garland.js';
import {
  createGreenGarland
} from './garland.js';
/* window.addEventListener('load', ()=> {
  const alertSms = document.querySelector('.alert-sms');
  alertSms.classList.remove('hide');

	setTimeout(() => {
		alertSms.classList.add('hide');
	}, 5000)
}) */

const setting = {
  shape: ['колокольчик', 'шар', 'снежинка', 'фигурка', 'шишка'],
  color: ['желтый', 'синий', 'красный', 'белый', 'зелёный'],
  size: ['малый', 'средний', 'большой'],
  year: [1940, 2020],
  count: [1, 12],
  favorite: true
};

const myFavoriteToys = [];

const colored = [];

if (localStorage.getItem('myFavoriteToys') === null || localStorage.getItem('myFavoriteToys') === '') {
  localStorage.setItem('myFavoriteToys', JSON.stringify(myFavoriteToys))
};
if (localStorage.getItem('colored') === null || localStorage.getItem('colored') === '') {
  localStorage.setItem('colored', JSON.stringify(colored))
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
const dataSetting = JSON.parse(localStorage.getItem('setting'));
const search = document.querySelector('.search');
const select = document.querySelector('.filter-select');
const searchBlok = document.querySelector('.header-search-block');
const alertD = document.querySelector('.alert');
const alertC = document.querySelector('.alert-count');
const reset = document.querySelector('.reset');
const resetLocal = document.querySelector('.reset-local');
const snow = document.querySelector('.snow');
const treeBlock = document.querySelector('.tree-block');
let card = new Card(cardBlock);
const snow_flake = document.querySelector('.fas');

snow.addEventListener('click', updateSnow)

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
  if (pageName == 'tree-page') {
    treeBlock.innerHTML = '';
    creatImage();
    const favoriteToys = document.querySelector('.favorite-toys');
    favoriteToys.innerHTML = '';
    createFavoriteCard();
    dragHandler();
  }
}))

function creatImage() {
  let treeImg = document.createElement('img');
  treeImg.src = `./assets/tree/1.png`;
  treeImg.classList.add('tree-img');
  treeImg.setAttribute('usemap', '#image-map');
  treeBlock.innerHTML = `<map name="image-map">
  <area target="" alt="" coords="18,543,252,0,485,566,51,613,31,431" data-drop-target = "true" shape="poly">
</map>`

  treeBlock.append(treeImg);
}

function createCard() {
  cardBlock.innerHTML = "";
  const dataAfterFilter = filterCards();
  card.renderCard(dataAfterFilter);
}
createCard();

function createFavoriteCard() {
  let favoriteCards = JSON.parse(localStorage.getItem('myFavoriteToys'));
  const favoriteToys = document.querySelector('.favorite-toys');
  if (favoriteCards.length > 0) {
    favoriteToys.innerHTML = '';
    for (let i = 0; i < favoriteCards.length; i++) {
      let currentCount = data[parseInt(favoriteCards[i]) - 1].count;
      let card = document.createElement("div");
      card.classList.add('favorite-toys-card');

      for (let j = 0; j < currentCount; j++) {
        let image = document.createElement('img');
        image.src = `./assets/toys/${favoriteCards[i]}.png`;
        image.setAttribute('alt', 'toy-img');
        image.setAttribute('id', `${i}-${j}`);
        image.setAttribute('draggable', 'true');
        image.classList.add('card-img')
        card.append(image);
      }
      let countText = document.createElement('p');
      countText.classList.add('count');
      countText.textContent = currentCount;
      favoriteToys.append(card);
      card.append(countText)
    }
  }
  if (favoriteCards.length == 0) {
    favoriteToys.innerHTML = '';
    for (let i = 0; i < 20; i++) {
      let currentCount = data[i].count;
      let card = document.createElement("div");
      card.classList.add('favorite-toys-card');
      for (let j = 0; j < currentCount; j++) {
        let image = document.createElement('img');
        image.src = `./assets/toys/${data[i].num}.png`;
        image.setAttribute('alt', 'toy');
        image.setAttribute('id', `un${i}-${j}`);
        image.setAttribute('draggable', 'true');
        image.classList.add('card-img')
        card.append(image);
      }
      let countText = document.createElement('p');
  countText.classList.add('count');
  countText.textContent = currentCount;
  favoriteToys.append(card);
  card.append(countText)
    }
  }
}

   /*  for (let i = 0; i < 20; i++) {
      let card = document.createElement("div");
      card.classList.add('favorite-toys-card');
      card.innerHTML = `
        <img src="./assets/toys/${data[i].num}.png" alt="toy" id = ${i} draggable ="true" class="card-img">
        <p class="count">${data[i].count}</p>`
      favoriteToys.append(card)
    } */
const favoriteCardsCount = document.querySelector('.favorite-count');
let favoriteCards = JSON.parse(localStorage.getItem('myFavoriteToys'));
favoriteCardsCount.textContent = favoriteCards.length;

document.addEventListener('click', (e) => {
  const targetCard = e.target.closest('.card');
  const targetCardNum = targetCard.dataset.num;
  let favoriteCards = JSON.parse(localStorage.getItem('myFavoriteToys'));
  let favoriteCardsSet = new Set(favoriteCards);
  if (targetCard) {
    if (favoriteCardsSet.size >= 20) {
      setTimeout(() => alertC.classList.remove('hide'));
      setTimeout(() => alertC.classList.add('hide'), 1500);
    } else {
      targetCard.children[3].classList.toggle('colored');
      if (targetCard.children[3].classList.contains('colored')) {

        favoriteCardsCount.textContent = (parseInt(favoriteCardsCount.textContent) + 1).toString();
        favoriteCardsSet.add(targetCardNum);
        localStorage.setItem('myFavoriteToys', JSON.stringify([...favoriteCardsSet]));
      } else {
        favoriteCardsCount.textContent = (parseInt(favoriteCardsCount.textContent) - 1).toString();
        favoriteCardsSet.delete(targetCardNum);
        localStorage.setItem('myFavoriteToys', JSON.stringify([...favoriteCardsSet]));
      }
    }
  }
})

let count = 0;
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
  if (filterCards() == false) {
    alertD.classList.remove('hide')
  } else {
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

const choosedTree = document.querySelector('.choose-tree-block');
const choosedBg = document.querySelector('.bg-block')

choosedTree.addEventListener('click', (e) => {
  treeBlock.innerHTML = "";
  let treeNum = e.target.dataset.tree;
  if (treeNum) {
    let treeImg = document.createElement('img');
    treeImg.src = `./assets/tree/${treeNum}.png`;
    treeImg.classList.add('tree-img');
    treeImg.setAttribute('usemap', '#image-map');
    treeBlock.innerHTML = `<map name="image-map">
  <area target="" alt="" coords="18,543,252,0,485,566,51,613,31,431" data-drop-target = "true" shape="poly">
</map>`
    treeBlock.append(treeImg);
  }
  dragHandler();
})

choosedBg.addEventListener('click', (e) => {
  let bgNum = e.target.dataset.bg;
  if (bgNum) {
    treeBlock.style.backgroundImage = `url(./assets/bg/${bgNum}.jpg)`
  }
})

document.addEventListener('click', (e) => {
  const targetGarlandButtonRain = e.target.closest('.rain');
  const targetGarlandButtonRed = e.target.closest('.red');
  const targetGarlandButtonBlue = e.target.closest('.blue');
  const targetGarlandButtonYellow = e.target.closest('.yellow');
  const targetGarlandButtonGreen = e.target.closest('.green');
  if (targetGarlandButtonRain) {
    createRainGarland()
  }
  if (targetGarlandButtonRed) {
    createRedGarland()
  }
  if (targetGarlandButtonBlue) {
    createBlueGarland()
  }
  if (targetGarlandButtonYellow) {
    createYellowGarland()
  }
  if (targetGarlandButtonGreen) {
    createGreenGarland()
  }
})


function dragHandler() {
  function handleDragStart(e) {
    e.dataTransfer.setData("text", this.id);
  }

  function handleDragEnterLeave(e) {
    if (e.type == "dragenter") {
      this.className = "drag-enter"
    } else {
      this.className = ""
    }
  }

  function handleOverDrop(e) {
    let draggedId = e.dataTransfer.getData("text");
    let draggedEl = document.getElementById(draggedId);
    e.preventDefault();
    if (e.type != "drop") {
      return;
    }
    if (e.type == "drop") {


      draggedEl.style.position = 'absolute';
      draggedEl.style.transform = 'translate(-50%, -50%)';
      // draggedEl.style.left = `${(e.offsetX - draggedEl.offsetWidth / 2)}px`;
      // draggedEl.style.top = `${(e.offsetY - draggedEl.offsetHeight / 2)}px`;
      draggedEl.style.left = `${(e.layerX)}px`;
      draggedEl.style.top = `${(e.layerY)}px`;
      console.log((`${e.layerX}`))
      console.log(draggedEl.offsetHeight)

    }
    if (draggedEl.parentNode == this) {
      this.className = "";
      return;
    }
    draggedEl.parentNode.removeChild(draggedEl);
    this.appendChild(draggedEl);
    this.className = "";
  }

  let draggable = document.querySelectorAll('[draggable]')
  let targets = document.querySelectorAll('[data-drop-target]');

  for (let i = 0; i < draggable.length; i++) {
    draggable[i].addEventListener("dragstart", handleDragStart);
  }

  for (let i = 0; i < targets.length; i++) {
    targets[i].addEventListener("dragover", handleOverDrop);
    targets[i].addEventListener("drop", handleOverDrop);
    targets[i].addEventListener("dragenter", handleDragEnterLeave);
    targets[i].addEventListener("dragleave", handleDragEnterLeave);
  }
}
