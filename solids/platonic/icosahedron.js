// shape definition
// platonic - icosahedron

import { PHI } from '../../math.js';

export default {
	"Icosahedron": {
		verts: [
			[0, 0.5, PHI / 2],
			[0, 0.5, -PHI / 2],
			[0, -0.5, PHI / 2],
			[0, -0.5, -PHI / 2],
			[PHI / 2, 0, 0.5],
			[PHI / 2, 0, -0.5],
			[-PHI / 2, 0, 0.5],
			[-PHI / 2, 0, -0.5],
			[0.5, PHI / 2, 0],
			[0.5, -PHI / 2, 0],
			[-0.5, PHI / 2, 0],
			[-0.5, -PHI / 2, 0],
		],
		faces: [
			/* clockwise
			[0, 10, 8],
			[0, 6, 10],
			[0, 2, 6],
			[0, 4, 2],
			[0, 8, 4],
			[10, 1, 8],
			[6, 7, 10],
			[2, 11, 6],
			[4, 9, 2],
			[8, 5, 4],
			[10, 7, 1],
			[6, 11, 7],
			[2, 9, 11],
			[4, 5, 9],
			[8, 1, 5],
			[3, 11, 9],
			[3, 9, 5],
			[3, 5, 1],
			[3, 1, 7],
			[3, 7, 11] */
			// counterclockwise
			[8, 10, 0],
			[10, 6, 0],
			[6, 2, 0],
			[2, 4, 0],
			[4, 8, 0],
			[8, 1, 10],
			[10, 7, 6],
			[6, 11, 2],
			[2, 9, 4],
			[4, 5, 8],
			[1, 7, 10],
			[7, 11, 6],
			[11, 9, 2],
			[9, 5, 4],
			[5, 1, 8],
			[9, 11, 3],
			[5, 9, 3],
			[1, 5, 3],
			[7, 1, 3],
			[11, 7, 3]
		]
	}
}