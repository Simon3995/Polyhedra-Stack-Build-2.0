// update materials of all objects to flat or phong shaded
const update_materials = function() {
	if (Settings.shading) {
		for (let obj of scene.children) {
			if (obj.type == "Mesh") {
				obj.material = new THREE.MeshPhongMaterial({
					color: 0xffffff,
					side: THREE.BackSide,
					flatShading: true,
					polygonOffset: true,
					polygonOffsetFactor: 1,
					polygonOffsetUnits: 1,
				});
			}
		}
	} else {
		for (let obj of scene.children) {
			if (obj.type == "Mesh") {
				obj.material = new THREE.MeshBasicMaterial({
					color: 0xffffff,
					side: THREE.BackSide,
					flatShading: true,
					polygonOffset: true,
					polygonOffsetFactor: 1,
					polygonOffsetUnits: 1,
				});
			}
		}
	}
	
	if (Settings.tree_view) {
		for (let obj of scene.children) {
			if (obj.type == "Mesh") {
				obj.material.visible = false;
			}
			if (obj.type == "LineSegments" && obj.name != "treeStructure") {
				obj.material.color = new THREE.Color(0x444444);
			}
		}
	} else {
		for (let obj of scene.children) {
			if (obj.type == "Mesh") {
				obj.material.visible = true;
			}
			if (obj.type == "LineSegments" && obj.name != "treeStructure") {
				obj.material.color = new THREE.Color(0x222222);
			}
		}
	}
}

const add_shape = function(shape, name, loc) {
	// define wireframe geometry
	let wireframe = new THREE.Geometry();
	
	// define & push vertices to wireframe
	for (let vert of shape.verts) {
		let vertex = new THREE.Vector3(...vert);
		wireframe.vertices.push(vertex);
	}
	
	// define faces
	for (let face of shape.faces) {
		// define face geometry
		let facegeom = new THREE.Geometry();
		
		// define & push vertices to face geometry
		for (let vert of face) {
			let vertex = new THREE.Vector3(...shape.verts[vert]);
			facegeom.vertices.push(vertex);
		}
		
		// fill face geometry
		for (let i=1; i+1 < facegeom.vertices.length; i++) {
			facegeom.faces.push(new THREE.Face3(0, i, i+1));
		}
		
		// compute normals
		facegeom.computeVertexNormals();
		facegeom.computeFaceNormals();
		
		// translate
		facegeom.translate(loc.x, loc.y, loc.z);
		
		// define object
		let object = new THREE.Mesh(facegeom, new THREE.MeshBasicMaterial({
			color: 0xffffff,
			side: THREE.BackSide,
			flatShading: true,
			polygonOffset: true,
			polygonOffsetFactor: 1,
			polygonOffsetUnits: 1,
		}));
		
		// add object to scene
		object.name = name;
		scene.add(object);
		
		// *******************************
		
		// push face to wireframe geometry
		for (let i=1; i+1 < face.length; i++) {
			wireframe.faces.push(new THREE.Face3(face[0],face[i],face[i+1]));
		}
	}
	
	// compute normals
	wireframe.computeVertexNormals();
	wireframe.computeFaceNormals();
	
	// translate
	wireframe.translate(loc.x, loc.y, loc.z);
	
	// define object
	let object = new THREE.LineSegments(new THREE.EdgesGeometry(wireframe, 0.5), new THREE.LineBasicMaterial({
		color: 0x303030,
		linewidth: 1,
	}));
	
	// add object to scene
	object.name = name;
	scene.add(object);

    updateMaterials();
}

// main animation loop
const animate = function() {
	// empty debug text
	document.getElementById("main").innerHTML = "";
	// update matrix world
	camera.updateMatrixWorld();
	// move pointlight to camera position
	pointLight.position.set(camera.position.x, camera.position.y, camera.position.z);
	// render scene
	renderer.render(scene, camera);
	// update orbit controls
	controls.update();
	
	// reset all object materials
	for (obj of scene.children) {
		if (obj.type == "Mesh") {
			obj.material.color = new THREE.Color(0xffffff);
		}
	}
	
	// get objects hovered over
	raycaster.setFromCamera(mouse, camera);
	let hit = raycaster.intersectObjects(scene.children);
	for (let obj of hit) {
		if (obj.object.type == "Mesh") {
			// lighter material on hover
			obj.object.material.color = new THREE.Color(0xc4e3ff);
			
			// draw vertex coordinates for debugging
			if (debug) drawDebugText(obj);
			
			// don't repeat if succesful
			break;
		}
	}
	
	window.requestAnimationFrame(animate);
}