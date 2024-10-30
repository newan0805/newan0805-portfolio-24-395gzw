// src/components/CanvasBackground.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CanvasBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Pitch black background

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // 1. Circular Stars Setup using SphereGeometry
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (let i = 0; i < 2200; i++) {
      const starGeometry = new THREE.SphereGeometry(0.5, 8, 8);
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
      scene.add(star);
    }

    // 2. Shooting Stars as Moving Spheres
    const shootingStars = [];
    for (let i = 0; i < 200; i++) {
      const shootingStarGeometry = new THREE.SphereGeometry(0.5, 8, 8);
      const shootingStarMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
      });
      const shootingStar = new THREE.Mesh(
        shootingStarGeometry,
        shootingStarMaterial
      );
      shootingStar.position.set(
        Math.random() * 400 - 200,
        Math.random() * 400 - 200,
        Math.random() * -1000
      );
      shootingStars.push(shootingStar);
      scene.add(shootingStar);
    }

    // 3. Galaxy (Spiral of Stars) using small spheres
    const galaxyMaterial = new THREE.MeshBasicMaterial({ color: 0xffaaff });
    for (let i = 0; i < 5000; i++) {
      const galaxyGeometry = new THREE.SphereGeometry(0.4, 8, 8);
      const galaxyStar = new THREE.Mesh(galaxyGeometry, galaxyMaterial);
      const angle = i * 0.1;
      const radius = 100 + 15 * angle;
      galaxyStar.position.set(
        radius * Math.cos(angle),
        (Math.random() - 0.5) * 100,
        radius * Math.sin(angle)
      );
      scene.add(galaxyStar);
    }

    // Camera position and animation
    camera.position.z = 500;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate stars and galaxy for depth
      scene.rotation.y += 0.0006;

      // Shooting star movement
      shootingStars.forEach((shootingStar) => {
        shootingStar.position.z += 10; // Move towards the camera
        if (shootingStar.position.z > 500) {
          shootingStar.position.set(
            Math.random() * 400 - 200,
            Math.random() * 400 - 200,
            Math.random() * -1000
          );
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 -z-10"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

export default CanvasBackground;
