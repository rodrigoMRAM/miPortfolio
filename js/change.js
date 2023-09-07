checkbox = document.querySelector(".check");
checkbox.addEventListener("click", ()=>{
    
    let id= checkbox.checked;
    if (id == true){
        location.href= "en/index.html"
        console.log(checkbox.checked)
        
    }else{
        location.href="../index.html"
        console.log(checkbox.checked)
        
    }
})