const ratingButtons = document.querySelectorAll('.rating-button');
const displayRating = document.querySelector('.selected-rating');
const submitButton = document.querySelector('#submit');

const ratingComponent = document.querySelector('.rating-component');
const resultComponent = document.querySelector('.result-component');

let currentRating = 0;

submitButton.addEventListener('click', () => {
    currentRating = parseInt(displayRating.innerText);
    if (currentRating === 0) {
        alert('Please select a rating before submitting!');
        return;
    }
    ratingComponent.style.display = 'none';
    resultComponent.classList.remove('hidden');
})


ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayRating.innerText = button.innerText;
    });
});