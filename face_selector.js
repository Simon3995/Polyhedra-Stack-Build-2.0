import * as THREE from 'three';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import Themes from './themes.js';
import { create_shape } from './model.js';

export const fs_Scene = {
    raycaster: new THREE.Raycaster(),
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(20, 1, 0.01, 1000),
    renderer: new THREE.WebGLRenderer({antialias: true}),
    pointer: new THREE.Vector2(),
    controls: {},
    theme: Themes["Basic Dark"],
    face_index: 0,
}

fs_Scene.camera.position.z = 20;  // move camera away from origin
fs_Scene.renderer.domElement.width = 166;
fs_Scene.renderer.domElement.height = 166;
fs_Scene.renderer.setSize(166, 166);
document.getElementById("face_selector").appendChild(fs_Scene.renderer.domElement);  // add renderer to document
fs_Scene.renderer.domElement.id = "fs_threecanvas";
fs_Scene.scene.background = fs_Scene.theme.background;

let controls = new TrackballControls(fs_Scene.camera, fs_Scene.renderer.domElement);
controls.rotateSpeed = 0.7;
controls.zoomSpeed = 0.3;
controls.panSpeed = 0.1;
controls.dynamicDampingFactor = 0.1;
fs_Scene.controls = controls;

export const set_fs_shape = function (shape) {
    clear_scene();
    fs_Scene.scene.add(create_shape(shape));
}

export const clear_scene = function () {
    const scene = fs_Scene.scene;
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
}

export const animate_fs = function () {
    const camera = fs_Scene.camera;

    camera.updateMatrixWorld();
    fs_Scene.renderer.render(fs_Scene.scene, camera);
    fs_Scene.controls.update();
}

fs_Scene.renderer.domElement.addEventListener("mousemove", function(evt) {
    const bbox = document.getElementById("main").getBoundingClientRect();
    fs_Scene.pointer.x = ((evt.pageX - document.body.scrollLeft) / bbox.width) * 2 - 1;
    fs_Scene.pointer.y = - ((evt.pageY - document.body.scrollTop) / bbox.height) * 2 + 1;
}, false);