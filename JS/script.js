
var text = document.getElementById("line_text");
var but = document.getElementById("button");
but.addEventListener("click", drawForClick);

var d = document.getElementById("draw");
var space = d.width;
var lienzo = d.getContext("2d");

function drawLines(color, xinitial, yinitial, xfinal, yfinal){
    lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinitial, yinitial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke();
lienzo.closePath();
}

function drawForClick(){
    var x = parseInt(text.value);
    var lines = x;
    var l = 0;
    var yi, xf;
    var distance = space/x;

    while(l<lines){
        yi = distance*l;
        xf = distance*(l+1);
        drawLines("grey", 0, yi, xf, 300);
        drawLines("grey", yi, 0, 300, xf);    
        l++;
    }
}