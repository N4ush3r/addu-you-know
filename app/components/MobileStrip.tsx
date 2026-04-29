import BenefitPanel from "../components/BenefitPanel";
import type { Benefit } from "../data/benefits";

export default function MobileStrip({ benefits }: { benefits: Benefit[] }) {
  return (
    <div className="md:hidden" style={{ maxWidth: "480px", margin: "0 auto" }}>
      {benefits.map((benefit, index) => (
        <BenefitPanel key={benefit.id} benefit={benefit} index={index} />
      ))}
    </div>
  );
}
