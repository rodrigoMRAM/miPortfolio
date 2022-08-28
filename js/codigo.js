divMenu = document.querySelector('.divMenu');
header = document.querySelector('.header');
lista = document.querySelector('.lista');

divMenu.addEventListener('click', ()=>{
    header.classList.toggle('active');
    lista.classList.toggle('listaResponsive');
})