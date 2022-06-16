
var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random()*10) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play() {
	var user_guess = document.getElementById("guess").value;
	if(user_guess < 1 || user_guess > 10) {
		alert("Please, enter number between 1 и 10");
	} else {
		guessed_nums.push(user_guess);
		no_of_guesses += 1;

		if(user_guess < answer) {
			msg1.textContent = "Your guess is too low";
			msg2.textContent = "Number of guesses: "+ no_of_guesses;
			msg3.textContent = "Guessed number: "+ guessed_nums;
		} else if(user_guess > answer) {
			msg1.textContent = "Your guess is too high";
			msg2.textContent = "No, of guesses: "+ no_of_guesses;
			msg3.textContent = "Guessed number:" + guessed_nums;
		} else if(user_guess == answer) {
			const msg1 = document.getElementById("message1");
			msg1.innerText = "Congratulation, you won!!!";
			msg1.style.color = "green";
			msg1.style.fontWeight = "bold";
			msg2.textContent = "The number was: " + answer;
			msg3.textContent = "You guessed it in " + no_of_guesses + " " + "guesses";
			document.getElementById("my_btn").disabled = true;
		}
	}

}


  