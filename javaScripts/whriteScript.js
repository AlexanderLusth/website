var i = 0;
var txt = 'you just did something retarded vro? get the rope?? if u dont know how to use a rope then just use a shotgun??? cant use shotgtun? use UwU and you will be done in 5 sec...... pst beware of FBI!!!';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("jstext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
