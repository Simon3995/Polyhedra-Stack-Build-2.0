import { Scene } from './main.js';

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