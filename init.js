// mathematical constants
const PHI = (1+Math.sqrt(5))/2;
const SQRT2 = Math.SQRT2;

// array of shape definitions
let shapes = [];

// three.js setup
let raycaster = new THREE.Raycaster();
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
let renderer = new THREE.WebGLRenderer({antialias: true});

camera.position.z = 7.5;									// move camera away from origin
renderer.setSize(window.innerWidth, window.innerHeight);	// match window size
document.body.appendChild(renderer.domElement);				// add renderer to document

/* Multiplies all entries in an array of vectors by some scalar.
 * mask is an optional parameter that indicates which indices of
 * the vectors should be scaled. If left empty it will scale the entire vector.
 */
function scaleVectorList(matrix, factor, mask) {
	if (mask === undefined) {
		mask = [0, 1, 2];
	}
	for (let vectorID in matrix) {
		for (let coordinate of mask) {
			matrix[vectorID][coordinate] *= factor;
		}
	}
	return matrix;
}