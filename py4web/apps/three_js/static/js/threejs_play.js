
threejs_first_exercise = function () {
    var scene = new THREE.Scene();
    var target = document.getElementById('first_exercise');
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 10;
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    target.appendChild( renderer.domElement );
    function animate() {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    };
    animate();
};

threejs_first_exercise();