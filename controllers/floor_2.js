import * as THREE from "three";


const color = document.getElementById("favcolor");
const submitColor = document.getElementById("btn-color");

// floor
const floor_2 = new THREE.Group();

// right_floor_2
const right_floor2_geometry = new THREE.BoxGeometry(21, 1, 17.5, 10, 10, 10)
const right_floor2_material = new THREE.MeshStandardMaterial({ color: "#b8b8b8" });
const right_floor_2 = new THREE.Mesh(right_floor2_geometry, right_floor2_material);
right_floor_2.position.set(10, 20, 6.25);


// left_floor_2
const left_floor2_geometry = new THREE.BoxGeometry(20.6, 1, 37.5, 10, 10, 10)
const left_floor2_material = new THREE.MeshStandardMaterial({ color: "#b8b8b8" });
const left_floor_2 = new THREE.Mesh(left_floor2_geometry, left_floor2_material);
left_floor_2.position.set(-10.2, 20, 3.75);

floor_2.add(right_floor_2, left_floor_2);


// The House => floor 2 
const walls = new THREE.Group();


const floor2_wall1 = new THREE.Group();

// down_wall_1
const down_wall1_geometry = new THREE.BoxGeometry(1, 8, 30, 10, 10, 10)
const down_wall1_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const down_wall_1 = new THREE.Mesh(down_wall1_geometry, down_wall1_material);
down_wall_1.position.set(20, 24, 0);


// right_wall_1
const right_wall1_geometry = new THREE.BoxGeometry(1, 10, 10, 10, 10, 10)
const right_wall1_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const right_wall_1 = new THREE.Mesh(right_wall1_geometry, right_wall1_material);
right_wall_1.position.set(20, 32, 10);


// left_wall_1
const left_wall1_geometry = new THREE.BoxGeometry(1, 10, 10, 10, 10, 10)
const left_wall1_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const left_wall_1 = new THREE.Mesh(left_wall1_geometry, left_wall1_material);
left_wall_1.position.set(20, 32, -10);


// up_wall_1
const up_wall1_geometry = new THREE.BoxGeometry(1, 5, 30, 10, 10, 10)
const up_wall1_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const up_wall_1 = new THREE.Mesh(up_wall1_geometry, up_wall1_material);
up_wall_1.position.set(20, 37.5, 0);


floor2_wall1.add(down_wall_1, up_wall_1, right_wall_1, left_wall_1);



// The House => wall 2 
const floor2_wall2 = new THREE.Group();


// down_wall_2
const down_wall2_geometry = new THREE.BoxGeometry(1, 8, 30, 10, 10, 10)
const down_wall2_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const down_wall_2 = new THREE.Mesh(down_wall2_geometry, down_wall2_material);
down_wall_2.position.set(-20, 24, 0);


// right_wall_2
const right_wall2_geometry = new THREE.BoxGeometry(1, 10, 10, 10, 10, 10)
const right_wall2_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const right_wall_2 = new THREE.Mesh(right_wall2_geometry, right_wall2_material);
right_wall_2.position.set(-20, 32, 10);


// left_wall_2
const left_wall2_geometry = new THREE.BoxGeometry(1, 10, 10, 10, 10, 10)
const left_wall2_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const left_wall_2 = new THREE.Mesh(left_wall2_geometry, left_wall2_material);
left_wall_2.position.set(-20, 32, -10);


// up_wall_2
const up_wall2_geometry = new THREE.BoxGeometry(1, 5, 30, 10, 10, 10)
const up_wall2_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const up_wall_2 = new THREE.Mesh(up_wall2_geometry, up_wall2_material);
up_wall_2.position.set(-20, 37.5, 0);


floor2_wall2.add(down_wall_2, up_wall_2, right_wall_2, left_wall_2);


// The House => wall 3 

// wall_3
const wall3_geometry = new THREE.BoxGeometry(40, 20, 1, 10, 10, 10)
const wall3_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const floor2_wall3 = new THREE.Mesh(wall3_geometry, wall3_material);
floor2_wall3.position.set(0, 30, -14.5);


// floor2_wall4
const floor2_wall4 = new THREE.Group();
// right_wall4
const right_wall4_geometry = new THREE.BoxGeometry(21, 20, 1, 10, 10, 10)
const right_wall4_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const right_wall4 = new THREE.Mesh(right_wall4_geometry, right_wall4_material);
right_wall4.position.set(9.6, 30, 14.5);


// balcony_wall4
const balcony_wall4_geometry = new THREE.BoxGeometry(20, 6, 1, 10, 10, 10)
const balcony_wall4_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const balcony_wall4 = new THREE.Mesh(balcony_wall4_geometry, balcony_wall4_material);
balcony_wall4.position.set(-10, 23, 22);


// balcony2_wall4
const balcony2_wall4_geometry = new THREE.BoxGeometry(1, 6, 8, 10, 10, 10)
const balcony2_wall4_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const balcony2_wall4 = new THREE.Mesh(balcony2_wall4_geometry, balcony2_wall4_material);
balcony2_wall4.position.set(-20, 23, 18.5);


// balcony3_wall4
const balcony3_wall4_geometry = new THREE.BoxGeometry(1, 6, 8, 10, 10, 10)
const balcony3_wall4_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const balcony3_wall4 = new THREE.Mesh(balcony3_wall4_geometry, balcony3_wall4_material);
balcony3_wall4.position.set(-0.4, 23, 18.5);


// balcony4_wall4
const balcony4_wall4_geometry = new THREE.BoxGeometry(10, 20, 1, 10, 10, 10)
const balcony4_wall4_material = new THREE.MeshStandardMaterial({ color: "#f8a8a4" });
const balcony4_wall4 = new THREE.Mesh(balcony4_wall4_geometry, balcony4_wall4_material);
balcony4_wall4.position.set(-15, 30, 14.5);


floor2_wall4.add(right_wall4, balcony_wall4, balcony2_wall4, balcony3_wall4, balcony4_wall4);


walls.add(floor2_wall1, floor2_wall2, floor2_wall3, floor2_wall4);


// Change Color
submitColor.addEventListener('click', () => {
    console.log(color.value);

    down_wall1_material.setValues({ color: color.value });
    right_wall1_material.setValues({ color: color.value });
    left_wall1_material.setValues({ color: color.value });
    up_wall1_material.setValues({ color: color.value });

    down_wall2_material.setValues({ color: color.value });
    right_wall2_material.setValues({ color: color.value });
    left_wall2_material.setValues({ color: color.value });
    up_wall2_material.setValues({ color: color.value });

    wall3_material.setValues({ color: color.value });

    right_wall4_material.setValues({ color: color.value });
    balcony_wall4_material.setValues({ color: color.value });
    balcony2_wall4_material.setValues({ color: color.value });
    balcony3_wall4_material.setValues({ color: color.value });
    balcony4_wall4_material.setValues({ color: color.value });
});


export {
    floor_2,
    walls
};