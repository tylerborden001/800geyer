var myIndex = 0;
carousel();

function carousel() {
    var x = document.getElementsByClassName("slideShow");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // CHANGE IMAGE EVERY 5 SECONDS
    console.log("I Change!!");
}
