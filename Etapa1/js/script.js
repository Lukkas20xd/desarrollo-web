const navLinks = document.querySelectorAll('.header__nav-item a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
// Resalta sección activa en el menú
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main section');
  let scrollPos = window.scrollY + 80;
  sections.forEach(section => {
    const id = section.getAttribute('id');
    const navItem = document.querySelector(`.header__nav-item a[href="#${id}"]`);
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      navItem.classList.add('active');
    } else {
      navItem.classList.remove('active');
    }
  });
});
