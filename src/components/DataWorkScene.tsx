import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DataWorkScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);
    scene.fog = new THREE.Fog(0xf8fafc, 50, 100);

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Desk
    const deskGeometry = new THREE.BoxGeometry(4, 0.1, 2);
    const deskMaterial = new THREE.MeshStandardMaterial({ color: 0x8b7355, metalness: 0.3, roughness: 0.8 });
    const desk = new THREE.Mesh(deskGeometry, deskMaterial);
    desk.position.y = 1;
    desk.castShadow = true;
    desk.receiveShadow = true;
    scene.add(desk);

    // Desk legs
    const legGeometry = new THREE.BoxGeometry(0.1, 1, 0.1);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x5c4033, metalness: 0.4, roughness: 0.8 });
    const positions = [
      [-1.8, 0.5, -0.8],
      [1.8, 0.5, -0.8],
      [-1.8, 0.5, 0.8],
      [1.8, 0.5, 0.8],
    ];
    positions.forEach((pos) => {
      const leg = new THREE.Mesh(legGeometry, legMaterial);
      leg.position.set(...(pos as [number, number, number]));
      leg.castShadow = true;
      leg.receiveShadow = true;
      scene.add(leg);
    });

    // Monitor
    const monitorScreenGeometry = new THREE.BoxGeometry(1.6, 1, 0.05);
    const monitorMaterial = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.2 });
    const monitor = new THREE.Mesh(monitorScreenGeometry, monitorMaterial);
    monitor.position.set(0.8, 2.2, 0.5);
    monitor.rotation.z = -0.2;
    monitor.castShadow = true;
    monitor.receiveShadow = true;
    scene.add(monitor);

    // Monitor stand
    const standGeometry = new THREE.BoxGeometry(0.15, 0.4, 0.15);
    const stand = new THREE.Mesh(standGeometry, legMaterial);
    stand.position.set(0.8, 1.6, 0.5);
    stand.castShadow = true;
    scene.add(stand);

    // Monitor bezel
    const bezelGeometry = new THREE.BoxGeometry(1.8, 1.2, 0.02);
    const bezelMaterial = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.7, roughness: 0.3 });
    const bezel = new THREE.Mesh(bezelGeometry, bezelMaterial);
    bezel.position.set(0.8, 2.2, 0.48);
    bezel.castShadow = true;
    scene.add(bezel);

    // Canvas texture for monitor display (animated)
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#e0e7ff';
      ctx.fillRect(0, 0, 800, 500);

      // Draw animated chart
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 0; i < 100; i++) {
        const x = (i / 100) * 750 + 25;
        const y = 450 - Math.sin(i / 20 + Date.now() / 2000) * 100 - 50;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw bars
      ctx.fillStyle = '#06b6d4';
      for (let i = 0; i < 8; i++) {
        const height = Math.sin(i + Date.now() / 3000) * 80 + 100;
        ctx.fillRect(100 + i * 80, 350 - height, 60, height);
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;

    const screenGeometry = new THREE.BoxGeometry(1.5, 0.95, 0.03);
    const screenMaterial = new THREE.MeshStandardMaterial({ map: texture, metalness: 0, roughness: 0 });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0.8, 2.2, 0.52);
    screen.castShadow = true;
    scene.add(screen);

    // Keyboard
    const keyboardGeometry = new THREE.BoxGeometry(1.5, 0.05, 0.4);
    const keyboardMaterial = new THREE.MeshStandardMaterial({ color: 0x374151, metalness: 0.5, roughness: 0.7 });
    const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
    keyboard.position.set(-0.3, 1.05, 0.3);
    keyboard.castShadow = true;
    keyboard.receiveShadow = true;
    scene.add(keyboard);

    // Mouse
    const mouseGeometry = new THREE.BoxGeometry(0.25, 0.15, 0.35);
    const mouseMaterial = new THREE.MeshStandardMaterial({ color: 0x4b5563, metalness: 0.6, roughness: 0.6 });
    const mouse = new THREE.Mesh(mouseGeometry, mouseMaterial);
    mouse.position.set(1.2, 1.05, -0.1);
    mouse.rotation.z = 0.3;
    mouse.castShadow = true;
    mouse.receiveShadow = true;
    scene.add(mouse);

    // Notebook
    const notebookGeometry = new THREE.BoxGeometry(0.4, 0.01, 0.5);
    const notebookMaterial = new THREE.MeshStandardMaterial({ color: 0xdc2626, metalness: 0.2, roughness: 0.8 });
    const notebook = new THREE.Mesh(notebookGeometry, notebookMaterial);
    notebook.position.set(-1.4, 1.15, 0.4);
    notebook.rotation.z = 0.2;
    notebook.castShadow = true;
    notebook.receiveShadow = true;
    scene.add(notebook);

    // Coffee cup
    const cupGeometry = new THREE.CylinderGeometry(0.12, 0.15, 0.25, 32);
    const cupMaterial = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.3, roughness: 0.6 });
    const cup = new THREE.Mesh(cupGeometry, cupMaterial);
    cup.position.set(1.6, 1.15, 0.8);
    cup.castShadow = true;
    cup.receiveShadow = true;
    scene.add(cup);

    // Cup handle
    const handleGeometry = new THREE.TorusGeometry(0.12, 0.03, 16, 100);
    const handle = new THREE.Mesh(handleGeometry, cupMaterial);
    handle.position.set(1.75, 1.2, 0.8);
    handle.rotation.y = Math.PI / 2;
    scene.add(handle);

    // Simple person (head + body)
    const headGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const skinMaterial = new THREE.MeshStandardMaterial({ color: 0xf4a460, metalness: 0.2, roughness: 0.8 });
    const head = new THREE.Mesh(headGeometry, skinMaterial);
    head.position.set(-0.5, 2.8, 0);
    head.castShadow = true;
    scene.add(head);

    // Body
    const bodyGeometry = new THREE.BoxGeometry(0.4, 0.8, 0.25);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x1e40af, metalness: 0.1, roughness: 0.9 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(-0.5, 1.9, 0);
    body.castShadow = true;
    scene.add(body);

    // Arms
    const armGeometry = new THREE.BoxGeometry(0.1, 0.6, 0.1);
    const armMaterial = new THREE.MeshStandardMaterial({ color: 0xf4a460, metalness: 0.2, roughness: 0.8 });

    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.75, 1.8, -0.2);
    leftArm.rotation.z = 0.5;
    leftArm.castShadow = true;
    scene.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(-0.25, 1.8, 0.2);
    rightArm.rotation.z = -0.8;
    rightArm.castShadow = true;
    scene.add(rightArm);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate scene slightly
      scene.rotation.y += 0.0005;

      // Update monitor display
      if (ctx) {
        ctx.fillStyle = '#e0e7ff';
        ctx.fillRect(0, 0, 800, 500);

        // Animated line chart
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let i = 0; i < 100; i++) {
          const x = (i / 100) * 750 + 25;
          const y = 450 - Math.sin(i / 20 + Date.now() / 2000) * 100 - 50;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Animated bars
        ctx.fillStyle = '#06b6d4';
        for (let i = 0; i < 8; i++) {
          const height = Math.sin(i + Date.now() / 3000) * 80 + 100;
          ctx.fillRect(100 + i * 80, 350 - height, 60, height);
        }

        texture.needsUpdate = true;
      }

      // Arm animation (typing)
      leftArm.rotation.z = 0.5 + Math.sin(Date.now() / 600) * 0.3;
      rightArm.rotation.z = -0.8 - Math.sin(Date.now() / 600) * 0.3;

      // Head rotation
      head.rotation.y = Math.sin(Date.now() / 3000) * 0.3;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] rounded-lg overflow-hidden shadow-xl bg-slate-50"
    />
  );
}
