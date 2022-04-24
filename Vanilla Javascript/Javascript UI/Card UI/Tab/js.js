let iconBx = document.querySelectorAll(".iconBx");
let contentBx = document.querySelectorAll(".contentBx");

for (let i = 0; i < iconBx.length; i++) {
    iconBx[i].addEventListener("mouseover", function() {
        for (let i = 0; i < contentBx.length; i++) {
            contentBx[i].className = "contentBx";
        }
        document.getElementById(this.dataset.id).className = "contentBx active";
        for (let i = 0; i < iconBx.length; i++) {
            iconBx[i].className = "iconBx";
        }
        this.className = "iconBx active";
    })
}