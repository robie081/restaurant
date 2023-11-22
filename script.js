
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
        enableScroll();
    }
    
    const disableScroll = () => {
        // document.body.classList.add("stop-scrolling");
        document.querySelector('.content').classList.add("stop-scrolling");
    }

    const enableScroll = () => {
        // document.body.classList.remove("stop-scrolling");
        document.querySelector('.content').classList.remove("stop-scrolling");
    }

    hamburger.addEventListener('click', () => {
        myNav.style.width = "20rem";
        logo.style.opacity = 0.5;
        main.style.opacity = 0.5;
        desktop.style.opacity = 0.5;

        disableScroll();

        main.addEventListener('click', () => {
            closeOverlay();
        });

        // function disableScroll() {
        //     document.body.classList.add("stop-scrolling");
        // }
    });
    
    cross.addEventListener('click', () => {
        closeOverlay();
        enableScroll();

        // function enableScroll() {
        //     document.body.classList.remove("stop-scrolling");
        // }
    });
}

navSlideOverlay();


// Create a Sticky Navbar

const stickyNavbar = () => {

window.onscroll = function() {
    myFunction();
};
const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;
console.log(sticky);

function myFunction() {
    
    console.log(window.scrollY);

    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

}

stickyNavbar();