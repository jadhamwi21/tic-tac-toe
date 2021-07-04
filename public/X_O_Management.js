import { picker } from "./Variables.js";
export function generate_X() {
	let div = document.createElement("div");
	let x = document.createElement("i");
	x.setAttribute("class", "fas fa-times");
	div.appendChild(x);
	return div;
}

export function generate_O() {
	let div = document.createElement("div");
	let o = document.createElement("i");
	o.setAttribute("class", "fab fa-opera");
	o.style.fontSize = "70px";
	div.appendChild(o);
	return div;
}

export function get_next_sign() {
	if (picker.symb == generate_X) {
		picker.symb = generate_O;
	} else {
		picker.symb = generate_X;
	}
}

export function get_generator(value) {
	if (value == "O") return generate_O;
	if (value == "X") return generate_X;
}

export function convert_class_to_sign(element) {
	if (element.className == "fas fa-times") {
		return "X";
	}
	if (element.className == "fab fa-opera") {
		return "O";
	}
}
