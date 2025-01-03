// shape definition
// archimedean - truncated cube

import { TRUNCUBE } from '../../math.js';

export default {
	"Truncated Cube": {
		verts: [
			[0.5, 1/TRUNCUBE, 1/TRUNCUBE],
			[0.5, 1/TRUNCUBE, -1/TRUNCUBE],
			[0.5, -1/TRUNCUBE, 1/TRUNCUBE],
			[0.5, -1/TRUNCUBE, -1/TRUNCUBE],
			[-0.5, 1/TRUNCUBE, 1/TRUNCUBE],
			[-0.5, 1/TRUNCUBE, -1/TRUNCUBE],
			[-0.5, -1/TRUNCUBE, 1/TRUNCUBE],
			[-0.5, -1/TRUNCUBE, -1/TRUNCUBE],
			[1/TRUNCUBE, 0.5, 1/TRUNCUBE],
			[1/TRUNCUBE, 0.5, -1/TRUNCUBE],
			[1/TRUNCUBE, -0.5, 1/TRUNCUBE],
			[1/TRUNCUBE, -0.5, -1/TRUNCUBE],
			[-1/TRUNCUBE, 0.5, 1/TRUNCUBE],
			[-1/TRUNCUBE, 0.5, -1/TRUNCUBE],
			[-1/TRUNCUBE, -0.5, 1/TRUNCUBE],
			[-1/TRUNCUBE, -0.5, -1/TRUNCUBE],
			[1/TRUNCUBE, 1/TRUNCUBE, 0.5],
			[1/TRUNCUBE, 1/TRUNCUBE, -0.5],
			[1/TRUNCUBE, -1/TRUNCUBE, 0.5],
			[1/TRUNCUBE, -1/TRUNCUBE, -0.5],
			[-1/TRUNCUBE, 1/TRUNCUBE, 0.5],
			[-1/TRUNCUBE, 1/TRUNCUBE, -0.5],
			[-1/TRUNCUBE, -1/TRUNCUBE, 0.5],
			[-1/TRUNCUBE, -1/TRUNCUBE, -0.5],
		],
		faces: [
			[8, 0, 16],
			[4, 12, 20],
			[14, 6, 22],
			[2, 10, 18],
			[17, 1, 9],
			[21, 13, 5],
			[23, 7, 15],
			[19, 11, 3],
			[0, 8, 10, 2, 6, 14, 12, 4],
			[0, 4, 20, 21, 5, 1, 17, 16],
			[12, 14, 22, 23, 15, 13, 21, 20],
			[6, 2, 18, 19, 3, 7, 23, 22],
			[10, 8, 16, 17, 9, 11, 19, 18],
			[11, 9, 1, 5, 13, 15, 7, 3],
		]
	}
}