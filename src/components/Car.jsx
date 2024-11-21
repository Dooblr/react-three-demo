import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Car = ({ position, rotationSpeed }) => {
  const groupRef = useRef();
  const { nodes } = useGLTF("./models/car.glb");

  // Rotate the car during each frame if rotationSpeed is defined
  useFrame(() => {
    if (groupRef.current && rotationSpeed) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  // Modify material properties on mount
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.metalness = 0.8;
          child.material.roughness = 0.2;
          child.material.needsUpdate = true;
        }
      });
    }
  }, []);

  return (
    <group ref={groupRef} position={position} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {Object.keys(nodes).map((key, index) => (
          <mesh
            key={index}
            geometry={nodes[key].geometry}
            material={nodes[key].material}
          />
        ))}
      </group>
    </group>
  );
};

useGLTF.preload("./models/car.glb");

export default Car;
