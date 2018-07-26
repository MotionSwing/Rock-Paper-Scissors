$(document).ready(function(){
	var choices = ["r","p","s"];

	var userText = document.getElementById("user-choice");
	var compText = document.getElementById("comp-choice");

	var comp_win_count = 0;
	var user_win_count = 0;

	var comp_loss_count = 0;
	var user_loss_count = 0;

	document.onkeyup = function(event){
		var playerwins = false;
		var compwins = false;
		var userChoice = event.key;
		var compChoice = choices[Math.floor(Math.random() * 3)];
		if (userChoice === "r" || userChoice === "s" || userChoice === "p"){
			userText.textContent = userChoice;
			compText.textContent = compChoice;
			if (userChoice === "r" && compChoice === "s"){
				playerwins = true;
			}else if (userChoice === "p" && compChoice === "r"){
				playerwins = true;
			}else if (userChoice === "s" && compChoice === "p") {
				playerwins = true;
			}else if (compChoice === "r" && userChoice === "s") {
				compwins = true;
			}else if (compChoice === "p" && userChoice === "r") {
				compwins = true;
			}else if (compChoice === "s" && userChoice === "p"){
				compwins = true;
			}

			if (playerwins) {
				user_win_count++;
				comp_loss_count++;
				document.getElementById('user-win').textContent = user_win_count;
				document.getElementById('comp-losses').textContent = comp_loss_count;
			}else if (compwins) {
				comp_win_count++;
				user_loss_count++;
				document.getElementById('comp-win').textContent = comp_win_count;
				document.getElementById('user-losses').textContent = user_loss_count;
			}else {
				user_win_count++;
				comp_win_count++;
				document.getElementById('user-win').textContent = user_win_count;
				document.getElementById('comp-win').textContent = comp_win_count;
			}
		}
		
	};
})