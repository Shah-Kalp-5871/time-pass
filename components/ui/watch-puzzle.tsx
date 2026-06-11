"use client";

import React, { useState, useEffect } from "react";
import { Reorder, motion } from "framer-motion";

interface WatchPuzzleProps {
  imageUrl: string;
  slices?: number;
  title: string;
  description: string;
}

export function WatchPuzzle({ imageUrl, slices = 7, title, description }: WatchPuzzleProps) {
  // We need the correct ordered array [0, 1, 2, ..., slices - 1]
  const correctOrder = Array.from({ length: slices }).map((_, i) => i);
  
  // State for the shuffled order
  const [order, setOrder] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Shuffle the array on mount
    const shuffled = [...correctOrder].sort(() => Math.random() - 0.5);
    // Ensure it's not solved initially
    if (JSON.stringify(shuffled) === JSON.stringify(correctOrder)) {
      shuffled.reverse();
    }
    setOrder(shuffled);
  }, [slices]);

  // Check completion
  useEffect(() => {
    if (order.length > 0) {
      if (JSON.stringify(order) === JSON.stringify(correctOrder)) {
        setIsCompleted(true);
      } else {
        setIsCompleted(false);
      }
    }
  }, [order, correctOrder]);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-zinc-500 text-sm font-bold tracking-[0.3em] uppercase mb-4">{title}</h2>
        <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-4">Crafting Perfection</h3>
        <p className="text-zinc-400 font-light max-w-lg mx-auto">{description}</p>
      </div>

      <div className="relative w-full max-w-[300px] md:max-w-[400px] aspect-[2/3] mx-auto bg-zinc-900/50 shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/5 rounded-3xl overflow-hidden p-2">
        {isCompleted && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <div className="bg-white text-black px-6 py-3 rounded-full font-bold tracking-widest uppercase text-sm shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Masterpiece Restored
            </div>
          </motion.div>
        )}

        <Reorder.Group 
          axis="y" 
          values={order} 
          onReorder={setOrder} 
          className="w-full h-full flex flex-col"
        >
          {order.map((sliceIndex) => {
            const bgPositionY = (sliceIndex / (slices - 1)) * 100;
            return (
              <Reorder.Item 
                key={sliceIndex} 
                value={sliceIndex}
                className="w-full flex-1 relative cursor-grab active:cursor-grabbing hover:brightness-110 shadow-sm border border-black/20"
                style={{
                  backgroundImage: `url('${imageUrl}')`,
                  // We want the background to simulate the full image. 
                  // Because the item's height is 1/slices of the container,
                  // backgroundSize must be 100% in width and slices * 100% in height
                  backgroundSize: `100% ${slices * 100}%`,
                  backgroundPosition: `center ${bgPositionY}%`,
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* Drag handle hint */}
                {!isCompleted && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-50">
                    <div className="w-4 h-[2px] bg-white rounded-full shadow-md" />
                    <div className="w-4 h-[2px] bg-white rounded-full shadow-md" />
                    <div className="w-4 h-[2px] bg-white rounded-full shadow-md" />
                  </div>
                )}
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
      </div>
      
      {!isCompleted && (
        <p className="mt-8 text-sm text-zinc-500 animate-pulse tracking-wider uppercase">
          Drag to reorder and complete the watch
        </p>
      )}
    </div>
  );
}
