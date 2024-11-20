import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import Car from "./Car"

const Experience = () => {
  const { camera } = useThree()

  useEffect(() => {
    // Set the camera position relative to the vehicle
    camera.position.set(5, 2.5, -10)
    // Ensure the camera is looking at the origin
    camera.lookAt(0, 0, 0)
  }, [camera])

  return (
    <>
      {/* OrbitControls for interactive view adjustments */}
      <OrbitControls
        target={[-2.5, 0, 0]} // Ensure the controls' target matches the origin
        maxPolarAngle={Math.PI / 2} // Prevent the camera from flipping underneath
        minDistance={5} // Prevent zooming in too close
        maxDistance={15} // Restrict zooming out too far
        enablePan={true} // Allow panning for better exploration
      />
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.5} />
      {/* Directional light for casting shadows */}
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
      {/* Render the car model */}
      <Car position={[0, 0, 0]} />
    </>
  )
}

export default Experience
