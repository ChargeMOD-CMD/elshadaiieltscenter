import { useState } from "react";
import { Send, X } from "lucide-react";

// Unique custom mentor icon: graduation cap + headset + chat spark
const MentorIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {/* Headset arc */}
    <path d="M5 18a11 11 0 0 1 22 0" />
    {/* Earcups */}
    <rect x="3.5" y="17" width="4" height="6.5" rx="1.5" fill="currentColor" fillOpacity="0.25" />
    <rect x="24.5" y="17" width="4" height="6.5" rx="1.5" fill="currentColor" fillOpacity="0.25" />
    {/* Mic */}
    <path d="M26.5 23.5v1.5a3 3 0 0 1-3 3h-3.5" />
    <circle cx="19" cy="28" r="1.2" fill="currentColor" />
    {/* Graduation cap */}
    <path d="M16 5 L26 9 L16 13 L6 9 Z" fill="currentColor" fillOpacity="0.35" />
    <path d="M10.5 10.5 V14 a5.5 3 0 0 0 11 0 V10.5" />
    <path d="M26 9 v5" />
    {/* Spark */}
    <path d="M22.5 4.5 l0.7 1.6 1.6 0.7 -1.6 0.7 -0.7 1.6 -0.7-1.6 -1.6-0.7 1.6-0.7z" fill="currentColor" />
  </svg>
);

type Msg = { role: "ai" | "user"; text: string };

const seed: Msg[] = [
  { role: "ai", text: "Welcome to ELSHADAI IELTS CENTER 🌍 How can I help your global journey today?" },
];

const quickReplies = [
  "Predict my band score",
  "Recommend a course",
  "Speaking practice",
  "Admission guidance",
];

const aiReply = (q: string) => {
  const t = q.toLowerCase();
  if (t.includes("band")) return "Based on a quick diagnostic, I'd estimate your current band around 6.5 → 7.5 with focused 6-week training.";
  if (t.includes("course") || t.includes("recommend")) return "Based on your goals, I recommend our IELTS Academic + 1-to-1 Mentorship combo.";
  if (t.includes("speaking")) return "Sure! Try this Part 1 question: 'Describe your hometown and what makes it special.'";
  if (t.includes("admission") || t.includes("enroll")) return "Easy — fill the enrollment form, or WhatsApp us at +91 9962994069 for instant counseling.";
  return "Great question! Our mentors can give you a detailed answer — would you like a free counseling call?";
};

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(seed);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Msg = { role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: aiReply(text) }]);
    }, 600);
  };

  return (
    <>
      {/* Holographic orb */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open AI Mentor"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative h-16 w-16 rounded-full bg-gradient-primary grid place-items-center shadow-glow animate-pulse-glow">
          <div className="absolute inset-0 rounded-full border border-white/30 animate-spin-slow" />
          <div className="absolute -inset-2 rounded-full border border-primary/30 animate-spin-slow" style={{ animationDirection: "reverse" }} />
          {open ? (
            <X className="relative h-6 w-6 text-primary-foreground" />
          ) : (
            <MentorIcon className="relative h-7 w-7 text-primary-foreground" />
          )}
        </div>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-4 left-4 sm:left-auto sm:w-[380px] z-50 rounded-3xl bg-surface/98 backdrop-blur-2xl border border-white/10 shadow-elegant overflow-hidden animate-fade-up">
          <div className="px-5 py-4 bg-gradient-primary text-primary-foreground flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 grid place-items-center">
                <MentorIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display font-bold text-sm">ELSHADAI AI Mentor</div>
                <div className="text-[10px] opacity-90">Online · Global Expert</div>
              </div>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="h-8 w-8 rounded-full hover:bg-white/10 grid place-items-center transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background/20">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-primary text-primary-foreground rounded-br-sm font-medium"
                      : "bg-white/5 border border-white/5 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 py-3 flex flex-wrap gap-2 border-t border-white/5">
            {quickReplies.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:text-primary transition-all"
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-4 flex items-center gap-2 border-t border-white/5 bg-background/40"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm placeholder:text-muted-foreground/50"
            />
            <button
              type="submit"
              className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105 active:scale-95 transition"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
