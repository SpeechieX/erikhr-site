import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SamuraiMask = () => {
  const gltf = useLoader(GLTFLoader, "/models/samurai_mask.glb");
  const mask = gltf.scene.children[0];

  return (
    <mesh geometry={mask.geometry}>
      <meshStandardMaterial color={"#f5f5f5"} roughness={0.6} metalness={0.8} />
    </mesh>
  );
};

export default SamuraiMask;
