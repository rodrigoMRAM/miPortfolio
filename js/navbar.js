const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const skil = document.querySelector('.skil')
const about = document.querySelector('.about')


window.addEventListener('scroll',()=>{
    header.classList.toggle('abajo', window.scrollY>0);
})

window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY;
    const val = scrolled*0.8;
    const ancho1 = window.innerWidth;

    if(val<488 && ancho1> 500){
        skil.style.transform = `translateX(${1*val}%)`;
    }
    if(val == 488 && ancho1> 500){
        skil.style.transform = `translateX(488%)`;
    }
    if(val<200 && ancho1< 500){
        skil.style.transform = `translateX(${1*val}%)`;
    }
    if(val == 488 && ancho1< 500){
        skil.style.transform = `translateX(150%)`;
    }
})


window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY;
    const ancho = window.innerWidth
    const val = (scrolled*0.7)-488;
    const val2 = (scrolled*0.2)-488;
    if(scrolled>500 && scrolled<1100 && ancho> 500){
        about.style.transform = `translateX(${1*val}%)`;
        
    }
    if(scrolled == 500 && ancho> 500){
        about.style.transform = `translateX(488%)`;
    }
    if(scrolled>2800 && ancho< 500){
        about.style.transform = `translateX(${(1*val2)-10}%)`;
        console.log(scrolled)
    }
    if(scrolled>3300 && ancho< 500){
        about.style.transform = `translateX(200%)`;
    }
})



menu.addEventListener('click', ()=>{
    nav.classList.toggle('habilitado');
    header.classList.toggle('habilitacion')
})

console.log(window)
