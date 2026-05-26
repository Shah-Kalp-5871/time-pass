"use client"

import React, { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import { ImageCursorTrail } from "@/components/ui/image-cursor-trail"
import { ArrowUpRight } from "lucide-react"
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider
} from "@/components/ui/image-comparison"
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery"
import FlowArt, { FlowSection } from "@/components/ui/story-scroll"
import { ShuffleHero } from "@/components/ui/shuffle-grid"
import { TimelineJourney } from "@/components/ui/timeline-journey"
import { CinematicFooter } from "@/components/ui/motion-footer"
import { WaitlistForm } from "@/components/ui/waitlist-form"
import { DynamicFrameLayout, Frame } from "@/components/ui/dynamic-frame-layout"

const dynamicFrames: Frame[] = [
  {
    id: 1,
    media: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    mediaType: "image",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1.1,
  },
  {
    id: 2,
    media: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
    mediaType: "image",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1.1,
  },
  {
    id: 3,
    media: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg",
    mediaType: "image",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1.1,
  },
  {
    id: 4,
    media: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg",
    mediaType: "image",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1.1,
  },
  {
    id: 5,
    media: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg",
    mediaType: "image",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1.1,
  },
  {
    id: 6,
    media: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg",
    mediaType: "image",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1.1,
  },
  {
    id: 7,
    media: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg",
    mediaType: "image",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1.1,
  },
  {
    id: 8,
    media: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    mediaType: "image",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1.1,
  },
  {
    id: 9,
    media: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
    mediaType: "image",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1.1,
  },
]

const bentoMediaItems = [
  {
    id: 1,
    type: "image",
    title: "Heritage Collection",
    desc: "Timeless elegance",
    url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "The Mechanics",
    desc: "Swiss precision at its core.",
    url: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Night Lume",
    desc: "Radiance in the dark",
    url: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "Sapphire Crystal",
    desc: "Unscratchable beauty",
    url: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "image",
    title: "Gold Master",
    desc: "Refined 18k accents",
    url: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "Aerospace Titanium",
    desc: "Light as a feather",
    url: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "image",
    title: "Legacy",
    desc: "Pass it to the next generation.",
    url: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
]

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const imageUrls = [
    "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
    "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg",
    "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg",
    "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg",
    "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg",
    "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg",
  ]

  const scrollToFooter = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }

  return (
    <div className="relative w-full bg-black min-h-screen font-sans selection:bg-white/20 overflow-x-clip">
      {/* Top Floating Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 pointer-events-none">
        <nav className="mx-auto max-w-7xl rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md px-6 py-4 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-3 font-serif font-bold text-xl tracking-wider">
            <span className="text-2xl text-zinc-400">Ф</span>
            <span className="text-white">THE FYLEX</span>
          </div>
          
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <li className="hover:text-white transition-colors cursor-pointer tracking-wide">Timepieces</li>
            <li className="hover:text-white transition-colors cursor-pointer tracking-wide">Savoir-Faire</li>
            <li className="hover:text-white transition-colors cursor-pointer tracking-wide">Boutiques</li>
          </ul>

          <button suppressHydrationWarning onClick={scrollToFooter} className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors">
            Join Waitlist
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </nav>
      </header>

      {/* Main Content Wrapper (With high z-index and border radius for the cinematic footer reveal) */}
      <main className="relative z-10 w-full min-h-[120vh] bg-black text-white rounded-b-[2rem] md:rounded-b-[4rem] border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
        
        {/* Hero Section with Cursor Trail */}
        <section className="relative w-full min-h-screen">
          <ImageCursorTrail items={imageUrls} maxNumberOfImages={5} distance={20} fadeAnimation={true}>
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-auto min-h-screen pt-20">
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] font-serif text-white uppercase mix-blend-difference">
                Time <span className="text-zinc-500 italic lowercase font-light">reimagined</span>.
              </h1>
              <p className="mt-8 text-zinc-400 max-w-xl mx-auto text-lg md:text-xl font-light tracking-wide mix-blend-difference">
                A new standard of horology. Masterfully crafted, extremely limited.
              </p>
              
              <div className="mt-12 w-full max-w-md mix-blend-difference">
                <WaitlistForm />
              </div>
            </div>
          </ImageCursorTrail>
        </section>

        {/* Shuffle Grid Showcase */}
        <div className="relative w-full bg-black py-16 border-t border-white/5">
          <ShuffleHero />
        </div>

        {/* Master's Timeline Journey */}
        <TimelineJourney />

        {/* Story Scroll Section */}
        <section className="relative w-full bg-[#09090b]">
          <FlowArt aria-label="About The Fylex">
            <FlowSection aria-label="The Heritage" style={{ backgroundColor: '#09090b', color: '#fff' }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">01 — The Heritage</p>
              <hr className="my-[2vw] border-t border-white/10" />
              <div>
                <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] tracking-tighter font-serif uppercase">
                  Swiss<br />Precision
                </h2>
              </div>
              <hr className="my-[2vw] border-t border-white/10" />
              <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-light leading-relaxed text-zinc-300">
                Forged in the heart of the Alps, The Fylex represents a century of untamed mechanical obsession. We don't just measure time; we sculpt it.
              </p>
            </FlowSection>

            <FlowSection aria-label="The Craft" style={{ backgroundColor: '#111', color: '#fff' }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">02 — The Craft</p>
              <hr className="my-[2vw] border-t border-white/10" />
              <div>
                <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] tracking-tighter font-serif uppercase">
                  Obsessive<br />Detail
                </h2>
              </div>
              <hr className="my-[2vw] border-t border-white/10" />
              <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-light leading-relaxed text-zinc-300">
                Over 300 micro-components hand-polished to perfection. Every tourbillon tells a story of relentless human ambition.
              </p>
              <hr className="my-[2vw] border-t border-white/10" />
              <div className="flex flex-wrap gap-[3vw]">
                <div className="min-w-[180px] flex-1">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-zinc-400">Materials</p>
                  <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-zinc-300">Aerospace-grade titanium paired with 18k rose gold.</p>
                </div>
                <div className="min-w-[180px] flex-1">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-zinc-400">Movement</p>
                  <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-zinc-300">In-house calibre FX-9 with a staggering 72-hour power reserve.</p>
                </div>
                <div className="min-w-[180px] flex-1">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-zinc-400">Finish</p>
                  <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-zinc-300">Sapphire crystal casing reveals the beating mechanical heart.</p>
                </div>
              </div>
            </FlowSection>
          </FlowArt>
        </section>

        {/* Image Comparison Section - Day vs Night Lume */}
        <section className="relative w-full bg-black py-32 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-zinc-500 text-sm font-bold tracking-[0.3em] uppercase mb-16 text-center">Super-LumiNova® Engine</h2>
            <ImageComparison className="aspect-[16/7] w-full rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/5" enableHover>
              <ImageComparisonImage
                src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg"
                className="brightness-110"
                alt="Watch in daylight"
                position="left"
              />
              <ImageComparisonImage
                src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg"
                className="brightness-50 hue-rotate-180 contrast-125"
                alt="Watch glowing in dark"
                position="right"
              />
              <ImageComparisonSlider className="w-0.5 bg-white/10 backdrop-blur-sm">
                <div className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] border-2 border-black"></div>
              </ImageComparisonSlider>
            </ImageComparison>
          </div>
        </section>

        {/* Dynamic Video Frame Section */}
        <section className="relative w-full bg-black py-20 px-6">
          <div className="text-center mb-16">
            <h2 className="text-zinc-500 text-sm font-bold tracking-[0.3em] uppercase mb-4">The Showcase</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight">Interactive Cinema</h3>
            <p className="mt-4 text-zinc-400 font-light max-w-lg mx-auto">Hover over the frames to experience the craftsmanship in motion.</p>
          </div>
          
          <div className="w-full max-w-6xl mx-auto h-[60vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/5">
            <DynamicFrameLayout 
              frames={dynamicFrames} 
              className="w-full h-full bg-[#09090b]" 
              hoverSize={6}
              gapSize={4}
              showFrames={false}
            />
          </div>
        </section>

        {/* Interactive Bento Gallery Section */}
        <section className="relative w-full bg-black pt-10 pb-32">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />
          <InteractiveBentoGallery
            mediaItems={bentoMediaItems}
            title="The Fylex Masterpieces"
            description="Explore the defining details of our inaugural collection."
          />
        </section>
        
        {/* Decorative Space before footer reveal */}
        <div className="h-[20vh] w-full bg-black flex flex-col items-center justify-end pb-12 pointer-events-none">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold mb-4">Keep Scrolling</p>
          <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </main>

      {/* The Cinematic Footer */}
      <CinematicFooter />
    </div>
  )
}
