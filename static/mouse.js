function moveCircle(x, y) {
    let circle = document.getElementById("circle");
    circle.style.left = -(x - innerWidth/2)/innerWidth * 10 + "%";
    circle.style.top = -(y - innerHeight/2)/innerHeight * 10 + "%";

    let hexagon = document.getElementById("hexagon-wrapper");
    hexagon.style.left = (x - innerWidth/2)/innerWidth * 10 + "%";
    hexagon.style.top = (y - innerHeight/2)/innerHeight * 10 + "%";
}

window.addEventListener("mousemove", function(e) {
    moveCircle(e.clientX, e.clientY);
});
