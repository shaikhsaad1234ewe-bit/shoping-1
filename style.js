const bar = document.querySelector('#bar');
  const close = document.querySelector('#close');
  const navbar = document.querySelector('.navbar');

  // Open menu
  bar.addEventListener('click', () => {
    navbar.classList.add('show');
  });

  // Close menu
  close.addEventListener('click', () => {
    navbar.classList.remove('show');
  });