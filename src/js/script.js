// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
  
    if (window.scrollY > fixedNav) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('invisible');
    } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.add('invisible');
    }
  };
  
  // Hamburger
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });

  // Klik diluar hamburger
  window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  });

  // Darkmode
  const checkbox = document.querySelector('#dark-toggle');
  const html = document.querySelector('html');

  checkbox.addEventListener('click', function() {
    if(checkbox.checked) {
      html.classList.add('dark')
      localStorage.theme = 'dark';
    } else {
      html.classList.remove('dark')
      localStorage.theme = 'light';
    }
  });