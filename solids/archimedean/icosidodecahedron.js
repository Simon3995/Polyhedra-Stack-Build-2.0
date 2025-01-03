// shape definition
// archimedean - icosidodecahedron
// ****** WORK IN PROGRESS ******

import { PHI, PI, Cos, Sin, Sqrt } from '../../math.js';

/*
const a = (2 * Math.PI) / 20; // divide 2*PI in 20
// 0, 4, 8, 12, 16 segments for 5-gon; 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 segments for 10-gon
const f1 = Math.sqrt((1 - Math.cos(4*a))**2+(Math.sin(4*a))**2); // factor to scale 5-gon to length 1
const f2 = Math.sqrt((1 - Math.cos(2*a))**2+(Math.sin(2*a))**2); // factor to scale 10-gon to length 1
const h = 0.5 * Math.sqrt((5 - Math.sqrt(5))/ 10); // half of the height of J5
*/

export default {
	"Icosidodecahedron": {
    verts: [
            [0, 0 , PHI],
            [0, 0 , -PHI],
            
        ],
        faces: [
            [0, 1, 2, 3, 4],
        ]
    }
}