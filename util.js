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
export const mesh_to_triangles = function(shape) {
    let vertices = [];
    for (let face in shape.faces) {
        vertices.push(...face_to_triangles(get_face(shape, face)));
    }
    return vertices;
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
