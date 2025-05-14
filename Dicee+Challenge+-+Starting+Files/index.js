
alert(hii!);

var random = Math.floor(Math.random()*6)+1;

var diceImageElement = "dice"+random+".png";

var source = "images/"+diceImageElement;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",source);