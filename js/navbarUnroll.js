const unrol = document.querySelectorAll(".unroll");
const menu2 = document.querySelector(".menu2")
const checa = document.querySelector('.checa')
const aaa = document.querySelector(".aaa")
for(let i=0; i < unrol.length ; i++){
        unrol[i].addEventListener('click', ()=> {
                if(checa.checked === false){

                        menu2.classList.toggle("opened")
                        checa.checked = true;
                        aaa.style.top = "-100%"
                }else{
                        menu2.classList.toggle("opened")
                        checa.checked = false;
                }
          // El código que se ejecutará cuando se haga clic en cualquier elemento con la clase 'mi-clase'

        });

        
}

// unrol.forEach(function(elemento) {
//         elemento.addEventListener('click', ()=> {
//                 if(checa.checked === false){

//                         menui.classList.toggle("opened")
//                         checa.checked = true;
//                         aaa.style.top = "-100%"
//                 }else{
//                         menui.classList.toggle("opened")
//                         checa.checked = false;
//                 }


//         });
// });
// unrol.addEventListener("click",()=>{
//         for(let i=0; i < unrol.length; i++){

//         }
       
//         // setTimeout(()=>{
//         //         aaa.classList.toggle("ppp")
//         // },1000)
        
        
        
// })

