// Move profile shapes

function moveCircle(x, y) {
    let circle = document.getElementById("circle");
    circle.style.left = -(x - innerWidth/2)/innerWidth * 10 + "%";
    circle.style.top = -(y - innerHeight/2)/innerHeight * 10 + "%";

    let hexagon = document.getElementById("hexagon-wrapper");
    hexagon.style.left = (x - innerWidth/2)/innerWidth * 10 + "%";
    hexagon.style.top = (y - innerHeight/2)/innerHeight * 10 + "%";
    hexagon.style.transform = "rotate(" + ((x - innerWidth/2)/innerWidth + (y - innerHeight/2)/innerHeight) * 50 + "deg)";
}

window.addEventListener("mousemove", function(e) {
    moveCircle(e.clientX, e.clientY);
});

window.addEventListener("touchmove", function(e) {
    moveCircle(e.touches[0].clientX, e.touches[0].clientY);
});