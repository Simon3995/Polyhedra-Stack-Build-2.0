import { load_file } from "./controller.js";

function create_link(path, title) {
    const p = document.createElement("p");
    p.style = `margin: 2px 0px`;
    const link = document.createElement("a");
    link.innerHTML = title;
    link.onclick = function() { load_file(`./examples/${path}`) };
    p.appendChild(link);
    return p;
}

export default function create_examples() {
    const div = document.getElementById("examples");

    div.innerHTML += `<h2>Mathfest 2026</h2>`;
    div.appendChild(create_link("mathfest2026/cluster van dodecaeders.json", "Cluster van Dodecaëders"));
    div.appendChild(create_link("mathfest2026/guusje de vogel (best wel raar).json", "Guusje de vogel (best wel raar)"));
    div.appendChild(create_link("mathfest2026/kyranosaurus.json", "Kyranosaurus"));
    div.appendChild(create_link("mathfest2026/muisje.json", "Muisje"));
    div.appendChild(create_link("mathfest2026/ruimtestation.json", "Ruimtestation"));
    div.appendChild(create_link("mathfest2026/satelliet.json", "Satelliet"));
    div.appendChild(create_link("mathfest2026/torens van prismas.json", "Torens van Prisma's"));
    div.appendChild(create_link("mathfest2026/trofee.json", "Trofee"));
}