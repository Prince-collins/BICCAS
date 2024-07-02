const hamburgerIcon = document.querySelector('.container');
const phoneIcon = document.querySelector('.phone');

hamburgerIcon.addEventListener('click',() => {
    phoneIcon.style.display= 'block';
});