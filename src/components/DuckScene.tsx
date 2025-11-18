import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Group } from "three";

function DeskModel() {
  // 🔗 Make sure your file is at public/models/desk-scene.glb
  const { scene } = useGLTF("/models/desk-scene.glb");
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    console.log("✅ Desk model loaded:", scene);
  }, [scene]);

  // Rotate the whole desk scene slowly
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.5} />
    </group>
  );
}

export default function DeskScene() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl border border-slate-700">
      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#88ccff" />

        {/* Load the desk model */}
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="gray" /></mesh>}>
          <DeskModel />
        </Suspense>

        {/* Controls */}
        <OrbitControls autoRotate={false} enableZoom={true} />
      </Canvas>
    </div>
  );
}
