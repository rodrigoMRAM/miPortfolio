const video2 = document.getElementById("miVideo2");
const efectonro3 = document.querySelector(".efectonro3")

efectonro3.addEventListener("mouseenter", function() {
    video2.style.display ="block"
    video2.play();
});


efectonro3.addEventListener("mouseleave", function() {
    video2.style.display ="none"
    video2.pause();
  });