import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

function DuckModel() {
  const { scene } = useGLTF("/models/Duck.glb");

  useEffect(() => {
    console.log("✅ Duck model loaded:", scene);
  }, [scene]);

  return <primitive object={scene} scale={2} />;
}

export default function DuckScene() {
  return (
    <div style={{ width: "100%", height: "400px", background: "#f8fafc" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="gray" /></mesh>}>
          <DuckModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
