// shape definition
// archimedean - snub cube left

import { TRIB, SNUB } from '../../math.js';

export default {
	"Snub Cube (L)": {
		verts: [
			[-1/SNUB, -1/(TRIB*SNUB), TRIB/SNUB],
			[TRIB/SNUB, -1/SNUB, -1/(TRIB*SNUB)],
			[-1/(TRIB*SNUB), TRIB/SNUB, -1/SNUB],
			[-1/SNUB, 1/(TRIB*SNUB), -TRIB/SNUB],
			[-TRIB/SNUB, -1/SNUB, 1/(TRIB*SNUB)],
			[1/(TRIB*SNUB), -TRIB/SNUB, -1/SNUB],
			[1/SNUB, -1/(TRIB*SNUB), -TRIB/SNUB],
			[-TRIB/SNUB, 1/SNUB, -1/(TRIB*SNUB)],
			[-1/(TRIB*SNUB), -TRIB/SNUB, 1/SNUB],
			[1/SNUB, 1/(TRIB*SNUB), TRIB/SNUB],
			[TRIB/SNUB, 1/SNUB, 1/(TRIB*SNUB)],
			[1/(TRIB*SNUB), TRIB/SNUB, 1/SNUB],
			[-1/SNUB, TRIB/SNUB, 1/(TRIB*SNUB)],
			[TRIB/SNUB, 1/(TRIB*SNUB), -1/SNUB],
			[1/(TRIB*SNUB), -1/SNUB, TRIB/SNUB],
			[1/SNUB, -TRIB/SNUB, 1/(TRIB*SNUB)],
			[-TRIB/SNUB, 1/(TRIB*SNUB), 1/SNUB],
			[1/(TRIB*SNUB), 1/SNUB, -TRIB/SNUB],
			[1/SNUB, TRIB/SNUB, -1/(TRIB*SNUB)],
			[TRIB/SNUB, -1/(TRIB*SNUB), 1/SNUB],
			[-1/(TRIB*SNUB), 1/SNUB, TRIB/SNUB],
			[-1/SNUB, -TRIB/SNUB, -1/(TRIB*SNUB)],
			[-TRIB/SNUB, -1/(TRIB*SNUB), -1/SNUB],
			[-1/(TRIB*SNUB), -1/SNUB, -TRIB/SNUB],
		],
		faces: [
			/* clockwise
			[17, 3, 23, 6],
			[11, 12, 2, 18],
			[16, 4, 22, 7],
			[8, 15, 5, 21],
			[19, 10, 13, 1],
			[14, 0, 20, 9],
			[2, 7, 3],
			[7, 22, 3],
			[22, 23, 3],
			[22, 21, 23],
			[21, 5, 23],
			[5, 6, 23],
			[5, 1, 6],
			[1, 13, 6],
			[13, 17, 6],
			[13, 18, 17],
			[18, 2, 17],
			[2, 3, 17],
			[10, 18, 13],
			[10, 11, 18],
			[12, 7, 2],
			[12, 16, 7],
			[4, 21, 22],
			[4, 8, 21],
			[15, 1, 5],
			[15, 19, 1],
			[15, 8, 14],
			[19, 15, 14],
			[9, 19, 14],
			[10, 19, 9],
			[11, 10, 9],
			[20, 11, 9],
			[12, 11, 20],
			[16, 12, 20],
			[0, 16, 20],
			[4, 16, 0],
			[8, 4, 0],
			[14, 8, 0]
			*/
			// counterclockwise
			[17, 6, 23, 3],
			[11, 18, 2, 12],
			[16, 7, 22, 4],
			[8, 21, 5, 15],
			[19, 1, 13, 10],
			[14, 9, 20, 0],
			[3, 7, 2],
			[3, 22, 7],
			[3, 23, 22],
			[23, 21, 22],
			[23, 5, 21],
			[23, 6, 5],
			[6, 1, 5],
			[6, 13, 1],
			[6, 17, 13],
			[17, 18, 13],
			[17, 2, 18],
			[17, 3, 2],
			[13, 18, 10],
			[18, 11, 10],
			[2, 7, 12],
			[7, 16, 12],
			[22, 21, 4],
			[21, 8, 4],
			[5, 1, 15],
			[1, 19, 15],
			[14, 8, 15],
			[14, 15, 19],
			[14, 19, 9],
			[9, 19, 10],
			[9, 10, 11],
			[9, 11, 20],
			[20, 11, 12],
			[20, 12, 16],
			[20, 16, 0],
			[0, 16, 4],
			[0, 4, 8],
			[0, 8, 14]
		]
	}
}