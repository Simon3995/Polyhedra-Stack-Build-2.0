// array of shape definitions
const Shapes = {};

const Settings = {
	/** Click Types
	 * 0: Add Shape
	 * 1: Delete Shape
	 * 2: Rotate View
	 * 3: Center View on Object
	 * 4: Rotate Branch
	 */
	click_type: 0,
	tree_view: false,
	shading: false,
	debug: false,
}

// three.js setup
let raycaster = new THREE.Raycaster();
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
let renderer = new THREE.WebGLRenderer({antialias: true});

// lighting
let pointLight = new THREE.PointLight(0xffffff, 1.0, 100);
scene.add(pointLight);
let ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

// controls
let controls = new THREE.TrackballControls(camera, renderer.domElement);
let mouse = new THREE.Vector2(-1000, -1000);

camera.position.z = 7.5;									// move camera away from origin
renderer.setSize(window.innerWidth, window.innerHeight);	// match window size
document.body.appendChild(renderer.domElement);				// add renderer to document

/* Multiplies all entries in an array of vectors by some scalar.
 * mask is an optional parameter that indicates which indices of
 * the vectors should be scaled. If left empty it will scale the entire vector.
 */
const scaleVectorList = function (matrix, factor, mask = [0, 1, 2]) {
	for (const vectorID in matrix) {
		for (const coordinate of mask) {
			matrix[vectorID][coordinate] *= factor;
		}
	}
	return matrix;
}
