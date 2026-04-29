import Hero from "./components/Hero";
import MobileStrip from "./components/MobileStrip";
import DesktopLayout from "./components/DesktopLayout";
import Footer from "./components/Footer";
import { benefits } from "./data/benefits";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] overflow-x-hidden">
      <Hero />

      {/* Mobile: single-column comic strip */}
      <MobileStrip benefits={benefits} />

      {/* Desktop: 2-col grid with sidebar */}
      <DesktopLayout benefits={benefits} />

      <Footer />
    </main>
  );
}
