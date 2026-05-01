import { Scene } from './main.js';
import translucent_dark from './themes/translucent_dark.js';
import translucent_light from './themes/translucent_light.js';
import basic_dark from './themes/basic_dark.js';
import basic_light from './themes/basic_light.js';
import wireframe_dark from './themes/wireframe_dark.js';
import wireframe_light from './themes/wireframe_light.js';
import normal_shading from './themes/normal_shading.js';

const Themes = {};

Themes["translucent_dark"] = translucent_dark;
Themes["translucent_light"] = translucent_light;
Themes["basic_dark"] = basic_dark;
Themes["basic_light"] = basic_light;
Themes["wireframe_dark"] = wireframe_dark;
Themes["wireframe_light"] = wireframe_light;
Themes["normal_shading"] = normal_shading;

export default Themes;


document.getElementById("themeselect").onchange = function(e) {
    Scene.theme = Themes[e.target.value];
    reload_theme(Scene.scene);
}

export const reload_theme = function (scene) {
    Scene.scene.background = Scene.theme.background;
    for (const obj of scene.children) {
        if (obj.type == "LineSegments") {
            if (Scene.theme.line_material) {
                obj.material = Scene.theme.line_material;
            } else {
                obj.material = new THREE.LineBasicMaterial();
                obj.material.visible = false;
            }
            reload_theme(obj);
        } else if (obj.type == "Mesh") {
            obj.material = Scene.theme.default;
        }
    }
}