const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");

function countLetters() {
    const textLength = textarea.value.length;
    count.innerText = `${textLength}`;
}