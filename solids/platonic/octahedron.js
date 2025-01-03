// shape definition
// platonic - octahedron

import { SQRT2 } from '../../math.js';

export default {
	"Octahedron": {
		verts: [
			[0, SQRT2/2, 0],
			[0, 0, SQRT2/2],
			[SQRT2/2, 0, 0],
			[0, 0, -SQRT2/2],
			[-SQRT2/2, 0, 0],
			[0, -SQRT2/2, 0],
		],
		faces: [
			[1,0,2],
			[2,0,3],
			[3,0,4],
			[4,0,1],
			[1,2,5],
			[2,3,5],
			[3,4,5],
			[4,1,5],
		]
	}
}