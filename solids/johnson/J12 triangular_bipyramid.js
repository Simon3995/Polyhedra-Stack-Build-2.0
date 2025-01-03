// J12 Triangular Bipyramid

import { PI, Cos, Sin, Sqrt } from '../../math.js';

const a = (2/3) * Math.PI;
const f = Math.sqrt((-Math.cos(a) + 1)**2+(Math.sin(a))**2);
const h = 1.632993161855452;

export default {
	"Triangular Bipyramid": {
		verts: [
			[0, 0, h/2],
			[1/f, 0, 0],
			[Math.cos(a)/f, Math.sin(a)/f, 0],
			[Math.cos(2 * a)/f, Math.sin(2 * a)/f, 0],
			[0, 0, -h/2],
		],
		faces: [
			[1, 0, 2],
			[2, 0, 3],
			[3, 0, 1],
			[1, 2, 4],
			[2, 3, 4],
			[3, 1, 4],
		]
	}
}