var posx = 0;
var posy = 0;
var ang = 0;
var vr = 2;
var radius = 30;
var vy = 0;
var vx = 10;
//var vl = 2;
var ay=.3//gravité
var ball = document.getElementById("balle");
var ballshape = document.getElementById("ballshape");
var areaW = 700;
var areaH = 450;
//var areaL = 700;

document.onkeypress = function(e){
  if (e.keyCode == "37") {
   vx -= 5;
 }
 if (e.keyCode == "40") {
  vy -= 5;
}
if (e.keyCode == "38") {
 vy += 5;
}
if (e.keyCode == "39") {
 vx += 5;
}
}
setInterval(update,800/10);
function update(){
  vy += ay;
  //vl += ay;
  //posl += vl;
  posx += vx;
  posy += vy;
  if (posy>=areaH-30){
    vy *= -1;
    posy =areaH - 30;
    vr = vx;
  }
  if (posx>=areaW-30){
    vx *= -1;
    posx =areaW - 30;
    vr = vy;
  }
  if (posx<=30){
    vx *= -1;
    posx = 30;
    vr = vy;
  }
  if (posy<=30){
    vy *= -1;
    posy = 30;
    vr = vx;
  }
  ball.style.left= posx + "px";
  ball.style.top = posy + "px";

ang += vr;
ballshape.style.transform = "rotate("+ang+"deg)";

}
