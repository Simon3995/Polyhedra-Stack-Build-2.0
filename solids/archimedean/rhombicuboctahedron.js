// shape definition
// archimedean - rhombicuboctahedron

import { SQRT2 } from '../../math.js';
import { scaleVectorList } from '../../util.js';

export default {
	"Rhombicuboctahedron": {
		verts: scaleVectorList([
			[1, 1, (1 + SQRT2)],
			[1, 1, -(1 + SQRT2)],
			[1, -1, (1 + SQRT2)],
			[1, -1, -(1 + SQRT2)],
			[-1, 1, (1 + SQRT2)],
			[-1, 1, -(1 + SQRT2)],
			[-1, -1, (1 + SQRT2)],
			[-1, -1, -(1 + SQRT2)],
			[1, (1 + SQRT2), 1],
			[1, (1 + SQRT2), -1],
			[1, -(1 + SQRT2), 1],
			[1, -(1 + SQRT2), -1],
			[-1, (1 + SQRT2), 1],
			[-1, (1 + SQRT2), -1],
			[-1, -(1 + SQRT2), 1],
			[-1, -(1 + SQRT2), -1],
			[(1 + SQRT2), 1, 1],
			[(1 + SQRT2), 1, -1],
			[(1 + SQRT2), -1, 1],
			[(1 + SQRT2), -1, -1],
			[-(1 + SQRT2), 1, 1],
			[-(1 + SQRT2), 1, -1],
			[-(1 + SQRT2), -1, 1],
			[-(1 + SQRT2), -1, -1],
		], 1/2),
		faces: [
			[0, 8, 16],
			[4, 20, 12],
			[6, 14, 22],
			[2, 18, 10],
			[17, 9, 1],
			[13, 21, 5],
			[23, 15, 7],
			[11, 19, 3],
			[0, 2, 6, 4],
			[0, 4, 12, 8],
			[4, 6, 22, 20],
			[6, 2, 10, 14],
			[2, 0, 16, 18],
			[8, 12, 13, 9],
			[12, 20, 21, 13],
			[20, 22, 23, 21],
			[22, 14, 15, 23],
			[14, 10, 11, 15],
			[10, 18, 19, 11],
			[18, 16, 17, 19],
			[16, 8, 9, 17],
			[9, 13, 5, 1],
			[21, 23, 7, 5],
			[15, 11, 3, 7],
			[19, 17, 1, 3],
			[3, 1, 5, 7],
		]
	}
}