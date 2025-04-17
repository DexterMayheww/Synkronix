//Match the width of synkronix and the description
const synkronix = document.querySelector('.synkronix');
const synkDescription = document.querySelector('.synkronix-description');

function changeDescWidth() {
    synkDescription.style.width = `${synkronix.offsetWidth}px`;
}
changeDescWidth();
document.fonts.ready.then(() => {
    changeDescWidth();
});
window.addEventListener('resize', changeDescWidth);

//Add class center-justify to some elements based on screen size
const mediaQuery = window.matchMedia('(max-width: 680px)');
const comingSoonBtn = document.querySelector('.main-coming-soon');

function centerJustify() {
    if(mediaQuery.matches) {
        synkronix.classList.add('center-justify');
        synkDescription.classList.add('center-justify');
        comingSoonBtn.classList.add('center-justify');
    }
    else {
        synkronix.classList.remove('center-justify');
        synkDescription.classList.remove('center-justify');
        comingSoonBtn.classList.remove('center-justify');
    }
}
centerJustify();
window.addEventListener('resize', centerJustify);

//Logging the current width of the screen
window.addEventListener('resize', f => {
    console.log(window.innerWidth);
});