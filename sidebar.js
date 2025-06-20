import Shapes from './shapes.js';
import { Scene } from './main.js';
import { create_shape } from './model.js';

/*export const generate_polyhedra_list = function() {
    const list = document.getElementById("polyhedralist");
    list.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        let div = `<button class="polyhedrabutton">`;
        div += `Rhombicosi&shy;dodecahedron`;
        div += `</button>`;

        list.innerHTML += div;
    }
}*/

export const generate_polyhedra_list = function() {
    let list = document.getElementById("polyhedralist");
    list.innerHTML = "";

    const polyhedra_array = Object.entries(Shapes).map(([key, value]) => ({
        ...value,
        name: key
    }));
    const grouped_shapes = Object.groupBy(polyhedra_array, ({category}) => category);

    console.log(grouped_shapes);

    for (const category in grouped_shapes) {
        /*list.innerHTML += `<h2>${category}</h2>`;*/
        for (const shape of grouped_shapes[category]) {
            const id = (category + "_" + shape.name).replace(/\W/g, '');
            list.innerHTML += `<button id="${id}" class="polyhedrabutton${(shape.name == Scene.add_shape) ? ' selected' : ''}">${shape.name}</button>`;
            
            // dit is een rommeltje en ik ga het nog opruimen maar niet nu lol
            setTimeout(function() {
                document.getElementById(id).onclick = function() {
                    Scene.add_shape = shape.name;
                    
                    // deselect all buttons
                    let selected = document.getElementsByClassName("selected");
                    selected[0].className = "polyhedrabutton";

                    // select this button
                    this.className = "polyhedrabutton selected";

                    // if scene is empty, create new
                    if (Scene.scene.children.filter(x => x.type == "LineSegments").length == 0) {
                        Scene.scene.add(create_shape(Scene.add_shape));
                    }
                }
            }, 20);
        }
    }
}