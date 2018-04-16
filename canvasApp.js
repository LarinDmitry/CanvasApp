var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    isMouseDown = false,
    coords = [];

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
////////////////////////////////////////////////////////
*/

//рисовалка сохранялка
////////////////////////////////////////////////////////
ctx.lineWidth=10*2;
radius=10;
canvas.addEventListener('mousedown', function (e) {
    isMouseDown=true;
});

canvas.addEventListener('mouseup', function (e) {
    isMouseDown=false;
    ctx.beginPath();
    coords.push('mouseup');
});

canvas.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
        coords.push([e.clientX, e.clientY]);
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, radius, 0 , Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
});

function save() {
    localStorage.setItem('coords', JSON.stringify(coords));
}

function replay() {
    var timer = setInterval(function () {
        if(!coords.length){
            clearInterval(timer);
            ctx.beginPath();
            return;
        }

        var crd = coords.shift(),
            e = {
                clientX: crd[0],
                clientY: crd[1]
            };

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, radius, 0 , Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    },30);
}

function clear() {
    ctx.fillStyle='white';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle='black'
}

document.addEventListener('keydown', function (e) {
   if (e.keyCode == 83) {
       //save
       save();
       console.log('Saved');
   }
    if (e.keyCode == 80) {
        //play
        console.log('Replaing...');
        coords=JSON.parse(localStorage.getItem('coords'));

        clear();
        replay();
    }
    if (e.keyCode == 67) {
        //clear
        clear();
        console.log('Cleared');
    }
});
////////////////////////////////////////////////////////



