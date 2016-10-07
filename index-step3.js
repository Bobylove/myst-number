$(document).ready(main);
var min = parseInt(prompt("Random pour les Z'OM ? choisi un petit !"));
$("#min").text(min);
var max = parseInt(prompt("Random pour les Z'OM ? choisi un grand !"));
$("#max").text(max);
var number = Math.floor(Math.random()*(max-min+1))+min;
var lifeChoice = prompt("Combien de vie veux tu mon petit canard ?");
$("#life").html(--lifeChoice);
function main(){
    function reset(){
        min = parseInt(prompt("choisi un petit !"));
        $("#min").text(min);
        max = parseInt(prompt("choisi un grand !"));
        $("#max").text(max);
        number = Math.floor(Math.random()*(max-min+1))+min;
        lifeChoice = prompt("Combien de vie veux tu mon canard ?");
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
        if (lifeChoice == 0 ){
            partiePerdu();
        }
    }
    $('button').click(function(){ 
        clickValider();
    });
}