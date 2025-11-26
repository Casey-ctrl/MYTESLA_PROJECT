// GET DATE ELEMENT 
let date = new Date();
// Carousel responsible for the Hero bg fadeout!!!
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    animateOut: 'fadeOut'
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


const dropdown = document.querySelector('.dropdown');
const navLinks = document.querySelector('.nav-links');


dropdown.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

function goTo(state) {
      alert(`You clicked ${state}!`);

    }

  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;
 

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      toggleButton.textContent = '☀️'; 
      localStorage.setItem('theme', 'dark');
    } else {
      toggleButton.textContent = '🌙'; 
      localStorage.setItem('theme', 'light');
    }
  });

  // styles for leave in dropdown effect

  const navbar = document.getElementById('navbar');

  navbar.addEventListener('mouseenter' = ()=> {
    navbar.classList.add('fixed')
  })

  navbar.addEventListener('mouseleave' = ()=> {
    navbar.classList.remove('sticky')
  })

/*
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Casey-ctrl/MYTESLA_PROJECT.git
// git push -u origin main*/