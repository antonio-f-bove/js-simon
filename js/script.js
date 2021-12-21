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
  const userGuessed = [];
  const userMissed = [];
  
  while (userGuessed.length + userMissed.length < 5) {
    const userNum = parseInt(prompt('Inserisci un numero'));
    
    if (numbersArray.includes(userNum)){
      userGuessed.push(userNum);
      printBoxHtml(userNum, containerHtml2, 'green')
    } else {
      userMissed.push(userNum);
      printBoxHtml(userNum, containerHtml2, 'red')
    }
  }

  toggleHideHtml(containerHtml1);

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


