const form = document.querySelector('form');
const usernameInput = document.getElementById('username-input');
const scoreInput = document.getElementById('score-input');
const submitInput = document.getElementById('submit-input');

form.onsubmit = (e) => {
    if (usernameInput.value.length != 3) { return false; }
    scoreInput.removeAttribute('disabled');
}

function enableForm(score) {
    console.log("enabling form")
    scoreInput.value = score;
    submitInput.removeAttribute('disabled');
    submitInput.classList.add('btn-success')
}