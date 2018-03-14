var slideIndex = 1;
showSlides(slideIndex);

function nextImage(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var images = document.getElementsByClassName('slideImage');
    var dots = document.getElementsByClassName('dot');

    if (n > images.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = images.length;
    }
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";

    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    images[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}