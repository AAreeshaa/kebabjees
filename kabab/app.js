let currentIndex = 0;
const images = document.querySelectorAll('.image-item');
const imageList = document.querySelector('.image-list');


document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateSlider();
});


document.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * images[0].clientWidth;
    imageList.style.transform = `translateX(${offset}px)`;
}

