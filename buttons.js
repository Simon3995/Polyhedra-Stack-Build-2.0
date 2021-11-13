// changes current function of the mouse
function setClickType(type) {
	clickType = type
	
	// reset z-index of all clickType buttons
	for (let i=1; i<=5; i++) {
		document.getElementById("clickType" + i).style.zIndex = "0";
	}
	// give last-clicked button higher z-index
	document.getElementById("clickType" + type).style.zIndex = "1";
}

// resets the view to the default state
function resetView() {
	console.log("TODO: Reset view");
}

// toggle the wireframe / tree structure view
function toggleTree() {
	treeView = !treeView;
	
	// toggle button color
	if (treeView) {
		document.getElementById("treeToggleButton").style.backgroundColor = "#eff7f6";
	} else {
		document.getElementById("treeToggleButton").style.backgroundColor = "#556161";
	}
}

// toggle object shading
function toggleShading() {
	shading = !shading;
	
	// toggle button color
	if (shading) {
		document.getElementById("shadingToggleButton").style.backgroundColor = "#eff7f6";
	} else {
		document.getElementById("shadingToggleButton").style.backgroundColor = "#556161";
	}
}

// toggle coordinate view
function toggleDebug() {
	debug = !debug;
	
	// toggle button color
	if (debug) {
		document.getElementById("debugToggleButton").style.backgroundColor = "#eff7f6";
	} else {
		document.getElementById("debugToggleButton").style.backgroundColor = "#556161";
	}
}