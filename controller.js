import { Settings, Scene } from './main.js';
import { get_face } from './util.js';
import { snap_shape, remove_shape } from './model.js';
import Shapes from './shapes.js';

let highlighted = undefined;

// add eventlisteners to clicktype buttons
for (let i=0; i<6; i++)
	document.getElementById("clickType" + i).onclick = () => { set_click_type(i) }

// changes current function of the mouse
export const set_click_type = function (type) {
	Settings.click_type = type;
	
	// reset z-index of all clickType buttons
	for (let i=0; i<6; i++) {
		document.getElementById("clickType" + i).style.zIndex = "0";
	}

	// give last-clicked button higher z-index
	document.getElementById("clickType" + type).style.zIndex = "1";
}

// resets the view to the default state
export const reset_view = function () {
	console.log("TODO: Reset view");
}

document.getElementById("resetViewButton").onclick = reset_view;

// toggle the wireframe / tree structure view
export const toggle_tree = function () {
	Settings.tree_view = !Settings.tree_view;
	
	// toggle button color
	if (Settings.tree_view) {
		document.getElementById("toggleTreeButton").style.backgroundColor = "#eff7f6";
	} else {
		document.getElementById("toggleTreeButton").style.backgroundColor = "#556161";
	}
}

document.getElementById("toggleTreeButton").onclick = toggle_tree;

// toggle object shading
export const toggle_shading = function () {
	Settings.shading = !Settings.shading;
	
	// toggle button color
	if (Settings.shading) {
		document.getElementById("toggleShadingButton").style.backgroundColor = "#eff7f6";
	} else {
		document.getElementById("toggleShadingButton").style.backgroundColor = "#556161";
	}
}

document.getElementById("toggleShadingButton").onclick = toggle_shading;

// toggle coordinate view
export const toggle_debug = function () {
	Settings.debug = !Settings.debug;
	
	// toggle button color
	if (Settings.debug) {
		document.getElementById("toggleDebugButton").style.backgroundColor = "#eff7f6";
	} else {
		document.getElementById("toggleDebugButton").style.backgroundColor = "#556161";
	}
}

document.getElementById("toggleDebugButton").onclick = toggle_debug;

window.addEventListener("mousemove", function(evt) {
	Scene.pointer.x = (evt.clientX / window.innerWidth) * 2 - 1;
	Scene.pointer.y = - (evt.clientY / window.innerHeight) * 2 + 1;

	// find face to highlight
	Scene.raycaster.setFromCamera(Scene.pointer, Scene.camera);
	const intersects = Scene.raycaster.intersectObjects(Scene.scene.children);
	const meshes = intersects.filter(x => x.object.type === "Mesh");
	const closest = meshes[0];

	// highlight face
	if (highlighted) highlighted.object.material = Scene.default_material;
	if (closest) {
		closest.object.material = Scene.highlight_material;
	}
	highlighted = closest;
}, false);

document.body.onload = () => {
	Scene.renderer.domElement.addEventListener("click", function(evt) {
		// add new shape
		if (Settings.click_type === 0) {
			if (!highlighted) return;
			const shape_name = Scene.add_shape;
			const parent_face = highlighted.object.geometry.userData.vertices;
			const child_face = get_face(Shapes[shape_name], 0);
			snap_shape(shape_name, parent_face, child_face);
		}

		// remove shape
		if (Settings.click_type === 1) {
			if (!highlighted) return;
			remove_shape(highlighted);
		}
	}, false);
}