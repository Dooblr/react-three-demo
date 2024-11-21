//src/App.jsx

import "./App.scss"

import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import { useEffect, useState } from "react"
import React from "react"

const App = () => {
  const [isRotating, setIsRotating] = useState(true)

  return (
    <>
      <Canvas shadows>
        <Experience isRotating={isRotating} />
      </Canvas>
      <div
        style={{ position: "absolute", top: "20px", left: "20px", zIndex: 1 }}
      >
        <button className="btn btn-primary" onClick={() => setIsRotating(!isRotating)}>
          {isRotating ? "Stop Rotation" : "Start Rotation"}
        </button>
      </div>
    </>
  )
}

export default App
