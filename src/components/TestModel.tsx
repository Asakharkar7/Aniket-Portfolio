import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

function TestGLB() {
  const { scene } = useGLTF("/models/Duck.glb"); // or Avocado.glb

  useEffect(() => {
    console.log("✅ Test GLB loaded:", scene);
  }, [scene]);

  return <primitive object={scene} scale={2} />;
}

export default function TestModel() {
  return (
    <div style={{ width: "100%", height: "500px", background: "#f8fafc" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="gray" /></mesh>}>
          <TestGLB />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
