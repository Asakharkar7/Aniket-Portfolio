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
    <div className="w-full h-[600px] flex items-center justify-center rounded-lg overflow-hidden shadow-2xl border border-slate-700">
      <Canvas camera={{ position: [0, 3, 14], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#88ccff" />
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="gray" /></mesh>}>
          <DeskModel />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
