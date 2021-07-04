import { reset_inputbox } from "./Clearing_Components.js";
import { add_start_event } from "./Managing_Events.js";
import { SetGrid } from "./Variables.js";
import { original_grid } from "./Variables.js";
export function resultbox_forward() {
	let animation =
		"animation:result_box_forward;animation-duration:1s;animation-fill-mode:forwards";
	let box = document.getElementById("result-container");
	box.setAttribute("style", animation);
}

export function resultbox_backward() {
	let animation =
		"animation:result_box_backward;animation-duration:1s;animation-fill-mode:forwards";
	let box = document.getElementById("result-container");
	box.setAttribute("style", animation);
}

export function get_inputbox_to_the_center() {
	let box = document.getElementById("playersinput-box");
	box.style.animation = "slide_effect";
	box.style.animationTimingFunction = "ease-in-out";
	box.style.animationDuration = "1.1s";
	box.style.animationFillMode = "forwards";
}

export function get_inputbox_to_the_side() {
	let box = document.getElementById("playersinput-box");
	box.style.animation = "slide_effect_reverse";
	box.style.animationTimingFunction = "ease-out";
	box.style.animationDuration = "1.1s";
	box.style.animationFillMode = "forwards";
}
export function reset_arena() {
	SetGrid([]);
	let thegrid = document.getElementsByTagName("table")[0];
	document.getElementsByTagName("main")[0].replaceChild(original_grid, thegrid);
	reset_inputbox();
	add_start_event();
}
