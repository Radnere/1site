// просто галерея
const images = document.querySelectorAll(['.contentIMG img', 'li img']);
const modalElement = element =>
    document.querySelector(`.popup ${element}`);
const body = document.querySelector('body');
const close = document.getElementById('close-popup');

close.addEventListener('click', function(){
    body.style.overflow = 'auto';
    modalPopup.style.display = 'none';
});

const modalPopup = document.querySelector('.popup');
images.forEach(img => {
    img.addEventListener('click', e => {
        body.style.overflow = 'hidden';
        e.stopPropagation();
        modalPopup.style.display = 'block';

        modalElement('img').src = img.src;
    });
});

// карусель (скролируемая галерея)
const carousel = document.querySelector(".carousel");
const right_button = document.querySelector(".rightb");
const left_button = document.querySelector(".leftb");
const small_images = carousel.querySelectorAll('li img');
const len = small_images.length;
const width = 417;
let x = 0;
left_button.style.display = 'none';
left_button.addEventListener('click', function(){
    x -= width *2;
    x = Math.max(x, 0);
    hide_arrows();
    carousel.querySelector('ul').style.marginLeft = -x + 'px';
});
right_button.addEventListener('click', function(){
    x += width *2;
    x = Math.min(x, width * (len - 2));
    hide_arrows();
    carousel.querySelector('ul').style.marginLeft = -x + 'px';
});
function hide_arrows(){
    if(x === 0){
        left_button.style.display = 'none';
    }
    else{
        left_button.style.display = 'block';
    }
    if(x === width * (len - 2)){
        right_button.style.display = 'none';
    }
    else{
        right_button.style.display = 'block';
    }
}