//https://www.w3schools.com/tags/ref_canvas.asp - тут инфа по канвасу для обучения
var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//var x=50;   //ось ОХ

/*
//КВАДРАТ
///////////////////////////////////////////////////////////////////////////
ctx.fillStyle="magenta";   //фиолетовый цвет
ctx.fillRect(x, 50, 300, 200);  //задаем квадрат с параметрами


setInterval(function () { //счетчик
    ctx.fillStyle="white";  //стартовое
    ctx.fillRect(0,0, canvas.width, canvas.height);  //стартовое

    ctx.fillStyle="magenta";  //конечное
    ctx.fillRect(x++,50,300,200) //конечное
},10);
///////////////////////////////////////////////////////////////////////////

//ПУСТОЙ КВАДРАТ
///////////////////////////////////////////////////////////////////////////
ctx.strokeStyle="magenta";   //фиолетовый цвет (fill не работает)
ctx.lineWidth=10; //ширина границ
ctx.strokeRect(x,50, 300, 200);  //задаем квадрат с параметрами
///////////////////////////////////////////////////////////////////////////

//ПОЛУ-КРУГ-ВВЕРХ
///////////////////////////////////////////////////////////////////////////
ctx.fillStyle="magenta";
ctx.arc(canvas.width/2, canvas.height/2, 100, 0, Math.PI, false);
ctx.fill();
///////////////////////////////////////////////////////////////////////////

//ПОЛУ-КРУГ-НИЗ
///////////////////////////////////////////////////////////////////////////
ctx.fillStyle="magenta";
ctx.arc(canvas.width/2, canvas.height/2, 100, 0, Math.PI, true);
ctx.fill();
///////////////////////////////////////////////////////////////////////////

//ТРЕУГОЛЬНИК
///////////////////////////////////////////////////////////////////////////
ctx.fillStyle="magenta";
ctx.strokeStyle="magenta";
ctx.lineWidth=10;
ctx.scale(2,2); // увеличивать в n кол-во раз обьект
ctx.rotate(.1); // смещение на грудусы
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(50,100);
ctx.lineTo(50,150);
ctx.closePath();
ctx.stroke();
///////////////////////////////////////////////////////////////////////////



