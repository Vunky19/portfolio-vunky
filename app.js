const btn = document.querySelector('.btn');
const plane = document.querySelector('.fly')
const intro_el = document.querySelector('.intro');
const introNum_el = document.querySelector('.intro-num');
const introBox_el = document.querySelector('.box');
const nav = document.querySelector('.autohide');
const menu = document.querySelector('.menu');
const backdownMenu = document.querySelector('.backdown-menu');
const hamburger = document.querySelector('.hamburger-menu')
const xMenu = document.querySelector('.x-menu')
const el_autohide = document.querySelector('.autohide');
const body = document.querySelector('.body');
const zeroPad = (num, places) => String(num).padStart(places, '0');
let x = 0;

$(document).ready(function () {
  $(this).scrollTop(0)
})

btn.addEventListener('click', () => {
  plane.classList.toggle('translate-y-32');
})

window.addEventListener('DOMContentLoaded', () => {
  let count = -100;
  const counter = setInterval(() => {
    x++;
    count = (-100 + x);
    introBox_el.classList.replace(`translate-x-[${count - 1}%]`, `translate-x-[${count}%]`);
    introNum_el.textContent = zeroPad(x, 3);
    if (x === 100) {
      clearInterval(counter);
      intro_el.classList.add('scale-150', 'opacity-0');
      setTimeout(() => {
        intro_el.classList.add('hidden');
        body.classList.remove('overflow-hidden')
      }, 1000)
    }
  }, 50);
})

menu.addEventListener('click', () => {
  backdownMenu.classList.toggle('translate-y-[-120%]');
  backdownMenu.classList.toggle('translate-y-0');
  hamburger.classList.toggle('hidden');
  xMenu.classList.toggle('hidden');
})

document.addEventListener("DOMContentLoaded", function () {


  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scroll_top / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);

      if (!backdownMenu.classList.contains('translate-y-0')) {
        if (scroll_top < last_scroll_top) {
          el_autohide.classList.remove('scrolled-down');
          el_autohide.classList.add('scrolled-up');
        } else {
          el_autohide.classList.remove('scrolled-up');
          el_autohide.classList.add('scrolled-down');
        }
        last_scroll_top = scroll_top;
      }
    });
  }
});