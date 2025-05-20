let currentSlide = 0;
const totalSlides = document.querySelectorAll('.course-slide').length;
const track = document.getElementById('carouselTrack');

function updateSlide() {
    const slideWidth = document.querySelector('.course-slide').offsetWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function Next() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
    }
}

function Previous() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}



// second
const slides = document.getElementsByClassName('carousel-slide');

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
}



function showSlide(containerId, index) {
    const container = document.getElementById(containerId);
    const slides = container.getElementsByClassName('carousel-slide');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
}


function showSlide2(index) {
    const container = document.getElementById('carousel2');
    const slides = container.getElementsByClassName('carousel-slide');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
}
