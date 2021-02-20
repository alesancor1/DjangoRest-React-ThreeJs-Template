import React, { Component } from 'react';
import * as THREE from 'three';

export default class prueba extends Component {
    componentDidMount(){
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        this.cube.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry( 1, 2, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
        };
        animate();
    }
    render() {
        return (
            <div ref = {ref => (this.cube = ref)}/>     
        )
    }
}
