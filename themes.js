// HTML input elements
const theme_bg_col  = document.getElementById("theme_bg_col");
const theme_fc      = document.getElementById("theme_fc");
const theme_fc_col  = document.getElementById("theme_fc_col");
const theme_fc_opc  = document.getElementById("theme_fc_opc");
const theme_fc_shd  = document.getElementById("theme_fc_shd");
const theme_wr      = document.getElementById("theme_wr");
const theme_wr_col  = document.getElementById("theme_wr_col");

theme_bg.onchange = function(e) {
    document.body.style.backgroundColor = theme_bg.value;
};

theme_bg.onchange();

// export const reload_theme = function (scene) {
//     Scene.scene.background = Scene.theme.background;
//     for (const obj of scene.children) {
//         if (obj.type == "LineSegments") {
//             if (Scene.theme.line_material) {
//                 obj.material = Scene.theme.line_material;
//             } else {
//                 obj.material = new THREE.LineBasicMaterial();
//                 obj.material.visible = false;
//             }
//             reload_theme(obj);
//         } else if (obj.type == "Mesh") {
//             obj.material = Scene.theme.default;
//         }
//     }
// }