var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    isMouseDown = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
/*
//Code
//клик=круг
////////////////////////////////////////////////////////
canvas.addEventListener('mousedown', function (e) {
   ctx.beginPath();
   ctx.arc(e.clientX, e.clientY, 30, 0 , Math.PI*2);
   ctx.fill();
});
////////////////////////////////////////////////////////


//рисовалка без клика
////////////////////////////////////////////////////////
canvas.addEventListener('mousemove', function (e) {
   ctx.beginPath();
   ctx.arc(e.clientX, e.clientY, 30, 0 , Math.PI*2);
   ctx.fill();
});
////////////////////////////////////////////////////////

//рисовалка по клику
////////////////////////////////////////////////////////

canvas.addEventListener('mousedown', function (e) {
    isMouseDown=true;
});

canvas.addEventListener('mouseup', function (e) {
    isMouseDown=false;
});

canvas.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 10, 0 , Math.PI*2);
        ctx.fill();
    }
});

////////////////////////////////////////////////////////

//рисовалка по клику без гепа
////////////////////////////////////////////////////////
ctx.lineWidth=10*2;
canvas.addEventListener('mousedown', function (e) {
    isMouseDown=true;
});

canvas.addEventListener('mouseup', function (e) {
    isMouseDown=false;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 10, 0 , Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
});
////////////////////////////////////////////////////////*/

