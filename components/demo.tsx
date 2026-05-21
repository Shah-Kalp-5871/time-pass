'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[300px] md:h-[500px] bg-transparent border-0 relative overflow-hidden group z-0">
      
      {/* LAYER 1: Text Content */}
      <div className="absolute inset-0 z-20 pointer-events-none flex h-full">
        <div className="p-6 md:p-12 flex flex-col justify-center pointer-events-auto w-[60%] md:w-1/2 md:max-w-xl">
          <h1 className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
            Interactive 3D
          </h1>
          <p className="mt-2 md:mt-4 text-xs md:text-base text-neutral-300 max-w-sm md:max-w-md">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>
        <div className="block flex-1" />
      </div>

      {/* LAYER 2: The 3D Canvas */}
      <div className="absolute right-0 top-0 bottom-0 w-[50%] md:w-[65%] -mr-8 md:-mr-16 z-10 pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full bg-transparent"
          />
        </div>
      </div>

    </Card>
  )
}