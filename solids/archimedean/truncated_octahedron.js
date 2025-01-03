// shape definition
// archimedean - truncated octahedron

import { SQRT2 } from '../../math.js';

export default {
	"Truncated Octahedron": {
		verts: [
			[0/SQRT2, 1/SQRT2, 2/SQRT2],
			[0/SQRT2, 1/SQRT2, -2/SQRT2],
			[0/SQRT2, -1/SQRT2, 2/SQRT2],
			[0/SQRT2, -1/SQRT2, -2/SQRT2],
			[0/SQRT2, 2/SQRT2, 1/SQRT2],
			[0/SQRT2, 2/SQRT2, -1/SQRT2],
			[0/SQRT2, -2/SQRT2, 1/SQRT2],
			[0/SQRT2, -2/SQRT2, -1/SQRT2],
			[1/SQRT2, 0/SQRT2, 2/SQRT2],
			[1/SQRT2, 0/SQRT2, -2/SQRT2],
			[-1/SQRT2, 0/SQRT2, 2/SQRT2],
			[-1/SQRT2, 0/SQRT2, -2/SQRT2],
			[2/SQRT2, 0/SQRT2, 1/SQRT2],
			[2/SQRT2, 0/SQRT2, -1/SQRT2],
			[-2/SQRT2, 0/SQRT2, 1/SQRT2],
			[-2/SQRT2, 0/SQRT2, -1/SQRT2],
			[1/SQRT2, 2/SQRT2, 0/SQRT2],
			[1/SQRT2, -2/SQRT2, 0/SQRT2],
			[-1/SQRT2, 2/SQRT2, 0/SQRT2],
			[-1/SQRT2, -2/SQRT2, 0/SQRT2],
			[2/SQRT2, 1/SQRT2, 0/SQRT2],
			[2/SQRT2, -1/SQRT2, 0/SQRT2],
			[-2/SQRT2, 1/SQRT2, 0/SQRT2],
			[-2/SQRT2, -1/SQRT2, 0/SQRT2],
		],
		faces: [
			[0, 8, 2, 10],
			[22, 14, 23, 15],
			[19, 6, 17, 7],
			[21, 12, 20, 13],
			[16, 4, 18, 5],
			[9, 1, 11, 3],
			[0, 10, 14, 22, 18, 4],
			[10, 2, 6, 19, 23, 14],
			[2, 8, 12, 21, 17, 6],
			[8, 0, 4, 16, 20, 12],
			[18, 22, 15, 11, 1, 5],
			[23, 19, 7, 3, 11, 15],
			[17, 21, 13, 9, 3, 7],
			[20, 16, 5, 1, 9, 13],
		]
	}
}