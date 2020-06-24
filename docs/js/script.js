function myFunction() {
    console.log('triggered');
    var x = document.getElementById("top-menu");
    if (x.className == "menu-div") {
        x.className += " responsive";
    } else {
        x.className = "menu-div";
    }
}

