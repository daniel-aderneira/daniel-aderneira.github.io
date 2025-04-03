document
  .querySelectorAll('.year')
  .forEach(year => (year.textContent = new Date().getFullYear()));
