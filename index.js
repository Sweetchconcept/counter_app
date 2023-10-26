
const countEl = document.getElementById('counter');
const subtract = document.getElementById('subtract');
const resetEl = document.getElementById('reset');
const addEl = document.getElementById('add');
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    if (e.target.classList.contains('add')) {
        countEl.innerHTML++
    }
})

subtract.addEventListener('click', (e) => {
    if (e.target.classList.contains('subtract')) {
        countEl.innerHTML--
    }
})

resetEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('reset')) {
        countEl.innerHTML = 0
    }
})