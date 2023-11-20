
// Casa Lupu Overlay

const navSlideOverlay = () => {

    const myNav = document.getElementById("myNav");
    const hamburger = document.querySelector('.hamburger');
    const cross = document.querySelector('.cross');
    const logo = document.querySelector('.logo');
    const main = document.querySelector('main');
    const desktop = document.querySelector('.desktop');

    const closeOverlay = () => {
        myNav.style.width = "0";
        logo.style.opacity = 1;
        main.style.opacity = 1;
        desktop.style.opacity = 1;
    }
    
    hamburger.addEventListener('click', () => {
        myNav.style.width = "20rem";
        logo.style.opacity = 0.5;
        main.style.opacity = 0.5;
        desktop.style.opacity = 0.5;

        main.addEventListener('click', () => {
            closeOverlay();
        });
    });
    
    cross.addEventListener('click', () => {
        closeOverlay();
    });
}

navSlideOverlay();
