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
    <div className="w-full max-w-6xl mx-auto aspect-[16/9] rounded-xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 2.5, 13], fov: 45 }}
        gl={{ alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, 5, 5]} intensity={0.6} color="#88ccff" />

        {/* Desk Model */}
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="gray" /></mesh>}>
          <DeskModel />
        </Suspense>

        {/* Controls: only horizontal rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
