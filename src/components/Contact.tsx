import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Linkedin, Globe2 } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Contact</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Let's talk about your <span className="text-gradient">future</span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <ContactCard icon={Phone} label="Call us" value="+91 9962994069" href="tel:+919962994069" />
          <ContactCard icon={MessageCircle} label="WhatsApp" value="+91 9962994069" href="https://wa.me/919962994069" />
          <ContactCard icon={Mail} label="Email" value="info@elshadaiielts.com" href="mailto:info@elshadaiielts.com" />
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl glass overflow-hidden h-80 border border-border">
            <iframe
              title="ELSHADAI IELTS Center map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62208.07050322029!2d80.18532!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full grayscale-[40%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-3xl bg-gradient-card border border-border p-8">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-display font-semibold">Visit our center</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Chennai, Tamil Nadu, India<br />
              Update exact center address
            </p>
            <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
            <p className="mt-2 text-sm">Mon–Fri · 8AM – 9PM</p>
            <p className="text-sm">Sat–Sun · 9AM – 6PM</p>

            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Linkedin, Globe2].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-primary/20 hover:text-primary transition"
                >
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href }: any) {
  return (
    <a
      href={href}
      className="group p-6 rounded-3xl bg-gradient-card border border-border hover:border-primary/40 transition flex items-center gap-4"
    >
      <div className="h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-display font-semibold mt-0.5">{value}</div>
      </div>
    </a>
  );
}
