import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Edges, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import type { Group, Mesh } from 'three'

function lerp(current: number, target: number, alpha: number): number {
  return current + (target - current) * alpha
}

const LOOP_SECONDS = 5.5

function makeBallotTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 320
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = '#E9EFFA'
  ctx.fillRect(0, 0, 256, 320)

  ctx.strokeStyle = 'rgba(59, 130, 246, 0.55)'
  ctx.lineWidth = 6
  ctx.strokeRect(10, 10, 236, 300)

  ctx.strokeStyle = '#64748B'
  ctx.lineWidth = 4
  ctx.strokeRect(30, 64, 60, 60)

  ctx.strokeStyle = '#3B82F6'
  ctx.lineWidth = 10
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(40, 74)
  ctx.lineTo(80, 114)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(80, 74)
  ctx.lineTo(40, 114)
  ctx.stroke()

  ctx.fillStyle = '#94A3B8'
  for (let i = 0; i < 4; i++) {
    ctx.fillRect(108, 70 + i * 14, i % 2 === 0 ? 118 : 88, 7)
  }

  ctx.fillStyle = '#1D4ED8'
  ctx.font = 'bold 44px sans-serif'
  ctx.fillText('4Real', 30, 200)

  ctx.fillStyle = '#64748B'
  ctx.fillRect(30, 224, 190, 6)
  ctx.fillRect(30, 242, 150, 6)
  ctx.fillRect(30, 260, 175, 6)

  const texture = new THREE.CanvasTexture(canvas)
  texture.anisotropy = 4
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function BallotUrna() {
  const group = useRef<Group>(null)
  const ballot = useRef<Mesh>(null)
  const ballotMat = useRef<THREE.MeshBasicMaterial>(null)
  const slotMat = useRef<THREE.MeshStandardMaterial>(null)
  const texture = useMemo(makeBallotTexture, [])

  useFrame(({ pointer, clock }) => {
    if (group.current) {
      group.current.rotation.y = lerp(
        group.current.rotation.y,
        0.22 + pointer.x * 0.28,
        0.05,
      )
      group.current.rotation.x = lerp(
        group.current.rotation.x,
        -0.08 - pointer.y * 0.14,
        0.05,
      )
    }

    const t = (clock.elapsedTime % LOOP_SECONDS) / LOOP_SECONDS

    if (ballot.current && ballotMat.current) {
      let y = 2.3
      let opacity = 0

      if (t < 0.1) {
        opacity = t / 0.1
      } else if (t < 0.5) {
        const p = (t - 0.1) / 0.4
        y = 2.3 - p * 1.35
        opacity = 1
      } else if (t < 0.62) {
        const p = (t - 0.5) / 0.12
        y = 0.95 - p * 0.5
        opacity = 1 - p
      } else {
        opacity = 0
      }

      ballot.current.position.y = y + Math.sin(clock.elapsedTime * 2) * 0.035
      ballot.current.rotation.z = Math.sin(clock.elapsedTime * 1.3) * 0.06
      ballot.current.rotation.x = -0.12
      ballotMat.current.opacity = opacity
      ballot.current.visible = opacity > 0.01
    }

    if (slotMat.current) {
      const target = t > 0.48 && t < 0.68 ? 2.2 : 0.55
      slotMat.current.emissiveIntensity = lerp(
        slotMat.current.emissiveIntensity,
        target,
        0.12,
      )
    }
  })

  return (
    <group ref={group} position={[0, -0.5, 0]} scale={1}>
      {/* Scheda elettorale animata */}
      <mesh ref={ballot} position={[0, 2.3, 0.05]}>
        <planeGeometry args={[0.85, 1.06]} />
        <meshBasicMaterial
          ref={ballotMat}
          map={texture}
          transparent
          opacity={0}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Coperchio con feritoia */}
      <mesh position={[0, 0.44, 0]}>
        <boxGeometry args={[2.5, 0.16, 1.6]} />
        <meshStandardMaterial
          color="#0E1B33"
          roughness={0.3}
          metalness={0.6}
          transparent
          opacity={0.92}
        />
        <Edges color="#5B9CFF" />
      </mesh>

      {/* Feritoia luminosa */}
      <mesh position={[0, 0.53, 0]}>
        <boxGeometry args={[1.05, 0.035, 0.14]} />
        <meshStandardMaterial
          ref={slotMat}
          color="#04070F"
          emissive="#3B82F6"
          emissiveIntensity={0.55}
        />
      </mesh>

      {/* Corpo urna in vetro scuro */}
      <mesh position={[0, -0.42, 0]}>
        <boxGeometry args={[2.3, 1.55, 1.45]} />
        <meshStandardMaterial
          color="#0A1526"
          roughness={0.12}
          metalness={0.45}
          transparent
          opacity={0.42}
        />
        <Edges color="#3B82F6" />
      </mesh>

      {/* Base */}
      <mesh position={[0, -1.26, 0]}>
        <boxGeometry args={[2.55, 0.12, 1.65]} />
        <meshStandardMaterial
          color="#0E1B33"
          roughness={0.35}
          metalness={0.55}
        />
        <Edges color="#5B9CFF" />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 5.6], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 4, 6]} intensity={45} color="#5B9CFF" />
      <pointLight position={[-5, -3, -4]} intensity={18} color="#A5D8FF" />
      <BallotUrna />
      <Sparkles
        count={70}
        scale={[8, 6, 4]}
        size={2}
        speed={0.3}
        opacity={0.45}
        color="#A5D8FF"
      />
    </Canvas>
  )
}
