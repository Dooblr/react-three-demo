import { OrbitControls } from "@react-three/drei"
import Car from "./Car"

const Experience = () => {
  return (
    <>
      <OrbitControls />
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.5} />
      {/* Directional light shining down from the middle of the scene */}
      <directionalLight
        intensity={5}
        position={[0, 10, 0]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      <Car />
      {/* Uncomment if needed */}
      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
    </>
  )
}

export default Experience
