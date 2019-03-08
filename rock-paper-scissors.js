userInput = '';
computerArray = [ 'r', 's', 'p' ];
label = Object;
window.onload = function() {
	label = document.getElementById('header');
	buttonsDiv = document.getElementById('buttonsDiv');
	buttonsDiv.style.height = window.innerHeight - document.getElementById('navBar').clientHeight + 'px';
	buttonsDiv.style.width = window.innerWidth + 'px';
	buttons = document.getElementsByClassName('button');
};

function func(input) {
	userInput = input;
	randomChoice = computerSelect();
	evaluateGame(userInput, randomChoice);
}

function computerSelect() {
	return computerArray[Math.floor(Math.random() * computerArray.length)];
}

function convertToWord(letter) {
	if (letter == 'r') {
		return 'Rock';
	}
	if (letter == 's') {
		return 'Scissors';
	}
	if (letter == 'p') {
		return 'Paper';
	}
}

function evaluateGame(user, comp) {
	if (user == comp) {
		draw(user);
	}
	if (user == 'r') {
		if (comp == 's') {
			win(user, comp);
		}
		if (comp == 'p') {
			lose(user, comp);
		}
	}

	if (user == 's') {
		if (comp == 'p') {
			win(user, comp);
		}
		if (comp == 'r') {
			lose(user, comp);
		}
	}

	if (user == 'p') {
		if (comp == 'r') {
			win(user, comp);
		}
		if (comp == 's') {
			lose(user, comp);
		}
	}
}

function win(user, loserLetter) {
	winner = convertToWord(user);
	loser = convertToWord(loserLetter);
	label.innerHTML = 'You Win! ' + winner + ' beats ' + loser;
}

function lose(user, winnerLetter) {
	loser = convertToWord(user);
	winner = convertToWord(winnerLetter);
	label.innerHTML = 'You Lose! ' + winner + ' beats ' + loser;
}

function draw(user) {
	item = convertToWord(user);
	label.innerHTML = 'You Drew! ' + item + ' is the same as ' + item;
}
