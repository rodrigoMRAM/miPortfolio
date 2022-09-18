const bienvenido = document.querySelector('.bienvenido');

bienvenido.addEventListener('mouseout', ()=>{
    bienvenido.style.transition = "transform 1s"
    bienvenido.style.transform = "scale(1)"
})