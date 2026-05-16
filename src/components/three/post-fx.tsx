"use client";
/**
 * Post-FX Composer — bloom, chromatic aberration, noise, vignette.
 *
 * Da inserire come ULTIMO child del <Canvas>.
 * Disabilitato automaticamente su mobile per performance.
 *
 * Richiede: @react-three/postprocessing (già nel package.json)
 */
import { useEffect, useState } from "react";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

interface Props {
  bloom?: boolean;
  chromaticAberration?: boolean;
  noise?: boolean;
  vignette?: boolean;
  bloomIntensity?: number;
  bloomThreshold?: number;
  disableOnMobile?: boolean;
}

export function PostFX({
  bloom = true,
  chromaticAberration = true,
  noise = true,
  vignette = true,
  bloomIntensity = 0.5,
  bloomThreshold = 0.9,
  disableOnMobile = true,
}: Props) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (disableOnMobile) {
      const isMobile = window.matchMedia("(pointer: coarse)").matches
        || window.innerWidth < 768;
      setEnabled(!isMobile);
    }
  }, [disableOnMobile]);

  if (!enabled) return null;

  return (
    <EffectComposer multisampling={0} disableNormalPass>
      {bloom && (
        <Bloom
          luminanceThreshold={bloomThreshold}
          luminanceSmoothing={0.025}
          intensity={bloomIntensity}
        />
      )}
      {chromaticAberration && (
        <ChromaticAberration
          offset={[0.002, 0.002]}
          blendFunction={BlendFunction.NORMAL}
          radialModulation={false}
          modulationOffset={0}
        />
      )}
      {noise && (
        <Noise
          opacity={0.03}
          blendFunction={BlendFunction.ADD}
          premultiply={false}
        />
      )}
      {vignette && (
        <Vignette
          offset={0.1}
          darkness={0.5}
          eskil={false}
        />
      )}
    </EffectComposer>
  );
}
