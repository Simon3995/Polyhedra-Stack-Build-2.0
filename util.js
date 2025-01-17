import * as THREE from './three.js/three.module.min.js';

// Construct a single face object as a single list of coordinates
export const get_face = function(shape, face_id) {
    let face = [];
    for (let vertex of shape.faces[face_id])
        face.push(...shape.verts[vertex]);
    return face;
}

// Convert face to triangles as a single list of coordinates
export const face_to_triangles = function(face) {
    let vertices = [];
    for (let i = 0; i < face.length / 3 - 2; i++) {
        vertices.push(... [face[0], face[1], face[2]]);
        vertices.push(... [face[3 * (i + 1)], face[3 * (i + 1) + 1], face[3 * (i + 1) + 2]]);
        vertices.push(... [face[3 * (i + 2)], face[3 * (i + 2) + 1], face[3 * (i + 2) + 2]]);
    }
    return vertices;
}

// Convert mesh to triangles as a single list of coordinates
// export const mesh_to_triangles = function(shape) {
//     let vertices = [];
//     let face_mapping = [];
//     let id = 0;
//     for (let face in shape.faces) {
//         let type = shape.faces[face].length;
//         let map = {
//             id: face,
//             type: type, // TODO: this is only the edge count, can we distinguish between squares and rhombi
//             tris: [],
//         };
        
//         for (let i = 0; i < type - 2; i++) {
//             map.tris.push(id);
//             id++;
//         }

//         /*if (type == 3) {
//             map.verts = [i];
//             i++;
//         } else if (type == 4) {
//             map.verts = [i, i + 1];
//             i += 2;
//         } else if (type == 5) {
//             map.verts = [i, i + 1, i + 2];
//             i += 3;
//         }*/
//         face_mapping.push(map)
//         vertices.push(...face_to_triangles(get_face(shape, face)));
//     }
//     return {vertices, face_mapping};
// }

// Convert mesh to list of THREE.js geometries, one for each face
export const mesh_to_face_objects = function(shape) {
    let faces = [];
    for (let face in shape.faces) {
        const geometry = new THREE.BufferGeometry();
        const vertices = get_face(shape,face);
        const vertex_data = new Float32Array(face_to_triangles(vertices));
        geometry.setAttribute('position', new THREE.BufferAttribute(vertex_data, 3));
        geometry.userData.vertices = vertices;
        geometry.computeVertexNormals();
        faces.push(geometry);
    }
    return faces;
}

// Convert mesh to list of line segments
export const mesh_to_line_segments = function(shape) {
    let segments = [];
    let pairs = [];
    for (const face of shape.faces) {
        for (let i = 0; i < face.length; i++) {
            // identify vertex pair
            let idx_1 = face[i];
            let idx_2 = face[(i + 1) % face.length];
            if (idx_1 > idx_2) {
                [idx_1, idx_2] = [idx_2, idx_1];
            }
            // check if pair is duplicate
            let exists = false;
            for (const pair of pairs) {
                exists ||= pair[0] === idx_1 && pair[1] === idx_2;
            }
            // if not duplicate, add line segment
            if (!exists) {
                const segment = [... shape.verts[idx_1], ... shape.verts[idx_2]];
                pairs.push([idx_1, idx_2]);
                segments.push(...segment);
            }
        }
    }
    return segments;
}

/* Multiplies all entries in an array of vectors by some scalar.
* mask is an optional parameter that indicates which indices of
* the vectors should be scaled. If left empty it will scale the entire vector.
*/
export const scaleVectorList = function (matrix, factor, mask = [0, 1, 2]) {
   for (const vectorID in matrix) {
       for (const coordinate of mask) {
           matrix[vectorID][coordinate] *= factor;
       }
   }
   return matrix;
}

// sets the material of an entire shape, takes shape as argument
export const set_shape_material = function(shape, material) {
    for (const face of shape.children.filter(x => x.type === "Mesh")) {
        face.material = material;
    }
}

// sets the material of an entire branch, takes root shape as argument
export const set_branch_material = function(root_shape, material) {
    set_shape_material(root_shape, material);
    for (const shape of root_shape.children.filter(x => x.type === "LineSegments")) {
        set_branch_material(shape, material);
    }
}
