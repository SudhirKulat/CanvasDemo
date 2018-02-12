
var canvas = document.getElementById('canvas_demo');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');



for(var i=0;i<700;i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x,y,30,0,Math.PI*2,false);
    c.fillStyle="red";
    c.fill();
    c.strokeStyle="green";
    c.stroke();
}
