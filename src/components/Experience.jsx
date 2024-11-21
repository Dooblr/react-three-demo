import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import React, { useEffect } from "react"
import Car from "./Car"

const Experience = ({ isRotating }) => {
  const { camera } = useThree()

  useEffect(() => {
    // Center the camera on the car
    camera.position.set(0, 2.5, 10)
    camera.lookAt(0, 0, 0)
  }, [camera])

  return (
    <>
      <OrbitControls
        target={[0, 0, 0]}
        maxPolarAngle={Math.PI / 2}
        minDistance={5}
        maxDistance={20}
        enablePan={false}
      />
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={1.5}
        position={[10, 10, 10]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Car rotationSpeed={isRotating ? 0.01 : 0} />
    </>
  )
}

export default Experience
