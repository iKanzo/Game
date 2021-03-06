const startButton = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeEll = document.querySelector('#time');
const board = document.querySelector('#board');
const newGame = document.querySelector('#new-game');
let colors = ['red', 'green', 'white', 'blue', 'yellow', 'purple'];
let score = 0;
let time = 0;


startButton.addEventListener('click', (event)=>{
   event.preventDefault()
   screens[0].classList.add('up')
});

timeList.addEventListener('click', event => {
   if (event.target.classList.contains('time-btn')) {
      time = parseInt(event.target.getAttribute('data-time'))
      screens[1].classList.add('up')
      startGame()
   }
});

board.addEventListener('click', event =>{
   if (event.target.classList.contains('circle')){
      score++
      event.target.remove()
      createRandomEll()
   }
   })
function startGame() {
   setInterval(decreaseTime, 1000)
   createRandomEll()
   setTime(time)
};

function decreaseTime() {
   if (time === 0){
      finishGame()
   }
   else{
      let current = --time
      if (current < 10){
         current = `0${current}`
      }
   
   setTime(current)
}
};

function setTime(value) {
   timeEll.innerHTML = `00:${value}`
};

function finishGame() {
   timeEll.parentNode.classList.add('hide')   
   board.innerHTML = `<h1>Итог:  <span class="score">${score}</span></h1>`
   newGame.classList.add('look')
};

function createRandomEll() {
   const circle = document.createElement('div')
   const size = getRandomNumber(10, 60)
   const {width, height} = board.getBoundingClientRect()
   const x = getRandomNumber(0, width - size)
   const y = getRandomNumber(0, height - size)
   const color = getRandom()

   circle.classList.add('circle')
   circle.style.width = `${size}px`
   circle.style.height = `${size}px`
   circle.style.top = `${y}px`
   circle.style.left = `${x}px`
   circle.style.background = color

   board.append(circle)
};

function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max-min) + min)
};

function getRandom(){
   const index = Math.floor(Math.random() *colors.length)
   return colors[index]
};