
export function backTop() {
  let goTopBtn = document.querySelector('.top');
  function trackScroll() {
      const scrolled = window.pageYOffset;
      const coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
          goTopBtn.classList.add('top-show');
      }
      if (scrolled < coords) {
          goTopBtn.classList.remove('top-show');
      }
  }

  function backToTop() {
      if (window.pageYOffset > 0) {
          window.scrollBy(0, -70);
          setTimeout(backToTop, 0);
      }
  }

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
};
export default backTop;
