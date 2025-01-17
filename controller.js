import * as THREE from './three.js/three.module.min.js';
import { Settings, Scene } from './main.js';
import { get_face, set_branch_material, set_shape_material, check_rough_array_equality, face_to_triangles } from './util.js';
import { snap_shape, remove_shape, center_shape, create_shape, calculate_rotation } from './model.js';
import Shapes from './shapes.js';
import Themes from './themes.js';

let highlighted = undefined;
let mouse_moved = false;

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
	Scene.camera.target = new THREE.Vector3(0, 0, 0);
	Scene.controls.reset();
	Scene.camera.position.z = 5;
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

const highlight = function(face) {
	// remove existing highlights
	if (highlighted) {
		set_branch_material(highlighted.object.parent, Scene.theme.default);
		highlighted.object.material = Scene.theme.default;
	}

	// apply new highlights
	if (face) {
		const branch_highlight = Scene.theme.action[Settings.click_type].branch_highlight;
		const shape_highlight = Scene.theme.action[Settings.click_type].shape_highlight;
		const face_highlight = Scene.theme.action[Settings.click_type].face_highlight;
		const shape = face.parent;

		if (branch_highlight) set_branch_material(shape, branch_highlight);
		if (shape_highlight) set_shape_material(shape, shape_highlight);
		if (face_highlight) face.material = face_highlight;
	}
}

// select the face at cursor coordinates
// also highlight face, shape and branch where necessary
export const select_face = function() {
	// find face to highlight
	Scene.raycaster.setFromCamera(Scene.pointer, Scene.camera);
	const intersects = Scene.raycaster.intersectObjects(Scene.scene.children);
	const meshes = intersects.filter(x => x.object.type === "Mesh");
	const closest = meshes[0];

	// highlight before applying
	highlight(closest?.object);
	highlighted = closest;
}

window.addEventListener("mousemove", function(evt) {
	Scene.pointer.x = (evt.clientX / window.innerWidth) * 2 - 1;
	Scene.pointer.y = - (evt.clientY / window.innerHeight) * 2 + 1;

	mouse_moved = true;
}, false);

window.addEventListener("mousedown", function() {
	mouse_moved = false;
}, false);

document.body.onload = () => {
	Scene.renderer.domElement.addEventListener("mouseup", function(evt) {
		if (mouse_moved || !highlighted) return;

		// add new shape
		if (Settings.click_type === 0) {
			const shape_name = Scene.add_shape;
			const parent_face = highlighted.object.geometry.userData.vertices;
			// TODO: we need to guarantee that the child_face matches the shape of the parent_face
			const child_face = get_face(Shapes[shape_name], 0);
			let shape = create_shape(shape_name);

			// for some operations we need to identify the face that connects the branch to its parent
			for (const face of shape.children) {
				if (check_rough_array_equality(face.geometry.attributes.position.array, face_to_triangles(child_face))) {
					shape.userData.parent_face = face.uuid;
				}
			}

			shape = snap_shape(shape, parent_face, child_face);
			highlighted.object.parent.add(shape);
		}

		// remove shape
		if (Settings.click_type === 1) {
			remove_shape(highlighted);
		}

		// focus on object
		if (Settings.click_type === 3) {
			center_shape(highlighted);
		}

		// rotate branch
		if (Settings.click_type === 4) {
			calculate_rotation(highlighted.object);
		}

	}, false);
}