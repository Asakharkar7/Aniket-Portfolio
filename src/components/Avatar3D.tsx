import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";

function AvatarModel() {
  const { scene } = useGLTF("/models/desk-avatar.glb");

  useEffect(() => {
    console.log("✅ GLB model loaded:", scene);
  }, [scene]);

  return <primitive object={scene} scale={1.5} />;
}

function TestCube() {
  return (
    <mesh position={[0, 0, -2]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function Avatar3D() {
  return (
    <div style={{ width: "100%", height: "400px", background: "#eee" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="gray" /></mesh>}>
          {/* Model + test cube */}
          <AvatarModel />
          <TestCube />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
