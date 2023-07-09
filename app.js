const intro = document.querySelector('.intro');
const aboutSec = document.querySelector('.about');
const skills = document.querySelector('.skills');
const nav = document.querySelector('.autohide');
const list = document.querySelectorAll('.icon');
const project = document.querySelector('.project');
const blog = document.querySelector('.blog');
const boxBlog = document.querySelectorAll('.box-blog');
const kotak1 = document.querySelector('.kotak1');
const kotak2 = document.querySelector('.kotak2');
const kotak3 = document.querySelector('.kotak3');
const kotak4 = document.querySelector('.kotak4');
const kotak5 = document.querySelector('.kotak5');
const kotak6 = document.querySelector('.kotak6');
const bdy = document.querySelector('.body');
const cnt2 = document.querySelector('.box');
const landing = document.querySelector('.landing');
const menu = document.querySelector('.menu');
const backdownMenu = document.querySelector('.backdown-menu');
const hamburger = document.querySelector('.hamburger-menu')
const xMenu = document.querySelector('.x-menu')
const el_autohide = document.querySelector('.autohide');
const zeroPad = (num, places) => String(num).padStart(places, '0');
let x = 0;

menu.addEventListener('click', () => {
  backdownMenu.classList.toggle('translate-y-[-120%]');
  backdownMenu.classList.toggle('translate-y-0');
  hamburger.classList.toggle('hidden');
  xMenu.classList.toggle('hidden');
})

/* window.onscroll = function () {
  let scroll = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scroll / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);

  document.title = `${scrollPercentRounded}`

  if (scrollPercentRounded >= 15 && scrollPercentRounded <= 34) {
    aboutSec.classList.replace('bg-white', 'bg-black');
  } else {
    aboutSec.classList.replace('bg-black', 'bg-white')
    aboutSec.classList.remove('text-white')
  }
  if (scrollPercentRounded >= 42 && scrollPercentRounded <= 63) {
    list.forEach((e) => {
      e.classList.replace('bg-[#161616]', 'bg-slate-200');
      e.classList.replace('shadow-[0_1px_2px_0_rgb(189,189,189,0.75)]', 'shadow-xl')
    })
    skills.classList.replace('bg-black', 'bg-white');
    skills.classList.remove('text-white');
  } else {
    list.forEach((e) => {
      e.classList.replace('bg-slate-200', 'bg-[#161616]');
      e.classList.replace('shadow-xl', 'shadow-[0_1px_2px_0_rgb(189,189,189,0.75)]')
    })
    skills.classList.replace('bg-white', 'bg-black');
    skills.classList.add('text-white')
  }
  if (scrollPercentRounded >= 68 && scrollPercentRounded <= 87) {
    project.classList.add('bg-black', 'text-white');
  } else {
    project.classList.remove('bg-black', 'text-white');
  }
  if (scrollPercentRounded >= 90 && scrollPercentRounded <= 100) {
    boxBlog.forEach((e) => {
      e.classList.replace('bg-[#161616]', 'bg-slate-200');
    })
    blog.classList.remove('bg-black', 'text-white');
  } else {
    boxBlog.forEach((e) => {
      e.classList.replace('bg-slate-200', 'bg-[#161616]');
    })
    blog.classList.add('bg-black', 'text-white');
  }
} */

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
          if (scrollPercentRounded >= 15 && scrollPercentRounded <= 34) {
            el_autohide.classList.remove('scrolled-down');
            el_autohide.classList.add('scrolled-up');
          } else if (scrollPercentRounded >= 42 && scrollPercentRounded <= 63) {
            el_autohide.classList.remove('scrolled-down');
            el_autohide.classList.add('scrolled-up');
          } else if (scrollPercentRounded >= 68 && scrollPercentRounded <= 87) {
            el_autohide.classList.remove('scrolled-down');
            el_autohide.classList.add('scrolled-up');
          } else if (scrollPercentRounded >= 90 && scrollPercentRounded <= 100) {
            el_autohide.classList.remove('scrolled-down');
            el_autohide.classList.add('scrolled-up');
          } else {
            el_autohide.classList.remove('scrolled-down');
            el_autohide.classList.add('scrolled-up');
          }
        } else {
          el_autohide.classList.remove('scrolled-up');
          el_autohide.classList.add('scrolled-down');
        }
        last_scroll_top = scroll_top;
      }
    });
  }
});

$(document).ready(function () {
  $(this).scrollTop(0)
})

if (window.innerWidth >= 1024) {

  document.addEventListener('wheel', (event) => {
    if (intro.classList.contains('flex')) {
      let scroll = window.scrollY;
      let scrollY = event.deltaY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scroll / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);

      document.title = scrollPercentRounded;

      if (scrollY > 0) {
        x = (0 + scrollPercentRounded);
        if (scrollPercentRounded >= 0 && scrollPercentRounded <= 100) {
          if (scrollPercentRounded === 100) {
            bdy.classList.remove('h-[1000vw]', 'w-full');
            bdy.classList.add('overflow-hidden');

            setTimeout(() => {
              $("html, body").scrollTop(0);
            }, 200)

            cnt2.classList.replace('absolute', 'hidden');
            setTimeout(() => {
              landing.classList.remove('fixed', 'z-40');
              bdy.classList.remove('overflow-hidden');
              aboutSec.classList.remove('hidden');
              skills.classList.remove('hidden');
              project.classList.remove('hidden');
              blog.classList.remove('hidden');
              kotak1.style.transform = `translateY(-100%)`;
              kotak2.style.transform = `translateY(100%)`;
              el_autohide.classList.add('scrolled-up');
            }, 1000);

            setTimeout(() => {
              intro.classList.replace('flex', 'hidden');
            }, 2000)
          } else if (scrollPercentRounded === 0) {
            kotak5.style.transform = `translateX(${(x)}%)`;
            kotak6.style.transform = `translateX(-${(x)}%)`;
          } else {
            document.title = 'Oke';
            kotak5.style.transform = `translateX(${(x)}%)`;
            kotak6.style.transform = `translateX(-${(x)}%)`;
          }
        }
      } else if (scrollY < 0) {
        console.log(x)
        if (x >= 1) {
          x = (0 + scrollPercentRounded - 1);
        }
        if (scrollPercentRounded > 0 && scrollPercentRounded < 100) {
          scrollPercentRounded--;
          kotak5.style.transform = `translateX(${(x)}%)`;
          kotak6.style.transform = `translateX(-${(x)}%)`;
        } else if (scrollPercentRounded === 0) {
          kotak5.style.transform = `translateX(${(x)}%)`;
          kotak6.style.transform = `translateX(-${(x)}%)`;
        }
      }
    }
  });
} else {
  $("html, body").scrollTop(0);
  intro.classList.replace('flex', 'hidden');
  bdy.classList.remove('h-[1000vw]', 'w-full');
  cnt2.classList.replace('absolute', 'hidden');
  aboutSec.classList.remove('hidden');
  skills.classList.remove('hidden');
  project.classList.remove('hidden');
  blog.classList.remove('hidden');
  landing.classList.remove('fixed', 'z-40');
}