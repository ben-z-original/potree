
import * as THREE from "../../libs/three.js/build/three.module.js";

export const ClassificationScheme = {

	DEFAULT: {
		0:       { visible: true, name: 'background', color: [0.7, 0.7, 0.7,  1.0] },
		1:       { visible: true, name: 'control point', color: [152 / 255, 78 / 255, 163 / 255,  1.0] },
		2:       { visible: true, name: 'vegetation', color: [77 / 255, 175 / 255, 74 / 255, 1.0] },
		3:       { visible: true, name: 'efflorescence', color: [55 / 255, 126 / 255, 184 / 255,  1.0] },
		4:       { visible: true, name: 'corrosion', color: [255 / 255, 255 / 255, 51 / 255,  1.0] },
		5:       { visible: true, name: 'spalling', color: [255 / 255, 127 / 255, 0 / 255,  1.0] },
		6:       { visible: true, name: 'crack', color: [228 / 255, 26 / 255, 28 / 255,  1.0] }
	}
};

Object.defineProperty(ClassificationScheme, 'RANDOM', {
	get: function() { 

		let scheme = {};

		for(let i = 0; i <= 255; i++){
			scheme[i] = new THREE.Vector4(Math.random(), Math.random(), Math.random());
		}

		scheme["DEFAULT"] = new THREE.Vector4(Math.random(), Math.random(), Math.random());

		return scheme;
	}
});
