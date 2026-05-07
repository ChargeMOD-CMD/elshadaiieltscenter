import { useEffect, useState } from "react";
import { Globe2, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#ai-mentor", label: "AI Mentor" },
  { href: "#success", label: "Success" },
  { href: "#mock", label: "Mock Test" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all ${
          (scrolled || open) ? "glass rounded-2xl mx-3 sm:mx-6" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
              <Globe2 className="h-5 w-5 text-primary-foreground" />
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/30 group-hover:ring-white/60 transition" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-bold tracking-wide">
                ELSHADAI
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                IELTS Center
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#enroll"
              className="px-5 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow hover:scale-[1.03] transition-transform"
            >
              Enroll Now
            </a>
          </div>

          <button
            className="lg:hidden h-10 w-10 grid place-items-center rounded-lg glass"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden absolute top-full left-4 right-4 mt-4 transition-all duration-300 origin-top ${
            open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="bg-surface/95 backdrop-blur-xl rounded-3xl p-6 shadow-elegant border border-white/10 flex flex-col gap-4">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-lg font-semibold hover:bg-white/5 transition-colors animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#enroll"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-4 rounded-2xl bg-gradient-primary text-primary-foreground text-center font-bold text-lg shadow-glow animate-fade-up"
              style={{ animationDelay: `${links.length * 0.05}s` }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
