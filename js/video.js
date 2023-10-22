const video = document.getElementById("miVideo");
const video1 = document.getElementById("miVideo1");
const video2 = document.getElementById("miVideo2");
const ayuda = document.querySelector(".ayuda")
const efectonro1 = document.querySelector(".efectonro1")
const efectonro2 = document.querySelector(".efectonro2")
const efectonro3 = document.querySelector(".efectonro3")
const turnero = document.querySelector(".turnero")
const textoExperiencia1 = document.querySelector(".textoExperiencia1")
const textoExperiencia2 = document.querySelector(".textoExperiencia2")
const textoExperiencia3 = document.querySelector(".textoExperiencia3")

efectonro1.addEventListener("mouseenter", function() {
    video.style.display ="block"
    textoExperiencia1.style.filter = "blur(10px)"
    textoExperiencia1.style.zIndex = "-10"
    video.play();
});


efectonro1.addEventListener("mouseleave", function() {
    video.style.display ="none"
    textoExperiencia1.style.filter = "blur(0px)"
    textoExperiencia1.style.zIndex = "1"
    video.pause();
  });




  efectonro2.addEventListener("mouseenter", function() {
    video1.style.display ="block"
    textoExperiencia2.style.filter = "blur(10px)"
    textoExperiencia2.style.zIndex = "-10"

    video1.play();
});


efectonro2.addEventListener("mouseleave", function() {
  video1.style.display ="none"
    textoExperiencia2.style.filter = "blur(0px)"
    textoExperiencia2.style.zIndex = "1"
    video1.pause();
  });


  efectonro3.addEventListener("mouseenter", function() {
    video2.style.display ="block"
    textoExperiencia3.style.filter = "blur(10px)"
    textoExperiencia3.style.zIndex = "-10"
    video2.play();
});


efectonro3.addEventListener("mouseleave", function() {
    video2.style.display ="none"
    textoExperiencia3.style.filter = "blur(0px)"
    textoExperiencia3.style.zIndex = "1"
    video2.pause();
  });