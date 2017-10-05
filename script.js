function nextSlide(n) {

    showSlide(slideIndex += n);

}

function prevSlide(n) {

    showSlide(slideIndex -= n);

}

function currentSlide(n) {

    showSlide(slideIndex = n);

}


function showSlide(n) {

    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");

    if (n < 1) {
        slideIndex = slides.length;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }


    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";

}

function automaticPlay() {

    setInterval(function () {
        nextSlide(1);
    }, 5000);

}



// Mouse move tilt effect
function mouseMove(event) {

    // Detect mouse position
    var xPos = (event.clientX / window.innerWidth) - 0.5;
    var yPos = (event.clientY / window.innerHeight) - 0.5;

    // Tilt the hero container
    TweenLite.to(".hero", 0.6, {
        rotationY: 5 * xPos,
        rotationX: 5 * yPos,
        ease: Power1.easeOut,
        transformPerspective: 900,
        transformOrigin: "center"
    });

};


window.onload = function () {
    currentSlide(1);
    automaticPlay();

}
