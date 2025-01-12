'use client'

import { Button } from "@/app/components/ui/button"
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { SapModel } from './Model3D'

export function HeroSection() {
  return (
    <section className="container lg:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="flex flex-col justify-center">
        <h1 className="m-auto mb-4 text-6xl font-bold text-white">Sap-Lang</h1>
        <h3 className="m-auto mb-2 text-2xl text-blue-100">Simple And Powerful</h3>
        <p className="m-auto mb-2 text-blue-400">Consistent, Intuitive, Composive, Semi-Scripting </p>
        <code className="bg-black px-2 py-1 text-lg border border-input rounded-sm">curl -sSf https://sh.sap-lang.org | sh</code>
        <button
          className="bg-blue-400 mb-6 text-white px-2 py-1 rounded-b-sm hover:bg-blue-100"
          onClick={() => {
            navigator.clipboard.writeText('curl -sSf https://sh.sap-lang.org | sh');
            alert('Paste it in your terminal to install Sap-Lang~!');
          }}
        >
          Copy
        </button>
        <div className="flex gap-4 m-auto">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Get started</Button>
          <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">Why Sap-Lang?</Button>
        </div>
      </div>
      <div className="md:h-[500px] hidden md:flex">
        <Canvas className="bg-transparent">
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1000} color={"white"} />
          <directionalLight position={[0, 0, -1]} intensity={100} />
          <directionalLight position={[0, 0, 1]} intensity={100} />
          {/* <directionalLight position={[0, 1, 0]} intensity={100} />
          <directionalLight position={[0, -1, 0]} intensity={100} />
          <directionalLight position={[1, 0, 0]} intensity={100} />
          <directionalLight position={[-1, 0, 0]} intensity={100} /> */}

          <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-5, -5, -5]} decay={0} intensity={Math.PI} />
          <SapModel />
          <Environment preset="forest" />
        </Canvas>
      </div>
    </section>
  )
}

