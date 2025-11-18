import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Group } from "three";

function DuckModel() {
  const { scene } = useGLTF("/models/Duck.glb");
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    console.log("✅ Duck model loaded:", scene);
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={2} />
    </group>
  );
}

export default function DuckScene() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl border border-slate-700">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#88ccff" />
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="gray" /></mesh>}>
          <DuckModel />
        </Suspense>
        <OrbitControls autoRotate={false} enableZoom={true} />
      </Canvas>
    </div>
  );
}
