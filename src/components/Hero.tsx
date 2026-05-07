import { ArrowRight, MessageCircle, Sparkles, Globe } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-highlight/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em]">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>AI-Powered IELTS Coaching</span>
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Unlock Your <br />
            <span className="text-gradient">Global Future</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Premium IELTS & communication training engineered for the next generation.
            Personalized mentorship, AI-driven practice, and a launchpad to universities worldwide.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#enroll"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-violet transition-all hover:scale-[1.03]"
            >
              Start Learning
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919962994069"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass font-medium hover:bg-white/10 transition"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "8.5+", l: "Avg Band" },
              { v: "2k+", l: "Students" },
              { v: "30+", l: "Countries" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: globe orb */}
        <div className="lg:col-span-5 relative h-[480px] hidden lg:block">
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative h-80 w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-50 animate-pulse-glow" />
              <div className="absolute inset-4 rounded-full glass border border-primary/30 grid place-items-center overflow-hidden">
                <Globe className="h-40 w-40 text-primary animate-spin-slow" strokeWidth={0.7} />
                <div className="absolute inset-0 rounded-full border border-primary/20" />
                <div className="absolute inset-6 rounded-full border border-highlight/20 animate-spin-slow" style={{ animationDuration: "60s", animationDirection: "reverse" }} />
              </div>

              {/* Orbiting dots */}
              {[0, 120, 240].map((deg) => (
                <div
                  key={deg}
                  className="absolute top-1/2 left-1/2 h-3 w-3 -ml-1.5 -mt-1.5"
                  style={{
                    animation: `spin-slow 12s linear infinite`,
                    transformOrigin: "center",
                    transform: `rotate(${deg}deg) translateX(165px)`,
                  }}
                >
                  <div className="h-3 w-3 rounded-full bg-gradient-primary shadow-glow" />
                </div>
              ))}
            </div>
          </div>

          {/* Floating tags */}
          <div className="absolute top-10 left-0 glass rounded-2xl px-4 py-3 animate-float">
            <div className="text-xs text-muted-foreground">Speaking</div>
            <div className="font-display font-bold text-primary">Band 8.0</div>
          </div>
          <div className="absolute bottom-10 right-0 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="text-xs text-muted-foreground">Writing</div>
            <div className="font-display font-bold text-highlight">Band 7.5</div>
          </div>
        </div>
      </div>
    </section>
  );
}
