import { SiCisco, SiIntuit } from "react-icons/si";
import gateGourmetLogo from "@assets/GateGourmet_1765907549520.png";
import michelinLogo from "@assets/Michelin_1765908334493.png";
import ymcaLogo from "@assets/YMCA_1765908994828.png";
import chobaniLogo from "@assets/chobani_1765910014558.png";
import attLogo from "@assets/ATT_1765910290630.png";
import pennMutualLogo from "@assets/Penn_1765911000551.png";
import russellStoverLogo from "@assets/RussellStover_1765911173856.png";

const LogoText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`text-lg md:text-xl font-bold tracking-tight text-white ${className}`}>
    {children}
  </span>
);

export default function TrustLogos() {
  return (
    <section className="pt-12 pb-8 md:pt-10 md:pb-10 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-10">
          Experience across teams at leading organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div
            className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-80"
            data-testid="logo-gategourmet"
          >
            <img src={gateGourmetLogo} alt="Gate Gourmet" className="h-8 w-auto" />
          </div>
          
          <div
            className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-80"
            data-testid="logo-cisco"
          >
            <SiCisco className="h-16 w-auto text-white" />
          </div>
          
          <div
            className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-80"
            data-testid="logo-michelin"
          >
            <img src={michelinLogo} alt="Michelin" className="h-10 w-auto" />
          </div>
          
          <div
            className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-80"
            data-testid="logo-att"
          >
            <img src={attLogo} alt="AT&T" className="h-16 w-auto" />
          </div>
          
          <div
            className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-80"
            data-testid="logo-russellstover"
          >
            <img src={russellStoverLogo} alt="Russell Stover" className="h-6 w-auto" />
          </div>
          
          <div
            className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-80"
            data-testid="logo-intuit"
          >
            <SiIntuit className="h-14 w-auto text-white" />
          </div>
          
          <div
            className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-80"
            data-testid="logo-pennmutual"
          >
            <img src={pennMutualLogo} alt="Penn Mutual" className="h-8 w-auto" />
          </div>
          
          <div
            className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-80"
            data-testid="logo-ymca"
          >
            <img src={ymcaLogo} alt="YMCA" className="h-12 w-auto" />
          </div>
          
          <div
            className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-80"
            data-testid="logo-chobani"
          >
            <img src={chobaniLogo} alt="Chobani" className="h-8 w-auto" />
          </div>
          
          <div
            className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-80"
            data-testid="logo-jpmorgan"
          >
            <span className="text-xl md:text-2xl font-normal text-white" style={{ fontFamily: "'Libre Baskerville', serif" }}>JPMorgan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
