import {WEBGL} from './webGL.js';

if (WEBGL.isWebGLAvailable()) {

    let threejs_first_exercise = function () {
        let geometry = new THREE.BoxGeometry(2, 4, 4);
        let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        let renderer = new THREE.WebGLRenderer();
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        let shape = new THREE.Mesh(geometry, material)
        let target = document.getElementById(1);

        scene.add(shape);
        camera.position.z = 10;
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
        target.appendChild(renderer.domElement);

        let animate = function () {
            requestAnimationFrame(animate);
            shape.rotation.x += 0.01;
            shape.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();
    };

    /*
        need to figure out how textures work and how to apply them to
        buffered geometries.
     */
    let threejs_second_exercise = function () {
        let target = document.getElementById(2);
        if (!WEBGL.isWebGL2Available()) {
            let warning = WEBGL.getWebGL2ErrorMessage();
            target.appendChild(warning);
            return;
        }
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('webgl2', {alpha: false});
        let material = new THREE.ShaderMaterial({
            vertexShader: document.getElementById('vs').textContent.trim(),
            fragmentShader: document.getElementById('fs').textContent.trim()
        });
        let geometry = new THREE.CircleBufferGeometry(5);
        let shape = new THREE.Mesh(geometry, material);
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        let renderer = new THREE.WebGLRenderer({canvas: canvas, context: context});

        scene.add(shape);
        camera.position.z = 20;
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
        target.appendChild(renderer.domElement);

        let animate = function () {
            requestAnimationFrame(animate);
            shape.rotation.x += .02;
            renderer.render(scene, camera);
        };
        animate();
    }

    threejs_first_exercise();
    threejs_second_exercise();

} else {
    var warning = WEBGL.getWebGLErrorMessage();
    var target = document.getElementById('site-content');
    target.innerHTML = '';
    target.appendChild(warning);
}

