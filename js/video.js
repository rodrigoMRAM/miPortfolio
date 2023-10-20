const video = document.getElementById("miVideo");
const video3 = document.getElementById("miVideo3");
const ayuda = document.querySelector(".ayuda")
const efectonro1 = document.querySelector(".efectonro1")
const efectonro2 = document.querySelector(".efectonro2")
const turnero = document.querySelector(".turnero")

efectonro1.addEventListener("mouseenter", function() {
    video.style.display ="block"
    video.play();
});


efectonro1.addEventListener("mouseleave", function() {
    video.style.display ="none"
    video.pause();
  });




  efectonro2.addEventListener("mouseenter", function() {
    video3.style.display ="block"
    video3.play();
});


efectonro2.addEventListener("mouseleave", function() {
    video3.style.display ="none"
    video3.pause();
  });