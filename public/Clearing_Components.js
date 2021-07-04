import { load_slider_values } from "./Managing_Events.js";

export function clear_inputbox() {
	clear_text_input();
	clear_age_input();
	load_slider_values();
}

export function clear_text_input() {
	let inputfields = document.querySelectorAll("input[type = text]");
	for (let field of inputfields) {
		field.value = "";
	}
}

export function clear_age_input() {
	let agesliders = document.querySelectorAll("input[type = range]");
	for (let ge of agesliders) {
		age.value = "8";
	}
}

export function reset_inputbox() {
	let oldelement = document.getElementById("begin-button");
	let newelement = oldelement.cloneNode(true);
	oldelement.parentNode.replaceChild(newelement, oldelement);
}

export function clear_result_board() {
	setTimeout(function () {
		let elements = document.getElementById("result-container").children;
		for (let elem of elements) {
			if (elem.id == "ok-button-container") {
				break;
			}
			elem.innerHTML = "";
		}
	}, 1300);
}
