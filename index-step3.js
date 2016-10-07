var min;
var max;
var numbe;
var lifeChoice;


function main(){
   
    $('button').click(function(){ 
        clickValider();
    });
    
    reset();
}

 function reset(){
    min = parseInt(prompt("choisi un petit !"), 10);
    max = parseInt(prompt("choisi un grand !"), 10);
    number = Math.floor(Math.random()*(max-min+1))+min;
    lifeChoice = parseInt(prompt("Combien de vie veux tu mon canard ?"), 10);

    $("#max").text(max);
    $("#min").text(min);
    $("#life").html(--lifeChoice);
}

function partiePerdu(){
    alert("j'ai perdu");
    reset();
}

function partieGagnee(){
    alert("j'ai Gagné");
    reset();
}

function clickValider(){
    var rez = $('input').val();
    if (rez == number){ 
        partieGagnee();    
    } 
    else if (rez < number){
        $("#life").html(--lifeChoice);
        alert("Plus Grand mon petit");
    }
    else if (rez > number){
        $("#life").html(--lifeChoice);
        alert("plus Petit mon grand");
    }
    if (lifeChoice === 0 ){
        partiePerdu();
    }
}

$(document).ready(main);
