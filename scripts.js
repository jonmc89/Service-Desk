/* Flips sign in card */
document.getElementById('signUp').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('welcomeCardInner').classList.toggle('rotate');
});

/* Unflips sign up card */
document.getElementById('signUpSubmit').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('welcomeCardInner').classList.toggle('rotate');
});
