//Img
const imgBx = document.querySelector(".imgBx");
const slides = imgBx.getElementsByTagName("img");
let i = 0;

function nextSlide() {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
}
function prevSlide() {
    slides[i].classList.remove("active");
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add("active");
}
//Text
const contentBx = document.querySelector(".contentBx");
const slidesText = contentBx.getElementsByTagName("div");
let j = 0;

function nextSlideText() {
    slidesText[j].classList.remove("active");
    j = (j + 1) % slidesText.length;
    slidesText[j].classList.add("active");
}
function prevSlideText() {
    slidesText[j].classList.remove("active");
    j = (j - 1 + slidesText.length) % slidesText.length;
    slidesText[j].classList.add("active");
}