import Shapes from './shapes.js';
import { Scene } from './main.js';
import * as THREE from './three.js/three.module.min.js';

// obj: which object to display indices for
// type: what type of polyhedron it is (string)
export const show_vert_indices = function(obj, type) {
    const debug_layer = document.getElementById("debuglayer");
    debug_layer.innerHTML = "";

    for (let i=0; i<Shapes[type].verts.length; i++) {
        const vert = Shapes[type].verts[i];
        const pos = to_xy_coords(new THREE.Vector3(...vert).applyMatrix4(obj.matrixWorld));

        debug_layer.innerHTML += `
            <div class="vertlabel" style="
                position: absolute;
                left: ${pos.x + 4}px;
                top: ${pos.y + 4}px;
                color: white;
                background-color: #00000088;
                padding: 2px 4px;
                border-radius: 4px;
                font: bold 20px Consolas;
            ">
            ${i}
            </div>
        `;
    }
}

// converts 3D world coordinates to 2D screen coordinates
export const to_xy_coords = function(pos) {
    const vector = pos.clone().project(Scene.camera);
    vector.x =  (vector.x + 1)/2 * window.innerWidth;
	vector.y = -(vector.y - 1)/2 * window.innerHeight;
	return vector;
}

// create a floating coloured point in 3D space for debug purposes
export const create_debug_point = function(pos, color) {
    const point_geom = new THREE.BufferGeometry();
    point_geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
    const material = new THREE.PointsMaterial({
        color: color,
        size: 0.1
    });
    const point = new THREE.Points(point_geom, material);
    return point;
}