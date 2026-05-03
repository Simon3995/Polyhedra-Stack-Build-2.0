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
let Theme = {
    bg_col: "#202020",
    fc: true,
    fc_col: "#ffffff",
    fc_opc: 1.0,
}

// update theme menu inputs to match current scene
export const update_theme_inputs = function () {
    theme_bg_col.value = Theme.bg_col;
    theme_fc.checked = Theme.fc;
    theme_fc_col.value = Theme.fc_col;
    // TODO: More inputs
}

// apply the current theme to the scene recursively
export const reload_theme = function (scene) {
    document.body.style.backgroundColor = Theme.bg_col;

    for (const obj of scene.children) {
        if (obj.type == "Mesh") {
            obj.material.visible = Theme.fc;
            obj.material.color = new THREE.Color(Theme.fc_col);
            obj.material.transparent = (Theme.fc_opc < 1);
            obj.material.opacity = Theme.fc_opc;
            obj.material.needsUpdate = true;
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