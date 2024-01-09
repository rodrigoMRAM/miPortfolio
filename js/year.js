// Crear una instancia del objeto Date
footerP = document.querySelector('.footerP')
console.log(footerP.textContent)
texto = footerP.textContent
const fechaActual = new Date();


// Obtener el año actual
const  yearCurrent = fechaActual.getFullYear();
footerP.innerHTML = `${texto} ${yearCurrent} `
// Mostrar el año actual

console.log("El año actual es: " +yearCurrentañoActual);
