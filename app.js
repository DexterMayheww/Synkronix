//Match the width of synkronix and the description
const synkronix = document.querySelector('.synkronix');
const synkDescription = document.querySelector('.synkronix-description');

window.addEventListener('resize', f => {
    synkDescription.style.width = `${synkronix.offsetWidth}px`;
});

//Add class center-justify to some elements based on screen size
const mediaQuery = window.matchMedia('(max-width: 680px)');
const comingSoonBtn = document.querySelector('.main-coming-soon');

window.addEventListener('resize', f =>{
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
});

window.addEventListener('resize', f => {
    console.log(window.innerWidth);
});