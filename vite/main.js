import * as THREE from 'three';
import {OrbitControls} from 'three/addons';

const canvas = document.getElementById( elementId = 'canvas');

// 1. Scene 
const scene = new THREE.Scene();
scene.background = new THREE.Color(r = '#F0F0F0');

// 2. Camera
const camera = new THREE.PerspectiveCamera(fov , aspect , Near, far)
// const camera = new THREE.PerspectiveCamera(fov, window.innerHeight / window.innerWidth, 0.1, 1000);
// const camera = new THREE.PerspectiveCamera({ fov, aspect: window.innerHeight / window.innerWidth, near: 0.1, far: 1000 });

camera.position.z = 5;

// 3. Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial(paramenters = { color: '#468585'});
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry({ width: 2, height: 0.1, depth: 2 });
const boxMaterial = new THREE.MeshBasicMaterial(paramenters = { color: '#B4B4B3'});
const box = new THREE.Mesh(boxGeometry, material);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Light
const light = new THREE.SpotLight({color: 0x006769, intensity: 100});
light.position.set(1, 1, 1);
scene.add(light);

 // 5. Renderer
 const renderer = new THREE.WebGLRenderer( { canvas } );
 renderer.setSize(window.innerHeight, window.innerWidth);
 renderer.setPixelRatio(window.devicePixelRatio);
 renderer.render(scene, camera);

 // 6. Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
control.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;


