import { Target, Compass, Cpu } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Mission-Driven",
    body: "Empowering ambitious learners to achieve internationally recognized fluency and confidence.",
  },
  {
    icon: Compass,
    title: "Personalized Mentorship",
    body: "Every student receives a tailored study path engineered around their target band and timeline.",
  },
  {
    icon: Cpu,
    title: "Modern Methodology",
    body: "AI diagnostics, immersive simulations, and data-backed feedback elevate every session.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">About the institute</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            A new era of <span className="text-gradient">IELTS preparation</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            ELSHADAI IELTS CENTER blends expert human coaching with intelligent learning tools —
            giving Chennai's finest students a global edge.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative p-8 rounded-3xl bg-gradient-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
                  <it.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{it.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
