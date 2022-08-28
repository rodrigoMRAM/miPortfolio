const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

window.addEventListener('scroll',()=>{
    header.classList.toggle('abajo', window.scrollY>0);
})



menu.addEventListener('click', ()=>{
    nav.classList.toggle('habilitado');
    header.classList.toggle('habilitacion')
})

