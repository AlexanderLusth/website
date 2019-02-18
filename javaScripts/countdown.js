//val av vilket datum den ska räkna ner till
var countDownDate = new Date("Jun 7, 2019 00:00:00").getTime();

// Updatera varje sekund
var x = setInterval(function() {

  // få dagens datum samnt tid
  var now = new Date().getTime();

  // räkna ut tids skillnaden från idag och det bestämnda datumet
  var distance = countDownDate - now;

  // tidsuträckning för dagar timmar minuter samnt sekunder
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // output via ett element="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // om tiden går ut så skriver den en text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
//mitt mest avanverade skript än så länge
