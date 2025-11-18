import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Group } from "three";

function DeskModel() {
  const { scene } = useGLTF("/models/desk-scene.glb");
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    console.log("✅ Desk model loaded:", scene);
  }, [scene]);

  // Rotate the desk slowly
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002; // slower rotation
    }
  });

  return (
    <group ref={groupRef}>
      {/* scale reduced so full desk fits */}
      <primitive object={scene} scale={0.8} />
    </group>
  );
}

export default function DeskScene() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-2xl border border-slate-700">
      <Canvas camera={{ position: [0, 3, 12], fov: 45 }}>
        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#88ccff" />

        {/* Load the desk model */}
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="gray" /></mesh>}>
          <DeskModel />
        </Suspense>

        {/* Controls: disable zoom & pan, keep rotation locked */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
