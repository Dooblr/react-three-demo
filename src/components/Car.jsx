import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";

const Car = ({ rotationSpeed }) => {
  const groupRef = useRef();
  const { nodes } = useGLTF("./models/car.glb");

  useEffect(() => {
    if (groupRef.current) {
      // Calculate the bounding box of the car model
      const boundingBox = new Box3().setFromObject(groupRef.current);

      // Get the center of the bounding box
      const center = boundingBox.getCenter(new Vector3());

      // Apply an offset to align the car's center with the origin
      groupRef.current.position.set(-center.x, -center.y, -center.z);

      // Update material properties (optional, for visual effects)
      groupRef.current.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.metalness = 0.8;
          child.material.roughness = 0.2;
          child.material.needsUpdate = true;
        }
      });
    }
  }, []);

  // Rotate the car in place
  useFrame(() => {
    if (groupRef.current && rotationSpeed) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
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
