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
           
var boxGeometry = new THREE.BoxGeometry(1, 1, 1); // membuat geometry kubus dengan panjang sisi 1 box nya ini di import dari three.js
var boxMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff}); // membuat material dengan warna hijau warnanya dalam format hex (rgb) (ff0000 = merah, 00ff00 = hijau, 0000ff = biru)
var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial); // menggabungkan geometry dan material menjadi mesh

scene.add(boxMesh); // menambahkan mesh ke dalam scene
camera.position.z = 5; // mengatur posisi camera menjauh dari origin sejauh 5 satuan

renderer.setSize(window.innerWidth, window.innerHeight); // mengatur ukuran renderer sesuai ukuran layar
document.body.appendChild(renderer.domElement);

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
    boxMesh.rotation.x += 0.01; // memutar mesh pada sumbu x
    boxMesh.rotation.y += 0.01; // memutar mesh pada sumbu y
    renderer.render(scene, camera);  // merender scnene dari sudut pandang camera
}   
draw(); // memanggil fungsi draw untuk pertama kali
