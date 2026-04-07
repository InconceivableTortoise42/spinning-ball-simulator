import * as THREE from 'three';

const scene = new THREE.Scene()

const sphereGeometry = new THREE.SphereGeometry(3);
const sphereMatrial = new THREE.MeshBasicMaterial({color: "white"})

const loader = new THREE.TextureLoader();
const texture = loader.load("earthmap1k.jpg");

const material = new THREE.MeshStandardMaterial({
  map: texture
});

const texture2 = loader.load("ball.jpg");

const material2 = new THREE.MeshStandardMaterial({
  map: texture2
});

const sphereMesh = new THREE.Mesh(
    sphereGeometry,
    material 
)
const sphereMesh2 = new THREE.Mesh(
    sphereGeometry,
    material2 
)

const canvas = document.getElementById("canvas");
canvas.width = 200;
canvas.height = 200;

// const camera = new THREE.PerspectiveCamera(
//     75,
//     canvas.width / canvas.height,
//     0.1,
//     30
// )
// camera.position.z = 5;
// camera.position.y = 4;
// camera.lookAt(0, -1, 0)

const camera = new THREE.OrthographicCamera(-4, 4, 4, -4)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});

const ambient = new THREE.AmbientLight(0xffffff, 1.2);
scene.add(ambient);

scene.add(sphereMesh);
scene.add(sphereMesh2);
sphereMesh2.position.x = 2;

function animate() {
    renderer.render(scene, camera);
    sphereMesh.rotation.y += 0.03;
    sphereMesh2.rotation.y += 0.03;
    requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
