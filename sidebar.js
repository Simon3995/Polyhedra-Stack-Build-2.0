import Shapes from './shapes.js';
import { Scene } from './main.js';
import { create_shape } from './model.js';

export const generate_polyhedra_list = function() {
    // clear existing polyhedra list
    const list = document.getElementById("polyhedralist");
    list.innerHTML = "";

    // create a list of polyhedra grouped by type
    const polyhedra_array = Object.entries(Shapes).map(([key, value]) => ({
        ...value,
        name: key
    }));
    const grouped_shapes = Object.groupBy(polyhedra_array, ({category}) => category);

    // add all shapes per-category
    for (const category in grouped_shapes) {
        for (const shape of grouped_shapes[category]) {
            // create new button element
            let button = document.createElement("button");

            // add classes
            button.classList.add("polyhedrabutton");
            if (shape.name == Scene.add_shape) button.classList.add("selected");

            // attach onclick event listener
            button.onclick = function() {
                Scene.add_shape = shape.name;
                
                // deselect all buttons
                let buttons = document.getElementsByClassName("polyhedrabutton");
                for (let b of buttons) b.classList.remove("selected");

                // select this button
                this.classList.add("selected");

                // if scene is empty, create new
                if (Scene.scene.children.filter(x => x.type == "LineSegments").length == 0) {
                    Scene.scene.add(create_shape(Scene.add_shape));
                }
            }

            // add button text and add to polyhedra list
            button.innerHTML = shape.name;
            list.appendChild(button);
        }
    }
}