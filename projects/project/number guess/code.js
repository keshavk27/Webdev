let r = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const lastguess = document.querySelector('.guesses');
const guessRem = document.querySelector('.lastResult');
const lowhigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validguess(guess);
    });
}
function validguess(guess) {
    if (isNaN(guess)) {
        alert('Enter a valid number')
    } else if (guess < 1) {
        alert('Enter a valid number');
    } else if (guess > 100) {
        alert('Enter a number less than 100');
    } else {
        prevguess.push(guess);
        if (numguess > 9) {
            cleanupguess(guess);
            display(`Game over. Random number was ${r}`);
            endgame();
        } else {
            cleanupguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess == r) {
        display('You guessed it right');
        endgame();
    } else if (guess < r) {
        display('Number is too low');
    } else if (guess > r) {
        display('Number is too high');
    }
}
function cleanupguess(guess) {
    userinput.value = '';
    lastguess.innerHTML += `${guess} `;
    numguess++;
    guessRem.innerHTML = `${11 - numguess}`;
}
function display(mssg) {
    lowhigh.innerHTML = `<h2>${mssg}</h2>`;
}
function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newgame">Start new game</h2>';
    startover.appendChild(p);
    playgame = false;
    newgame();
}

function newgame() {
    const newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click', function (e) {
        r = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numguess = 1;
        lastguess.innerHTML = '';
        lowhigh.innerHTML = ''
        guessRem.innerHTML = `${11 - numguess}`;
        userinput.removeAttribute('disabled');
        startover.removeChild(p);
        playgame = true;
    });
}
