import { useState, Suspense } from "react"
import "./App.scss"

import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
// import Cube from "./assets/cube/Cube"
import Earth from "./assets/earth/Earth"
import Experience from "./components/Experience"

function App() {
  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
    </>
  )
}

export default App

// import { useState, Suspense } from "react"
// import "./App.scss"

// import { Canvas } from "@react-three/fiber"
// import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
// import Cube from "./assets/cube/Cube"
// import Earth from "./assets/earth/Earth"

// function App() {
//   return (
//     <>
//       <Canvas>
//         <ambientLight intensity={1.5} />
//         <OrbitControls enableZoom />
//         <Suspense fallback={null}>
//           <Earth />
//         </Suspense>
//         <Environment preset="sunset" />
//         <ContactShadows
//           position={[0, -2, 0]}
//           opacity={0.5}
//           scale={50}
//           blur={1}
//           far={10}
//           resolution={256}
//           color="#000000"
//         />
//       </Canvas>

//       <div>
//         <h1>Earth</h1>
//       </div>
//     </>
//   )
// }

// export default App
