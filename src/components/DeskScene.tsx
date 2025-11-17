import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

function DeskModel() {
  const { scene } = useGLTF("/models/desk-scene.glb");

  useEffect(() => {
    console.log("✅ Desk model loaded:", scene);
  }, [scene]);

  return <primitive object={scene} scale={1.5} />;
}

export default function DeskScene() {
  return (
    <div style={{ width: "100%", height: "500px", background: "#f8fafc" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <DeskModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
