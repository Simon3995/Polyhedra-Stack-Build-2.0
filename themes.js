import translucent from './themes/translucent.js';
import basic from './themes/basic.js';
import { Scene } from './main.js';
import wireframe from './themes/wireframe.js';

const Themes = {};

Themes["Translucent"] = translucent;
Themes["Basic"] = basic;
Themes["Wireframe"] = wireframe;

export default Themes;


document.getElementById("themeselect").onchange = function(e) {
    Scene.theme = Themes[e.target.value];
    reload_theme(Scene.scene);
}

export const reload_theme = function (scene) {
    for (const obj of scene.children) {
        if (obj.type == "LineSegments") {
            obj.material = Scene.theme.line_material;
            reload_theme(obj);
        } else if (obj.type == "Mesh") {
            obj.material = Scene.theme.default;
        }
    }
}