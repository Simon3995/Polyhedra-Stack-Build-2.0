const f = Math.sqrt(2);

import { SQRT2 } from '../../math.js';

export default {
	"Stella Octangula": {
		verts: [
			[0.5*f, 0.5*f, 0.5*f],
			[-0.5*f, 0.5*f, 0.5*f],
			[-0.5*f, -0.5*f, 0.5*f],
			[0.5*f, -0.5*f, 0.5*f],
			[0, 0, 0.5*f],
			[0.5*f, 0, 0],
			[0, 0.5*f, 0],
			[-0.5*f, 0, 0],
			[0, -0.5*f, 0],
			[0.5*f, 0.5*f, -0.5*f],
			[-0.5*f, 0.5*f, -0.5*f],
			[-0.5*f, -0.5*f, -0.5*f],
			[0.5*f, -0.5*f, -0.5*f],
			[0, 0, -0.5*f],
		],
		faces: [
			[0, 4, 6],
			[4, 1, 6],
			[1, 7, 6],
			[1, 4, 7],
			[4, 2, 7],
			[2, 8, 7],
			[2, 4, 8],
			[4, 3, 8],
			[3, 5, 8],
			[3, 4, 5],
			[4, 0, 5],
			[0, 6, 5],
			[13, 9, 6],
			[10, 13, 6],
			[7, 10, 6],
			[13, 10, 7],
			[11, 13, 7],
			[8, 11, 7],
			[13, 11, 8],
			[12, 13, 8],
			[5, 12, 8],
			[13, 12, 5],
			[9, 13, 5],
			[6, 9, 5],
		]
	}
}