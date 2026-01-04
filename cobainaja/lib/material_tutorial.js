let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const geo_saya = new THREE.BoxGeometry(2, 2, 2);
const image_texture = new THREE.TextureLoader().load('./assets/images/image.png');

// membuat mesh pertama
const material_saya = new THREE.MeshBasicMaterial({map: image_texture});
let mesh_saya = new THREE.Mesh(geo_saya, material_saya);
scene.add(mesh_saya);

// membuat mesh kedua
let cahaya1 = new THREE.PointLight(0xffffff, 70);
cahaya1.position.set(0, 3, 2);
scene.add(cahaya1); 

const material_saya2 = new THREE.MeshLambertMaterial({map: image_texture});
let mesh_saya2 = new THREE.Mesh(geo_saya, material_saya2);
mesh_saya2.position.set(3.9, 0, 0);
scene.add(mesh_saya2);

//resize handler page
window.addEventListener('resize', () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

function update(){
    mesh_saya.rotation.x += 0.01;
    mesh_saya.rotation.y += 0.01;
    
    mesh_saya2.rotation.x += 0.01;
    mesh_saya2.rotation.y += 0.01;
    
    requestAnimationFrame(update);
    renderer.render(scene, camera);
}

update();   