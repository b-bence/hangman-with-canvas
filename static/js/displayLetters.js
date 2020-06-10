addEventListenerToLetters();

function addEventListenerToLetters(){
    const letters = document.querySelectorAll('.letter');

    letters.forEach(letter =>{
        letter.addEventListener('click', handleClick.bind(this, letter))
    })
}

function handleClick(letter){
    const letterValue = letter.dataset.letter;

    const mysteryWord = 'Hello'
}


function sendWord(){
    fetch()
}