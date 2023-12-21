import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import './style.css';
import { directionalLight, directionalLight_2 } from "./controllers/light";
import {
    floor,
    wall_1,
    wall_2,
    wall_3,
    entrance
} from "./controllers/floor_1";
import {
    floor_2,
    walls
} from "./controllers/floor_2";
import {
    floor_3,
    floor3_walls
} from "./controllers/floor_3";


// Scene 
const scene = new THREE.Scene();

// Add floor 1 of the house to the Scene  
scene.add(
    floor,
    wall_1,
    wall_2,
    wall_3,
    entrance
);

// Add floor 2 of the house to the Scene  
scene.add(
    floor_2,
    walls
);

// Add floor 3 of the house to the Scene  
scene.add(
    floor_3,
    floor3_walls
);


// Light
scene.add(directionalLight, directionalLight_2);

// Sizes
const sizes = {
    width: window.innerWidth,
    hight: window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.hight);
camera.position.set(0, 60, 80);
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.hight);
renderer.setPixelRatio(2);
renderer.render(scene, camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.enablePan = false;
// controls.enableZoom = false;
// controls.autoRotate = true;
// controls.autoRotateSpeed = 5;

// Resize 
window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.hight = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.hight;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.hight);

});

const loop = () => {
    // rotation
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    // mesh.rotation.z += 0.01;

    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);

}
loop();