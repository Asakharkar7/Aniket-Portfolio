import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function SpinningCube() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function ThreeDemo() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <SpinningCube />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
