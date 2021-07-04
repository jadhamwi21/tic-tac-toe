import { grid } from "./Variables.js";
function search_horizontal() {
	for (let row of grid) {
		let row_to_set = new Set(row);
		if (row_to_set.size == 1 && !row_to_set.has("null")) {
			return Array.from(row_to_set)[0];
		}
	}
	return true;
}

function search_vertical() {
	for (let i = 0; i < 3; i++) {
		let column = new Set();
		for (let j = 0; j < 3; j++) {
			column.add(grid[j][i]);
		}
		if (checkline_condition(column)) {
			return Array.from(column)[0];
		}
	}
	return true;
}

function search_diagonals() {
	let main = new Set();
	let opposite = new Set();
	for (let i = 0; i < 3; i++) {
		main.add(grid[i][i]);
	}
	if (checkline_condition(main)) {
		return Array.from(main)[0];
	}
	for (let i = 2, j = 0; i >= 0; i--, j++) {
		opposite.add(grid[i][j]);
	}
	if (checkline_condition(opposite)) {
		return Array.from(opposite)[0];
	}
	return true;
}

export function checkline_condition(theset) {
	return theset.size == 1 && !theset.has("null");
}
// Searching Variations Wrapper
export function searching_patterns_wrapper() {
	let functions_container = [
		search_horizontal,
		search_diagonals,
		search_vertical,
	];
	for (let func of functions_container) {
		let winner = func();
		if (winner != true) {
			return winner;
		}
	}
	return false;
}
// Incase of Sign

export function check_for_win_horizontally(sign) {
	for (let i = 0; i < grid.length; i++) {
		let signcounter = 0;
		let nullcounter = 0;
		let place_spot_index = -1;
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] == sign) {
				signcounter++;
			}
			if (grid[i][j] == "null") {
				nullcounter++;
				place_spot_index = j;
			}
		}
		if (signcounter == 2 && nullcounter == 1) {
			return [i, place_spot_index, sign];
		}
	}
	return true;
}

export function check_for_win_vertically(sign) {
	for (let i = 0; i < 3; i++) {
		let signcounter = 0;
		let nullcounter = 0;
		let place_spot_index = -1;
		for (let j = 0; j < 3; j++) {
			if (grid[j][i] == sign) {
				signcounter++;
			}
			if (grid[j][i] == "null") {
				nullcounter++;
				place_spot_index = j;
			}
		}
		if (signcounter == 2 && nullcounter == 1) {
			return [place_spot_index, i, sign];
		}
	}
	return true;
}

export function check_for_win_diagonal(sign) {
	let signcounter = 0;
	let nullcounter = 0;
	let place_spot_index = -1;
	{
		for (let i = 0; i < 3; i++) {
			if (grid[i][i] == sign) {
				signcounter++;
			}
			if (grid[i][i] == "null") {
				nullcounter++;
				place_spot_index = i;
			}
		}
		if (signcounter == 2 && nullcounter == 1) {
			return [place_spot_index, place_spot_index];
		}
	}
	signcounter = 0;
	nullcounter = 0;
	place_spot_index = -1;
	let place_spot_index2 = -1;
	for (let i = 2, j = 0; i >= 0; i--, j++) {
		if (grid[i][j] == sign) {
			signcounter++;
		}
		if (grid[i][j] == "null") {
			nullcounter++;
			place_spot_index = i;
			place_spot_index2 = j;
		}
		if (signcounter == 2 && nullcounter == 1) {
			return [place_spot_index, place_spot_index2, sign];
		}
	}
	return true;
}
