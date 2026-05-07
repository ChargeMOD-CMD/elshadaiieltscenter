import { GraduationCap, MessageSquare, Plane, ArrowUpRight } from "lucide-react";

const groups = [
  {
    icon: GraduationCap,
    title: "IELTS Programs",
    accent: "from-primary to-primary",
    items: [
      "IELTS Academic",
      "IELTS General Training",
      "Crash Course",
      "Online IELTS Coaching",
      "One-to-One Mentorship",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication",
    accent: "from-highlight to-highlight",
    items: ["Spoken English", "Grammar Training", "Interview Preparation", "Public Speaking"],
  },
  {
    icon: Plane,
    title: "Study Abroad",
    accent: "from-primary to-highlight",
    items: ["Visa Guidance", "University Application Support", "SOP Assistance", "Mock Interviews"],
  },
];

export function Courses() {
  return (
    <section id="courses" className="relative py-28">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Courses</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              Programs designed for <span className="text-gradient">global ambition</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From foundational fluency to advanced IELTS mastery — every program is structured around outcomes.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-3xl bg-gradient-card border border-border p-8 hover:border-primary/40 transition-all"
            >
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${g.accent} opacity-20 blur-3xl group-hover:opacity-40 transition`} />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
                  <g.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{g.title}</h3>
                <ul className="mt-6 space-y-3">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center justify-between gap-4 py-2.5 border-b border-border/60 last:border-0 group/item">
                      <span className="text-sm">{it}</span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover/item:text-primary group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
