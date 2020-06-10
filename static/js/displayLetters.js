addEventListenerToLetters();

function addEventListenerToLetters(){
    const letters = document.querySelectorAll('.letter');

    letters.forEach(letter =>{
        letter.addEventListener('click', handleClick.bind(this, letter))
    })
}

function handleClick(letter){
    const letterValue = letter.dataset.letter;
    const mysteryWord = document.querySelector('#hidden-word');

    for (let letter = 0; letter < mysteryWord.childNodes.length; letter++){
        if(mysteryWord.childNodes[letter].dataset.letter === letterValue){
            mysteryWord.childNodes[letter].innerHTML = letterValue
        }
    }
}

