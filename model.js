import Shapes from './shapes.js';
import * as THREE from './three.js/three.module.min.js';
import { mesh_to_face_objects, mesh_to_line_segments } from './util.js';
import { Scene, Animations, Settings } from './main.js';
import Themes from './themes.js';

// attach polyhedron to a face
// NOTE: rotation is arbitrary
export const snap_shape = function(shape, parent_face, child_face) {
    // step 0. get 3 vertices from each shape
    const a0 = new THREE.Vector3(...parent_face.slice(0, 3));
    const a1 = new THREE.Vector3(...parent_face.slice(3, 6));
    const a2 = new THREE.Vector3(...parent_face.slice(6, 9));
    const b0 = new THREE.Vector3(...child_face.slice(6, 9));
    const b1 = new THREE.Vector3(...child_face.slice(3, 6));
    const b2 = new THREE.Vector3(...child_face.slice(0, 3));

    // step 1. translation (1st vertex)
    const translation = new THREE.Matrix4();
    translation.set(
        1, 0, 0, a0.x - b0.x,
        0, 1, 0, a0.y - b0.y,
        0, 0, 1, a0.z - b0.z,
        0, 0, 0, 1
    );
    shape.applyMatrix4(translation);
    for (let point of [b0, b1, b2])
        point.applyMatrix4(translation);

    // step 2. rotation (2nd vertex)
    const v0 = a1.clone().sub(a0);
    const v1 = b1.clone().sub(b0);
    let cross = v1.clone().cross(v0).normalize();
    const angle = v0.clone().angleTo(v1);
    // fix if v0 and v1 are colinear
    if (cross.length() === 0) {
        const tmp = new THREE.Vector3(v0.x, v0.y + Math.random(), v0.z + Math.random());
        cross = v1.clone().cross(tmp).normalize();
    }
    const translate_origin = new THREE.Matrix4().makeTranslation(-a0.x, -a0.y, -a0.z);
    const rotate_matrix = new THREE.Matrix4().makeRotationAxis(cross, angle);
    const translate_back = new THREE.Matrix4().makeTranslation(a0.x, a0.y, a0.z);
    shape.applyMatrix4(translate_origin);
    shape.applyMatrix4(rotate_matrix);
    shape.applyMatrix4(translate_back);
    
    for (let point of [b0, b1, b2]) {
        point.applyMatrix4(translate_origin);
        point.applyMatrix4(rotate_matrix);
        point.applyMatrix4(translate_back);
    }

    // step 3. rotation (3rd vertex)
    const correct_edge = v0.clone();
    const p0 = a2.clone().sub(a1).projectOnPlane(correct_edge).normalize();
    const p1 = b2.clone().sub(b1).projectOnPlane(correct_edge).normalize();
    const cross2 = p0.clone().cross(p1);
    const angle2 = p0.clone().angleTo(p1);
    const direction = cross2.dot(correct_edge) >= 0 ? -1 : 1;
    const rotate_matrix2 = new THREE.Matrix4().makeRotationAxis(correct_edge, direction * angle2);
    shape.applyMatrix4(translate_origin);
    shape.applyMatrix4(rotate_matrix2);
    shape.applyMatrix4(translate_back);
    for (let point of [b0, b1, b2]) {
        point.applyMatrix4(translate_origin);
        point.applyMatrix4(rotate_matrix);
        point.applyMatrix4(translate_back);
    }

    return shape;
}

// remove a shape from the scene
export const remove_shape = function(face) {
    face.object.parent.removeFromParent();
}

// focuses the camera on a specific object
export const center_shape = function(face) {
    let pos = new THREE.Vector3();
    face.object.parent.getWorldPosition(pos);
    Scene.controls.target.set(pos.x, pos.y, pos.z);
}

// calculate
export const calculate_rotation = function(face) {
    const shape = face.parent;
    const parent_face_id = shape.userData.parent_face;
    if (!parent_face_id) {
        console.warn("Cannot rotate from root");
        return;
    }
    
    const parent_face = shape.children.find(child => child.uuid === parent_face_id);

    // TODO: we do need a more sophisticated method for non-regular faces, i.e., how do you find the degrees of rotational symmetry?
    const vertex_count = parent_face.geometry.attributes.position.count / 3 + 2;
    const angle = 2 * Math.PI / vertex_count;

    const length = Settings.rot_animation_length;

    for (let i = 0; i < length; i++) {
        Animations.push({
            type: "rotation",
            parent_face,
            angle: angle / length,
        });
    }

    // execute_rotation(parent_face, angle);
}

// executes a rotation on a branch
export const execute_rotation = function(parent_face, angle) {
    const shape = parent_face.parent;
    
    // step 1: move shape so parent_face center is at origin
    const parent_face_center = new THREE.Vector3();
    parent_face.geometry.computeBoundingBox();
    parent_face.geometry.boundingBox.getCenter(parent_face_center);
    parent_face_center.applyMatrix4(shape.matrixWorld);
    
    shape.position.sub(parent_face_center);

    // step 2: rotate around parent_face
    const normal = new THREE.Vector3();
    parent_face.geometry.computeVertexNormals();
    parent_face.geometry.attributes.normal.needsUpdate = true;
    const normalsArray = parent_face.geometry.attributes.normal.array;

    // Assume the normal is consistent (use the first vertex normal)
    normal.set(normalsArray[0], normalsArray[1], normalsArray[2]).normalize();
    normal.applyMatrix4(shape.matrixWorld);
    normal.normalize();
    
    const rotationMatrix = new THREE.Matrix4().makeRotationAxis(normal, angle);
    shape.applyMatrix4(rotationMatrix);

    // step 3: move back
    shape.position.add(parent_face_center);
}

// mirrors a branch of polyhedra
export const mirror_branch = function() {
    // TODO
}

// start a new scene from a single shape
export const create_shape = function(shape_name) {
    const shape = Shapes[shape_name];

    // initialize wireframe geometry
    const line_geom = new THREE.BufferGeometry();
    line_geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(mesh_to_line_segments(shape)), 3));
    const line_mat = Scene.theme.line_material;
    const line_segments = new THREE.LineSegments(line_geom, line_mat);

    // initialize faces
    const face_objs = mesh_to_face_objects(shape);
    const face_mat = Scene.theme.default;
    for (const face_obj of face_objs) {
        line_segments.attach(new THREE.Mesh(face_obj, face_mat));
    }

    return line_segments;
}