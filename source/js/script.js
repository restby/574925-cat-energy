var menuBtn = document.querySelector('.main-nav__btn');
var menuList = document.querySelector('.main-nav__list');

var exampleBtnPrev = document.querySelector('.example__toggle-btn--prev');
var exampleBtnNext = document.querySelector('.example__toggle-btn--next');
var exampleImgPrev = document.querySelector('.example__img--before');
var exampleImgNext = document.querySelector('.example__img--after');
var exampleToggle = document.querySelector('.example__toggle');


menuBtn.classList.remove('main-nav__btn--nojs');
menuList.classList.remove('main-nav__list--nojs');

menuBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  menuList.classList.toggle('main-nav__list--open');
  menuBtn.classList.toggle('main-nav__btn--toggle-close');
});

exampleBtnPrev.addEventListener('click', function(evt) {
  evt.preventDefault();
  if(!exampleImgPrev.classList.contains('example__img--show')) {
    exampleImgPrev.classList.add('example__img--show');
    exampleImgNext.classList.remove('example__img--show');
    exampleToggle.classList.remove('example__toggle--next')
  }
});

exampleBtnNext.addEventListener('click', function(evt) {
  evt.preventDefault();
  if(!exampleImgNext.classList.contains('example__img--show')) {
    exampleImgNext.classList.add('example__img--show');
    exampleImgPrev.classList.remove('example__img--show');
    exampleToggle.classList.add('example__toggle--next')
  }
});
