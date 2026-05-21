"use client"

import React, { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import { ImageCursorTrail } from "@/components/ui/image-cursor-trail"
import { ArrowUpRight, Sparkles } from "lucide-react"
import ExpandOnHover from "@/components/ui/expand-cards"
import { ProjectShowcase } from "@/components/ui/project-showcase"
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider
} from "@/components/ui/image-comparison"
import { ZoomParallax } from "@/components/ui/zoom-parallax"
import { ShuffleHero } from "@/components/ui/shuffle-grid"
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery"
import { Testimonials } from "@/components/ui/testimonials-columns-1"
import FlowArt, { FlowSection } from "@/components/ui/story-scroll"

const bentoMediaItems = [
  {
    id: 1,
    type: "image",
    title: "Anurag Mishra",
    desc: "Driven, innovative, visionary",
    url: "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcbP3rYTiXwH7Y106CepJOsoAgQjyFi3MUfDkh",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Dog Puppy",
    desc: "Adorable loyal companion.",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Forest Path",
    desc: "Mystical forest trail",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "Falling Leaves",
    desc: "Autumn scenery",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "video",
    title: "Bird Parrot",
    desc: "Vibrant feathered charm",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "Beach Paradise",
    desc: "Sunny tropical beach",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "video",
    title: "Shiva Temple",
    desc: "Peaceful Shiva sanctuary.",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
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
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", // Tech device/chip
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop", // Modern architecture
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop", // Clean laptop setup
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", // Abstract dark
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop", // Architecture detail
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", // Dark textured luxury
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop", // Clean tech
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"  // Interior/Architecture
  ]

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black">
      {/* Top Floating Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6">
        <nav className="mx-auto max-w-7xl rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Sparkles className="h-5 w-5 text-white" />
            <span>STUDIO</span>
          </div>
          
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <li className="hover:text-white transition-colors cursor-pointer">Work</li>
            <li className="hover:text-white transition-colors cursor-pointer">Process</li>
            <li className="hover:text-white transition-colors cursor-pointer">Vision</li>
          </ul>

          <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors">
            Start Project
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </nav>
      </header>

      {/* Hero Section with Cursor Trail */}
      <ImageCursorTrail items={imageUrls} maxNumberOfImages={5} distance={20} fadeAnimation={true}>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight max-w-5xl uppercase">
            Creating Visual <br className="hidden md:block" /> Experience
          </h1>
          <p className="mt-6 text-zinc-400 max-w-lg mx-auto text-lg md:text-xl font-medium">
            We are a premium creative agency engineering trust through world-class digital aesthetics and modern interactions.
          </p>
        </div>
      </ImageCursorTrail>

      {/* Story Scroll Section */}
      <FlowArt aria-label="About the Studio">
        <FlowSection aria-label="Who we are" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Who we are</p>
          <hr className="my-[2vw] border-t border-black/30" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Create<br />Without<br />Limits
            </h2>
          </div>
          <hr className="my-[2vw] border-t border-black/30" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            We believe every artist deserves a platform that puts creativity first. No algorithms, no
            noise — just pure art and the people who make it.
          </p>
        </FlowSection>

        <FlowSection aria-label="The mission" style={{ backgroundColor: '#09090b', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — The mission</p>
          <hr className="my-[2vw] border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Art<br />First<br />Always
            </h2>
          </div>
          <hr className="my-[2vw] border-t border-white/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            A global community built for artists, by artists. We&apos;re rewriting the rules of how
            creative work gets seen, shared, and valued.
          </p>
          <hr className="my-[2vw] border-t border-white/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Discovery</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">Human-curated collections that put real eyes on real art. No algorithms deciding your fate.</p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Community</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">Find collaborators, mentors, and fellow creatives who push your work forward.</p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Value</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">Fair pricing. Transparent commissions. Artists keep what they earn. Always.</p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="How it works" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — How it works</p>
          <hr className="my-[2vw] border-t border-black/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Show<br />Up.<br />Stand<br />Out.
            </h2>
          </div>
          <hr className="my-[2vw] border-t border-black/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">01 — Upload</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">Drag, drop, done. Your portfolio goes live in seconds with full creative control.</p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">02 — Connect</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">Match with collectors, galleries, and brands actively looking for your style.</p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">03 — Grow</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">Track engagement, manage commissions, and scale your practice — all in one place.</p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="The vision" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — The vision</p>
          <hr className="my-[2vw] border-t border-white/30" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Future<br />Of<br />Art
            </h2>
          </div>
          <hr className="my-[2vw] border-t border-white/30" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">10K+</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">Artists from 80 countries already shaping the future with us.</p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">$2M+</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">Paid directly to creators in our first year. Zero hidden fees.</p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">100%</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">Artist-owned. Every decision we make starts with the creator.</p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Join us" style={{ backgroundColor: '#09090b', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Join us</p>
          <hr className="my-[2vw] border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Ready<br />To<br />Begin?
            </h2>
          </div>
          <hr className="my-[2vw] border-t border-white/20" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Take control of your creative journey. Join now and let&apos;s shape the future of the art
            world together.
          </p>
        </FlowSection>
      </FlowArt>

      {/* Expandable Cards Section */}
      <section className="relative z-10 w-full">
        <ExpandOnHover />
      </section>

      {/* Shuffle Grid Hero Section */}
      <section className="relative z-10 w-full bg-zinc-950 text-white border-t border-white/10">
        <ShuffleHero />
      </section>

      {/* Interactive Bento Gallery Section */}
      <section className="relative z-10 w-full bg-zinc-950 text-white border-t border-white/10 pt-12 pb-24">
        <InteractiveBentoGallery
          mediaItems={bentoMediaItems}
          title="Gallery Shots Collection"
          description="Drag and explore our curated collection of shots"
        />
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 w-full bg-zinc-950 text-white border-t border-white/10 py-20">
        <Testimonials />
      </section>

      {/* Project Showcase Section */}
      <section className="relative z-10 w-full bg-black text-white">
        <ProjectShowcase />
      </section>

      {/* Image Comparison Section */}
      <section className="relative z-10 w-full bg-zinc-950 py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-zinc-400 text-sm font-medium tracking-wide uppercase mb-12 text-center">Transformation</h2>
          <ImageComparison className="aspect-16/9 w-full rounded-2xl shadow-2xl" enableHover>
            <ImageComparisonImage
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              className="grayscale"
              alt="Tech setup grayscale"
              position="left"
            />
            <ImageComparisonImage
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              alt="Tech setup color"
              position="right"
            />
            <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-xs">
              <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg"></div>
            </ImageComparisonSlider>
          </ImageComparison>
        </div>
      </section>

      {/* Zoom Parallax Section */}
      <section className="relative z-10 w-full bg-zinc-950 border-t border-white/10">
        <div className="relative flex h-[50vh] items-center justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_50%)] blur-[30px]"
          />
          <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tighter">
            Dive Into Detail
          </h2>
        </div>
        <ZoomParallax images={imageUrls.slice(0, 7).map(src => ({ src }))} />
        <div className="h-[20vh]" />
      </section>
    </main>
  )
}
