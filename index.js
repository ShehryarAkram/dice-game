function refresh(){
    var randomnumber1=Math.floor(Math.random()*6)+1;
    var randomdicenumber1="images/dice"+randomnumber1+".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src" , randomdicenumber1);

    var randomnumber2=Math.floor(Math.random()*6)+1;
    var randomdicenumber2="images/dice"+randomnumber2+".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src" , randomdicenumber2);
    if(randomdicenumber1<randomdicenumber2){
        document.querySelector("h1").innerHTML="Player 2 wins!";
    }
    
    else if(randomdicenumber1>randomdicenumber2){
        document.querySelector("h1").innerHTML="Player 1 wins!";
    }
    else{
        document.querySelector("h1").innerHTML="Draw";
    }   
}
    
    