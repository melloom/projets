const affirmations = [
    "You are capable of amazing things.",
    "Believe in yourself and all that you are.",
    "Your potential is limitless.",
    "You are enough just as you are.",
    "Every day may not be good, but there is something good in every day.",
    "You are stronger than you think.",
    "Your life is your story, and you are the author.",
    "You are worthy of love and respect.",
    "You have the power to create change.",
    "You are a beautiful person inside and out."
];

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function displayAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];
    document.getElementById('affirmation').innerText = affirmation;
}

function nextAffirmation() {
    displayAffirmation();
}

function favoriteAffirmation() {
    const currentAffirmation = document.getElementById('affirmation').innerText;
    if (!favorites.includes(currentAffirmation)) {
        favorites.push(currentAffirmation);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Added to favorites!');
    } else {
        alert('Already in favorites!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayAffirmation();
    document.getElementById('next-btn').addEventListener('click', nextAffirmation);
    document.getElementById('favorite-btn').addEventListener('click', favoriteAffirmation);
});