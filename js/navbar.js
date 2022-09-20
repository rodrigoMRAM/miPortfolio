const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const skil = document.querySelector('.skil')
const about = document.querySelector('.about')
const body = document.querySelector('body')
const opened = document.querySelector('.opened')


// window.addEventListener('scroll',()=>{
//     scrol = parseInt(window.scrollY*0.1);
//     nav.classList.toggle('abajo', window.scrollY>50)
//     nav.classList.toggle('abajo1', window.scrollY<25 || window.scrollY>10)
// })

window.addEventListener('scroll',()=>{
    scrol = parseInt(window.scrollY*0.03);
    if(innerWidth>600){
        nav.style.transition = '2s'
        nav.style.backgroundColor = `rgb(255, 255, 255 ,0.${scrol})`
    }else{
        header.style.transition = '2s'
        header.style.backgroundColor = `rgb(0, 0, 0 ,0.${scrol})`
    }
    if(scrol == 0){
        header.style.transition = '3s'
        header.style.backgroundColor = `rgb(0, 0, 0)`
    }
})

menu.addEventListener('click', ()=>{
    nav.classList.toggle('habilitado');
    header.classList.toggle('habilitacion')
})

body.addEventListener('click',(event)=>{  
        clienteY = event.clientY;
        if (clienteY>499) {
            nav.classList.remove('habilitado')
            menu.classList.remove('opened')          
        }
        
  
})  



