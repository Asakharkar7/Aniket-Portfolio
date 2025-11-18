import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, ContactShadows } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Group } from "three";

function DeskModel() {
  const { scene } = useGLTF("/models/desk-scene.glb");
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    console.log("✅ Desk model loaded:", scene);
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.7} />
    </group>
  );
}

export default function DeskScene() {
  return (
    <div className="w-full max-w-6xl mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-100">
      <Canvas camera={{ position: [0, 2.5, 13], fov: 45 }}>
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, 5, 5]} intensity={0.6} color="#88ccff" />

        {/* Desk Model */}
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="gray" /></mesh>}>
          <DeskModel />
          {/* Optional: soft shadow under desk */}
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.4}
            width={10}
            height={10}
            blur={2.5}
            far={10}
          />
        </Suspense>

        {/* Controls: locked zoom/pan */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
