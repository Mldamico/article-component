const btn = document.getElementById('button');
const share = document.getElementById('share');
let isActive = false;
button.addEventListener('click', () => {
  console.log('click');
  isActive
    ? share.classList.add('share-menu__hidden')
    : share.classList.remove('share-menu__hidden');

  isActive = !isActive;
});
