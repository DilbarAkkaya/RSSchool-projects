import ('./styles/styles.scss')
const navSlide = () => {
  const burger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.navigation');
  const navLinks = document.querySelectorAll('.navigation__item');
  const title = document.querySelectorAll('.title1');

  burger.addEventListener('click', () => {
    //toggle nav
    nav.classList.toggle('nav-active');
    //opasity title
  title.forEach((el) => {
    el.classList.toggle('opas');
   });
  //animated links
  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = '';
    } else{
      link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
    }
    });
    //burger animation
    burger.classList.toggle('toggle');
  });
}

 navSlide();



console.group('%cСамооценка', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. Вёрстка валидная', 'color: #696969; background-color:  #7fffd4')
  console.log('%cНадпись "Document checking completed. No errors or warnings to show." https://validator.w3.org/nu/?doc=https%3A%2F%2Fdilbarakkaya.github.io%2Frsschool-cv%2F', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+22. Вёрстка семантическая. В коде страницы присутствуют следующие элементы (указано минимальное количество, может быть больше)', 'color: #696969; background-color: #7fffd4')
  console.log('%c<header>, <main>, <footer> +2', 'color: #696969; background-color:  #7fffd4')
  console.log('%cсемь элементов <section> (по количеству секций) +2', 'color: #696969; background-color:  #7fffd4')
  console.log('%cтолько один заголовок <h1> +2', 'color: #696969; background-color:  #7fffd4')
  console.log('%cсемь заголовков <h2> (по количеству секций) +2', 'color: #696969; background-color:  #7fffd4')
  console.log('%cшесть заголовков <h3> (по количеству карточек) +2', 'color: #696969; background-color:  #7fffd4')
  console.log('%cдва элемента <nav> (основная и вспомогательная панель навигации) +2', 'color: #696969; background-color:  #7fffd4')
  console.log('%cтри списка ul > li > a (основная и вспомогательная панель навигации, ссылки на соцсети) +2', 'color: #696969; background-color:  #7fffd4')
  console.log('%cтринадцать кнопок button (четыре из них в секции Video, пять в секции Tickets, по две - стрелки слайдера и плейлиста) +2', 'color: #696969; background-color:  #7fffd4')
  console.log('%cтри тега input type="radio" (в секции Tickets) +2', 'color: #696969; background-color:  #7fffd4')
  console.log('%cдва тега input type="number"(в секции Tickets) +2', 'color: #696969; background-color:  #7fffd4')
  console.log('%cдва тега input type="range" (громкось и прогрес-бар видео) +2', 'color: #696969; background-color:  #7fffd4')
  console.log('%cдля всех элементов <img> указан обязательный атрибут alt +2', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+45. Вёрстка соответствует макету', 'color: #696969; background-color:  #7fffd4')
  console.log('%c-. Форма покупки билетов', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+16. Требования к css', 'color: #696969; background-color:  #7fffd4')
