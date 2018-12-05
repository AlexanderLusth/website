function myFunction() {
    var x = document.getElementById("navmain");
    if (x.className.indexOf("nav-ul") == -1) {
        x.className += " nav-ul";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
