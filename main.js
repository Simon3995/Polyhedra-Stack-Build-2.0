import * as THREE from './three.js/three.module.min.js';
import { TrackballControls } from './three.js/TrackballControls.js';
import { set_click_type } from './controller.js';
import { create_shape } from './model.js';
import { show_vert_indices, create_debug_point } from './debug.js';
import { get_face } from './util.js';
import Shapes from './shapes.js';

export const Settings = {
	/** Click Types
	 * 0: Add Shape
	 * 1: Delete Shape
	 * 2: Rotate View
	 * 3: Center View on Object
	 * 4: Rotate Branch
	 * 5: Mirror Branch
	 */
	click_type: 0,
	tree_view: false,
	shading: false,
	debug: false,
}

// three.js setup
export const Scene = {
	raycaster: new THREE.Raycaster(),
	scene: new THREE.Scene(),
	camera: new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.01, 1000),
	renderer: new THREE.WebGLRenderer({antialias: true}),
	pointer: new THREE.Vector2(),
	default_material: new THREE.MeshLambertMaterial({
		color: 0xffffff,
		transparent: true,
		opacity: 0.6,
		side: THREE.FrontSide,
	}),
	highlight_material: new THREE.MeshLambertMaterial({
		color: 0x47b6ff,
		transparent: true,
		opacity: 0.6,
		side: THREE.FrontSide,
	}),
	add_shape: "Triangular Prism",
}

// lighting
let pointLight = new THREE.PointLight(0xffffff, 2, Infinity, 0);
Scene.scene.add(pointLight);
let ambientLight = new THREE.AmbientLight(0xffffff, 0.025);
Scene.scene.add(ambientLight);

/*
// whole bunch of colorful directional lighting
for (let l of [
	[0, 0, 5, 0xff0000],
	[0, 5, 0, 0xffff00],
	[5, 0, 0, 0xff00ff],
	[0, 0, -5, 0x00ff00],
	[0, -5, 0, 0x00ffff],
	[-5, 0, 0, 0x0000ff],
]) {
	let directionalLight = new THREE.DirectionalLight(l[3], 0.2);
	directionalLight.position.set(l[0], l[1], l[2]);
	Scene.scene.add(directionalLight);
}
*/

// controls
let controls = new TrackballControls(Scene.camera, Scene.renderer.domElement);
controls.rotateSpeed = 2;
controls.zoomSpeed = 0.3;
controls.dynamicDampingFactor = 0.1;

Scene.camera.position.z = 5;									// move camera away from origin
Scene.renderer.setSize(window.innerWidth, window.innerHeight);	// match window size
document.body.appendChild(Scene.renderer.domElement);			// add renderer to document

const onWindowResize = function() {
	Scene.camera.aspect = window.innerWidth / window.innerHeight;
	Scene.camera.updateProjectionMatrix();
	Scene.renderer.setSize(window.innerWidth, window.innerHeight);
	controls.handleResize();
}

window.addEventListener("resize", onWindowResize, false);
onWindowResize();

// main animation loop
const animate = function() {
	const camera = Scene.camera;

	pointLight.position.set(camera.position.x, camera.position.y, camera.position.z);

	// update matrix world
	camera.updateMatrixWorld();
	// render scene
	Scene.renderer.render(Scene.scene, camera);
	// update trackball controls
	controls.update();
	
	requestAnimationFrame(animate);
}

set_click_type(0);
const init_shape = create_shape("Tetrahedron");
Scene.scene.add(init_shape);
console.log("objects in scene:", Scene.scene.children);
animate();