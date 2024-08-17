 // Canvas setup
 const canvas = document.getElementById('myCanvas');
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
 renderer.setSize(window.innerWidth, window.innerHeight);

 // Create a sphere and add it to the scene
 const geometry = new THREE.SphereGeometry(1, 32, 32);
 const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
 const sphere = new THREE.Mesh(geometry, material);
 scene.add(sphere);
 
 camera.position.z = 5;

 function animate() {
     requestAnimationFrame(animate);
     sphere.rotation.x += 0.01;
     sphere.rotation.y += 0.01;
     renderer.render(scene, camera);
 }
 animate();

 // GSAP animations for the hero section
 const fadeInElements = document.querySelectorAll('.fade-in');
 window.onload = () => {
     fadeInElements.forEach((element) => {
         element.classList.add('show');
     });
 };

 // Smooth scroll for navigation
 const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
 smoothScrollLinks.forEach(link => {
     link.addEventListener('click', function(e) {
         e.preventDefault();
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
     });
 });
