import * as THREE from "three";


// floor
const floor_geometry = new THREE.BoxGeometry(60, 1, 50, 10, 10, 10)
const floor_material = new THREE.MeshStandardMaterial({ color: "#f0f0f0" });
const floor = new THREE.Mesh(floor_geometry, floor_material);


// The House => floor 1 
const wall_1 = new THREE.Group();

// down_wall_1
const down_wall1_geometry = new THREE.BoxGeometry(1, 8, 30, 10, 10, 10)
const down_wall1_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const down_wall_1 = new THREE.Mesh(down_wall1_geometry, down_wall1_material);
down_wall_1.position.set(20, 4, 0);


// right_wall_1
const right_wall1_geometry = new THREE.BoxGeometry(1, 10, 10, 10, 10, 10)
const right_wall1_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const right_wall_1 = new THREE.Mesh(right_wall1_geometry, right_wall1_material);
right_wall_1.position.set(20, 10, 10);


// left_wall_1
const left_wall1_geometry = new THREE.BoxGeometry(1, 10, 10, 10, 10, 10)
const left_wall1_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const left_wall_1 = new THREE.Mesh(left_wall1_geometry, left_wall1_material);
left_wall_1.position.set(20, 10, -10);


// up_wall_1
const up_wall1_geometry = new THREE.BoxGeometry(1, 5, 30, 10, 10, 10)
const up_wall1_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const up_wall_1 = new THREE.Mesh(up_wall1_geometry, up_wall1_material);
up_wall_1.position.set(20, 17.5, 0);


wall_1.add(down_wall_1, up_wall_1, right_wall_1, left_wall_1);



// The House => wall 2 
const wall_2 = new THREE.Group();


// down_wall_2
const down_wall2_geometry = new THREE.BoxGeometry(1, 8, 30, 10, 10, 10)
const down_wall2_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const down_wall_2 = new THREE.Mesh(down_wall2_geometry, down_wall2_material);
down_wall_2.position.set(-20, 4, 0);


// right_wall_2
const right_wall2_geometry = new THREE.BoxGeometry(1, 10, 10, 10, 10, 10)
const right_wall2_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const right_wall_2 = new THREE.Mesh(right_wall2_geometry, right_wall2_material);
right_wall_2.position.set(-20, 10, 10);


// left_wall_2
const left_wall2_geometry = new THREE.BoxGeometry(1, 10, 10, 10, 10, 10)
const left_wall2_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const left_wall_2 = new THREE.Mesh(left_wall2_geometry, left_wall2_material);
left_wall_2.position.set(-20, 10, -10);


// up_wall_2
const up_wall2_geometry = new THREE.BoxGeometry(1, 5, 30, 10, 10, 10)
const up_wall2_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const up_wall_2 = new THREE.Mesh(up_wall2_geometry, up_wall2_material);
up_wall_2.position.set(-20, 17.5, 0);


wall_2.add(down_wall_2, up_wall_2, right_wall_2, left_wall_2);


// The House => wall 3 

// wall_3
const wall3_geometry = new THREE.BoxGeometry(40, 20, 1, 10, 10, 10)
const wall3_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const wall_3 = new THREE.Mesh(wall3_geometry, wall3_material);
wall_3.position.set(0, 10, -14.5);



// The House => entrance
const entrance = new THREE.Group();

// left_entrance
const left_entrance_geometry = new THREE.BoxGeometry(15, 20, 1, 10, 10, 10)
const left_entrance_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const left_entrance = new THREE.Mesh(left_entrance_geometry, left_entrance_material);
left_entrance.position.set(-12.5, 10, 14.5);


// up_entrance
const up_entrance_geometry = new THREE.BoxGeometry(40, 5, 1, 10, 10, 10)
const up_entrance_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const up_entrance = new THREE.Mesh(up_entrance_geometry, up_entrance_material);
up_entrance.position.set(0, 17.5, 14.5);


// right_up_entrance
const right_up_entrance_geometry = new THREE.BoxGeometry(2, 8, 1, 10, 10, 10)
const right_up_entrance_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const right_up_entrance = new THREE.Mesh(right_up_entrance_geometry, right_up_entrance_material);
right_up_entrance.position.set(19, 11, 14.5);


// left_up_entrance
const left_up_entrance_geometry = new THREE.BoxGeometry(5, 8, 1, 10, 10, 10)
const left_up_entrance_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const left_up_entrance = new THREE.Mesh(left_up_entrance_geometry, left_up_entrance_material);
left_up_entrance.position.set(7.5, 11, 14.5);


// right_down_entrance
const right_down_entrance_geometry = new THREE.BoxGeometry(15, 8, 1, 10, 10, 10)
const right_down_entrance_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const right_down_entrance = new THREE.Mesh(right_down_entrance_geometry, right_down_entrance_material);
right_down_entrance.position.set(12.5, 4, 14.5);


entrance.add(right_down_entrance, right_up_entrance, left_up_entrance, left_entrance, up_entrance);


export {
    floor,
    wall_1,
    wall_2,
    wall_3,
    entrance
};



// const color = document.getElementById("favcolor");
// const submitColor = document.getElementById("btn-color");
// // change color
// submitColor.addEventListener('click', () => {
//     // console.log(color.value);
//     wall2_material.setValues({ color: color.value })
// });
