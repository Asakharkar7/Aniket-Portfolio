import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function AvatarModel() {
  // Load your GLB model
  const { scene } = useGLTF("/models/desk-avatar.glb");
  return <primitive object={scene} scale={1.5} />;
}

// Simple floating chart blocks
function FloatingChart({ position, color }: { position: [number, number, number], color: string }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.5, 1, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function Avatar3D() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Avatar at desk */}
        <AvatarModel />

        {/* Floating charts */}
        <FloatingChart position={[2, 1, 0]} color="blue" />
        <FloatingChart position={[-2, 1.5, -1]} color="green" />
        <FloatingChart position={[0, 2, 2]} color="purple" />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
