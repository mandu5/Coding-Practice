let more = document.querySelectorAll(".more");
for (let i = 0; i < more.length ; i++) {
    more[i].addEventListener("click", function(){
        more[i].parentNode.classList.toggle("active")
    })
}