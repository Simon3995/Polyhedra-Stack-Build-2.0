import Shapes from './shapes.js';
import * as THREE from './three.js/three.module.min.js';
import { mesh_to_triangles } from './util.js';
import { Scene } from './main.js';

// attach polyhedron to a face
// NOTE: rotation is arbitrary
export const snap_shape = function(shape, parent_face, child_face) {
    // TODO
}

// remove a shape from the scene
export const remove_shape = function() {
    // TODO
}

// rotate a branch of polyhedra
export const rotate_branch = function() {
    // TODO
}

// mirrors a branch of polyhedra
export const mirror_branch = function() {
    // TODO
}

// start a new scene from a single shape
export const start_scene = function(shape_name) {
    const shape = Shapes[shape_name];

    // initialize geometry
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(mesh_to_triangles(shape));
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.computeVertexNormals();
    const material = new THREE.MeshLambertMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    Scene.scene.add(mesh);
}
