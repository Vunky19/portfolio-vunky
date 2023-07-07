let intro = document.querySelector('.intro');
const aboutSec = document.querySelector('.about');
const skills = document.querySelector('.skills');
const nav = document.querySelector('.autohide');
const list = document.querySelectorAll('.icon');
const project = document.querySelector('.project');
const blog = document.querySelector('.blog');
const boxBlog = document.querySelectorAll('.box-blog');

window.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {
    intro.classList.replace('top-0', 'top-[-100vh]')
  }, 4200)

})

window.onscroll = function (event) {
  let scroll = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scroll / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);

  document.title = `${scrollPercentRounded}`

  if (scrollPercentRounded >= 15 && scrollPercentRounded <= 34) {
    aboutSec.classList.replace('bg-white', 'bg-black');
    aboutSec.classList.add('text-white');
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
    blog.classList.remove('bg-black', 'text-white');
    boxBlog.forEach((e) => {
      e.classList.replace('bg-[#161616]', 'bg-gray-200');
    })
  } else {
    blog.classList.add('bg-black', 'text-white');
    boxBlog.forEach((e) => {
      e.classList.replace('bg-gray-200', 'bg-[#161616]');
    })
  }
}

document.addEventListener("DOMContentLoaded", function () {

  let el_autohide = document.querySelector('.autohide');

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scroll_top / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);
      if (scroll_top < last_scroll_top) {
        if (scrollPercentRounded >= 15 && scrollPercentRounded <= 34) {
          el_autohide.classList.remove('scrolled-down');
          el_autohide.classList.add('scrolled-up', 'text-white');
        } else if (scrollPercentRounded >= 42 && scrollPercentRounded <= 63) {
          el_autohide.classList.remove('scrolled-down', 'text-white');
          el_autohide.classList.add('scrolled-up');
        } else if (scrollPercentRounded >= 68 && scrollPercentRounded <= 87) {
          el_autohide.classList.remove('scrolled-down');
          el_autohide.classList.add('scrolled-up', 'text-white');
        } else if (scrollPercentRounded >= 90 && scrollPercentRounded <= 100) {
          el_autohide.classList.remove('scrolled-down', 'text-white');
          el_autohide.classList.add('scrolled-up');
        } else {
          el_autohide.classList.remove('scrolled-down', 'text-white');
          el_autohide.classList.add('scrolled-up');
        }
      } else {
        el_autohide.classList.remove('scrolled-up');
        el_autohide.classList.add('scrolled-down');
      }
      last_scroll_top = scroll_top;
    });
  }
}); 