window.addEventListener('DOMContentLoaded', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--inner-height', `${vh}px`);
});

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--inner-height', `${vh}px`);
});