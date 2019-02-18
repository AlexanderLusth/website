//ett skript som finns för att skriva ut en förbestemd text i en paragraf.
var i = 0;
var txt = 'you just did something retarded vro? get the rope?? if u dont know how to use a rope then just use a shotgun??? cant use shotgtun? use UwU and you will be done in 5 sec...... pst beware of FBI!!!';
var speed = 50;
//en if sats för att kunna skriva ut ordet
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("jstext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
