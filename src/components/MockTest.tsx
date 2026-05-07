import { Monitor, Timer, ChartLine, CheckCircle2 } from "lucide-react";

export function MockTest() {
  return (
    <section id="mock" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Mock Test System</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Real exam, <span className="text-gradient">simulated perfectly</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            Computer-based mock tests engineered to mirror the official IELTS environment — followed by instant analytics on your performance.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              { icon: Monitor, t: "Authentic CBT interface" },
              { icon: Timer, t: "Real-time timing & section flow" },
              { icon: ChartLine, t: "Granular sub-skill analytics" },
              { icon: CheckCircle2, t: "Predicted band with action plan" },
            ].map((i) => (
              <li key={i.t} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl glass grid place-items-center">
                  <i.icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <span className="text-sm">{i.t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mock UI */}
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-6 bg-gradient-primary rounded-3xl blur-3xl opacity-25" />
          <div className="relative rounded-3xl glass border border-border overflow-hidden shadow-elegant">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-white/[0.03]">
              <div className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-highlight/80" />
              <div className="ml-3 text-xs text-muted-foreground">elshadai.test / reading-section-2</div>
              <div className="ml-auto text-xs font-display text-primary">⏱ 32:14</div>
            </div>
            <div className="p-6 grid grid-cols-2 gap-5">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Passage</div>
                <div className="mt-2 space-y-2">
                  <div className="h-2 rounded bg-white/10 w-full" />
                  <div className="h-2 rounded bg-white/10 w-[92%]" />
                  <div className="h-2 rounded bg-white/10 w-[80%]" />
                  <div className="h-2 rounded bg-white/10 w-[95%]" />
                  <div className="h-2 rounded bg-white/10 w-[60%]" />
                  <div className="h-2 rounded bg-white/10 w-[88%]" />
                  <div className="h-2 rounded bg-white/10 w-[75%]" />
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Question 14</div>
                <div className="mt-2 text-sm">Which heading best matches paragraph C?</div>
                <div className="mt-3 space-y-2">
                  {["The rise of multilingualism", "Globalization & education", "Digital fluency frameworks", "Cultural exchange in 2030"].map((o, i) => (
                    <div key={o} className={`px-3 py-2 rounded-lg border text-sm ${i === 1 ? "border-primary/60 bg-primary/10" : "border-border"}`}>
                      <span className="text-muted-foreground mr-2">{String.fromCharCode(65 + i)}.</span>{o}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="rounded-2xl bg-gradient-primary p-4 text-primary-foreground flex items-center justify-between">
                <div>
                  <div className="text-xs opacity-80">Live performance</div>
                  <div className="font-display text-xl font-bold">Predicted Band 7.5</div>
                </div>
                <div className="text-right text-xs">
                  <div>Reading 8.0</div>
                  <div>Listening 7.5</div>
                  <div>Writing 7.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
