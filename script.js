const slides = document.querySelectorAll(".slideshow");
const nextImageDelay=3000;
let currentImageCounter=0;

slides[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slides[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % slides.length;
    slides[currentImageCounter].style.opacity = 1;

}