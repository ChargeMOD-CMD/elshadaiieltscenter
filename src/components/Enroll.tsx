import { useState } from "react";
import { Send } from "lucide-react";

const courses = ["IELTS Academic", "IELTS General", "Crash Course", "Online Coaching", "1-to-1 Mentorship", "Spoken English"];

export function Enroll() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="enroll" className="relative py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-card border border-border p-8 sm:p-12 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gradient-primary opacity-25 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">Enroll today</div>
              <h2 className="mt-3 font-display text-4xl font-bold">
                Begin your <span className="text-gradient">global journey</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Request a free counseling session. Our mentors will design your personalized roadmap within 24 hours.
              </p>
              <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <div>📞 +91 9962994069</div>
                <div>✉️ info@elshadaiielts.com</div>
                <div>🕒 Mon–Fri 8AM–9PM · Sat–Sun 9AM–6PM</div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <Field label="Full Name" id="name" />
              <Field label="Phone" id="phone" type="tel" />
              <Field label="Email" id="email" type="email" />
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Course Interest</label>
                <select className="mt-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-border focus:border-primary outline-none text-sm">
                  {courses.map((c) => (
                    <option key={c} className="bg-background">{c}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition"
              >
                {submitted ? "✓ Request Sent" : (<>Request Counseling <Send className="h-4 w-4" /></>)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={id}
        type={type}
        required
        className="mt-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-border focus:border-primary outline-none text-sm"
      />
    </div>
  );
}
