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

let childBlok = document.createElement('div');
childBlok.className = 'child-blok';
childBlok.style.backgroundImage = 'url(./assets/img/0.jpg)';
childBlok.style.backgroundSize = 'cover';
const categoryBlok = document.querySelector('.category');
categoryBlok.appendChild(childBlok);
//------получение изображений из файла
