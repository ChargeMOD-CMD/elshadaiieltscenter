import { Plane, BookOpen, Headphones, PenTool, Mic, Languages, GraduationCap, Globe2 } from "lucide-react";

const floatingIcons = [
  { Icon: Plane, top: "8%", left: "6%", size: 28, delay: "0s", duration: "14s", color: "text-primary/40" },
  { Icon: BookOpen, top: "18%", left: "82%", size: 24, delay: "1.2s", duration: "16s", color: "text-highlight/40" },
  { Icon: Headphones, top: "62%", left: "4%", size: 26, delay: "2s", duration: "18s", color: "text-primary/35" },
  { Icon: PenTool, top: "78%", left: "88%", size: 22, delay: "0.6s", duration: "15s", color: "text-highlight/40" },
  { Icon: Mic, top: "42%", left: "92%", size: 22, delay: "2.4s", duration: "17s", color: "text-primary/35" },
  { Icon: Languages, top: "88%", left: "44%", size: 26, delay: "1.8s", duration: "19s", color: "text-highlight/35" },
  { Icon: GraduationCap, top: "30%", left: "48%", size: 28, delay: "3s", duration: "20s", color: "text-primary/30" },
  { Icon: Globe2, top: "55%", left: "55%", size: 30, delay: "0.9s", duration: "22s", color: "text-highlight/30" },
];

const bandWords = ["IELTS 9.0", "Speaking", "Listening", "Reading", "Writing", "Band 8.5", "Fluency", "Vocabulary"];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora gradient blobs */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[120px] animate-aurora" />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-highlight/20 blur-[140px] animate-aurora"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-primary/15 blur-[120px] animate-aurora"
        style={{ animationDelay: "8s" }}
      />

      {/* Animated dotted globe meridians SVG */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.10] animate-spin-slow"
        width="900"
        height="900"
        viewBox="0 0 900 900"
        fill="none"
        style={{ animationDuration: "120s" }}
      >
        <defs>
          <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.78 0.16 230)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.65 0.22 295)" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <circle cx="450" cy="450" r="420" stroke="url(#globeGrad)" strokeWidth="1" strokeDasharray="2 8" />
        <circle cx="450" cy="450" r="340" stroke="url(#globeGrad)" strokeWidth="1" strokeDasharray="2 10" />
        <circle cx="450" cy="450" r="260" stroke="url(#globeGrad)" strokeWidth="1" strokeDasharray="2 12" />
        <ellipse cx="450" cy="450" rx="420" ry="160" stroke="url(#globeGrad)" strokeWidth="1" />
        <ellipse cx="450" cy="450" rx="420" ry="280" stroke="url(#globeGrad)" strokeWidth="1" />
        <ellipse cx="450" cy="450" rx="160" ry="420" stroke="url(#globeGrad)" strokeWidth="1" />
        <ellipse cx="450" cy="450" rx="280" ry="420" stroke="url(#globeGrad)" strokeWidth="1" />
      </svg>

      {/* Flight-path SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pathGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.16 230)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.78 0.16 230)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.65 0.22 295)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pathGrad2" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.22 295)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.65 0.22 295)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.78 0.16 230)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -50 700 Q 360 100 720 450 T 1500 200"
          stroke="url(#pathGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          fill="none"
          className="animate-dash"
        />
        <path
          d="M -50 200 Q 400 600 800 300 T 1500 700"
          stroke="url(#pathGrad2)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          fill="none"
          className="animate-dash"
          style={{ animationDelay: "2s" }}
        />
      </svg>

      {/* Floating IELTS-themed icons */}
      {floatingIcons.map(({ Icon, top, left, size, delay, duration, color }, i) => (
        <div
          key={i}
          className={`absolute ${color} animate-drift`}
          style={{ top, left, animationDelay: delay, animationDuration: duration }}
        >
          <Icon size={size} strokeWidth={1.2} />
        </div>
      ))}

      {/* Floating band-score word tags */}
      {bandWords.map((w, i) => (
        <div
          key={w}
          className="absolute text-[10px] uppercase tracking-[0.3em] font-display text-primary/30 animate-drift"
          style={{
            top: `${(i * 11 + 12) % 90}%`,
            left: `${(i * 17 + 8) % 90}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${14 + (i % 5) * 2}s`,
          }}
        >
          {w}
        </div>
      ))}

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.10_0.04_265/0.6)_100%)]" />
    </div>
  );
}
