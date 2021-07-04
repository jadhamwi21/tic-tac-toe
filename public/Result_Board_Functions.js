import { resultbox_forward } from "./Layouts_Managing.js";
import { add_ok_button_event } from "./Managing_Events.js";
import { convert_class_to_sign } from "./X_O_Management.js";
import { SetGrid } from "./Variables.js";
import { grid } from "./Variables.js";
export function display_winner_result(player) {
	let result = document.getElementById("result-container").children;
	result[0].innerHTML = "The Winner Is : " + player.name;
	result[1].innerHTML = "Age : " + player.age;
	result[2].innerHTML = "Symbol : " + player.symbol;
	add_ok_button_event();
	resultbox_forward();
}

export function display_tie_result() {
	let result = document.getElementById("result-title");
	result.innerHTML = "IT'S TIE";
	add_ok_button_event();
	resultbox_forward();
}

export function checkPlayerInputs() {
	let texts = document.querySelectorAll("input[type = text]");
	let ages = document.querySelectorAll("input[type = range]");
	for (let field of texts) {
		if (field.value == "") {
			return undefined;
		}
	}
	let players = [
		{
			name: texts[0].value,
			age: ages[0].value,
			symbol: "X",
		},
		{
			name: texts[1].value,
			age: ages[1].value,
			symbol: "O",
		},
	];
	return players;
}
export function update_grid() {
	SetGrid([]);
	let container = document.getElementsByTagName("tr");
	for (let row of container) {
		let grid_row = [];
		for (let current of row.children) {
			if (current.children.length === 0) {
				grid_row.push("null");
			} else {
				grid_row.push(
					convert_class_to_sign(current.children[0].querySelector("i"))
				);
			}
		}
		grid.push(grid_row);
	}
}

export function modify_resultbox_title_to_this_message(msg) {
	let title = document.getElementById("result-title");
	title.innerHTML = msg;
}

export function active_board() {
	let td = document.getElementsByTagName("td");
	for (let data of td) {
		data.style.border = "solid 2px white";
	}
}

export function deactivate_board() {
	let td = document.getElementsByTagName("td");
	for (let data of td) {
		data.style = "";
	}
}

export function show_player_computer_resultbox(msg) {
	modify_resultbox_title_to_this_message(msg);
	resultbox_forward();
	add_ok_button_event();
}
