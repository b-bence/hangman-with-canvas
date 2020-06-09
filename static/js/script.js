let inputField = document.getElementById('user-input');
inputField.addEventListener("keyup", checkInput);

function checkInput(event) {
    let key = event.keyCode;
    let enterKey = 13;
    if (key === enterKey) {
        console.log('Enter');
        let inputValue = document.getElementById('user-input').value;
        console.log(inputValue)
    }
}