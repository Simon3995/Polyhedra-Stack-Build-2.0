import * as THREE from './three.js/three.module.min.js';

export default {
    default: new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
    }),
    // each click_type needs its own highlight materials
    action: [
        // click_type === 0, Add shape
        {
            face_highlight: new THREE.MeshLambertMaterial({
                color: 0x47b6ff,
                transparent: true,
                opacity: 0.8,
            }),
        },
        // click_type === 1, Delete shape
        {
            shape_highlight: new THREE.MeshLambertMaterial({
                color: 0xff4444,
                transparent: true,
                opacity: 0.8,
            }),
            branch_highlight: new THREE.MeshLambertMaterial({
                color: 0xff8888,
                transparent: true,
                opacity: 0.7,
            }),
        },
        // click_type === 2, Rotate View
        {
            // No highlights in rotate view mode
        },
        // click_type === 3, Center View on Object
        {
            shape_highlight: new THREE.MeshLambertMaterial({
                color: 0xffe354,
                transparent: true,
                opacity: 0.8,
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