import { Scene } from "./main.js";
import * as THREE from 'three';

// HTML input elements
const theme_bg_col  = document.getElementById("theme_bg_col");
const theme_fc      = document.getElementById("theme_fc");
const theme_fc_col  = document.getElementById("theme_fc_col");
const theme_fc_opc  = document.getElementById("theme_fc_opc");
const theme_fc_shd  = document.getElementById("theme_fc_shd");
const theme_wr      = document.getElementById("theme_wr");
const theme_wr_col  = document.getElementById("theme_wr_col");

// global theme object
export const Theme = {
    bg_col: "#202020",
    fc: true,
    fc_col: "#ffffff",
    fc_opc: 1.0,
    fc_shd: "normal",
    wr: true,
    wr_col: "#ffffff",
}

// update theme menu inputs to match current scene
export const update_theme_inputs = function () {
    theme_bg_col.value = Theme.bg_col;
    theme_fc.checked = Theme.fc;
    theme_fc_col.value = Theme.fc_col;
    theme_fc_opc.value = Theme.fc_opc;
    theme_fc_shd.value = Theme.fc_shd;
    theme_wr.checked = Theme.wr;
    theme_wr_col.value = Theme.wr_col;
}

// return the default face material for new shapes based on current theme settings
export const def_face_mat = function () {
    const settings = {
        visible: Theme.fc,
        color: Theme.fc_col,
        transparent: (Theme.fc_opc < 1),
        opacity: Theme.fc_opc,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
    }

    switch (Theme.fc_shd) {
        case "flat":
            return new THREE.MeshBasicMaterial(settings);
        case "lambert":
            return new THREE.MeshLambertMaterial(settings);
        case "normal":
            delete settings.color;
            return new THREE.MeshNormalMaterial(settings);
    }
}

// return the default line material for new shapes based on current theme settings
export const def_line_mat = function () {
    return new THREE.LineBasicMaterial({
        visible: Theme.wr,
        color: Theme.wr_col,
    });
}

export const get_face_hlt = function () {
    return null;
}

export const get_shape_hlt = function () {
    return null;
}

export const get_branch_hlt = function () {
    return null;
}

// apply the current theme to the scene recursively
export const reload_theme = function (scene) {
    document.body.style.backgroundColor = Theme.bg_col;

    for (const obj of scene.children) {
        if (obj.type == "Mesh") {
            switch (Theme.fc_shd) {
                case "flat":
                    obj.material = new THREE.MeshBasicMaterial();
                    break;
                case "lambert":
                    obj.material = new THREE.MeshLambertMaterial();
                    break;
                case "normal":
                    obj.material = new THREE.MeshNormalMaterial();
                    break;
            }
            obj.material.polygonOffset = true;
            obj.material.polygonOffsetUnits = 1;
            obj.material.polygonOffsetFactor = 1;
            obj.material.visible = Theme.fc;
            obj.material.color = new THREE.Color(Theme.fc_col);
            obj.material.transparent = (Theme.fc_opc < 1);
            obj.material.opacity = Theme.fc_opc;
            obj.material.needsUpdate = true;
        } else if (obj.type == "LineSegments") {
            obj.material.visible = Theme.wr;
            obj.material.color = new THREE.Color(Theme.wr_col);
        }

        reload_theme(obj);
    }
}

// event listeners
theme_bg_col.onchange = function(e) {
    Theme.bg_col = theme_bg_col.value;
    reload_theme(Scene.scene);
}

theme_fc.onchange = function(e) {
    Theme.fc = e.target.checked;
    reload_theme(Scene.scene);
}

theme_fc_col.onchange = function(e) {
    Theme.fc_col = e.target.value;
    reload_theme(Scene.scene);
}

theme_fc_opc.onchange = function(e) {
    Theme.fc_opc = Number(e.target.value);
    reload_theme(Scene.scene);
}

theme_fc_shd.onchange = function(e) {
    Theme.fc_shd = e.target.value;
    reload_theme(Scene.scene);
}

theme_wr.onchange = function(e) {
    Theme.wr = e.target.checked;
    reload_theme(Scene.scene);
}

theme_wr_col.onchange = function(e) {
    Theme.wr_col = e.target.value;
    reload_theme(Scene.scene);
}