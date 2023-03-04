const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const skil = document.querySelector('.skil')
const about = document.querySelector('.about')
const body = document.querySelector('body')
const opened = document.querySelector('.opened')
const check = document.querySelector('#check')
const hola = document.querySelector('#hola')


// window.addEventListener('scroll',()=>{
//     scrol = parseInt(window.scrollY*0.1);
//     nav.classList.toggle('abajo', window.scrollY>50)
//     nav.classList.toggle('abajo1', window.scrollY<25 || window.scrollY>10)
// })

window.addEventListener('scroll',()=>{
    scrol = parseInt(window.scrollY*0.03);
    if(innerWidth>860){
        nav.style.transition = '2s'
        nav.style.backgroundColor = `rgb(255, 255, 255 ,0.${scrol})`
    }else{
        header.style.transition = '2s'
        header.style.backgroundColor = `rgb(0, 0, 0 )`
    }
    if(scrol == 0){
        header.style.transition = '3s'
        header.style.backgroundColor = `rgb(0, 0, 0)`
    }
})

body.addEventListener('click',(event)=>{  
    clienteY = event.clientY;
    if (clienteY>499) {
       check.checked =false;
       menu.classList.remove('opened')  ; 
        console.log(hola)     
    }
})