import { Brain, Mic, BookOpen, PenLine, BarChart3 } from "lucide-react";

const features = [
  { icon: Mic, title: "Speaking Simulation", body: "Real-time IELTS speaking test with AI examiner feedback." },
  { icon: BookOpen, title: "Vocabulary Builder", body: "Adaptive word lists based on your weakest topics." },
  { icon: PenLine, title: "Writing Suggestions", body: "Instant grammar, coherence and lexical analysis." },
  { icon: BarChart3, title: "Band Prediction", body: "Predict your band score with smart performance analytics." },
];

export function AIMentor() {
  return (
    <section id="ai-mentor" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em]">
            <Brain className="h-3.5 w-3.5 text-highlight" />
            ELSHADAI AI Mentor
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold">
            Your intelligent <span className="text-gradient">IELTS companion</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            A holographic AI mentor that listens, evaluates, recommends and predicts —
            built to coach you anywhere, anytime, at human-grade quality.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="p-5 rounded-2xl glass hover:bg-white/[0.06] transition">
                <f.icon className="h-5 w-5 text-primary" />
                <div className="mt-3 font-display font-semibold">{f.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Holographic orb */}
        <div className="relative h-[480px] grid place-items-center">
          <div className="absolute h-96 w-96 rounded-full bg-gradient-primary blur-3xl opacity-30" />
          <div className="relative h-72 w-72 rounded-full glass border border-primary/40 grid place-items-center">
            <div className="absolute inset-0 rounded-full animate-pulse-glow" />
            <div className="absolute inset-6 rounded-full border border-highlight/30 animate-spin-slow" />
            <div className="absolute inset-12 rounded-full border border-primary/30 animate-spin-slow" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
            <Brain className="relative h-24 w-24 text-primary" strokeWidth={1.2} />
          </div>

          <div className="absolute top-6 left-2 glass rounded-2xl px-4 py-3 max-w-[220px] animate-float">
            <div className="text-[10px] uppercase tracking-widest text-primary">AI Mentor</div>
            <div className="text-sm mt-1">"Your speaking confidence is up 22% this week."</div>
          </div>
          <div className="absolute bottom-8 right-0 glass rounded-2xl px-4 py-3 max-w-[220px] animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="text-[10px] uppercase tracking-widest text-highlight">Predicted Band</div>
            <div className="text-2xl font-display font-bold text-gradient">7.5 → 8.0</div>
          </div>
        </div>
      </div>
    </section>
  );
}
