// Multiplayer Mode
import { check_for_tie, check_for_winner } from "./Gameover_Checking.js";
import { get_inputbox_to_the_center } from "./Layouts_Managing.js";
import {
	add_event_for_begin_button,
	add_event_for_cancel,
	remove_start_event,
} from "./Managing_Events.js";
import {
	deactivate_board,
	display_tie_result,
	display_winner_result,
	update_grid,
} from "./Result_Board_Functions.js";
import { get_generator, get_next_sign } from "./X_O_Management.js";
import { SetOriginialGrid, SetPicker, SetReseter } from "./Variables.js";
import { picker, reseter } from "./Variables.js";
export function Start_Multiplayer() {
	SetOriginialGrid(document.getElementsByTagName("table")[0].cloneNode(true));
	remove_start_event();
	get_inputbox_to_the_center();
	add_event_for_begin_button();
	add_event_for_cancel();
}

export function multiplayer_setter(players) {
	SetPicker(get_generator(players[0].symbol));
	start_duel(players);
}

export function start_duel(players) {
	let player_1 = players[0];
	let player_2 = players[1];
	let container = document.getElementsByTagName("td");
	for (let field of container) {
		field.addEventListener("click", function () {
			if (typeof reseter != "undefined") {
				clearTimeout(reseter);
			}
			if (this.children.length >= 1) return;
			this.appendChild(picker.symb());
			get_next_sign();
			update_grid();
			const val = setTimeout(function () {
				let winner = check_for_winner(player_1, player_2);
				if (winner != false) {
					display_winner_result(winner);
					deactivate_board();
					return;
				}
				if (check_for_tie()) {
					display_tie_result();
					deactivate_board();
					return;
				}
			}, 80);
			SetReseter(val);
		});
	}
}
