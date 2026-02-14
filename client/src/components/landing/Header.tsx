import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@assets/Headlines_(1000_x_500_px)_1765900295959.png";

interface HeaderProps {
  onBookCall: () => void;
}

export default function Header({ onBookCall }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleBookCall = () => {
    setMobileMenuOpen(false);
    onBookCall();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border">
      <div className="max-w-7xl mx-auto px-1 lg:px-2">
        <div className="flex items-center justify-between gap-4 h-20">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="Shift" className="h-20 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              data-testid="link-results"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              data-testid="link-process"
            >
              How It Works
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3 mr-4 lg:mr-6">
            <Button
              variant="default"
              onClick={handleBookCall}
              data-testid="button-header-cta"
            >
              Book a Call
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground text-left"
                data-testid="link-services-mobile"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground text-left"
                data-testid="link-results-mobile"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground text-left"
                data-testid="link-process-mobile"
              >
                How It Works
              </button>
              <Button
                variant="default"
                className="w-full mt-2"
                onClick={handleBookCall}
                data-testid="button-header-cta-mobile"
              >
                Book a Call
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
