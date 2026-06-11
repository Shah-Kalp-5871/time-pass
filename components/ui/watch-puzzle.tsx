"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Shuffle, RotateCcw, CheckCircle2 } from "lucide-react";

const GRID = 3;
const TOTAL = GRID * GRID;

// ─── helpers ─────────────────────────────────────────────────────────────────

function shuffleArr(arr: number[]): number[] {
  const a = [...arr];
  do {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  } while (a.every((v, i) => v === i));
  return a;
}

function buildSolved() {
  return Array.from({ length: TOTAL }, (_, i) => i);
}

function isSolved(pieces: number[]) {
  return pieces.every((p, i) => p === i);
}

// ─── DraggablePiece ───────────────────────────────────────────────────────────

interface PieceProps {
  pieceIndex: number;
  slotIndex: number;
  imageUrl: string;
  isDragTarget: boolean;
  solved: boolean;
  onDragEnd: (fromSlot: number, clientX: number, clientY: number) => void;
  onHover: (slot: number | null) => void;
}

function DraggablePiece({
  pieceIndex,
  slotIndex,
  imageUrl,
  isDragTarget,
  solved,
  onDragEnd,
  onHover,
}: PieceProps) {
  const row = Math.floor(pieceIndex / GRID);
  const col = pieceIndex % GRID;
  const bgX = (col / (GRID - 1)) * 100;
  const bgY = (row / (GRID - 1)) * 100;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      data-slot={slotIndex}
      className={[
        "relative aspect-square overflow-visible select-none",
        solved ? "cursor-default" : "cursor-grab active:cursor-grabbing",
      ].join(" ")}
      drag={!solved}
      dragMomentum={false}
      dragElastic={0.05}
      style={{ x, y, zIndex: 1 }}
      whileDrag={{
        scale: 1.12,
        zIndex: 50,
        boxShadow: "0 24px 48px rgba(0,0,0,0.7), 0 0 0 2px rgba(255,255,255,0.2)",
        filter: "brightness(1.15)",
        cursor: "grabbing",
      }}
      onDragEnd={(_, info) => {
        x.set(0);
        y.set(0);
        onDragEnd(slotIndex, info.point.x, info.point.y);
      }}
      onHoverStart={() => !solved && onHover(slotIndex)}
      onHoverEnd={() => onHover(null)}
      layout
      layoutId={`piece-${pieceIndex}`}
    >
      {/* Image slice */}
      <div
        className="absolute inset-0 rounded-[3px] overflow-hidden pointer-events-none"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: `${GRID * 100}% ${GRID * 100}%`,
          backgroundPosition: `${bgX}% ${bgY}%`,
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Drop target highlight */}
      <AnimatePresence>
        {isDragTarget && !solved && (
          <motion.div
            key="target-ring"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 rounded-[3px] ring-2 ring-white/60 ring-inset pointer-events-none bg-white/10"
          />
        )}
      </AnimatePresence>

      {/* Subtle gap line */}
      <div className="absolute inset-0 border border-black/50 rounded-[3px] pointer-events-none" />
    </motion.div>
  );
}

// ─── WatchPuzzle ──────────────────────────────────────────────────────────────

interface WatchPuzzleProps {
  imageUrl?: string;
  title?: string;
  description?: string;
}

export function WatchPuzzle({
  imageUrl = "/fylex-waitlist/fylex-watch.jpg",
  title = "The Fylex Masterpieces",
  description = "Drag a piece and drop it onto another to swap them. Assemble the watch to reveal the masterpiece.",
}: WatchPuzzleProps) {
  const [pieces, setPieces] = useState<number[]>(() => shuffleArr(buildSolved()));
  const [moves, setMoves] = useState(0);
  const [solved, setSolved] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [dragTarget, setDragTarget] = useState<number | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  // Check solved
  useEffect(() => {
    if (pieces.length > 0 && isSolved(pieces)) {
      setSolved(true);
    }
  }, [pieces]);

  // Find which slot is under a point
  const findSlotAt = useCallback((clientX: number, clientY: number): number | null => {
    const elements = document.elementsFromPoint(clientX, clientY);
    for (const el of elements) {
      const slotAttr = el.getAttribute("data-slot");
      if (slotAttr !== null) {
        return parseInt(slotAttr);
      }
      // Walk up one level (for child elements of the slot)
      const parent = (el as HTMLElement).closest("[data-slot]");
      if (parent) {
        const attr = parent.getAttribute("data-slot");
        if (attr !== null) return parseInt(attr);
      }
    }
    return null;
  }, []);

  const handleDragEnd = useCallback(
    (fromSlot: number, clientX: number, clientY: number) => {
      setDragTarget(null);
      const toSlot = findSlotAt(clientX, clientY);
      if (toSlot !== null && toSlot !== fromSlot) {
        setPieces((prev) => {
          const next = [...prev];
          [next[fromSlot], next[toSlot]] = [next[toSlot], next[fromSlot]];
          return next;
        });
        setMoves((m) => m + 1);
      }
    },
    [findSlotAt]
  );

  // Track drag position for hover-target highlight
  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (e.buttons === 0 && e.pressure === 0) return;
      const slot = findSlotAt(e.clientX, e.clientY);
      setDragTarget(slot);
    },
    [findSlotAt]
  );

  const handleShuffle = () => {
    setPieces(shuffleArr(buildSolved()));
    setSolved(false);
    setMoves(0);
    setDragTarget(null);
  };

  return (
    <section className="relative w-full bg-black py-24 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-zinc-600 text-[10px] tracking-[0.5em] uppercase mb-5">{title}</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-[1.1]">
            Assemble the{" "}
            <span className="italic text-zinc-400">Masterpiece</span>
          </h2>
          <p className="mt-5 text-zinc-500 text-sm max-w-sm mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Layout: board + reference */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full">

          {/* ── Board ── */}
          <div className="flex flex-col items-center gap-6">

            {/* The puzzle grid */}
            <div
              ref={boardRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={() => setDragTarget(null)}
              className={[
                "relative grid gap-1 rounded-2xl p-1",
                "bg-zinc-950 ring-1",
                solved ? "ring-white/20" : "ring-white/5",
                "transition-shadow duration-700",
              ].join(" ")}
              style={{
                gridTemplateColumns: `repeat(${GRID}, 1fr)`,
                width: "min(88vw, 360px)",
                height: "min(88vw, 360px)",
              }}
            >
              {pieces.map((pieceIndex, slotIndex) => (
                <DraggablePiece
                  key={`slot-${slotIndex}-piece-${pieceIndex}`}
                  pieceIndex={pieceIndex}
                  slotIndex={slotIndex}
                  imageUrl={imageUrl}
                  isDragTarget={dragTarget === slotIndex}
                  solved={solved}
                  onDragEnd={handleDragEnd}
                  onHover={setHovered}
                />
              ))}

              {/* Victory full-image reveal */}
              <AnimatePresence>
                {solved && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-1 rounded-xl overflow-hidden pointer-events-none z-20"
                    style={{
                      backgroundImage: `url('${imageUrl}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-5">
              <span className="text-zinc-600 text-xs tracking-[0.3em] uppercase tabular-nums min-w-[80px] text-center">
                {moves} {moves === 1 ? "move" : "moves"}
              </span>
              <button
                onClick={handleShuffle}
                className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-500 px-5 py-2 rounded-full transition-all duration-300"
              >
                <Shuffle className="w-3 h-3" />
                Shuffle
              </button>
            </div>

            {/* Instruction hint */}
            {!solved && (
              <p className="text-zinc-700 text-[10px] tracking-widest uppercase text-center">
                Drag any piece and drop it on another to swap
              </p>
            )}
          </div>

          {/* ── Reference thumbnail ── */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase">Target</p>
            <div className="relative rounded-xl overflow-hidden ring-1 ring-white/5 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt="Watch reference"
                className="w-[140px] h-[140px] object-cover opacity-30 group-hover:opacity-75 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-end justify-center pb-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-zinc-600 text-[9px] tracking-widest uppercase">Hover to reveal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Victory message */}
        <AnimatePresence>
          {solved && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-16 flex flex-col items-center gap-5 text-center"
            >
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm tracking-widest uppercase font-medium">Masterpiece Restored</span>
              </div>
              <p className="text-white font-serif text-2xl md:text-3xl tracking-tight">
                You've unveiled the{" "}
                <span className="italic text-zinc-400">Fylex.</span>
              </p>
              <p className="text-zinc-500 text-sm">
                Completed in {moves} {moves === 1 ? "move" : "moves"}.
              </p>
              <button
                onClick={handleShuffle}
                className="flex items-center gap-2 mt-2 px-8 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Play Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
