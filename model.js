import Shapes from './shapes.js';
import * as THREE from './three.js/three.module.min.js';
import { mesh_to_face_objects, mesh_to_line_segments } from './util.js';
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

    // initialize wireframe geometry
    const line_geom = new THREE.BufferGeometry();
    line_geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(mesh_to_line_segments(shape)), 3));
    const line_mat = new THREE.LineBasicMaterial({ color: 0xffffff });
    const line_segments = new THREE.LineSegments(line_geom, line_mat);
    Scene.scene.add(line_segments);
    // initialize faces

    const face_objs = mesh_to_face_objects(shape);
    const face_mat = Scene.default_material;
    for (const face_obj of face_objs) {
        line_segments.attach(new THREE.Mesh(face_obj, face_mat));
    }
    // const geometry = new THREE.BufferGeometry();
    // const { vertices, face_mapping } = mesh_to_triangles(shape);
    // geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
    // geometry.userData.face_mapping = face_mapping;
    // console.log("userData from geometry init:", geometry.userData);
    // geometry.computeVertexNormals();
    // const material = new THREE.MeshLambertMaterial({ vertexColors: false });
    // const mesh = new THREE.Mesh(geometry, material);
    // Scene.scene.add(mesh);
}