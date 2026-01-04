/* Tutorial 1: Basic Three.js Scene */
/* Scene
    - lingkuangan 3D tempat objek berada atau yang akan jadi aplikasi kita
    - dunia 3D
    Camera
    - camera sebagai sudut pandang kita untuk melihat scene
    Renderer
    - alat yang menampilkan hasil dari camera ke layar
*/
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
/*
1. POV
    - point of view
    - sudut pandang kita melihat scene semakin kecil pov semakin sempit sudut pandangnya, semakin besar pov semakin lebar sudut pandangnya

    2. Aspect Ratio
    - perbandingan lebar dan tinggi layar, sehingga kita biasanya menggunakan innerWidth dan innerHeight
    - biasanya disesuaikan dengan ukuran layar device
    3. Near Clipping Plane
    - jarak terdekat dari camera yang masih bisa terlihat
    4. Far Clipping Plane
    - jarak terjauh dari camera yang masih bisa terlihat
*/

// Renderer dimanakan untuk menampilkan hasil dari camera ke layar
var renderer = new THREE.WebGLRenderer();
           
// var boxGeometry = new THREE.BoxGeometry(1.5, 1, 2); // membuat geometry kubus dengan panjang sisi 1 box nya ini di import dari three.js
// var boxMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff}); // membuat material dengan warna hijau warnanya dalam format hex (rgb) (ff0000 = merah, 00ff00 = hijau, 0000ff = biru)
// var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial); // menggabungkan geometry dan material menjadi mesh

// scene.add(boxMesh); // menambahkan mesh ke dalam scene
camera.position.z = 5; // mengatur posisi camera menjauh dari origin sejauh 5 satuan

renderer.setSize(window.innerWidth, window.innerHeight); // mengatur ukuran renderer sesuai ukuran layar
document.body.appendChild(renderer.domElement);

const geo_saya = new THREE.BufferGeometry(); // membuat geometry kosong
let simpul = new Float32Array([ // membuat array untuk menyimpan posisi titik-titik vertex
    -1.0, -1.0, 1.0, // index 0 (x, y, z)
     1.0, 1.0, 1.0, // index 1 (x, y, z)
     -1.0,  1.0, 1.0,  // index 2 (x, y, z)
     1.0,  -1.0, 1.0, // index 3 (x, y, z)

     -1.0, -1.0, -1.0, // index 4 (x, y, z)
     1.0, 1.0, -1.0, // index 5 (x, y, z)
     -1.0,  1.0, -1.0,  // index 6 (x, y, z)
     1.0,  -1.0, -1.0, // index 7 (x, y, z)

    
]); 

let warna = new Float32Array([
    1.0, 0.0, 0.0, // warna merah untuk vertex 0
    0.0, 1.0, 0.0, // warna hijau untuk vertex 1
    0.0, 0.0, 1.0, // warna biru untuk vertex 2
    1.0, 1.0, 0.0, // warna kuning untuk vertex 3
    1.0, 0.0, 1.0, // warna magenta untuk vertex 4
    0.0, 1.0, 1.0, // warna cyan untuk vertex 5
    1.0, 1.0, 1.0, // warna putih untuk vertex 6
    0.0, 0.0, 0.0, // warna hitam untuk vertex 7
]);

geo_saya.setAttribute('position', new THREE.BufferAttribute(simpul, 3)); // menambahkan atribut posisi ke geometry dengan 3 komponen per vertex (x, y, z)
geo_saya.setAttribute('color', new THREE.BufferAttribute(warna, 3)); // menambahkan atribut warna ke geometry dengan 3 komponen per vertex (r, g, b)
geo_saya.setIndex([
    //sisi depan
   0,3,1,
   1,2,0,

   //sisi belakang
   4,6,5,
   5,7,4,

   //sisi kiri
   4,0,2,
    2,6,4,

   //sisi kanan
   7,5,1,
   1,3,7,

   //sisi atas
   6,2,1,
   1,5,6,

    //sisi bawah
    7,3,0,
    0,4,7,


]); // mengatur index untuk menggambar segitiga
// const material_saya = new THREE.MeshBasicMaterial({color: 0xff0000,}); //side: THREE.DoubleSide}); // membuat material
const material_saya = new THREE.MeshBasicMaterial({vertexColors: true}); //side: THREE.DoubleSide}); // membuat material
let mesh_saya = new THREE.Mesh(geo_saya, material_saya); // membuat mesh dari geometry dan material
scene.add(mesh_saya); // menambahkan mesh ke dalam scene

// menyesuaikan ukuran renderer dan aspect ratio camera saat jendela diubah ukurannya
window.addEventListener('resize', function(){
    var width = window.innerWidth; // mendapatkan lebar jendela
    var height = window.innerHeight; // mendapatkan tinggi jendela
    renderer.setSize(width, height); // mengatur ulang ukuran renderer
    camera.aspect = width / height; // mengatur ulang aspect ratio camera dengan hitungan lebar dibagi tinggi
    camera.updateProjectionMatrix(); // memperbarui matriks proyeksi camera setelah mengubah aspect ratio
});

// fungsi untuk merender scene
function draw(){
    requestAnimationFrame(draw); // memanggil fungsi draw secara berulang-ulang
    mesh_saya.rotation.x += 0.01; // memutar mesh pada sumbu x
    mesh_saya.rotation.y += 0.01; // memutar mesh pada sumbu x
//     boxMesh.rotation.x += 0.01; // memutar mesh pada sumbu x
//     boxMesh.rotation.y += 0.01; // memutar mesh pada sumbu y
    renderer.render(scene, camera);  // merender scnene dari sudut pandang camera
}   
draw(); // memanggil fungsi draw untuk pertama kali
