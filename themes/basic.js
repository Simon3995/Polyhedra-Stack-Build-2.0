import * as THREE from '../three.js/three.module.min.js';

// basic theme
export default {
    background: new THREE.Color( 0x202020 ),
    line_material: new THREE.LineBasicMaterial({
        color: 0x000000,
    }),
    default: new THREE.MeshBasicMaterial({
        color: 0xffffff,
    }),
    // each click_type needs its own highlight materials
    action: [
        // click_type === 0, Add shape
        {
            face_highlight: new THREE.MeshBasicMaterial({
                color: 0x47b6ff,
            }),
        },
        // click_type === 1, Delete shape
        {
            shape_highlight: new THREE.MeshBasicMaterial({
                color: 0xff4444,
            }),
            branch_highlight: new THREE.MeshBasicMaterial({
                color: 0xff8888,
            }),
        },
        // click_type === 2, Rotate View
        {
            // No highlights in rotate view mode
        },
        // click_type === 3, Center View on Object
        {
            shape_highlight: new THREE.MeshBasicMaterial({
                color: 0xffe354,
            }),
        },
        // click_type === 4, Rotate Branch
        {
            
        },
        // click_type === 5, Mirror Branch
        {
            
        },
    ]
}