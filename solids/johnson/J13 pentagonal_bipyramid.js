// J13 Pentagonal Bipyramid

import { PI, Cos, Sin, Sqrt } from '../../math.js';

const a = Math.PI / 5;
const f = Math.sqrt((1 - Math.cos(2*a))**2+(Math.sin(2*a))**2);
const h = 1.051462224238267;

export default {
	"Pentagonal Bipyramid": {
		verts: [
			[0, 0, h/2],
			[1/f, 0, 0],
			[Math.cos(2 * a)/f, Math.sin(2 * a)/f, 0],
			[Math.cos(4 * a)/f, Math.sin(4 * a)/f, 0],
			[Math.cos(6 * a)/f, Math.sin(6 * a)/f, 0],
			[Math.cos(8 * a)/f, Math.sin(8 * a)/f, 0],
			[0, 0, -h/2],
		],
		faces: [
			[1, 0, 2],
			[2, 0, 3],
			[3, 0, 4],
			[4, 0, 5],
			[5, 0, 1],
			[1, 2, 6],
			[2, 3, 6],
			[3, 4, 6],
			[4, 5, 6],
			[5, 1, 6],
		]
	}
}