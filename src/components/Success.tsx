const stories = [
  { name: "Aarav S.", band: "8.5", country: "Canada", quote: "ELSHADAI's mentorship gave me the structure I needed to crack IELTS in 6 weeks." },
  { name: "Priya R.", band: "8.0", country: "Australia", quote: "The AI speaking simulator was a game-changer for my fluency and confidence." },
  { name: "Karthik M.", band: "7.5", country: "United Kingdom", quote: "From band 6 to 7.5 — the analytics dashboard kept me focused every single day." },
];

const countries = ["Canada", "Australia", "UK", "USA", "Germany", "New Zealand", "Ireland", "Singapore"];

export function Success() {
  return (
    <section id="success" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Student Success</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Stories of <span className="text-gradient">global achievement</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <div key={s.name} className="relative p-8 rounded-3xl bg-gradient-card border border-border hover:border-primary/40 transition group">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display font-semibold">{s.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">→ {s.country}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Band</div>
                  <div className="font-display text-3xl font-bold text-gradient">{s.band}</div>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">"{s.quote}"</p>
            </div>
          ))}
        </div>

        <div className="mt-14 glass rounded-3xl p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Placed across</div>
          <div className="mt-4 flex flex-wrap gap-3">
            {countries.map((c) => (
              <span key={c} className="px-4 py-2 rounded-full bg-white/5 border border-border text-sm hover:border-primary/40 hover:text-primary transition">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
