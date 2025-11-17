import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DataWorkScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);
    scene.fog = new THREE.Fog(0xf8fafc, 100, 200);

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 3.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(8, 12, 8);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    scene.add(directionalLight);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(30, 30);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0, roughness: 1 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Chair base
    const chairBaseGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.1, 32);
    const chairMaterial = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.6, roughness: 0.4 });
    const chairBase = new THREE.Mesh(chairBaseGeometry, chairMaterial);
    chairBase.position.y = 0.05;
    chairBase.castShadow = true;
    chairBase.receiveShadow = true;
    scene.add(chairBase);

    // Chair wheels/legs (5 points)
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const wheelGeometry = new THREE.SphereGeometry(0.08, 16, 16);
      const wheel = new THREE.Mesh(wheelGeometry, chairMaterial);
      wheel.position.set(Math.cos(angle) * 0.3, 0.08, Math.sin(angle) * 0.3);
      wheel.castShadow = true;
      scene.add(wheel);
    }

    // Chair seat
    const seatGeometry = new THREE.BoxGeometry(0.5, 0.08, 0.5);
    const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.3, roughness: 0.7 });
    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    seat.position.y = 0.45;
    seat.castShadow = true;
    seat.receiveShadow = true;
    scene.add(seat);

    // Chair backrest
    const backrestGeometry = new THREE.BoxGeometry(0.5, 0.6, 0.1);
    const backrest = new THREE.Mesh(backrestGeometry, seatMaterial);
    backrest.position.set(0, 1, -0.15);
    backrest.castShadow = true;
    backrest.receiveShadow = true;
    scene.add(backrest);

    // Chair armrests
    for (let i = -1; i <= 1; i += 2) {
      const armrestGeometry = new THREE.BoxGeometry(0.1, 0.3, 0.3);
      const armrest = new THREE.Mesh(armrestGeometry, seatMaterial);
      armrest.position.set(i * 0.3, 0.65, 0);
      armrest.castShadow = true;
      armrest.receiveShadow = true;
      scene.add(armrest);
    }

    // Create person sitting on chair
    // Torso
    const torsoGeometry = new THREE.BoxGeometry(0.3, 0.5, 0.25);
    const clothesMaterial = new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.1, roughness: 0.9 });
    const torso = new THREE.Mesh(torsoGeometry, clothesMaterial);
    torso.position.set(0, 1.1, 0.05);
    torso.castShadow = true;
    torso.receiveShadow = true;
    scene.add(torso);

    // Neck
    const neckGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.1, 16);
    const skinMaterial = new THREE.MeshStandardMaterial({ color: 0xf4a460, metalness: 0.2, roughness: 0.8 });
    const neck = new THREE.Mesh(neckGeometry, skinMaterial);
    neck.position.set(0, 1.4, 0.05);
    neck.castShadow = true;
    scene.add(neck);

    // Head
    const headGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const head = new THREE.Mesh(headGeometry, skinMaterial);
    head.position.set(0, 1.65, 0.05);
    head.castShadow = true;
    scene.add(head);

    // Hair
    const hairGeometry = new THREE.SphereGeometry(0.22, 32, 32);
    const hairMaterial = new THREE.MeshStandardMaterial({ color: 0x3d2817, metalness: 0.1, roughness: 0.9 });
    const hair = new THREE.Mesh(hairGeometry, hairMaterial);
    hair.position.set(0, 1.65, 0.05);
    hair.scale.y = 1.1;
    hair.castShadow = true;
    scene.add(hair);

    // Left arm
    const armGeometry = new THREE.BoxGeometry(0.12, 0.45, 0.1);
    const armMaterial = new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.2, roughness: 0.8 });
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.25, 1, 0.05);
    leftArm.rotation.z = 0.4;
    leftArm.castShadow = true;
    scene.add(leftArm);

    // Right arm
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.25, 1, 0.05);
    rightArm.rotation.z = -0.6;
    rightArm.castShadow = true;
    scene.add(rightArm);

    // Left hand
    const handGeometry = new THREE.SphereGeometry(0.06, 16, 16);
    const leftHand = new THREE.Mesh(handGeometry, skinMaterial);
    leftHand.position.set(-0.35, 0.7, 0.05);
    leftHand.castShadow = true;
    scene.add(leftHand);

    // Right hand
    const rightHand = new THREE.Mesh(handGeometry, skinMaterial);
    rightHand.position.set(0.35, 0.65, 0.05);
    rightHand.castShadow = true;
    scene.add(rightHand);

    // Left leg
    const legGeometry = new THREE.BoxGeometry(0.15, 0.5, 0.15);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.1, roughness: 0.9 });
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.12, 0.4, 0.15);
    leftLeg.castShadow = true;
    scene.add(leftLeg);

    // Right leg
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.12, 0.4, 0.15);
    rightLeg.castShadow = true;
    scene.add(rightLeg);

    // Laptop on lap
    const laptopBaseGeometry = new THREE.BoxGeometry(0.6, 0.02, 0.4);
    const laptopMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.5, roughness: 0.5 });
    const laptopBase = new THREE.Mesh(laptopBaseGeometry, laptopMaterial);
    laptopBase.position.set(0, 0.75, 0.2);
    laptopBase.rotation.x = -0.4;
    laptopBase.castShadow = true;
    scene.add(laptopBase);

    // Laptop screen
    const screenGeometry = new THREE.BoxGeometry(0.55, 0.35, 0.02);
    const screenMaterial = new THREE.MeshStandardMaterial({ color: 0x0d0d0d, metalness: 0.7, roughness: 0.3 });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 1, 0.15);
    screen.rotation.x = -0.45;
    screen.castShadow = true;
    scene.add(screen);

    // Screen glow
    const glowGeometry = new THREE.BoxGeometry(0.52, 0.32, 0.01);
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 400;
    glowCanvas.height = 300;
    const glowCtx = glowCanvas.getContext('2d');

    if (glowCtx) {
      glowCtx.fillStyle = '#0a2e4a';
      glowCtx.fillRect(0, 0, 400, 300);

      // Draw animated graphs on screen
      glowCtx.strokeStyle = '#3b82f6';
      glowCtx.lineWidth = 2;
      glowCtx.beginPath();
      for (let i = 0; i < 100; i++) {
        const x = (i / 100) * 380 + 10;
        const y = 250 - Math.sin(i / 15 + Date.now() / 2000) * 80 - 40;
        if (i === 0) glowCtx.moveTo(x, y);
        else glowCtx.lineTo(x, y);
      }
      glowCtx.stroke();

      // Draw bars
      glowCtx.fillStyle = '#06b6d4';
      for (let i = 0; i < 6; i++) {
        const height = Math.sin(i + Date.now() / 3000) * 50 + 70;
        glowCtx.fillRect(50 + i * 55, 200 - height, 40, height);
      }

      // Draw some dots
      glowCtx.fillStyle = '#f59e0b';
      for (let i = 0; i < 8; i++) {
        const x = 50 + (i % 4) * 80;
        const y = 80 + Math.floor(i / 4) * 70;
        glowCtx.fillRect(x, y, 8, 8);
      }
    }

    const glowTexture = new THREE.CanvasTexture(glowCanvas);
    glowTexture.magFilter = THREE.LinearFilter;
    glowTexture.minFilter = THREE.LinearFilter;

    const glowMaterial = new THREE.MeshStandardMaterial({ map: glowTexture, metalness: 0, roughness: 0 });
    const glowScreen = new THREE.Mesh(glowGeometry, glowMaterial);
    glowScreen.position.set(0, 1, 0.17);
    glowScreen.rotation.x = -0.45;
    scene.add(glowScreen);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Gentle camera orbit
      const time = Date.now() * 0.0003;
      camera.position.x = Math.sin(time) * 1.5;
      camera.position.z = 3.5 + Math.cos(time) * 0.8;

      // Arm animation (working)
      leftArm.rotation.z = 0.4 + Math.sin(Date.now() / 800) * 0.25;
      rightArm.rotation.z = -0.6 - Math.sin(Date.now() / 700) * 0.3;

      // Hand animation
      leftHand.position.y = 0.7 + Math.sin(Date.now() / 800) * 0.1;
      rightHand.position.y = 0.65 + Math.sin(Date.now() / 900 + 0.5) * 0.12;

      // Head slight bobbing/thinking
      head.rotation.y = Math.sin(Date.now() / 3000) * 0.15;
      head.position.y = 1.65 + Math.sin(Date.now() / 2500) * 0.05;

      // Update screen content
      if (glowCtx) {
        glowCtx.fillStyle = '#0a2e4a';
        glowCtx.fillRect(0, 0, 400, 300);

        glowCtx.strokeStyle = '#3b82f6';
        glowCtx.lineWidth = 2;
        glowCtx.beginPath();
        for (let i = 0; i < 100; i++) {
          const x = (i / 100) * 380 + 10;
          const y = 250 - Math.sin(i / 15 + Date.now() / 2000) * 80 - 40;
          if (i === 0) glowCtx.moveTo(x, y);
          else glowCtx.lineTo(x, y);
        }
        glowCtx.stroke();

        glowCtx.fillStyle = '#06b6d4';
        for (let i = 0; i < 6; i++) {
          const height = Math.sin(i + Date.now() / 3000) * 50 + 70;
          glowCtx.fillRect(50 + i * 55, 200 - height, 40, height);
        }

        glowTexture.needsUpdate = true;
      }

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
