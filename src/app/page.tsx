import Button from "@/components/Button";
import FormulaBlock from "@/components/FormulaBlock";

export default function HomePage() {
  return (
    <div className="container">

      <p className="subtitle">
        In the AI era, competitive advantage shifts from speed
        to structural coherence.
        <br /><br />

        AI acceleration is manufacturing systemic organizational
        instability. Existing management theory cannot fully
        explain or govern this phenomenon.
        <br /><br />

        DUAL-RHYTHM ARCHITECTURE™ provides the structural solution.
      </p>

      {/* =====================================================
          POSITIONING BLOCK
      ===================================================== */}
      <section className="card">

        <div className="formulaTitle">
          A NEW MANAGEMENT CATEGORY
        </div>

        <div className="formula">
          Organizational Rhythm Governance™ (ORG™)
        </div>

        <p className="formulaDescription">
          Define stability under acceleration.
          <br />
          Stability as Competitive Advantage.
        </p>

      </section>

      {/* =====================================================
          CANONICAL FORMULAS
      ===================================================== */}
      <FormulaBlock
        label="The Structural Law of Stability"
        formula="Stability = ER × PR × RI"
        description="A structural framework for organizational synchronization, recovery integrity, and sustainable performance under acceleration."
      />

      <FormulaBlock
        label="OSS™ Core Equation"
        formula="OSS™ = f ( ER × PR × RI ) / A"
        description="The world’s first organizational sync-stability measurement equation."
      />

      <FormulaBlock
        label="Executive Stability Formula™"
        formula="Instability Risk ∝ Acceleration / Recovery Integrity"
        description="A structural management physics model explaining instability generation under AI-driven acceleration."
      />

      {/* =====================================================
          SYSTEM POSITIONING
      ===================================================== */}
      <section className="registry">
  <div className="registryItem">
    The World&apos;s Only Organizational Sync-Stability Index System™
    <br /><br />
    Organizational Stability Rhythm Governance &amp; Security Architecture™
  </div>
</section>

</div>
  );
}
