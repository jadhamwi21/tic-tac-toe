import { multiplayer_setter, Start_Multiplayer } from "./Multiplayer.js";
import { Start_Computer } from "./Computer.js";
import { active_board, checkPlayerInputs } from "./Result_Board_Functions.js";
import {
	get_inputbox_to_the_side,
	reset_arena,
	resultbox_backward,
} from "./Layouts_Managing.js";
import { clear_inputbox, clear_result_board } from "./Clearing_Components.js";

const pick_gamemode = () => {
	let mode = document.getElementById("gamemode").value;
	if (mode == "Multiplayer") {
		Start_Multiplayer();
	}
	if (mode == "Computer") {
		Start_Computer();
	}
};

export function add_start_event() {
	let start = document.getElementById("start-button");
	start.addEventListener("click", pick_gamemode);
	start.addEventListener("mouseover", function () {
		this.style.cursor = "pointer";
	});
}

export function remove_start_event() {
	let start = document.getElementById("start-button");
	start.removeEventListener("click", pick_gamemode);
	start.addEventListener("mouseover", function () {
		this.style.cursor = "not-allowed";
	});
}

export function add_event_for_cancel() {
	let canc = document.getElementById("cancel-button");
	canc.addEventListener("click", function () {
		get_inputbox_to_the_side();
		reset_arena();
	});
}

export function add_ok_button_event() {
	let button = document.getElementById("ok-button");
	button.addEventListener("click", ok_button_event_handler);
}

export function remove_ok_button_event() {
	let button = document.getElementById("ok-button");
	button.removeEventListener("click", ok_button_event_handler);
}

export function ok_button_event_handler() {
	resultbox_backward();
	clear_result_board();
	remove_ok_button_event();
	reset_arena();
}

export function add_event_for_begin_button() {
	let beginbutton = document.getElementById("begin-button");
	beginbutton.addEventListener("click", function () {
		let players = checkPlayerInputs();
		if (players == undefined) {
			alert("You've missed a player name !");
			return;
		}
		active_board();
		get_inputbox_to_the_side();
		clear_inputbox();
		multiplayer_setter(players);
	});
}
export function addslider_effect() {
	let sliders = document.querySelectorAll("input[type=range]");
	for (let range of sliders) {
		range.addEventListener("input", addindividual_slider_effect);
	}
}

export function addindividual_slider_effect() {
	this.nextElementSibling.innerHTML = this.value;
	this.nextElementSibling.style.display = "block";
}

export function load_slider_values() {
	let divs = document.querySelectorAll("input[type = range]");
	divs[0].nextElementSibling.innerHTML = divs[0].value;
	divs[1].nextElementSibling.innerHTML = divs[1].value;
}
