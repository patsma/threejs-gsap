import './style.scss'
import * as THREE from 'three';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
/*
console.log('works')

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
function animate() {
    requestAnimationFrame( animate );
    // gsap.timeline()
    //     .to(cube.rotation, {x: '-=0.1'})
    //     .to(cube.rotation, {y: '-=0.1'},0)
        // .to(cube.position, {z: '+=0.1'},0)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();
const tl = gsap.timeline()
tl
    .to(cube.rotation, {x: '-=0.4'})
    .to(cube.rotation, {y: '-=0.4'},0)
// .to(cube.position, {z: '+=0.1'},0)

ScrollTrigger.create({
    trigger:'body',
    markers:true,
    
    start:'100px top',
    end: "2000px 2000px",
    scrub:8,
    animation:tl
})*/
gsap.set('#Layer_1-2 > g > image', {x: '-=100', y: '+=550', transformOrigin: 'center center'})
gsap.set('.hero', {scale: '+=0.3', transformOrigin: 'center center'})
const tl = gsap.timeline({
    defaults: {
        ease: 'linear'
    },
    scrollTrigger: {
        trigger: 'body',
        pin: '.hero',
        // markers: true,
        scrub: true,
        duration: '200%'

    }
})
tl
    .to('#mask *', {scaleY: '+=8', scaleX: '+=10', transformOrigin: 'center center'})
    // .to('#mask > rect', {scaleY: '+=8', scaleX: '+=8', transformOrigin: 'center center'})
    // .to('#mask > rect', {scaleX: '+=14', transformOrigin: 'center center'},'-=0.4')
    .to('#Layer_1-2 > g > image', {
        scale: '+=1.5',
        x: '+=10',
        y: '+=10',
        transformOrigin: 'center center',
        ease: 'power1.out'
    }, 0.1)

