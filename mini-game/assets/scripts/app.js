const board = document.querySelector('#board');
const colors = ['#f48c06', '#fb5607', '#ff006e', '#8338ec','#3a86ff'];

const SQUARES_NUMBER = 143;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #1d1d1d`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}