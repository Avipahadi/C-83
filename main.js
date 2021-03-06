var last_position_of_x, last_position_of_y;
var canvas = document.getElementById("canva");
var ctx = canvas.getContext("2d");
var color = "black";
var width = 2;
var height_of_screen = screen.height - 300;
var width_of_screen = screen.width - 70;
var widthofscreen = screen.width;
if (widthofscreen < 992) {
    document.getElementById("canva").height = height_of_screen;
    document.getElementById("canva").width = width_of_screen;
    document.body.style.overflow = "hidden";
    console.log(height_of_screen, width_of_screen);
}
canvas.addEventListener("touchstart", touchstart);

function touchstart(e) {
    color = document.getElementById("col_inp").value;
    width = document.getElementById("width").value;
    current_x = last_position_of_x;
    current_y = last_position_of_y;
}

canvas.addEventListener("touchmove", touchmove);

function touchmove(e) {
    var current_x = e.touches[0].clientX - canvas.offsetLeft;
    var current_y = e.touches[0].clientY - canvas.offsetTop;
    console.log("The current x and y" + current_x, current_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_x, current_y);
    console.log("The current x and y" + current_x, current_y);
    ctx.stroke();
    last_position_of_x = current_x;
    last_position_of_y = current_y;
    console.log("The last x and y" + last_position_of_x, last_position_of_y);
}

function clear_canva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    color = "black";
}