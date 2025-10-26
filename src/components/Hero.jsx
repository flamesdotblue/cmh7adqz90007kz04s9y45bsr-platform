import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EaQv24wazlheTQrd/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-4 flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Live 3D Experience
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
              Futuristic 3D Torus, Crafted for Modern Tech
            </h1>
            <p className="mt-4 text-white/80 md:text-lg">
              Explore a chrome spiral torus with pulsating blue highlights. Built with React, Spline, and Tailwind for an immersive, interactive hero experience.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#features" className="inline-flex px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">Discover Features</a>
              <a href="#contact" className="inline-flex px-5 py-3 rounded-md border border-white/20 text-white hover:border-white/40 transition">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
