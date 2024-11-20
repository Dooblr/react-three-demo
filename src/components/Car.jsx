import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const groupRef = useRef(); // Reference to the group
  const { nodes } = useGLTF("./models/car.glb");

  // Traverse the group and enhance materials to add metallic shimmer
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.traverse((child) => {
        if (child.isMesh && child.material) {
          // Modify existing material properties
          child.material.metalness = 0.8; // Add metallic property
          child.material.roughness = 0.2; // Smooth for reflectivity
          child.material.needsUpdate = true; // Ensure updates are applied
        }
      });
    }
  }, []);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Geometry is untouched, materials are modified dynamically */}
        <mesh geometry={nodes.Object_11.geometry} material={nodes.Object_11.material} />
        <mesh geometry={nodes.Object_12.geometry} material={nodes.Object_12.material} />
        <mesh geometry={nodes.Object_13.geometry} material={nodes.Object_13.material} />
        <mesh geometry={nodes.Object_14.geometry} material={nodes.Object_14.material} />
        <mesh geometry={nodes.Object_16.geometry} material={nodes.Object_16.material} />
        <mesh geometry={nodes.Object_17.geometry} material={nodes.Object_17.material} />
        <mesh geometry={nodes.Object_18.geometry} material={nodes.Object_18.material} />
        <mesh geometry={nodes.Object_19.geometry} material={nodes.Object_19.material} />
        <mesh geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} />
        <mesh geometry={nodes.Object_20.geometry} material={nodes.Object_20.material} />
        <mesh geometry={nodes.Object_21.geometry} material={nodes.Object_21.material} />
        <mesh geometry={nodes.Object_22.geometry} material={nodes.Object_22.material} />
        <mesh geometry={nodes.Object_23.geometry} material={nodes.Object_23.material} />
        <mesh geometry={nodes.Object_24.geometry} material={nodes.Object_24.material} />
        <mesh geometry={nodes.Object_25.geometry} material={nodes.Object_25.material} />
        <mesh geometry={nodes.Object_26.geometry} material={nodes.Object_26.material} />
        <mesh geometry={nodes.Object_27.geometry} material={nodes.Object_27.material} />
        <mesh geometry={nodes.Object_28.geometry} material={nodes.Object_28.material} />
        <mesh geometry={nodes.Object_29.geometry} material={nodes.Object_29.material} />
        <mesh geometry={nodes.Object_30.geometry} material={nodes.Object_30.material} />
        <mesh geometry={nodes.Object_31.geometry} material={nodes.Object_31.material} />
        <mesh geometry={nodes.Object_32.geometry} material={nodes.Object_32.material} />
        <mesh geometry={nodes.Object_33.geometry} material={nodes.Object_33.material} />
        <mesh geometry={nodes.Object_34.geometry} material={nodes.Object_34.material} />
        <mesh geometry={nodes.Object_35.geometry} material={nodes.Object_35.material} />
        <mesh geometry={nodes.Object_36.geometry} material={nodes.Object_36.material} />
        <mesh geometry={nodes.Object_37.geometry} material={nodes.Object_37.material} />
        <mesh geometry={nodes.Object_38.geometry} material={nodes.Object_38.material} />
        <mesh geometry={nodes.Object_39.geometry} material={nodes.Object_39.material} />
        <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material} />
        <mesh geometry={nodes.Object_40.geometry} material={nodes.Object_40.material} />
        <mesh geometry={nodes.Object_41.geometry} material={nodes.Object_41.material} />
        <mesh geometry={nodes.Object_42.geometry} material={nodes.Object_42.material} />
        <mesh geometry={nodes.Object_5.geometry} material={nodes.Object_5.material} />
        <mesh geometry={nodes.Object_6.geometry} material={nodes.Object_6.material} />
        <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
      </group>
    </group>
  );
}

useGLTF.preload("./models/car.glb");
