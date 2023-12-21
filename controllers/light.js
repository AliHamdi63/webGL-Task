import * as THREE from "three";


// Light
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
const ambientLight = new THREE.AmbientLight(0xffffff, 1, 100);
// light.position.set(0, 2, 4);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
const directionalLight_2 = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(6, 10, 10);
directionalLight_2.position.set(-6, -10, -10);

export {
    pointLight,
    ambientLight,
    directionalLight,
    directionalLight_2
};