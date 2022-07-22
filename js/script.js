const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.capability__skill-percent'),
    lines = document.querySelectorAll('.capability__skill-row span');

percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
