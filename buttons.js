import { Settings } from './main.js';

// add eventlisteners to clicktype buttons
for (let i=1; i<=6; i++) {
	document.getElementById("clickType" + i).addEventListener("click", function() {
		set_click_type(i);
	}, false);
}

// changes current function of the mouse
export const set_click_type = function (type) {
	Settings.click_type = type;
	
	// reset z-index of all clickType buttons
	for (let i=1; i<=6; i++) {
		document.getElementById("clickType" + i).style.zIndex = "0";
	}
	// give last-clicked button higher z-index
	document.getElementById("clickType" + type).style.zIndex = "1";
}

// resets the view to the default state
export const reset_view = function () {
	console.log("TODO: Reset view");
}

// toggle the wireframe / tree structure view
export const toggle_tree = function () {
	Settings.tree_view = !Settings.tree_view;
	
	// toggle button color
	if (Settings.tree_view) {
		document.getElementById("treeToggleButton").style.backgroundColor = "#eff7f6";
	} else {
		document.getElementById("treeToggleButton").style.backgroundColor = "#556161";
	}
}

// toggle object shading
export const toggle_shading = function () {
	Settings.shading = !Settings.shading;
	
	// toggle button color
	if (Settings.shading) {
		document.getElementById("shadingToggleButton").style.backgroundColor = "#eff7f6";
	} else {
		document.getElementById("shadingToggleButton").style.backgroundColor = "#556161";
	}
}

// toggle coordinate view
export const toggle_debug = function () {
	Settings.debug = !Settings.debug;
	
	// toggle button color
	if (Settings.debug) {
		document.getElementById("debugToggleButton").style.backgroundColor = "#eff7f6";
	} else {
		document.getElementById("debugToggleButton").style.backgroundColor = "#556161";
	}
}