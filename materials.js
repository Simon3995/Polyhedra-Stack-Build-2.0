import * as THREE from './three.js/three.module.min.js';

export default {
    default: new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
        side: THREE.FrontSide,
    }),
    // each click_type needs its own highlight materials
    action: [
        // click_type === 0, Add shape
        {
            face_highlight: new THREE.MeshLambertMaterial({
                color: 0x47b6ff,
                transparent: true,
                opacity: 0.8,
                side: THREE.FrontSide,
            }),
        },
        // click_type === 1, Delete shape
        {
            face_highlight: new THREE.MeshLambertMaterial({
                color: 0xff4747,
                transparent: true,
                opacity: 0.9,
                side: THREE.FrontSide,
            }),
            shape_highlight: new THREE.MeshLambertMaterial({
                color: 0xff6677,
                transparent: true,
                opacity: 0.8,
                side: THREE.FrontSide,
            }),
            branch_highlight: new THREE.MeshLambertMaterial({
                color: 0xff99aa,
                transparent: true,
                opacity: 0.6,
                side: THREE.FrontSide,
            }),
        },
        // click_type === 2, Rotate View
        {
            
        },
        // click_type === 3, Center View on Object
        {
            shape_highlight: new THREE.MeshLambertMaterial({
                color: 0xffe354,
                transparent: true,
                opacity: 0.8,
                side: THREE.FrontSide,
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