// buttons
const prev = document.getElementById('previousButton')
const next = document.getElementById('nextButton')

// image container
const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('img');

let idx = 0;

const navigate = (event, forward = true) => {
    images.forEach(img => {
        img.classList.add('img-hide');
        img.classList.remove('img-full-screen')
    });
    if (forward) {
        idx++;
        if (idx >= images.length) {
            idx = 0;
        }
        images[idx].classList.remove('img-hide');
    } else {
        idx--;
        if (idx < 0) {
            idx = images.length - 1;
        }
        images[idx].classList.remove('img-hide');
    }
};

prev.addEventListener('click', (event) => {
    navigate(event, false);
});
next.addEventListener('click', (event) => {
    navigate(event, true);
});
imageContainer.addEventListener('click', (event) => {
    if (event.target.tagName !== 'IMG') {
        return;
    }
    event.target.classList.toggle('img-full-screen');
    imageContainer.classList.toggle('overflow-visible');
});