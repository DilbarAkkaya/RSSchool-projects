import '../styles/style.css';
import { data } from './data';
import noUiSlider, { target } from 'nouislider';
import Card from './card';
import updateSnow from './snow';
import {
  createRainGarland, createBlueGarland, createGreenGarland, createRedGarland, createYellowGarland,
} from './garland';
import { ISetting, IDataOfToys } from './types';
import dragHandler from './draganddrop';

const setting: ISetting = {
  shape: ['колокольчик', 'шар', 'снежинка', 'фигурка', 'шишка'],
  color: ['желтый', 'синий', 'красный', 'белый', 'зелёный'],
  size: ['малый', 'средний', 'большой'],
  year: [1940, 2020],
  count: [1, 12],
  favorite: true,
};
const myFavoriteToys: string[] = [];
const colored: string[] = [];
const mainButton = document.querySelector('.main-page-button') as HTMLElement;
const sliderCount = document.getElementById('slider-count') as target;
const cardBlock = document.querySelector('.card-block') as HTMLElement;
const sliderYear = document.getElementById('slider-year') as target;
const checkBox = document.getElementById('checkbox') as HTMLInputElement;
const pages = document.querySelectorAll('.page');
const mainPage = document.querySelector('.main-page') as HTMLElement;
const toysPage = document.querySelector('.toys-page') as HTMLElement;
const links = document.querySelectorAll('.link');
const filterShape = document.querySelector('.filter-shape') as HTMLElement;
const filterColor = document.querySelector('.filter-color') as HTMLElement;
const filterSize = document.querySelector('.filter-size') as HTMLElement;
const search = document.querySelector('.search') as HTMLInputElement;
const select = document.querySelector('.filter-select') as HTMLInputElement;
const searchBlok = document.querySelector('.header-search-block') as HTMLElement;
const alertD = document.querySelector('.alert') as HTMLElement;
const alertC = document.querySelector('.alert-count') as HTMLElement;
const reset = document.querySelector('.reset') as HTMLElement;
const resetLocal = document.querySelector('.reset-local') as HTMLElement;
const snow = document.querySelector('.snow') as HTMLElement;
const treeBlock = document.querySelector('.tree-block') as HTMLElement;
const card = new Card(cardBlock);

if (localStorage.getItem('myFavoriteToys') === null || localStorage.getItem('myFavoriteToys') === '') {
  localStorage.setItem('myFavoriteToys', JSON.stringify(myFavoriteToys));
}
if (localStorage.getItem('colored') === null || localStorage.getItem('colored') === '') {
  localStorage.setItem('colored', JSON.stringify(colored));
}
if (localStorage.getItem('setting') === null || localStorage.getItem('setting') === '') {
  localStorage.setItem('setting', JSON.stringify(setting));
}

function createCountSlider() {
  const dataSetting = JSON.parse(localStorage.getItem('setting') || '{}');
  noUiSlider.create(sliderCount, {
    start: [dataSetting.count[0], dataSetting.count[1]],
    connect: true,
    range: {
      'min': 1,
      'max': 12,
    },
    step: 1,
  });
}

function createYearSlider() {
  const dataSetting = JSON.parse(localStorage.getItem('setting') || '{}');
  noUiSlider.create(sliderYear, {
    start: [dataSetting.year[0], dataSetting.year[1]],
    connect: true,
    range: {
      'min': 1940,
      'max': 2020,
    },
    step: 5,
  });
}

function setSetting() {
  const dataSetting = JSON.parse(localStorage.getItem('setting') || '{}');
  const colorsArray = [...Array.from(document.querySelectorAll('.filter-color .filter-button'))];
  const shapeArray = [...Array.from(document.querySelectorAll('.filter-shape .filter-button'))];
  const sizeArray = [...Array.from(document.querySelectorAll('.filter-size .filter-button'))];
  colorsArray.forEach((item) => {
    dataSetting.color.includes((item as HTMLElement).dataset.filter);
    if (dataSetting.color.includes((item as HTMLElement).dataset.filter)) {
      item.classList.add('color-active');
    }
  });
  shapeArray.forEach((item) => {
    dataSetting.shape.includes((item as HTMLElement).dataset.filter);
    if (dataSetting.shape.includes((item as HTMLElement).dataset.filter)) {
      item.classList.add('active');
    }
  });
  sizeArray.forEach((item) => {
    dataSetting.size.includes((item as HTMLElement).dataset.filter);
    if (dataSetting.size.includes((item as HTMLElement).dataset.filter)) {
      item.classList.add('active');
    }
  });
  checkBox.checked = dataSetting.favorite;
  createCountSlider();
  createYearSlider();
}

setSetting();

function sort(dataForSort: IDataOfToys[]) {
  let result;
  if (select.value == 'max-name') {
    result = dataForSort.sort((a, b) => a.name.localeCompare(b.name));
  } else if (select.value == 'min-name') {
    result = dataForSort.sort((a, b) => b.name.localeCompare(a.name));
  } else if (select.value == 'max-count') {
    result = dataForSort.sort((a, b) => +a.year - +b.year);
  } else if (select.value == 'min-count') {
    result = dataForSort.sort((a, b) => +b.year - +a.year);
  }
  return result;
}

function searchInData(dataForSearch: IDataOfToys[]) {
  const val = search.value.toLowerCase().trim();
  const result = dataForSearch.filter(toy => toy.name.toLowerCase().trim().includes(val));
  if (val === '') {
    alertD.classList.add('hide');
  }
  return result;
}

function filterCards() {
  const dataSetting = JSON.parse(localStorage.getItem('setting') || '{}');
  const colorFilter = new Set(dataSetting.color);
  const shapeFilter = new Set(dataSetting.shape);
  const sizeFilter = new Set(dataSetting.size);

  let dataFilter: IDataOfToys[] = data.filter(item => item.count >= dataSetting.count[0] && item.count <= dataSetting.count[1])
    .filter(item => item.year >= dataSetting.year[0] && item.year <= dataSetting.year[1])
    .filter(item => colorFilter.has(item.color))
    .filter(item => sizeFilter.has(item.size))
    .filter(item => shapeFilter.has(item.shape))
    .filter(item => dataSetting.favorite === true ? item.favorite === true : item);

  dataFilter = sort(dataFilter) as IDataOfToys[];
  dataFilter = searchInData(dataFilter);

  return dataFilter;
}

function createCard() {
  cardBlock.innerHTML = '';
  const dataAfterFilter = filterCards();
  card.renderCard(dataAfterFilter);
}

createCard();

function creatImage() {
  const treeImg = document.createElement('img');
  treeImg.src = './assets/tree/1.png';
  treeImg.classList.add('tree-img');
  treeImg.setAttribute('usemap', '#image-map');
  treeBlock.innerHTML = `<map name="image-map">
  <area target="" alt="" coords="18,543,252,0,485,566,51,613,31,431" data-drop-target = "true" shape="poly">
</map>`;
  treeBlock.append(treeImg);
}

function createFavoriteCard() {
  const favoriteCards = JSON.parse(localStorage.getItem('myFavoriteToys') || '{}');
  const favoriteToys = document.querySelector('.favorite-toys');
  if (favoriteCards.length > 0) {
    (favoriteToys as HTMLElement).innerHTML = '';
    for (let i = 0; i < favoriteCards.length; i++) {
      const currentCount = data[parseInt(favoriteCards[i]) - 1].count;
      const cardFavorite = document.createElement('div');
      cardFavorite.classList.add('favorite-toys-card');

      for (let j = 0; j < +currentCount; j++) {
        const image = document.createElement('img');
        image.src = `./assets/toys/${favoriteCards[i]}.png`;
        image.setAttribute('alt', 'toy-img');
        image.setAttribute('id', `${i}-${j}`);
        image.setAttribute('draggable', 'true');
        image.classList.add('card-img');
        cardFavorite.append(image);
      }
      const countText = document.createElement('p');
      countText.classList.add('count');
      countText.textContent = currentCount;
      (favoriteToys as HTMLElement).append(cardFavorite);
      cardFavorite.append(countText);
    }
  }
  if (favoriteCards.length == 0) {
    (favoriteToys as HTMLElement).innerHTML = '';
    for (let i = 0; i < 20; i++) {
      const currentCount = data[i].count;
      const cardFavorite = document.createElement('div');
      cardFavorite.classList.add('favorite-toys-card');
      for (let j = 0; j < +currentCount; j++) {
        const image = document.createElement('img');
        image.src = `./assets/toys/${data[i].num}.png`;
        image.setAttribute('alt', 'toy');
        image.setAttribute('id', `un${i}-${j}`);
        image.setAttribute('draggable', 'true');
        image.classList.add('card-img');
        cardFavorite.append(image);
      }
      const countText = document.createElement('p');
      countText.classList.add('count');
      countText.textContent = currentCount;
      (favoriteToys as HTMLElement).append(cardFavorite);
      cardFavorite.append(countText);
    }
  }
}

const nodes = [
  <target>document.getElementById('min-card-count'),
  <target>document.getElementById('max-card-count'),
];

sliderCount.noUiSlider?.on('update', (values, handle) => {
  const dataSetting = JSON.parse(localStorage.getItem('setting') || '{}');
  nodes[handle].innerHTML = ((values[handle] as string).slice(0, -3));
  dataSetting.count[0] = parseInt((values[0] as string).slice(0, -3));
  dataSetting.count[1] = parseInt((values[1] as string).slice(0, -3));
  localStorage.setItem('setting', JSON.stringify(dataSetting));
  createCard();
});

const nodesYear = [
  <target>document.getElementById('min-card-year'),
  <target>document.getElementById('max-card-year'),
];

sliderYear.noUiSlider?.on('update', (values, handle) => {
  const dataSetting = JSON.parse(localStorage.getItem('setting') || '{}');
  nodesYear[handle].innerHTML = (+values[handle]).toFixed(0);
  dataSetting.year[0] = (+values[0]).toFixed(0);
  dataSetting.year[1] = (+values[1]).toFixed(0);
  localStorage.setItem('setting', JSON.stringify(dataSetting));
  createCard();
});

filterShape.addEventListener('click', function (e) {
  const dataSetting = JSON.parse(localStorage.getItem('setting') || '{}');
  if ((e.target as HTMLElement).classList.contains('filter-button')) {
    (e.target as HTMLElement).classList.toggle('active');
    const shapeArray = [...Array.from(document.querySelectorAll('.filter-shape .active'))];
    const arrayOfDataAtributeItems: string[] = [];
    shapeArray.forEach(item => {
      if ((item instanceof HTMLElement)) {
        arrayOfDataAtributeItems.push(item.dataset.filter as string);
      }
    });
    dataSetting.shape = arrayOfDataAtributeItems;
    localStorage.setItem('setting', JSON.stringify(dataSetting));
    createCard();
  }
});

filterColor.addEventListener('click', function (e) {
  const dataSetting = JSON.parse(localStorage.getItem('setting') || '{}');
  if ((e.target as HTMLElement).classList.contains('filter-button')) {
    (e.target as HTMLElement).classList.toggle('color-active');
    const colorArray = [...Array.from(document.querySelectorAll('.filter-color .color-active'))];
    const arrayOfDataAtributeItems: string[] = [];
    colorArray.forEach(item => {
      if ((item instanceof HTMLElement)) {
        arrayOfDataAtributeItems.push(item.dataset.filter as string);
      }
    });
    dataSetting.color = arrayOfDataAtributeItems;
    localStorage.setItem('setting', JSON.stringify(dataSetting));
    createCard();
  }
});

filterSize.addEventListener('click', function (e) {
  const dataSetting = JSON.parse(localStorage.getItem('setting') || '{}');
  if ((e.target as HTMLElement).classList.contains('filter-button')) {
    (e.target as HTMLElement).classList.toggle('active');
    const sizeArray = [...Array.from(document.querySelectorAll('.filter-size .active'))];
    const arrayOfDataAtributeItems: string[] = [];
    sizeArray.forEach(item => {
      if ((item instanceof HTMLElement)) {
        arrayOfDataAtributeItems.push(item.dataset.filter as string);
      }
    });
    dataSetting.size = arrayOfDataAtributeItems;
    localStorage.setItem('setting', JSON.stringify(dataSetting));
    createCard();
  }
});

checkBox.addEventListener('change', function (e) {
  const dataSetting = JSON.parse(localStorage.getItem('setting') || '{}');
  if ((e.target as HTMLElement).closest('.filter-favorite-form')) {
    dataSetting.favorite = checkBox.checked;
    localStorage.setItem('setting', JSON.stringify(dataSetting));
    createCard();
  }
});

links.forEach(link => link.addEventListener('click', function (e) {
  searchBlok.classList.remove('hide');
  (document.getElementById('searchId') as HTMLInputElement).focus();
  (document.getElementById('searchId') as HTMLInputElement).select();
  const pageName = (e.target as HTMLElement).dataset.page as string;
  if (pageName == 'main-page') {
    searchBlok.classList.add('hide');
  }
  pages.forEach(page => {
    if (page.classList.contains(pageName)) {
      page.classList.remove('hide');
    } else {
      page.classList.add('hide');
    }
  });
  if (pageName == 'tree-page') {
    treeBlock.innerHTML = '';
    creatImage();
    const favoriteToys = document.querySelector('.favorite-toys');
    (favoriteToys as HTMLElement).innerHTML = '';
    createFavoriteCard();
    dragHandler();
  }
}));

const favoriteCardsCount = document.querySelector('.favorite-count') as HTMLElement;
const favoriteCards = JSON.parse(localStorage.getItem('myFavoriteToys') || '{}');
(favoriteCardsCount as HTMLElement).textContent = favoriteCards.length;

document.addEventListener('click', (e) => {
  const targetCard = (e.target as HTMLElement).closest('.card');
  const targetCardNum = (targetCard as HTMLElement).dataset.num;
  const favoriteCardsSet = new Set(favoriteCards);
  if (targetCard) {
    if (favoriteCardsSet.size >= 20) {
      setTimeout(() => alertC.classList.remove('hide'));
      setTimeout(() => alertC.classList.add('hide'), 1500);
    } else {
      targetCard.children[3].classList.toggle('colored');
      if (targetCard.children[3].classList.contains('colored')) {
        (favoriteCardsCount as HTMLElement).textContent = (parseInt((favoriteCardsCount.textContent) as string) + 1).toString();
        favoriteCardsSet.add(targetCardNum);
        localStorage.setItem('myFavoriteToys', JSON.stringify([...favoriteCardsSet]));
      } else {
        (favoriteCardsCount as HTMLElement).textContent = (parseInt((favoriteCardsCount.textContent) as string) - 1).toString();
        favoriteCardsSet.delete(targetCardNum);
        localStorage.setItem('myFavoriteToys', JSON.stringify([...favoriteCardsSet]));
      }
    }
  }
});

mainButton.addEventListener('click', function () {
  mainPage.classList.add('hide');
  toysPage.classList.remove('hide');
  searchBlok.classList.remove('hide');
  (document.getElementById('searchId') as HTMLInputElement).focus();
  (document.getElementById('searchId') as HTMLInputElement).select();
});

resetLocal.addEventListener('click', () => {
  localStorage.clear();
  document.location.reload();
});

search.addEventListener('input', function () {
  if (filterCards().length == 0) {
    alertD.classList.remove('hide');
  } else {
    alertD.classList.add('hide');
  }
  createCard();
});

window.addEventListener('load', () => {
  (document.getElementById('searchId') as HTMLInputElement).focus();
  (document.getElementById('searchId') as HTMLInputElement).select();
});

select.addEventListener('change', function () {
  filterCards();
  createCard();
});

function resetSliders(): void {
  (sliderYear as target).noUiSlider?.set([1940, 2020]);
  (sliderCount as target).noUiSlider?.set([1, 12]);
}

function unSetting() {
  const dataSetting = JSON.parse(localStorage.getItem('setting') || '{}');
  const colorsArray = [...Array.from(document.querySelectorAll('.filter-color .filter-button'))];
  const shapeArray = [...Array.from(document.querySelectorAll('.filter-shape .filter-button'))];
  const sizeArray = [...Array.from(document.querySelectorAll('.filter-size .filter-button'))];
  colorsArray.forEach((item) => {
    dataSetting.color.includes((item as HTMLElement).dataset.filter);
    if (dataSetting.color.includes((item as HTMLElement).dataset.filter)) {
      item.classList.remove('color-active');
    }
  });
  shapeArray.forEach((item) => {
    dataSetting.shape.includes((item as HTMLElement).dataset.filter);
    if (dataSetting.shape.includes((item as HTMLElement).dataset.filter)) {
      item.classList.remove('active');
    }
  });
  sizeArray.forEach((item) => {
    dataSetting.size.includes((item as HTMLElement).dataset.filter);
    if (dataSetting.size.includes((item as HTMLElement).dataset.filter)) {
      item.classList.remove('active');
    }
  });
  checkBox.checked = false;
  resetSliders();
  cardBlock.innerHTML = '';
}

reset.addEventListener('click', () => {
  unSetting();
});

const choosedTree = document.querySelector('.choose-tree-block') as HTMLElement;
const choosedBg = document.querySelector('.bg-block') as HTMLElement;

choosedTree.addEventListener('click', (e) => {
  treeBlock.innerHTML = '';
  const treeNum = (e.target as HTMLElement).dataset.tree;
  if (treeNum) {
    const treeImg = document.createElement('img');
    treeImg.src = `./assets/tree/${treeNum}.png`;
    treeImg.classList.add('tree-img');
    treeImg.setAttribute('usemap', '#image-map');
    treeBlock.innerHTML = `<map name="image-map">
  <area target="" alt="" coords="18,543,252,0,485,566,51,613,31,431" data-drop-target = "true" shape="poly">
</map>`;
    treeBlock.append(treeImg);
  }
  dragHandler();
});

choosedBg.addEventListener('click', (e) => {
  const bgNum = (e.target as HTMLElement).dataset.bg;
  if (bgNum) {
    treeBlock.style.backgroundImage = `url(./assets/bg/${bgNum}.jpg)`;
  }
});

document.addEventListener('click', (e) => {
  const targetGarlandButtonRain = (e.target as HTMLElement).closest('.rain');
  const targetGarlandButtonRed = (e.target as HTMLElement).closest('.red');
  const targetGarlandButtonBlue = (e.target as HTMLElement).closest('.blue');
  const targetGarlandButtonYellow = (e.target as HTMLElement).closest('.yellow');
  const targetGarlandButtonGreen = (e.target as HTMLElement).closest('.green');
  if (targetGarlandButtonRain) {
    createRainGarland();
  }
  if (targetGarlandButtonRed) {
    createRedGarland();
  }
  if (targetGarlandButtonBlue) {
    createBlueGarland();
  }
  if (targetGarlandButtonYellow) {
    createYellowGarland();
  }
  if (targetGarlandButtonGreen) {
    createGreenGarland();
  }
});

snow.addEventListener('click', updateSnow);

const update = (e: Event) => {
  (e.target as HTMLElement).classList.toggle('audio--active');
  (document.querySelector('audio') as HTMLAudioElement).play();
  if ((e.target as HTMLAudioElement).classList.contains('audio--active')) {
    (document.querySelector('audio') as HTMLAudioElement).play();
  } else {
    (document.querySelector('audio') as HTMLAudioElement).pause();
  }
};

(document.querySelector('.audio') as HTMLAudioElement).addEventListener('click', update);
