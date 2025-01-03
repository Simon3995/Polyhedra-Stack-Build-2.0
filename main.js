import * as THREE from './three.js/three.module.min.js';
import { TrackballControls } from './three.js/TrackballControls.js';
import { set_click_type } from './buttons.js';
import { start_scene } from './model.js';
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
	camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000),
	renderer: new THREE.WebGLRenderer({antialias: true}),
}

// lighting
let pointLight = new THREE.PointLight(0xffffff, 2.5, Infinity, 0);
Scene.scene.add(pointLight);

let directionalLight1 = new THREE.DirectionalLight(0xff0000, 5);
directionalLight1.position.set(5, 0, 0);
let directionalLight2 = new THREE.DirectionalLight(0x00ff00, 5);
directionalLight2.position.set(0, 5, 0);
let directionalLight3 = new THREE.DirectionalLight(0x0000ff, 5);
directionalLight3.position.set(0, 0, 5);
// Scene.scene.add(directionalLight1);
// Scene.scene.add(directionalLight2);
// Scene.scene.add(directionalLight3);

let ambientLight = new THREE.AmbientLight(0xffffff, 0.025);
Scene.scene.add(ambientLight);

// controls
let controls = new TrackballControls(Scene.camera, Scene.renderer.domElement);
controls.rotateSpeed = 3;
controls.zoomSpeed = 0.3;

Scene.camera.position.z = 7.5;									// move camera away from origin
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

set_click_type(1);
start_scene("Pentagonal Pyramid");
animate();

console.log(Scene.scene.children);