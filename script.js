

// Casa Lupu Overlay and Sticky Navbar -- Second -- with Scrolling Allowed

const casaLupu = () => {

    let flag = 1;
    const navbar = document.getElementById('navbar');

    const stickyNavbar = () => {
        const sticky = navbar.offsetTop;
        // console.log(sticky);
        window.onscroll = () => {
            // console.log(window.scrollY);
            if (window.scrollY >= sticky && flag) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }
    }

    const navSlideOverlay = () => {

        const myNav = document.getElementById("myNav");
        const hamburger = document.querySelector('.hamburger');
        const cross = document.querySelector('.cross');
        const logo = document.querySelector('.logo');
        const content = document.querySelector('.content');
        const desktop = document.querySelector('.desktop');

        const closeOverlay = () => {
            myNav.style.width = "0";
            logo.style.opacity = 1;
            content.style.opacity = 1;
            desktop.style.opacity = 1;
            flag = 1;
        }

        hamburger.addEventListener('click', () => {
            myNav.style.width = "20rem";
            logo.style.opacity = 0.5;
            content.style.opacity = 0.5;
            desktop.style.opacity = 0.5;

            flag = 0;
            navbar.classList.remove('sticky');        

            content.addEventListener('click', () => {
                closeOverlay();
            });

            cross.addEventListener('click', () => {
                closeOverlay();
            });
        });
    }

    stickyNavbar();
    navSlideOverlay();
}

casaLupu();








// // Casa Lupu Overlay and Sticky Navbar -- First -- with Scrolling Disabled

// const navSlideOverlay = () => {

//     const myNav = document.getElementById("myNav");
//     const hamburger = document.querySelector('.hamburger');
//     const cross = document.querySelector('.cross');
//     const logo = document.querySelector('.logo');
//     const main = document.querySelector('main');
//     const desktop = document.querySelector('.desktop');

//     const closeOverlay = () => {
//         myNav.style.width = "0";
//         logo.style.opacity = 1;
//         main.style.opacity = 1;
//         desktop.style.opacity = 1;
//         enableScroll();
//     }
    
//     const disableScroll = () => {
//         // document.body.classList.add("stop-scrolling");
//         document.querySelector('.content').classList.add("stop-scrolling");
//     }

//     const enableScroll = () => {
//         // document.body.classList.remove("stop-scrolling");
//         document.querySelector('.content').classList.remove("stop-scrolling");
//     }

//     hamburger.addEventListener('click', () => {
//         myNav.style.width = "20rem";
//         logo.style.opacity = 0.5;
//         main.style.opacity = 0.5;
//         desktop.style.opacity = 0.5;

//         disableScroll();

//         main.addEventListener('click', () => {
//             closeOverlay();
//         });

//         // function disableScroll() {
//         //     document.body.classList.add("stop-scrolling");
//         // }
//     });
    
//     cross.addEventListener('click', () => {
//         closeOverlay();
//         enableScroll();

//         // function enableScroll() {
//         //     document.body.classList.remove("stop-scrolling");
//         // }
//     });
// }

// navSlideOverlay();


// // Create a Sticky Navbar

// const stickyNavbar = () => {

// window.onscroll = function() {
//     myFunction();
// };
// const navbar = document.getElementById('navbar');
// const sticky = navbar.offsetTop;
// console.log(sticky);

// function myFunction() {
    
//     console.log(window.scrollY);

//     if (window.scrollY >= sticky) {
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');
//     }
// }

// }

// stickyNavbar();