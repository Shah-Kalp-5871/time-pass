import { SplineSceneBasic } from "@/components/demo";
import { PortfolioScroll } from "@/components/portfolio-scroll";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center p-8 bg-black/[0.96]">
        <div className="w-full max-w-5xl">
          <SplineSceneBasic />
        </div>
      </div>
      <PortfolioScroll />
    </main>
  );
}
