// GET DATE ELEMENT 
let date = new Date();
// Carousel responsible for the Hero bg fadeout!!!



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
git init                      # Initialize Git in the folder
git add .                      # Stage all files to start tracking
git commit -m "initial commit" # Take the first snapshot
git remote add origin <repo-url> # Casey-ctrl/MYTESLA_PROJECT
git branch -M main             # Make sure main branch exists
git push -u origin main        # Push first commit to GitHub
*/
_________
/* git add .                      # Stage new/changed files
git commit -m "your message"   # Save a snapshot
git push                        # Upload to GitHub
*/