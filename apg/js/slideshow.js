var slideIndex = 1;
var webWorker = null;

function plusSlides(n) {
    StopAutoSlide();
    ShowSlides(slideIndex += n);
    StartAutoSlide();
}

function currentSlide(n) {
    StopAutoSlide();
    ShowSlides(slideIndex = n);
    StartAutoSlide();
}

function StopAutoSlide(){
    if(webWorker !== null){
        webWorker.terminate();
        webWorker = null;
    }
}

function StartAutoSlide(){
    if (webWorker === null) {
        webWorker = new Worker("js/autoslide.js");
        webWorker.onmessage = function(event){
            ShowSlides(slideIndex += 1);
        };
    }
}

function ShowSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" current", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " current";
}
