import { Linkedin } from "lucide-react";
import { SiUpwork } from "react-icons/si";

interface FooterProps {
  onBookCall: () => void;
}

export default function Footer({ onBookCall }: FooterProps) {
  return (
    <footer className="pt-12 pb-10 md:pt-14 md:pb-12 border-t border-border bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-sm text-muted-foreground/80 text-center tracking-wide font-light mb-8">
          Clarity-first AI systems. No pressure. No long-term commitments.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto items-start">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tight mb-2">SHIFT</h3>
            <div 
              className="footer-tagline"
              style={{ maxWidth: '240px', textAlign: 'left' }}
            >
              <p className="text-xs text-muted-foreground/70">
                Enterprise-grade AI that removes<br />friction from everyday work.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 text-center md:text-left">
            <div className="space-y-2">
              <h4 className="text-sm font-bold">Explore</h4>
              <nav className="flex flex-col gap-1.5">
                <a
                  href="#services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-services"
                >
                  Services
                </a>
                <a
                  href="#results"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-results"
                >
                  Results
                </a>
                <a
                  href="#process"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-process"
                >
                  How It Works
                </a>
                <button
                  onClick={onBookCall}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground text-left"
                  data-testid="link-footer-contact"
                >
                  Contact / Book a Call
                </button>
              </nav>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold">Connect</h4>
              <div className="flex flex-col gap-1.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1.5"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1.5"
                  data-testid="link-upwork"
                >
                  <SiUpwork className="h-3.5 w-3.5" />
                  <span>Upwork</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Shift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
