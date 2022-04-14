var randomnumber1= Math.floor(Math.random() * 6) + 1;

var dicerandomimage= "dice"+randomnumber1+".png";

var randomimagesource = "images/" + dicerandomimage;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomimagesource);

var randomnumber2= Math.floor(Math.random()*7);

var randomdiceimages = "images/dice" +randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomdiceimages);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 winss!"
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML=" Player 2 winss! 🚩"
}
else{
    document.querySelector("h1").innerHTML=" Draw !"
}
