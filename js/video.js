const video = document.getElementById("miVideo");
const video1 = document.getElementById("miVideo1");
const video2 = document.getElementById("miVideo2");
const video3 = document.getElementById("miVideo3");
const video4 = document.getElementById("miVideo4");
const ayuda = document.querySelector(".ayuda")
const efectonro1 = document.querySelector(".efectonro1")
const efectonro2 = document.querySelector(".efectonro2")
const efectonro3 = document.querySelector(".efectonro3")
const efectonro4 = document.querySelector(".efectonro4")
const efectonro5 = document.querySelector(".efectonro5")
const turnero = document.querySelector(".turnero")
const textoExperiencia1 = document.querySelector(".textoExperiencia1")
const textoExperiencia2 = document.querySelector(".textoExperiencia2")
const textoExperiencia3 = document.querySelector(".textoExperiencia3")
const textoExperiencia4 = document.querySelector(".textoExperiencia4")
const textoExperiencia5 = document.querySelector(".textoExperiencia5")
efectonro1.addEventListener("mouseenter", function() {
    video.style.display ="block"
    textoExperiencia1.style.display = "none"
    textoExperiencia1.style.zIndex = "-10"
    video.play();
});


efectonro1.addEventListener("mouseleave", function() {
    video.style.display ="none"
    textoExperiencia1.style.display = "inherit"
    textoExperiencia1.style.zIndex = "1"
    video.pause();
  });




  efectonro2.addEventListener("mouseenter", function() {
    video1.style.display ="block"
    textoExperiencia2.style.display = "none"
    textoExperiencia2.style.zIndex = "-10"

    video1.play();
});


efectonro2.addEventListener("mouseleave", function() {
  video1.style.display ="none"
    textoExperiencia2.style.display = "inherit"
    textoExperiencia2.style.zIndex = "1"
    video1.pause();
  });


  efectonro3.addEventListener("mouseenter", function() {
    video2.style.display ="block"
    textoExperiencia3.style.display = "none"
    textoExperiencia3.style.zIndex = "-10"
    video2.play();
});


efectonro3.addEventListener("mouseleave", function() {
    video2.style.display ="none"
    textoExperiencia3.style.display = "inherit"
    textoExperiencia3.style.zIndex = "1"
    video2.pause();
  });



  efectonro4.addEventListener("mouseenter", function() {
    video3.style.display ="block"
    textoExperiencia4.style.display = "none"
    textoExperiencia4.style.zIndex = "-10"
    video3.play();
});


efectonro4.addEventListener("mouseleave", function() {
    video3.style.display ="none"
    textoExperiencia4.style.display = "inherit"
    textoExperiencia4.style.zIndex = "1"
    video3.pause();
  });


  

  efectonro5.addEventListener("mouseenter", function() {
    video4.style.display ="block"
    textoExperiencia5.style.display = "none"
    textoExperiencia5.style.zIndex = "-10"
    video4.play();
});


efectonro5.addEventListener("mouseleave", function() {
    video4.style.display ="none"
    textoExperiencia5.style.display = "inherit"
    textoExperiencia5.style.zIndex = "1"
    video4.pause();
  });