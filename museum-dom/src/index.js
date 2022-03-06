import ('./styles/styles.scss')
//------------------burger-menu---------------------
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
 const slider = document.querySelector(".explorer-slider__input");
 const img = document.querySelector(".img2");
 const dragLine = document.querySelector(".drag-line");
 slider.oninput = () => {
  let sliderValue = slider.value;
  dragLine.style.left = sliderValue + "%";
  img.style.width = sliderValue + "%";
}
//-----------------------------------------------------------------------------------------------------------------
//------------------------------------interactive maps
mapboxgl.accessToken = 'pk.eyJ1IjoiZGlsYmFyYWtrYXlhIiwiYSI6ImNrdWkwbGY4cTA1a28ycnJ2cXJpcG9jNDYifQ.YzTdMn1qu1-rGPBmN0DCAg';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/light-v10', // style URL
center: [2.3364002, 48.8609], // starting position [lng, lat]
zoom: 15.5 // starting zoom
});
const popup = new mapboxgl.Popup({offset: 25});
const popup3 = new mapboxgl.Popup({ offset: 25, closeOnClick: true, closeButton: true }).setText(
'Sarcofage de Abou Roach'
);
const popup1 = new mapboxgl.Popup({ offset: 25, closeOnClick: true, closeButton: true }).setText(
'Louvre museum'
);
const popup2 = new mapboxgl.Popup({ offset: 25, closeOnClick: true, closeButton: true }).setText(
'Arc de triomphe du carrousel'
);

//Create a new marker.
const marker = new mapboxgl.Marker({color: 'black'})
    .setLngLat([2.3364002, 48.8609])
    .setPopup(popup1)
    .addTo(map);
const marker1 = new mapboxgl.Marker({color: 'grey'})
    .setLngLat([2.33655, 48.862435])
    .setPopup(popup)
    .addTo(map);
const marker2 = new mapboxgl.Marker({color: 'grey'})
    .setLngLat([2.33275, 48.8619])
    .setPopup(popup2)
    .addTo(map);
const marker3 = new mapboxgl.Marker({color: 'grey'})
    .setLngLat([2.33325, 48.860245])
    .setPopup(popup)
    .addTo(map);
const marker4 = new mapboxgl.Marker({color: 'grey'})
    .setLngLat([2.339695, 48.860650])
    .setPopup(popup3)
    .addTo(map);
//------------create zoom and compas--------------------------------------
let nav = new mapboxgl.NavigationControl({
  showCompass: true,
  showZoom: true
})
map.addControl(nav, 'top-right');
//------------------------------------------------------------------------

//-------------welcome slider---------------------------------------------
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slideCont = document.querySelector('.slide__conteiner');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slide-carousel__pagination');
const counts = document.querySelectorAll('.slide-number');
let index = 0;
const countSlide = n => {
  for (let count of counts) {
      count.classList.remove('activ');
    }
    counts[n].classList.add('activ');
  }
const activSlide = n => {
  for (let el of slides) {
    el.classList.remove('activ');
  }
  slides[n].classList.add('activ');
}
const activDot = n => {
  for (let dot of dots) {
    dot.classList.remove('activ');
  }
  dots[n].classList.add('activ');
}
const nextSlide = () => {
  if(index == slides.length-1) {
    index = 0; //move to first slide
    //hideItem('to-left');
    activSlide(index);
    activDot(index);
    countSlide(index);
   // showItem('from-right');
  }else {
    index++;
    activSlide(index);
    activDot(index);
    countSlide(index);
  }
  }
const prevSlide = () => {
  if(index == 0) {
    index = slides.length-1 //move to last slide
     //hideItem('to-right');
    activSlide(index);
    activDot(index);
    countSlide(index);
   // showItem('from-left');
  }else {
    index--;
    activSlide(index);
    activDot(index);
    countSlide(index);
  }
  }
  // -----------click to dots--------
  dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      activSlide(index);
      activDot(index);
      countSlide(index);
    })
  })

  next.addEventListener('click', ()=>{
    nextSlide();
  })
  prev.addEventListener('click', ()=> {
    prevSlide();
  })

  //-----------swipe------------------------------

  //let items = document.querySelectorAll('.slide');
  let currentItem = 0;
  let isEnabled = true;

 /*  function hideItem(direction) {
    isEnabled = false;
    slides[currentItem].classList.add(direction);
  slides[currentItem].addEventListener('animationend', function() {
      this.classList.remove('activ', direction);
    });
  }

  function showItem(direction) {
    slides[currentItem].classList.add('next', direction);
    slides[currentItem].addEventListener('animationend', function() {
      this.classList.remove('next', direction);
      this.classList.add('activ');
      isEnabled = true;
    });
  } */
  /*function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
  }

  function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
      this.classList.remove('activ', direction);
    });
  }

  function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
      this.classList.remove('next', direction);
      this.classList.add('activ');
      isEnabled = true;
    });
  }

  function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
  }

  function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
  }

  prev.addEventListener('click', function() {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });

next.addEventListener('click', function() {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });
*/
  const swipedetect = (el) => {

    let surface = el;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    let startTime = 0;
    let elapsedTime = 0;

    let threshold = 150;
    let restraint = 100;
    let allowedTime = 300;

    surface.addEventListener('mousedown', function(e){
      startX = e.pageX;
      startY = e.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
    }, false);

    surface.addEventListener('mouseup', function(e){
      distX = e.pageX - startX;
      distY = e.pageY - startY;
      elapsedTime = new Date().getTime() - startTime;
      if (elapsedTime <= allowedTime){
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
          if ((distX > 0)) {
            if (isEnabled) {
              prevSlide(currentItem);
            }
          } else {
            if (isEnabled) {
             nextSlide(currentItem);
            }
          }
        }
      }
      e.preventDefault();
    }, false);
    surface.addEventListener('touchstart', function(e){
      if (e.target.classList.contains('slide-arrow')) {
        if (e.target.classList.contains('slide-arrow__prev')) {
          if (isEnabled) {
            prevSlide(currentItem);
          }
        } else {
          if (isEnabled) {
            nextSlide(currentItem);
          }
        }
      }
        var touchobj = e.changedTouches[0];
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    }, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
								prevSlide(currentItem);
								}
							} else {
								if (isEnabled) {
									nextSlide(currentItem);
								}
							}
					}
			}
			e.preventDefault();
	}, false);
}

  var el = document.querySelector('.slide__conteiner');
swipedetect(el);
  //-------------------video-secton---------------

 const player = document.querySelector('.video__wrapper-video');
 const video = player.querySelector('.viewer');
 const playbtn = player.querySelector('.play__button');
 const bar = document.querySelector('.video__controls');
 const progress = bar.querySelector('.video__controls-time');
 const volumeRange = bar.querySelector('.volume');
 const volumeBtn = bar.querySelector('.video__volume');
 const volumeOff = bar.querySelector('.volume-off');
 const littlePlay = bar.querySelector('.little__play');
 const littlePause = bar.querySelector('.little__pause');
 const ranges = bar.querySelectorAll('.ranges');
 const fullscreen = bar.querySelector('.video__full');
 const fullscreenoff = bar.querySelector('.video__fulloff');
 const fullwrap = document.querySelector('.full');
 const scrollItems = document.querySelectorAll('.scroll-items');
//-------functions------------
function togglePlay() {
   if(video.paused) {
     video.play()
   } else {
     video.pause()
   }
 }
  function handleRangeUpdate() {
    video[this.name] = this.value;
  }
  function handleProgress(){
    const persent = (video.currentTime / video.duration) * 100;
    progress.value = persent;
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${persent}%, #C4C4C4 ${persent}%, #C4C4C4 100%)`;
  }
  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
  }
function progressProgress(){
  const value = this.value;
  progress.style.background = progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
}
function volumeToggle(){
  video.muted = !video.muted;
  if (video.muted) {
    volumeBtn.classList.add('none');
    volumeOff.classList.remove('none');
    volumeRange.value = '0';
  } else {
   // video.muted = false;
    volumeRange.value = video.volume * 100;
    volumeBtn.classList.remove('none');
    volumeOff.classList.add('none');
  }
};
//------------click on video------------------------------
 video.addEventListener('click', () => {
if(video.paused){
  video.play();
  littlePlay.classList.add('none');
  playbtn.classList.add('none');
  littlePause.classList.remove('none');
} else{
  video.pause();
  playbtn.classList.remove('none');
  littlePlay.classList.remove('none');
  littlePause.classList.add('none');
}
 });
 //progress.addEventListener('input', progressProgress);
 video.addEventListener('timeupdate', handleProgress);
 ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
 ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

 volumeRange.addEventListener('input', function(e) {
   volumeRange.style.background = `linear-gradient(to right, rgba(131, 7, 7, 1) ${this.value}%, rgba(196, 196, 196, 1) ${this.value}%)`;
   video.volume = volumeRange.value / 100;
  if (volumeRange.value <= 0) {
    volumeOff.classList.remove('none');
    volumeBtn.classList.add('none');
  } else {
    volumeOff.classList.add('none');
    volumeBtn.classList.remove('none');
  }
  }, false);

  volumeBtn.addEventListener('click', volumeToggle);
  volumeOff.addEventListener('click', volumeToggle);

 let mousedown = false;
 progress.addEventListener('click', scrub);
 progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
 progress.addEventListener('mousedown', () => mousedown = true);
 progress.addEventListener('mouseup', () => mousedown = false);
 //----------------- click on little play buttons----------
 littlePlay.addEventListener('click', () => {
   togglePlay();
   littlePlay.classList.add('none');
   littlePause.classList.remove('none')
   playbtn.classList.add('none');
 });
 littlePause.addEventListener('click', () => {
   togglePlay();
   littlePlay.classList.remove('none');
   littlePause.classList.add('none');
   playbtn.classList.remove('none');
 });

//------on click to circle button play -------------------------

 playbtn.addEventListener('click', () => {
   if(video.play()){
   playbtn.classList.add('none');
   littlePlay.classList.add('none');
   littlePause.classList.remove('none');
 } else {
   playbtn.classList.remove('none');
   littlePlay.classList.remove('none');
   littlePause.classList.add('none');
 }
})
//----------------------------------------------------------------
//---------------keydown------------------------------------------
document.addEventListener('keydown', event =>{
  if(event.code === 'Space') {
      if (video.paused) {
          video.play();
          littlePlay.classList.add('none');
          littlePause.classList.remove('none');
          playbtn.classList.remove('none');
      }
      else  {
          video.pause();
          littlePlay.classList.remove('none');
          littlePause.classList.add('none');
          playbtn.classList.remove('none');
        }
        }
      })

      document.addEventListener('keydown', event =>{
        if(event.code === 'KeyM') {
            if (volumeRange.value > 0) {
              volumeToggle();
              volumeOff.classList.remove('none');
              volumeBtn.classList.add('none');
            } else {
              volumeToggle();
              volumeOff.classList.add('none');
              volumeBtn.classList.remove('none');
            }
          }
        })
        document.addEventListener('keydown', event =>{
          if(event.code === 'KeyF'){
            if (fullwrap.requestFullscreen) {
            fullwrap.requestFullscreen();
            player.classList.remove('video__wrapper-video');
            player.classList.add('video__wrapper-fullscreen');
            video.classList.remove('video__video');
            video.classList.add('video__video-fullscreen');
            playbtn.classList.remove('play__button');
            playbtn.classList.add('play__button-fullscreen');
            fullscreenoff.classList.add('none');
            fullscreen.classList.remove('none');
          }
          if(!fullwrap.fullscreenElement) {
            document.exitFullscreen();
          }
        }
      })

//-----------------videoslider-----------------

new Swiper('.video__slider-youtube', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    invert: true,
  },
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
    }},
  freeMode: true,
  speed: 800,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

});

//---------------full screen-----------------------------------
fullscreenoff.addEventListener('click', () => {
  if (fullwrap.requestFullscreen) {
    fullwrap.requestFullscreen();
    player.classList.remove('video__wrapper-video');
    player.classList.add('video__wrapper-fullscreen');
    video.classList.remove('video__video');
    video.classList.add('video__video-fullscreen');
    playbtn.classList.remove('play__button');
    playbtn.classList.add('play__button-fullscreen');
    fullscreenoff.classList.add('none');
    fullscreen.classList.remove('none');
  }
})
fullscreen.addEventListener('click', () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    fullscreenoff.classList.remove('none');
    fullscreen.classList.add('none');
  }
})
//---------gallery----------------
function debounce(func, wait = 20, immediate = true){
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function(){
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context, args);
    };
  };

  const sliderImages = document.querySelectorAll('.art__box-content-img');
  function checkSlide(e) {
    //console.log(window/scrollY);
   // console.log(e);
  sliderImages.forEach(sliderImage => {
      //half way throuth the image
  const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
   // console.log(slideImg);
   //bottom of the image
   //console.log(slideAnt);
  const imageBottom = sliderImage.offsetTop + window.scrollY + sliderImage.height*2;
  const isHalfShown = slideInAt > (sliderImage.getBoundingClientRect().top + window.scrollY);
  const isNotScrolledPast = window.scrollY < imageBottom;
  if(isHalfShown && isNotScrolledPast) {
    sliderImage.classList.add('scroll-item');
  } else {
    sliderImage.classList.remove('scroll-item');
  }
  });
}
window.addEventListener('scroll', debounce(checkSlide));
