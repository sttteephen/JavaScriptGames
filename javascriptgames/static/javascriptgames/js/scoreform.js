function preFormPost() {
    if (document.getElementById('username').ariaValueMax.length != 3) { return false; }
    document.getElementById('score').removeAttribute('disabled');
    console.log(document.getElementById('score'))
    return true;
}