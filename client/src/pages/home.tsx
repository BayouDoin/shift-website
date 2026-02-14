import { useState } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import TrustLogos from "@/components/landing/TrustLogos";
import Services from "@/components/landing/Services";
import Results from "@/components/landing/Results";
import Process from "@/components/landing/Process";
import BottomCTA from "@/components/landing/BottomCTA";
import Footer from "@/components/landing/Footer";
import BookingModal from "@/components/landing/BookingModal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const openBookingModal = () => setBookingModalOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onBookCall={openBookingModal} />
      <main>
        <Hero onBookCall={openBookingModal} />
        <TrustLogos />
        <Services />
        <Results />
        <Process />
        <BottomCTA onBookCall={openBookingModal} />
      </main>
      <Footer onBookCall={openBookingModal} />
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </div>
  );
}
