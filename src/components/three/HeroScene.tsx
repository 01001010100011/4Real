import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Edges, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import type { Group, Mesh } from 'three'

function lerp(current: number, target: number, alpha: number): number {
  return current + (target - current) * alpha
}

const LOOP_SECONDS = 5.5

const LOGO_PATHS = [
  'M2385 4329 c-677 -52 -1284 -522 -1508 -1166 -157 -450 -117 -974 105 -1383 361 -665 1089 -1025 1828 -903 686 112 1264 658 1414 1333 127 579 -34 1157 -443 1583 -249 259 -540 424 -882 501 -100 22 -333 49 -393 45 -12 -1 -66 -5 -121 -10z m286 -249 c590 -60 1086 -457 1273 -1020 61 -185 71 -251 70 -475 0 -170 -3 -214 -22 -294 -75 -315 -212 -555 -445 -777 -391 -375 -950 -504 -1464 -338 -114 36 -305 133 -408 205 -110 79 -271 238 -348 346 -110 155 -189 323 -237 508 -107 411 -28 838 223 1210 86 126 256 293 391 383 129 87 188 117 320 167 213 79 425 107 647 85z',
  'M2364 3940 c-239 -34 -488 -136 -686 -282 -134 -98 -289 -263 -372 -397 -31 -48 -23 -46 49 15 212 179 556 344 845 405 152 32 373 33 485 1 134 -38 210 -95 262 -195 22 -42 27 -65 27 -122 0 -126 -66 -226 -214 -323 -47 -31 -395 -246 -773 -477 l-686 -420 685 -3 684 -2 0 -477 0 -478 144 144 144 144 -1 334 -2 333 345 0 346 0 131 123 131 122 -473 3 -472 2 -5 200 c-2 110 -7 202 -9 205 -3 3 -67 -32 -142 -77 l-137 -83 0 -122 0 -123 -247 0 c-146 0 -243 4 -237 9 8 8 579 354 824 500 108 64 213 162 252 237 77 143 77 327 2 477 -41 80 -153 184 -254 235 -132 66 -254 93 -435 97 -82 2 -177 0 -211 -5z',
  'M1703 3393 l-143 -86 0 -468 c0 -296 4 -469 10 -469 5 0 70 37 145 82 l135 82 0 473 c0 260 -1 473 -2 473 -2 -1 -67 -40 -145 -87z',
  'M1610 2095 c0 -31 105 -310 154 -410 61 -123 204 -354 191 -309 -3 11 -18 99 -34 195 -26 157 -38 249 -57 462 l-6 67 -124 0 c-68 0 -124 -2 -124 -5z',
]

function drawLogo(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string,
  blur = 0,
) {
  ctx.save()
  ctx.translate(x, y)
  ctx.scale(size / 360, size / 360)
  ctx.translate(-72, -72)
  ctx.translate(0, 512)
  ctx.scale(0.1, -0.1)
  if (blur > 0) ctx.filter = `blur(${blur}px)`
  ctx.fillStyle = color
  for (const d of LOGO_PATHS) ctx.fill(new Path2D(d))
  ctx.restore()
}

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

  ctx.fillStyle = '#3B82F6'
  ctx.font = 'bold 20px sans-serif'
  ctx.fillText('LISTA 2', 30, 172)

  ctx.fillStyle = '#1D4ED8'
  ctx.font = 'bold 44px sans-serif'
  ctx.fillText('4Real', 30, 210)

  ctx.fillStyle = '#64748B'
  ctx.fillRect(30, 232, 190, 6)
  ctx.fillRect(30, 250, 150, 6)
  ctx.fillRect(30, 268, 175, 6)

  drawLogo(ctx, 192, 16, 46, '#1D4ED8')

  const texture = new THREE.CanvasTexture(canvas)
  texture.anisotropy = 4
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function makeUrnaLogoTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')!

  drawLogo(ctx, 28, 28, 200, '#3B82F6', 10)
  drawLogo(ctx, 28, 28, 200, '#5B9CFF')

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
  const urnaLogo = useMemo(makeUrnaLogoTexture, [])

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

      {/* Logo sul vetro frontale */}
      <mesh position={[0, -0.42, 0.74]}>
        <planeGeometry args={[0.95, 0.95]} />
        <meshBasicMaterial map={urnaLogo} transparent depthWrite={false} />
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
  const wrapRef = useRef<HTMLDivElement>(null)
  const [loop, setLoop] = useState<'always' | 'never'>('always')

  // Fuori dallo viewport la scena non deve rubare GPU allo scroll (lag paint su iOS)
  useEffect(() => {
    const el = wrapRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => setLoop(entry.isIntersecting ? 'always' : 'never'),
      { rootMargin: '120px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={wrapRef} className="h-full w-full">
      <Canvas
        frameloop={loop}
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
    </div>
  )
}
