'use client'

import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh } from 'three'
import { MeshTransmissionMaterial } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/Addons.js'

export function SapModel() {
  const meshRef = useRef<Mesh>(null)

  const obj = useLoader(OBJLoader, '/sap.obj')
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const geom = obj.children[0]["geometry"];

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <mesh ref={meshRef}>
      <primitive object={geom} />
      {/* <boxGeometry args={[2, 2, 2]} /> */}

      <MeshTransmissionMaterial
        backside
        color={ 0x0031a9 }
        samples={3}
        thickness={0}
        roughness={0}
        transmission={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        ior={1}
        chromaticAberration={0.1}
        anisotropy={0.1}
        distortion={0.0}
        distortionScale={0.3}
        temporalDistortion={0.0}
      />
    </mesh>
  )
}

