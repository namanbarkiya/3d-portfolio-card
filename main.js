import "./card-style.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const lightFront = new THREE.DirectionalLight(0xffffff, 0.7);
lightFront.position.set(0, 10, 30);
scene.add(lightFront);

const lightBack = new THREE.DirectionalLight(0xffffff, 0.7);
lightBack.position.set(-30, 10, -30); // Negative Z direction for the back light
scene.add(lightBack);

const lightMid = new THREE.DirectionalLight(0xffffff, 0.7);
lightMid.position.set(30, 10, -30); // Negative Z direction for the back light
scene.add(lightMid);

const pointLight = new THREE.PointLight(0xffffff, 1, 60);
pointLight.position.set(10, 10, 30); // Negative Z direction for the back light
scene.add(pointLight);

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 30;
scene.add(camera);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor(0x030712, 1);
renderer.setPixelRatio(2);

const linkPos = {
    box1: {
        x: 0.7,
        y: 1.21,
        z: 0.03,
        name: "ClickableBox1",
        link: "/naman_barkiya_resume.pdf",
    },
    box2: {
        x: 0.06,
        y: -0.4,
        z: 0.03,
        name: "ClickableBox2",
        link: "https://namanbarkiya.netlify.app/",
    },
    circle1: {
        x: -0.46,
        y: -1.06,
        z: 0.03,
        name: "ClickableCircle1",
        link: "https://github.com/namanbarkiya",
    },
    circle2: {
        x: 0.05,
        y: -1.06,
        z: 0.03,
        name: "ClickableCircle2",
        link: "https://www.linkedin.com/in/naman-barkiya-015323200/",
    },
    circle3: {
        x: 0.55,
        y: -1.06,
        z: 0.03,
        name: "ClickableCircle3",
        link: "mailto:naman.barkiya02@gmail.com",
    },
};

// Load the 3D model
const loader = new GLTFLoader();
let mesh;

loader.load(
    "/naman_card.glb",
    (gltf) => {
        mesh = gltf.scene;

        mesh.traverse((child) => {
            if (child.isMesh) {
                child.name = "ClickablePart1"; // Replace with a meaningful name
            }
        });

        // Optionally, you can set the position, rotation, or scale of the mesh here
        // For example:
        // mesh.position.set(x, y, z);
        // mesh.rotation.set(rx, ry, rz);

        // Increase the size of the mesh
        const scaleFactor = 5;
        mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);

        scene.add(mesh);

        // BOX 1
        const box1Geometry = new THREE.PlaneGeometry(0.5, 0.08);
        const box1Material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 0,
        });
        const box1 = new THREE.Mesh(box1Geometry, box1Material);
        box1.position.x = linkPos.box1.x;
        box1.position.y = linkPos.box1.y;
        box1.position.z = linkPos.box1.z;

        box1.name = linkPos.box1.name;
        mesh.add(box1); // Add the circle as a child of the loaded model

        // BOX 1
        const box2Geometry = new THREE.PlaneGeometry(1.2, 0.2);
        const box2Material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 0,
        });
        const box2 = new THREE.Mesh(box2Geometry, box2Material);
        box2.position.x = linkPos.box2.x;
        box2.position.y = linkPos.box2.y;
        box2.position.z = linkPos.box2.z;

        box2.name = linkPos.box2.name;
        mesh.add(box2); // Add the circle as a child of the loaded model

        // CIRCLE 1
        const circle1Geometry = new THREE.CircleGeometry(0.16, 32);
        const circle1Material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 0,
        });
        const circle1 = new THREE.Mesh(circle1Geometry, circle1Material);
        circle1.position.x = linkPos.circle1.x;
        circle1.position.y = linkPos.circle1.y;
        circle1.position.z = linkPos.circle1.z;

        circle1.name = linkPos.circle1.name;
        mesh.add(circle1); // Add the circle as a child of the loaded model

        // CIRCLE 2
        const circle2Geometry = new THREE.CircleGeometry(0.16, 32);
        const circle2Material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 0,
        });
        const circle2 = new THREE.Mesh(circle2Geometry, circle2Material);
        circle2.position.x = linkPos.circle2.x;
        circle2.position.y = linkPos.circle2.y;
        circle2.position.z = linkPos.circle2.z;

        circle2.name = linkPos.circle2.name;
        mesh.add(circle2); // Add the circle as a child of the loaded model

        // CIRCLE 3
        const circle3Geometry = new THREE.CircleGeometry(0.16, 32);
        const circle3Material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 0,
        });
        const circle3 = new THREE.Mesh(circle3Geometry, circle3Material);
        circle3.position.x = linkPos.circle3.x;
        circle3.position.y = linkPos.circle3.y;
        circle3.position.z = linkPos.circle3.z;

        circle3.name = linkPos.circle3.name;
        mesh.add(circle3); // Add the circle as a child of the loaded model
        mesh.rotation.y = 0;
        mesh.rotation.z = 0;
        loop();
    },
    undefined,
    (error) => {
        console.error("Error loading 3D model:", error);
    }
);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = false;
controls.minPolarAngle = 1.5;
controls.maxPolarAngle = 1.5;
controls.autoRotateSpeed = 3;

window.addEventListener("resize", () => {
    sizes.height = window.innerHeight;
    sizes.width = window.innerWidth;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
};

let autoRotate = false;

canvas.addEventListener("click", (event) => {
    controls.autoRotate = !autoRotate;
    autoRotate = !autoRotate;

    const mouse = {
        x: (event.clientX / sizes.width) * 2 - 1,
        y: -(event.clientY / sizes.height) * 2 + 1,
    };

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with the clickable circle
    const clickableBox1 = scene.getObjectByName(linkPos.box1.name);
    const clickableBox2 = scene.getObjectByName(linkPos.box2.name);
    const clickableCircle1 = scene.getObjectByName(linkPos.circle1.name);
    const clickableCircle2 = scene.getObjectByName(linkPos.circle2.name);
    const clickableCircle3 = scene.getObjectByName(linkPos.circle3.name);

    if (clickableCircle1) {
        const intersects = raycaster.intersectObject(clickableCircle1);

        if (intersects.length > 0) {
            // Replace 'YOUR_HYPERLINK_URL' with the desired URL
            window.open(linkPos.circle1.link, "_blank"); // Opens the link in a new tab
        }
    }

    if (clickableCircle2) {
        const intersects = raycaster.intersectObject(clickableCircle2);

        if (intersects.length > 0) {
            // Replace 'YOUR_HYPERLINK_URL' with the desired URL
            window.open(linkPos.circle2.link, "_blank"); // Opens the link in a new tab
        }
    }

    if (clickableCircle3) {
        const intersects = raycaster.intersectObject(clickableCircle3);

        if (intersects.length > 0) {
            // Replace 'YOUR_HYPERLINK_URL' with the desired URL
            window.open(linkPos.circle3.link, "_blank"); // Opens the link in a new tab
        }
    }

    if (clickableBox1) {
        const intersects = raycaster.intersectObject(clickableBox1);

        if (intersects.length > 0) {
            window.open(linkPos.box1.link, "_blank");
        }
    }

    if (clickableBox2) {
        const intersects = raycaster.intersectObject(clickableBox2);

        if (intersects.length > 0) {
            // Replace 'YOUR_HYPERLINK_URL' with the desired URL
            window.open(linkPos.box2.link, "_blank"); // Opens the link in a new tab
        }
    }
});
