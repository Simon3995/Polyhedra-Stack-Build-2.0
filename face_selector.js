import * as THREE from 'three';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import Themes from './themes.js';
import { create_shape } from './model.js';
import { set_shape_material } from './util.js';

export const fs_Scene = {
    raycaster: new THREE.Raycaster(),
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(20, 1, 0.01, 1000),
    renderer: new THREE.WebGLRenderer({antialias: true}),
    pointer: new THREE.Vector2(),
    shape: null,
    controls: {},
    mouse_moved: false,
    theme: Themes["Basic Dark"],
    face_index: 0,
    def_mat: new THREE.MeshBasicMaterial({
        color: 0xffffff,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1
    }),
    hlt_mat: new THREE.MeshBasicMaterial({
        color: 0x47b6ff,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1
    }),
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

export const animate_fs = function () {
    if (fs_Scene.scene.children.length === 0) return;

    const camera = fs_Scene.camera;

    camera.updateMatrixWorld();
    fs_Scene.renderer.render(fs_Scene.scene, camera);
    fs_Scene.controls.update();
}

export const set_fs_shape = function (shape) {
    clear_scene();
    const s = create_shape(shape)
    fs_Scene.scene.add(s);
    fs_Scene.shape = s;
}

const clear_scene = function () {
    const scene = fs_Scene.scene;
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
}

const highlight_face = function () {
    // clear current highlight
    set_shape_material(fs_Scene.shape, fs_Scene.def_mat);

    // find hovered face
    fs_Scene.raycaster.setFromCamera(fs_Scene.pointer, fs_Scene.camera);
    const intersects = fs_Scene.raycaster.intersectObjects(fs_Scene.scene.children);
    const meshes = intersects.filter(x => x.object.type === "Mesh");
    const closest = meshes[0];
    if (closest) closest.object.material = fs_Scene.hlt_mat;

    const faces = closest.object.parent.children;
    fs_Scene.face_index = faces.findIndex(item => item.uuid === closest.object.uuid);
    
}

fs_Scene.renderer.domElement.addEventListener("mousemove", function (e) {
    const bbox = document.getElementById("face_selector").getBoundingClientRect();
    fs_Scene.pointer.x = ((e.pageX - document.body.scrollLeft - bbox.left) / bbox.width) * 2 - 1;
    fs_Scene.pointer.y = - ((e.pageY - document.body.scrollTop - bbox.top) / bbox.height) * 2 + 1;
});

fs_Scene.renderer.domElement.addEventListener("mousedown", function (e) {
    fs_Scene.mouse_moved = false;
});

fs_Scene.renderer.domElement.addEventListener("mousemove", function (e) {
    fs_Scene.mouse_moved = true;
});

fs_Scene.renderer.domElement.addEventListener("mouseup", function (e) {
    if (!fs_Scene.mouse_moved) highlight_face();
});