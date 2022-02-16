var a = (Math.random()*6) + 1;
var b = (Math.random()*6) + 1;

a = Math.floor(a);
b = Math.floor(b);

var link1 = "images/dice" + a + ".png";
var link2 = "images/dice" + b + ".png";

document.getElementById('img1').setAttribute("src", link1);
document.getElementById('img2').setAttribute("src", link2);

if (a > b) {
    document.querySelector("h1").innerHTML = "🚩 Karzeł Wygrywa!";
} else if (a < b) {
    document.querySelector("h1").innerHTML = "🚩 Swayer Wygrywa!";
} else {
    document.querySelector("h1").innerHTML = "Remis";
}
