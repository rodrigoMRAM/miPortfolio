const frase = document.querySelector('#frase')
const numero = document.querySelector('#numero')
const submit = document.querySelector('#enviar')
const clickTextArea  = document.querySelector('.clickTextArea')
const whatsapp  = document.querySelector('.whatsapp')
const formulario  = document.querySelector('.formulario')
const contraer  = document.querySelector('.contraer')
const nuevoNumero  =  0
const nuevaFrase =  ""


//FUNCION ESCONDER WHATSAPP
function HideWhatsapp() {
    formulario.style.transition = "all 0.3s"
    formulario.style.right = "-300px"
  }



  // Detectar clic fuera del elemento para esconder WHATSAPP 
  document.addEventListener('click', function(event) {
    if(!formulario.contains(event.target) && !whatsapp.contains(event.target)){
        HideWhatsapp()
    }
  });



// EVENTO APARECER WHATSAPP
whatsapp.addEventListener('click',()=>{
    whatsapp.classList.toggle('ocultar')
    // formulario.classList.toggle('ocultar')
    formulario.style.transition = "all 0.3s"
    formulario.style.right = "10px"
    

})

//BOTON ESCONDER WHATSAPP
contraer.addEventListener('click',()=>{
    whatsapp.classList.toggle('ocultar')
    formulario.style.transition = "all 0.3s"
    formulario.style.right = "-300px"

})




frase.addEventListener('click',()=>{
    frase.classList.toggle('clickTextArea')
})


// FUNCION PARA REDIRIGIR A WHATSAPP
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

