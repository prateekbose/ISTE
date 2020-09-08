const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
const menu = document.querySelector('.drop-down');
const body = document.body;
const sectionTitle = document.querySelector('.mobile-section');

const navAnimate = () => {    
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        navLinks.classList.toggle('nav-links-active');
        nav.classList.toggle('nav-active');
        dropDown();
    });
};

const navScroll = () => {
    var menuClassList = [...menu.classList];
    
    document.addEventListener('scroll', () => {
        if(!menuClassList.includes("drop-down-active")){
            if(window.scrollY >= nav.offsetHeight){
                nav.classList.add('nav-scroll');
                sectionTitle.classList.add('mobile-section-active');
            } else {
                nav.classList.remove('nav-scroll');
                sectionTitle.classList.remove('mobile-section-active');
            }
        }
        
    });
};

const dropDown = () => {
    var navClassList = [...nav.classList];
    var menuClassList = [...menu.classList];

    if(navClassList.includes("nav-scroll")){
        nav.classList.toggle('nav-scroll');
    }
    if(menuClassList.includes("drop-down-active")){
        nav.classList.toggle('nav-scroll');
    }
    menu.classList.toggle('drop-down-active');
    body.classList.toggle('disable-scroll');
    sectionTitle.classList.add('mobile-section-active');
}

const start = () => {
    navAnimate();
    navScroll();
};

start();