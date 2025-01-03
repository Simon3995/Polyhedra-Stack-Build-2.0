// shape definition
// platonic - tetrahedron

import { SQRT2 } from '../../math.js';

export default {
	"Tetrahedron": {
		verts: [
			[SQRT2/4, SQRT2/4, SQRT2/4],
			[-SQRT2/4, SQRT2/4, -SQRT2/4],
			[-SQRT2/4, -SQRT2/4, SQRT2/4],
			[SQRT2/4, -SQRT2/4, -SQRT2/4],
		],
		faces: [
			[2,0,3],
			[1,2,3],
			[0,1,3],
			[0,2,1],
		]
	}
}