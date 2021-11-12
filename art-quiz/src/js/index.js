import ('../styles/style.css')
//import playList from './playList.js';

const pages = document.querySelectorAll('.page');
const btns = document.querySelectorAll('.button');

btns.forEach(btn => btn.addEventListener('click', function() {
  const pageName = this.dataset.page;
  this.parentNode.classList.add('hide');
  pages.forEach(page => {
    if(page.classList.contains(pageName)) {
      page.classList.remove('hide')
    }
  })
}))
