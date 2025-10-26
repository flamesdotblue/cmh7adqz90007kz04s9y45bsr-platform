import { Cpu, Shield, Zap, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Real-time 3D',
    description: 'Interactive spline scene optimized for smooth rendering and responsive layouts.',
    icon: Sparkles,
  },
  {
    title: 'Performance First',
    description: 'Tailwind + Vite for fast dev cycles and production-grade builds.',
    icon: Zap,
  },
  {
    title: 'Secure & Modern',
    description: 'Best practices for asset loading and non-blocking UI overlays.',
    icon: Shield,
  },
  {
    title: 'Powered by WebGL',
    description: 'Harness GPU acceleration with a sleek, futuristic aesthetic.',
    icon: Cpu,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-[#05070B]">
      <div className="absolute inset-x-0 -top-40 mx-auto h-72 w-72 blur-3xl opacity-30 bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 rounded-full" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Engineered for impact</h2>
          <p className="mt-3 text-white/70">
            Production-ready components and an immersive hero that blends motion, depth, and clarity.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-600/30 grid place-items-center mb-4">
                <f.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
