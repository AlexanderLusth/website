//genererar ett slumpmässigt nummer mellan 0 till 100
function getRandom(){
  var number = Math.floor(Math.random() * 101);
  document.getElementById("random-numb").innerHTML = number
}
