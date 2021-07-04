import {
	addslider_effect,
	add_start_event,
	load_slider_values,
} from "./Managing_Events.js";
import { SetOriginialGrid } from "./Variables.js";

export function switchclass(obj) {
	if (obj.value == "Multiplayer") {
		obj.className = "multiplayer";
	}
	if (obj.value == "Computer") {
		obj.className = "computer";
	}
}
//on-page load
function loader() {
	switchclass(document.getElementById("gamemode"));
	addslider_effect();
	load_slider_values();
	add_start_event();
	const add_mode_event = () => {
		document
			.getElementById("gamemode")
			.addEventListener("change", switchclass.bind(this));
	};
	add_mode_event();
	SetOriginialGrid(document.getElementsByTagName("table")[0].cloneNode(true));
}
export function Start_The_Game() {
	window.onload = loader();
}
