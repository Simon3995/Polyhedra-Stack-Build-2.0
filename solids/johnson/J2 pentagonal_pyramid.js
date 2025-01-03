// J2 Pentagonal pyramid

import { PI, Cos, Sin, Sqrt } from '../../math.js';

const a = (2 * Math.PI) / 5;
const f = Math.sqrt((1 - Math.cos(2*a))**2+(Math.sin(2*a))**2); // factor to scale 5-gon to length 1
const h = 0.5 * Sqrt((5 - Sqrt(5))/ 10); // half of the height of J2

export default {
	"Pentagonal Pyramid": {
		verts: [
			[1/f, 0, -h],
			[Math.cos(a)/f, Math.sin(a)/f, -h],
			[Math.cos(2 * a)/f, Math.sin(2 * a)/f, -h],
			[Math.cos(3 * a)/f, Math.sin(3 * a)/f, -h],
			[Math.cos(4 * a)/f, Math.sin(4 * a)/f, -h],
			[0, 0, 0.5 * h],
		],
		faces: [
			[0, 1, 2, 3, 4],
			[0, 5, 1],
			[1, 5, 2],
			[2, 5, 3],
			[3, 5, 4],
			[4, 5, 0],
		]
	}
}