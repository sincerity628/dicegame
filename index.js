
var dice1,dice2;

function randomNumber1(){
    dice1=Math.floor(Math.random() * 6 + 1);
    console.log("dice1 = " + dice1);
    document.querySelector(".img1").setAttribute("src", "images/dice" + dice1 +".png");
}
function randomNumber2(){
    dice2=Math.floor(Math.random() * 6 + 1);
    console.log("dice2 = " + dice2);
    document.querySelector(".img2").setAttribute("src", "images/dice" + dice2 +".png");
}
function changeTitle(){
    if(dice1 > dice2){
        document.querySelector(".container h1").innerHTML = "🎉Player 1 wins!";
    }
    else if(dice1 < dice2){
        document.querySelector(".container h1").innerHTML = "Player 2 wins!🎆";
    }
    else{
        document.querySelector(".container h1").innerHTML = "Draw!";
    }
}

randomNumber1();
randomNumber2();
changeTitle();