const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll(
    '.screen');
const timeList = document.querySelector('#time-list');
let time = 0;
let score = 0;
const timeEL = document.querySelector('#time');
const board = document.querySelector('.board');

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = +event.target.getAttribute('data-time');
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')){
    score++
    event.target.remove()
    createRandomCircle()
  }
})
function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle()
  timeEL.innerHTML = `00:${time}`;
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      timeEL.innerHTML = `00:0${time}`;
    } else timeEL.innerHTML = `00:${time}`;
  }
}

function finishGame() {
  timeEL.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
  const size = getRandomNumber(10, 60);
  const {width, height} = board.getBoundingClientRect()
  const positionTop = getRandomNumber(0, height - size);
  const positionLeft = getRandomNumber(0, width - size);
  const circle = document.createElement('div');

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${positionTop}px`;
  circle.style.left = `${positionLeft}px`;
  board.append(circle);
}

function getRandomNumber (min, max) {
  return Math.round(Math.random() * (max - min) + min)
}