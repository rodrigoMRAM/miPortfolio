const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const opened = document.querySelector('.opened');


opened.addEventListener('click', ()=>{
    let valor = opened.classList.contains('opened')
    if(valor){
       nav.classList.toggle('habi')
    }
})