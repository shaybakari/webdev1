const navSlide = () => {
    const burger = document.querySelector(`.burger`);
    const nav = document.querySelector(`.nav-links`);
    const navLinks = document.querySelectorAll(`.nav-links li`)
    burger.addEventListener(`click`, () => {
        //Toggle
        nav.classList.toggle(`nav-active`);
        //Animate
        navLinks.forEach((link, index) =>{
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
               link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + .5}s`;
               console.log(index / 5 + 0.2);
            }
       });
       //burger Animation
       burger.classList.toggle(`toggle`);
    });
    
    
}


navSlide();