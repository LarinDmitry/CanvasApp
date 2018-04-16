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


