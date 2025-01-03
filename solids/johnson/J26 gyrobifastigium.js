// J26 Gyrobifastigium

import { Sqrt } from '../../math.js';

export default {
	"Gyrobifastigium": {
		verts: [
			[0.5, 0.5, 0],
			[-0.5, 0.5, 0],
			[-0.5, -0.5, 0],
			[0.5, -0.5, 0],
			[-0.5, 0, 0.5*Math.sqrt(3)],
			[0.5, 0, 0.5*Math.sqrt(3)],
			[0, -0.5, -0.5*Math.sqrt(3)],
			[0, 0.5, -0.5*Math.sqrt(3)],
		],
			faces: [
			[3, 5, 0],
			[0, 5, 4, 1],
			[1, 4, 2],
			[2, 4, 5, 3],
			[3, 0, 7, 6],
			[0, 1, 7],
			[1, 2, 6, 7],
			[2, 3, 6],
		]
	}
}