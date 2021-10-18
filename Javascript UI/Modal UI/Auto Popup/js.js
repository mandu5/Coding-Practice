// Auto popup after 2s
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block"

    }, 2000)
}

close.addEventListener("click", () => {
    popup.style.display = "none"
})