function init() {
    showModal();

    let inputField = document.getElementById('user-input');
    inputField.addEventListener("keyup", checkInput);
}

function checkInput(event) {
    let key = event.keyCode;
    let enterKey = 13;
    if (key === enterKey) {
        console.log('Enter');
        let inputValue = document.getElementById('user-input').value;
        console.log(inputValue)
    }

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
    let puzzle = puzzleList[Math.floor((Math.random()*puzzleList.length))]
    let puzzleField = document.getElementById('display-puzzle');
    puzzleField.innerHTML = puzzle
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

init();