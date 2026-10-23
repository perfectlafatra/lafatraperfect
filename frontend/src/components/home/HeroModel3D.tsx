import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Box3, Vector3, type Group } from 'three';
import { heroAsset, type HeroAssetConfig } from '../../config/heroAsset';
import { useReducedMotion } from '../../hooks/useReducedMotion';

function RotatingPortrait({ config, reducedMotion }: { config: HeroAssetConfig; reducedMotion: boolean }) {
  const gltf = useGLTF(config.model3d!.url);
  const rotationGroup = useRef<Group>(null);
  const scrollFraction = useRef(0);
  const activeTime = useRef(0);
  const bounds = useMemo(() => {
    const box = new Box3().setFromObject(gltf.scene);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);
    return { center, scale: (3.4 / (Math.max(size.x, size.y, size.z) || 1)) * (config.scale ?? 1) };
  }, [gltf.scene, config.scale]);

  useEffect(() => {
    const update = () => {
      const distance = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scrollFraction.current = Math.min(Math.max(window.scrollY / distance, 0), 1);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useFrame((_state, delta) => {
    const node = rotationGroup.current;
    if (!node) return;
    const visible = document.visibilityState === 'visible';
    if (!reducedMotion && visible) activeTime.current += Math.min(delta, 0.05);
    const theta = reducedMotion ? 0 : ((activeTime.current * Math.PI * 2) / 20);
    node.rotation.y = theta + (reducedMotion ? 0 : scrollFraction.current * Math.PI * 0.6);
    node.rotation.x = reducedMotion ? 0 : Math.sin(activeTime.current * 0.22) * 0.04;
    node.rotation.z = reducedMotion ? 0 : Math.sin(activeTime.current * 0.16) * 0.025;
  });

  return (
    <group ref={rotationGroup} position={config.position ?? [0, 0, 0]} rotation={config.rotation}>
      <group scale={bounds.scale} position={[
        -bounds.center.x * bounds.scale,
        -bounds.center.y * bounds.scale,
        -bounds.center.z * bounds.scale,
      ]}>
        <primitive object={gltf.scene} />
      </group>
    </group>
  );
}

export default function HeroModel3D() {
  const reducedMotion = useReducedMotion();
  if (!heroAsset.model3d?.url) return null;
  return (
    <div className="hero-3d hero-3d--model" aria-hidden="true" style={{ width: '100%', height: '100%', minHeight: 280, pointerEvents: 'none' }}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        frameloop={reducedMotion ? 'demand' : 'always'}
      >
        <ambientLight intensity={0.85} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <RotatingPortrait config={heroAsset} reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
