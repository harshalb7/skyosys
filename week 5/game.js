let yourScore = 0;
let compuScore = 0;
const yourScore_p = document.getElementById('your-score');
const CompScore_p = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const main1 = document.querySelector('#main1');
const selection1 = document.querySelector('#selection1');
const user_select = document.querySelector('#user_select');
const computer_select = document.querySelector('#computer_select');
const play_again = document.querySelector('#reset');
const reset_game = document.querySelector('#restgame');
const game_result = document.querySelector('#result');


function you_win(user_choice, computerChoice){
	yourScore++;
	yourScore_p.innerHTML = yourScore;
	game_result.innerHTML = "YOU WIN";
	showResult(user_choice, computerChoice);
}
function you_lose(user_choice, computerChoice){
	compuScore++;
	CompScore_p.innerHTML = compuScore;
	game_result.innerHTML = "YOU LOST"
	showResult(user_choice, computerChoice);
}
function draw(user_choice, computerChoice){
	game_result.innerHTML = "MATCH DRAW"
	showResult(user_choice, computerChoice);
}

function showResult(user_choice, computerChoice){
	update_selection(user_select, user_choice);
	update_selection(computer_select, computerChoice);

	main1.style.display = "none";
	selection1.style.display = "flex";
}

function update_selection(selected_element1, choice){

	selected_element1.classList.remove('button-paper');
    selected_element1.classList.remove('button-rock');
    selected_element1.classList.remove('button-scissors');

    selected_element1.classList.add(`button-${choice}`);

    const img = selected_element1.querySelector('img');
    img.src = `images/icon-${choice}.svg`;
    img.alt = choice;
}

function rps_game(user_choice){
	const computer_choice = computerChoice();
	switch (user_choice + computer_choice){
		case 'rockscissors':
		case 'paperrock':
		case 'scissorspaper':
			you_win(user_choice, computer_choice);
			break;

		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
			you_lose(user_choice, computer_choice);
			break; 

		case 'rockrock':
		case 'paperpaper':
		case 'scissorsscissors':
			draw(user_choice, computer_choice);
			break;
	}

}
 
function main(){
	document.getElementById('rock').addEventListener('click', function(){
		rps_game('rock');
	})

	document.getElementById('paper').addEventListener('click', function(){
		rps_game('paper');
	})


	document.getElementById('scissors').addEventListener('click', function(){
		rps_game('scissors');
	})

}

main()

function computerChoice(){
	const comp_choices = ['rock', 'paper', 'scissors'];
	const random_choice = Math.floor(Math.random() * 3);
	return comp_choices[random_choice];
}

play_again.addEventListener('click', playAgain);

function playAgain(){
    main1.style.display = "flex";
    selection1.style.display = "none";
}

reset_game.addEventListener('click', start_again);

function start_again(){
	yourScore = 0;
	compuScore = 0;
	yourScore_p.innerHTML = 0;
	CompScore_p.innerHTML = 0;
	main1.style.display = "flex";
    selection1.style.display = "none";

}