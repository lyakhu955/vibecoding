"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { cn } from "@/lib/utils";

type CanvasWrapperProps = {
  children: React.ReactNode;
  className?: string;
  controls?: boolean;
  environment?: "studio" | "city" | "sunset" | "dawn" | "night" | "warehouse";
};

export function CanvasWrapper({
  children,
  className,
  controls = false,
  environment = "studio",
}: CanvasWrapperProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          {children}
          <Environment preset={environment} />
          {controls && <OrbitControls enableZoom={false} />}
        </Suspense>
      </Canvas>
    </div>
  );
}
