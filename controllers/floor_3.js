import * as THREE from "three";
import {
    floor_2
} from "./floor_2";

// floor
const floor_3 = floor_2.clone();

floor_3.position.set(0, 20, 0);

// The House => floor 3

// down_wall_1
const down_wall1_geometry = new THREE.BoxGeometry(1, 8, 30, 10, 10, 10)
const down_wall1_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const down_wall_1 = new THREE.Mesh(down_wall1_geometry, down_wall1_material);
down_wall_1.position.set(20, 43, 0);


// down_wall_2
const down_wall2_geometry = new THREE.BoxGeometry(1, 8, 30, 10, 10, 10)
const down_wall2_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const down_wall_2 = new THREE.Mesh(down_wall2_geometry, down_wall2_material);
down_wall_2.position.set(-20, 43, 0);


// down_wall_3
const down_wall3_geometry = new THREE.BoxGeometry(40, 8, 1, 10, 10, 10)
const down_wall3_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const down_wall_3 = new THREE.Mesh(down_wall3_geometry, down_wall3_material);
down_wall_3.position.set(0, 43, -14.5);



// balcony_wall4
const balcony_wall4_geometry = new THREE.BoxGeometry(20, 8, 1, 10, 10, 10)
const balcony_wall4_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const balcony_wall4 = new THREE.Mesh(balcony_wall4_geometry, balcony_wall4_material);
balcony_wall4.position.set(-10, 43, 22);


// balcony2_wall4
const balcony2_wall4_geometry = new THREE.BoxGeometry(1, 8, 8, 10, 10, 10)
const balcony2_wall4_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const balcony2_wall4 = new THREE.Mesh(balcony2_wall4_geometry, balcony2_wall4_material);
balcony2_wall4.position.set(-20, 43, 18.5);


// balcony3_wall4
const balcony3_wall4_geometry = new THREE.BoxGeometry(1, 8, 8, 10, 10, 10)
const balcony3_wall4_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const balcony3_wall4 = new THREE.Mesh(balcony3_wall4_geometry, balcony3_wall4_material);
balcony3_wall4.position.set(-0.4, 43, 18.5);


// balcony4_wall4
const balcony4_wall4_geometry = new THREE.BoxGeometry(21, 8, 1, 10, 10, 10)
const balcony4_wall4_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const balcony4_wall4 = new THREE.Mesh(balcony4_wall4_geometry, balcony4_wall4_material);
balcony4_wall4.position.set(10, 43, 14.5);


const balcony_walls = new THREE.Group();
balcony_walls.add(balcony_wall4, balcony2_wall4, balcony3_wall4, balcony4_wall4);


const floor3_walls = new THREE.Group();
floor3_walls.add(down_wall_1, down_wall_2, down_wall_3, balcony_walls);

export {
    floor_3,
    floor3_walls
};