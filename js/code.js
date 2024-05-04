const frase = document.querySelector('#frase')
const numero = document.querySelector('#numero')
const submit = document.querySelector('#enviar')
const clickTextArea  = document.querySelector('.clickTextArea')
const whatsapp  = document.querySelector('.whatsapp')
const formulario  = document.querySelector('.formulario')
const contraer  = document.querySelector('.contraer')
const nuevoNumero  =  0
const nuevaFrase =  ""

whatsapp.addEventListener('click',()=>{
    whatsapp.classList.toggle('ocultar')
    // formulario.classList.toggle('ocultar')
    formulario.style.transition = "all 0.3s"
    formulario.style.right = "10px"
    

})


body.addEventListener('click',(event)=>{  
    const clienteY = event.clientY;
    // console.log("cliente x: " ,event.clientX)
    // console.log(event)
    if (clienteY>0 && clienteY<=500) {
        whatsapp.classList.toggle('ocultar')
        formulario.style.transition = "all 0.3s"
    formulario.style.right = "-300px"
    
    }
})


// body.addEventListener('click',(event)=>{  
//     const clienteX = event.clientX;
//     const clienteResta = clienteX -300
//     console.log(clienteResta)
//     if (clienteX < clienteResta) {
//         whatsapp.classList.toggle('ocultar')
//         formulario.style.transition = "all 0.3s"
//     formulario.style.right = "-300px"
    
//     }
// })

contraer.addEventListener('click',()=>{
    whatsapp.classList.toggle('ocultar')
    formulario.style.transition = "all 0.3s"
    formulario.style.right = "-300px"

})




frase.addEventListener('click',()=>{
    frase.classList.toggle('clickTextArea')
})



submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const nuevaFrase = frase.value
    const numeroFinalizado = "541130430451"
    function ModificarFrase(frase){
        let frasepliteada = frase.split(" ")
        let FraseParaUrl = ""
        for (let index = 0; index < frasepliteada.length; index++) {
     
            FraseParaUrl = FraseParaUrl + frasepliteada[index] + "%20"
            
        }

        let nuevaCadena = FraseParaUrl.slice(0, -3);
       return nuevaCadena
    }
    ModificarFrase(nuevaFrase)
    console.log(ModificarFrase(nuevaFrase))
    
    window.open(`https://api.whatsapp.com/send?phone=${numeroFinalizado}&text=${ModificarFrase(nuevaFrase)}`)
    numero.value = ""
    frase.value = ""
    // console.log("el numero es", nuevoNumero ,"y la frase es ", nuevaFrase)
})

