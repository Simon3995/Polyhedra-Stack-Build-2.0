// shape definition
// archimedean - cuboctahedron

Shapes["Cuboctahedron"] = {
	verts: [
		[1/SQRT2, 1/SQRT2, 0/SQRT2],
		[-1/SQRT2, 1/SQRT2, 0/SQRT2],
		[-1/SQRT2, -1/SQRT2, 0/SQRT2],
		[1/SQRT2, -1/SQRT2, 0/SQRT2],
		[1/SQRT2, 0/SQRT2, 1/SQRT2],
		[0/SQRT2, 1/SQRT2, 1/SQRT2],
		[-1/SQRT2, 0/SQRT2, 1/SQRT2],
		[0/SQRT2, -1/SQRT2, 1/SQRT2],
		[1/SQRT2, 0/SQRT2, -1/SQRT2],
		[0/SQRT2, 1/SQRT2, -1/SQRT2],
		[-1/SQRT2, 0/SQRT2, -1/SQRT2],
		[0/SQRT2, -1/SQRT2, -1/SQRT2],
	],
	faces: [
		[4, 7, 6, 5],
		[4, 5, 0],
		[5, 6, 1],
		[6, 7, 2],
		[7, 4, 3],
		[5, 1, 9, 0],
		[6, 2, 10, 1],
		[7, 3, 11, 2],
		[4, 0, 8, 3],
		[8, 0, 9],
		[9, 1, 10],
		[10, 2, 11],
		[11, 3, 8],
		[8, 9, 10, 11],
	]
}