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
