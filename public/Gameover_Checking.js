import { searching_patterns_wrapper } from "./Searching_Variations.js";
import { grid } from "./Variables.js";
export function check_for_winner(player_1, player_2) {
	let symb = searching_patterns_wrapper();
	if (symb == false) {
		return false;
	} else {
		if (player_1.symbol == symb) {
			return player_1;
		} else {
			return player_2;
		}
	}
}

export function check_for_tie() {
	for (let row of grid) {
		for (let element of row) {
			if (element == "null") {
				return false;
			}
		}
	}
	return true;
}
