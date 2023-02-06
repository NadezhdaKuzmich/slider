const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide');
let index = 0;

function hiddenBtn() {
    if(index == 0) {
        prev.classList.add('hidden');
    } else if(index == slides.length - 1) {
        next.classList.add('hidden');
    } else {
        next.classList.remove('hidden');
        prev.classList.remove('hidden');
    }
};

function activeSlide(i) {
    for(const slide of slides) {
        slide.classList.remove('active');
    }
    slides[i].classList.add('active');
}

function prepareCurrentSlide(index) {
    activeSlide(index);
    hiddenBtn();
}

function nextSlide() {
    if(index == slides.length - 1) {
        return;
    } else {
        index++;
        prepareCurrentSlide(index); 
    }
}

function prevSlide() {
    if(index == 0) {
        return;
    } else {
        index--;
        prepareCurrentSlide(index); 
    }
}

hiddenBtn();
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);