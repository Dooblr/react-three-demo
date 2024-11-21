import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import React, { useEffect, useState } from "react"
import Car from "./Car"

const Experience = ({isRotating}) => {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(5, 2.5, -10)
    camera.lookAt(0, 0, 0)
  }, [camera])

  return (
    <>
      <OrbitControls
        target={[-5, 0, 0]}
        maxPolarAngle={Math.PI / 2}
        minDistance={5}
        maxDistance={15}
        enablePan={true}
      />
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={5}
        position={[0, 10, 10]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Car position={[0, 0, 0]} rotationSpeed={isRotating ? 0.0025 : 0} />

      {/* <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 1 }}>
        <button
          className="btn btn-primary"
          onClick={toggleAutoRotate}
        >
          {autoRotate ? "Stop Rotation" : "Start Rotation"}
        </button>
      </div> */}
    </>
  )
}

export default Experience
