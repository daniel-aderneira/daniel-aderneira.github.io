document
  .querySelectorAll('.year')
  .forEach(i => (i.textContent = new Date().getFullYear()));
