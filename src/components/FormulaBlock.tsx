type FormulaBlockProps = {
  label: string;
  formula: string;
  description?: string;
};

export default function FormulaBlock({
  label,
  formula,
  description,
}: FormulaBlockProps) {
  return (
    <section className="card">

      {/* =====================================================
          FORMULA LABEL
      ===================================================== */}
      <div className="formulaTitle">
        {label}
      </div>

      {/* =====================================================
          FORMULA CORE
      ===================================================== */}
      <div className="formula">
        {formula}
      </div>

      {/* =====================================================
          OPTIONAL DESCRIPTION
      ===================================================== */}
      {description && (
        <p className="formulaDescription">
          {description}
        </p>
      )}

    </section>
  );
}

