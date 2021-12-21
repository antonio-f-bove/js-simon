function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function printBoxHtml(boxContent, container, additionalClass) {
  const box = document.createElement('span');
  box.className = 'box';
  box.append(boxContent);

  // cosi possiamo decidere di aggiungere del css
  if(additionalClass !== '') {
    box.classList.add(additionalClass)
  }

  container.append(box);
}

function toggleHideHtml(container) {
  container.classList.toggle('hidden');
}

function playGame(numbersArray, containerHtml1, containerHtml2) {
  const userGuesses = [];
  let correctGuesses = 0;
  
  for (let i = 0; i < numbersArray.length; i++) {
    userGuesses[i] = parseInt(prompt('Inserisci un numero'));

    if (numbersArray[i] === userGuesses[i]){
      printBoxHtml(userGuesses[i], containerHtml2, 'green');
      correctGuesses++;
    } else {
      printBoxHtml(userGuesses[i], containerHtml2, 'red');
    }
  }

  toggleHideHtml(containerHtml1);

  guessedHtml = document.querySelector('.guessed');
  guessedHtml.append(`You guessed ${correctGuesses} correct answers:`)
  missedHtml = document.querySelector('.missed');
  missedHtml.append(`You missed ${numbersArray.length - correctGuesses} answers:`)

  for(let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === userGuesses[i]) {
      guessedHtml.append(`${userGuesses[i]}  `);
    } else {
      missedHtml.append(`${userGuesses[i]}  `)
    }
  }

  statsHtml = document.getElementById('stats');
  if (correctGuesses !== numbersArray.length) {
    statsHtml.style.background = 'red';
  }
  toggleHideHtml(statsHtml);
}




const min = 1;
const max = 25;
const timeToMemorise = 5000;

const fiveNumbers = [];
let isWinner = false;

while (fiveNumbers.length < 5) {
  const randNum = getRandomNumber(min, max);
  if (!fiveNumbers.includes(randNum)){
    fiveNumbers.push(randNum);
  }
}

const outputHtml = document.getElementById('output');
const output2Html = document.getElementById('output2');

for (let i = 0; i < fiveNumbers.length; i++){
  printBoxHtml( fiveNumbers[i], outputHtml);
}

// game fase
setTimeout(function() {
  toggleHideHtml(outputHtml);
}, timeToMemorise)

setTimeout(function() {
  playGame(fiveNumbers,outputHtml, output2Html);
}, timeToMemorise + 1000)


