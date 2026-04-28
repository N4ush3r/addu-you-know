import Hero from "./components/Hero";
import BenefitPanel from "./components/BenefitPanel";
import Footer from "./components/Footer";
import { benefits } from "./data/benefits";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] overflow-x-hidden">
      <Hero />
      <section className="comic-strip">
        {benefits.map((benefit, index) => (
          <BenefitPanel key={benefit.id} benefit={benefit} index={index} />
        ))}
      </section>
      <Footer />
    </main>
  );
}
