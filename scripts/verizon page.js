const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');
const links = document.querySelectorAll('li.nav');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  if (navLinks.classList.contains('show')) {
    hamburger.classList.add('cross');
  } else {
    hamburger.classList.remove('cross');
  }
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});
