import { load_file } from "./controller.js";

const div = document.getElementById("examples");

function append_link(path, title) {
    const p = document.createElement("p");
    p.style = `margin: 2px 0px`;
    const link = document.createElement("a");
    link.innerHTML = title;
    link.onclick = function() { load_file(`./examples/${path}`) };
    p.appendChild(link);
    div.appendChild(p);
}

function append_header(title) {
    const h2 = document.createElement("h2");
    h2.innerHTML = title;
    div.appendChild(h2);
}

export default function create_examples() {
    div.innerHTML = "";

    append_header("Perfect Fits");
    append_link("perfect_fits/bilo cube dodeca tiling.json", "Tesselation of Bilunabirotunda, Dodecahedron and Cube");
    append_link("perfect_fits/octahedron ring.json", "Ring of Octahedra");
    append_link("perfect_fits/hex prism ring.json", "Ring of Hexagonal Prisms");

    append_header("Mathfest 2026");
    append_link("mathfest2026/cluster van dodecaeders.json", "Cluster van Dodecaëders");
    append_link("mathfest2026/guusje de vogel (best wel raar).json", "Guusje de vogel (best wel raar)");
    append_link("mathfest2026/kyranosaurus.json", "Kyranosaurus");
    append_link("mathfest2026/muisje.json", "Muisje");
    append_link("mathfest2026/ruimtestation.json", "Ruimtestation");
    append_link("mathfest2026/satelliet.json", "Satelliet");
    append_link("mathfest2026/torens van prismas.json", "Torens van Prisma's");
    append_link("mathfest2026/trofee.json", "Trofee");
}