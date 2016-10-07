$(document).ready(function () {

	var min = parseInt(prompt("choisi un petit !"));
	$("#min").text(min);
	var max = parseInt(prompt("choisi un grand !"));
	$("#max").text(max);
	var number = Math.floor(Math.random()*(max-min+1))+min;
	console.log(number)
	var lifeChoice = prompt("Combien de vie veux tu mon petit canard ?");
	$("#life").html(--lifeChoice);
	//var nbClick = 0;

	$('button').click(function(){ 
		//nbClick += 1;
		var rez = $('input').val();
		if (rez == number){ 
			alert("j'ai Gagné");
			location.reload(true)
		}
	/*	else if (nbClick == 10){
			alert("GAME OVER");
			location.reload(true)
		} */
		else if (lifeChoice == 0 ){
			alert("RESTART GAME NOOBz");
			location.reload(true)
		}
		else if (rez < number){
			$("#life").html(--lifeChoice);
			alert("Plus Grand mon petit");
		}
		else if (rez > number){
			$("#life").html(--lifeChoice);
			alert("plus Petit mon grand");
		}
		else {
			$("#life").html(--lifeChoice);
		}
	});

});

