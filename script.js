
const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
const navigation = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    navigation.classList.add('translate');
});

cross.addEventListener('click', () => {
    navigation.classList.remove('translate');
});
