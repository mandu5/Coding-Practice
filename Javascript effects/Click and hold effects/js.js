let cursor = document.getElementById("cursor");
window.onmousemove = (e) => {
    let x = e.clientX,
        y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
}