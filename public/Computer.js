import { add_start_event, remove_start_event } from "./Managing_Events.js";
import {
	active_board,
	deactivate_board,
	show_player_computer_resultbox,
	update_grid,
} from "./Result_Board_Functions.js";
import { generate_O, generate_X, get_next_sign } from "./X_O_Management.js";
import { reset_arena } from "./Layouts_Managing.js";
import { check_for_winner, check_for_tie } from "./Gameover_Checking.js";
import { SetOriginialGrid, SetPicker } from "./Variables.js";
import {
	check_for_win_diagonal,
	check_for_win_horizontally,
	check_for_win_vertically,
} from "./Searching_Variations.js";

//Computer Mode
export function Start_Computer() {
	active_board();
	const player = {
		symbol: "X",
	};
	const computer = {
		symbol: "O",
	};
	SetOriginialGrid(document.getElementsByTagName("table")[0].cloneNode(true));
	SetPicker(generate_X);
	remove_start_event();
	let fields = document.getElementsByTagName("td");
	for (let field of fields) {
		const player_then_computer = function () {
			let prevent = player_move(this);
			if (prevent == false) {
				return;
			}
			update_grid();
			let x = check_player_computer_board(player, computer);
			if (x == true) {
				add_start_event();
				reset_arena();
				deactivate_board();
				return;
			}
			get_next_sign();
			add_computer_move();
			update_grid();
			x = check_player_computer_board(player, computer);
			if (x == true) {
				add_start_event();
				reset_arena();
				deactivate_board();
				return;
			}
		};
		field.addEventListener("click", player_then_computer);
	}
}

export function add_computer_move() {
	const fields = document.getElementsByTagName("td");
	let tempspace_for_O = check_winning_probability("O");
	if (tempspace_for_O != false) {
		board_observer(tempspace_for_O);
		return;
	}
	let tempspace_for_X = check_winning_probability("X");
	if (tempspace_for_X != false) {
		board_observer(tempspace_for_X);
		return;
	}
	const checkspot = function (thespot) {
		return thespot.children.length == 0;
	};
	let thefield;
	let finalspot = undefined;
	while (finalspot == undefined) {
		thefield = fields[Math.floor(Math.random() * 9)];
		if (checkspot(thefield)) {
			finalspot = thefield;
		}
	}
	finalspot.appendChild(generate_O());
}

export function player_move(spot) {
	if (spot.children.length == 1) {
		return false;
	}
	spot.appendChild(generate_X());
}

export function check_winning_probability(sign) {
	let arry_of_funcs = [
		check_for_win_horizontally,
		check_for_win_vertically,
		check_for_win_diagonal,
	];
	for (let i = 0; i < arry_of_funcs.length; i++) {
		const result_of_func = arry_of_funcs[i](sign);
		if (result_of_func != true) {
			return result_of_func;
		}
	}
	return false;
}

export function check_player_computer_winner(player, computer) {
	if (check_for_winner(player, computer) == false) return false;
	const winner = check_for_winner(player, computer);
	if (winner.symbol == "X") {
		//Win Message
		show_player_computer_resultbox("YOU WON!");
	}
	if (winner.symbol == "O") {
		//Lost Message
		show_player_computer_resultbox("YOU LOST!");
	}
	return true;
}

export function check_player_computer_tie() {
	const is_tie = check_for_tie();
	if (is_tie == false) return false;
	show_player_computer_resultbox("IT'S TIE!");
	return true;
}

export function check_player_computer_board(player, computer) {
	let ans = check_player_computer_winner(player, computer);
	if (ans == true) return true;
	ans = check_player_computer_tie();
	if (ans == true) return true;
	return false;
}

export function board_observer(thespot) {
	let row = thespot[0];
	let col = thespot[1];
	let symbol = generate_O;
	let table_rows = document.getElementsByTagName("tr");
	for (let i = 0; i < table_rows.length; i++) {
		let current_row = table_rows[i];
		for (let j = 0; j < current_row.children.length; j++) {
			if (row == i && col == j) {
				current_row.children.item(j).appendChild(symbol());
			}
		}
	}
}
