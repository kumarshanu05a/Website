let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slider img');
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Initialize the slider
showSlide(slideIndex);
