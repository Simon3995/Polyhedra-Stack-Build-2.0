// J4 Square Cupola

import { PI, Cos, Sin, Sqrt } from '../../math.js';

const a = (2 * Math.PI) / 16; // divide 2*PI in 16
// 0, 4, 8, 12 segments for 4-gon; 1, 3, 5, 7, 9, 11, 13, 15 segments for 8-gon
const f1 = Math.sqrt((1 - Math.cos(4*a))**2+(Math.sin(4*a))**2); // factor to scale 4-gon to length 1
const f2 = Math.sqrt((1 - Math.cos(2*a))**2+(Math.sin(2*a))**2); // factor to scale 8-gon to length 1
const h = 0.5 * (Math.sqrt(2) / 2); // half of the height of J4

export default {
	"Square Cupola": {
    verts: [
            [1 / f1, 0, h],
            [Math.cos(4 * a) / f1, Math.sin(4 * a) / f1, h],
            [Math.cos(8 * a) / f1, Math.sin(8 * a) / f1, h],
            [Math.cos(12 * a) / f1, Math.sin(12 * a) / f1, h],
            [Math.cos(a)/f2, Math.sin(a)/f2, -h],
            [Math.cos(3 * a)/f2, Math.sin(3 * a)/f2, -h],
            [Math.cos(5 * a)/f2, Math.sin(5 * a)/f2, -h],
            [Math.cos(7 * a)/f2, Math.sin(7 * a)/f2, -h],
            [Math.cos(9 * a)/f2, Math.sin(9 * a)/f2, -h],
            [Math.cos(11 * a)/f2, Math.sin(11 * a)/f2, -h],
            [Math.cos(13 * a)/f2, Math.sin(13 * a)/f2, -h],
            [Math.cos(15 * a)/f2, Math.sin(15 * a)/f2, -h],
        ],
        faces: [
            [0, 3, 2, 1],
            [0, 5, 4],
            [0, 1, 6, 5],
            [1, 7, 6],
            [1, 2, 8, 7],
            [2, 9, 8],
            [2, 3, 10, 9],
            [3, 11, 10],
            [3, 0, 4, 11],
            [4, 5, 6, 7, 8, 9, 10, 11]
        ]
    }
}