import ('../styles/style.css')
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
const cardBlock = document.querySelector('.card-block');

  function drawToys(data){
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

        card.innerHTML = `
        <div class="card" data-num="1">
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
              <div class="ribbon"></div>`

        cardDescr.appendChild(count, year, shape, color, size, favorite);

  cardBlock.appendChild(card);
  card.appendChild(cardH2, cardDescr);
  }
}
window.addEventListener("load", function(event) {
  drawToys(data);
});
