import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ParticleField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let particlesMesh: THREE.Points | null = null;
    let linesMesh: THREE.LineSegments | null = null;
    let animationFrameId: number;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 240;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Create Constellation Particles
      const particleCount = window.innerWidth < 768 ? 60 : 120;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const velocities: { x: number; y: number; z: number }[] = [];

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 350;
        positions[i3 + 1] = (Math.random() - 0.5) * 250;
        positions[i3 + 2] = (Math.random() - 0.5) * 200;

        velocities.push({
          x: (Math.random() - 0.5) * 0.15,
          y: (Math.random() - 0.5) * 0.15,
          z: (Math.random() - 0.5) * 0.1,
        });
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Circular glowing particle texture
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(204, 255, 0, 1)');
        gradient.addColorStop(0.3, 'rgba(0, 240, 255, 0.7)');
        gradient.addColorStop(0.8, 'rgba(0, 240, 255, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);

      const pMaterial = new THREE.PointsMaterial({
        size: 5.5,
        map: texture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      particlesMesh = new THREE.Points(geometry, pMaterial);
      scene.add(particlesMesh);

      // Connecting Lines Mesh
      const linePositions = new Float32Array(particleCount * particleCount * 6);
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
      });

      linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(linesMesh);

      // Mouse tracking with smooth lerp
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        targetX = (event.clientX - window.innerWidth / 2) * 0.05;
        targetY = (event.clientY - window.innerHeight / 2) * 0.05;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      const handleResize = () => {
        if (!camera || !renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Animation loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Mouse lag
        mouseX += (targetX - mouseX) * 0.04;
        mouseY += (targetY - mouseY) * 0.04;

        if (scene) {
          scene.rotation.y = elapsedTime * 0.03 + mouseX * 0.005;
          scene.rotation.x = mouseY * 0.005;
        }

        // Update particle positions
        const posAttr = geometry.getAttribute('position') as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          posArray[i3] += velocities[i].x;
          posArray[i3 + 1] += velocities[i].y;
          posArray[i3 + 2] += velocities[i].z;

          // Boundary bounce
          if (posArray[i3] > 180 || posArray[i3] < -180) velocities[i].x = -velocities[i].x;
          if (posArray[i3 + 1] > 130 || posArray[i3 + 1] < -130) velocities[i].y = -velocities[i].y;
          if (posArray[i3 + 2] > 100 || posArray[i3 + 2] < -100) velocities[i].z = -velocities[i].z;
        }
        posAttr.needsUpdate = true;

        // Dynamic Connecting Lines between nearby particles
        let lineIndex = 0;
        const lineAttr = lineGeometry.getAttribute('position') as THREE.BufferAttribute;
        const linePosArray = lineAttr.array as Float32Array;
        const maxDist = 55;

        for (let i = 0; i < particleCount; i++) {
          for (let j = i + 1; j < particleCount; j++) {
            const dx = posArray[i * 3] - posArray[j * 3];
            const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
            const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < maxDist) {
              linePosArray[lineIndex++] = posArray[i * 3];
              linePosArray[lineIndex++] = posArray[i * 3 + 1];
              linePosArray[lineIndex++] = posArray[i * 3 + 2];

              linePosArray[lineIndex++] = posArray[j * 3];
              linePosArray[lineIndex++] = posArray[j * 3 + 1];
              linePosArray[lineIndex++] = posArray[j * 3 + 2];
            }
          }
        }

        lineGeometry.setDrawRange(0, lineIndex / 3);
        lineAttr.needsUpdate = true;

        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch {
      // Graceful fallback to 2D Canvas if WebGL fails or is disabled
      const canvas2d = document.createElement('canvas');
      canvas2d.className = 'w-full h-full';
      container.appendChild(canvas2d);
      const ctx2d = canvas2d.getContext('2d');
      if (!ctx2d) return;

      const setCanvasSize = () => {
        canvas2d.width = window.innerWidth;
        canvas2d.height = window.innerHeight;
      };
      setCanvasSize();
      window.addEventListener('resize', setCanvasSize);

      const dots = Array.from({ length: 60 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
      }));

      const loop = () => {
        ctx2d.clearRect(0, 0, canvas2d.width, canvas2d.height);
        ctx2d.fillStyle = 'rgba(204, 255, 0, 0.4)';
        dots.forEach((d) => {
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < 0 || d.x > canvas2d.width) d.vx = -d.vx;
          if (d.y < 0 || d.y > canvas2d.height) d.vy = -d.vy;
          ctx2d.beginPath();
          ctx2d.arc(d.x, d.y, d.size, 0, Math.PI * 2);
          ctx2d.fill();
        });
        animationFrameId = requestAnimationFrame(loop);
      };
      loop();

      return () => {
        window.removeEventListener('resize', setCanvasSize);
        cancelAnimationFrame(animationFrameId);
        if (container.contains(canvas2d)) {
          container.removeChild(canvas2d);
        }
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-70"
      aria-hidden="true"
    />
  );
};
