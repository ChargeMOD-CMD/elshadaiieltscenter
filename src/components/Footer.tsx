import { Globe2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
            <Globe2 className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <div className="font-display font-bold">ELSHADAI IELTS CENTER</div>
            <div className="text-xs text-muted-foreground">Unlock Your Global Future</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ELSHADAI IELTS Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
