init();

function init() {
    showModal();
    addEventListenerToLetters();
}

function getPuzzle(topic) {
    fetch('static/data/puzzle.json')
        .then(response => response.json())
        .then(data => choosePuzzle(data[topic]));
}

function chooseTopic(event) {
    let chosenTopic = event.target.getAttribute('data-topic');
    console.log(chosenTopic);
    getPuzzle(chosenTopic);
    const modal = document.getElementById("puzzleModal");
    modal.classList.add('hidden')
}

function choosePuzzle(puzzleList) {
    let puzzle = puzzleList[Math.floor((Math.random() * puzzleList.length))]
    let puzzleField = document.getElementById('display-puzzle');
    puzzleField.innerHTML = puzzle;
    hideWord()
}

function showModal() {

    // Get the modal
    const modal = document.getElementById("puzzleModal");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.classList.add('hidden')
    };

    // EventListeners on topics
    let puzzleTopics = document.getElementsByClassName('puzzle-card');
    for (let topic of puzzleTopics) {
        topic.addEventListener('click', chooseTopic)
    }
}

function hideWord() {
    const word = document.querySelector('#display-puzzle').innerHTML;
    const hiddenWordBox = document.querySelector('#hidden-word');

    let hiddenWordBoxValue = "";

    for (let letter = 0; letter < word.length; letter++) {
        if (word[letter] !== ' ' && word[letter] !== "-") {
            hiddenWordBoxValue += `<div class="hidden-letter" data-letter="${word[letter]}"></div>`
        }
    }
    hiddenWordBox.innerHTML = hiddenWordBoxValue;
}

function addEventListenerToLetters() {
    const letters = document.querySelectorAll('.letter');

    letters.forEach(letter => {
        letter.addEventListener('click', handleClick.bind(this, letter))
    })
}

function handleClick(letter) {
    const letterValue = letter.dataset.letter;
    const mysteryWord = document.querySelector('#hidden-word');
    letter.disabled = true;

    let correctGuess = false;
    for (let letter = 0; letter < mysteryWord.childNodes.length; letter++) {
        if (mysteryWord.childNodes[letter].dataset.letter === letterValue) {
            mysteryWord.childNodes[letter].innerHTML = letterValue;
            correctGuess = true;
        }
    }

    if (!correctGuess) {
        simulateClick()
    }
    checkWin();
}

function simulateClick() {
    const nextButton = document.querySelector('#next');
    nextButton.click();
    let numberOfWrongGuesses = +nextButton.dataset.wrong_guess;
    numberOfWrongGuesses++;
    nextButton.dataset.wrong_guess = numberOfWrongGuesses;

    checkLose(numberOfWrongGuesses);
}

function checkLose(numberOfWrongGuesses) {
    if (numberOfWrongGuesses === 9) {
        console.log('lost')
    }
}

function checkWin() {
    const mysteryWord = document.querySelector('#hidden-word');
    const mysteryWordLength = mysteryWord.childNodes.length;

    let unhiddenWords = 0;

    for (let letter = 0; letter < mysteryWordLength; letter++) {
        if (mysteryWord.childNodes[letter].innerHTML) {
            unhiddenWords++;
        }
    }

    if (unhiddenWords === mysteryWordLength) {
        console.log('win')
    }
}

