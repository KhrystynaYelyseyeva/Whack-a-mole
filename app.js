const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    if (currentTime != 0) {
        square.forEach(item => {
            item.classList.remove('mole');
            item.classList.remove('catch');
        });
        let randomPosition = square[Math.floor(9 * Math.random())];
        randomPosition.classList.add('mole');

        //assign the id of the randomPosition to hitPosition for us to use later
        hitPosition = randomPosition.id;
    }
}

square.forEach(item => {
    item.addEventListener('mouseup', () => {
        if (item.id === hitPosition && currentTime != 0 && !item.classList.contains('catch')) {
            item.classList.remove('mole');
            item.classList.add('catch');
            result++;
            score.textContent = result;
        }
    })
});

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId);
        document.querySelector('h1').textContent = 'Game over! Your final score is ' + result;

    }
}

let timerId = setInterval(countDown, 1000);
