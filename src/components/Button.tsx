// =========================================================
// /components/Button.tsx
// DUAL-RHYTHM ARCHITECTURE™
// System Interaction Layer
// FINAL ENTERPRISE VERSION
// =========================================================

import Link from "next/link";
import React from "react";

// =========================================================
// TYPES
// =========================================================

type ButtonVariant =
  | "primary"
  | "secondary"
  | "enterprise"
  | "governance";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

interface ButtonProps {
  label: string;

  href?: string;

  external?: boolean;

  variant?: ButtonVariant;

  size?: ButtonSize;

  fullWidth?: boolean;

  icon?: React.ReactNode;

  className?: string;

  onClick?: () => void;
}

// =========================================================
// COMPONENT
// =========================================================

export default function Button({
  label,

  href,

  external = false,

  variant = "primary",

  size = "md",

  fullWidth = false,

  icon,

  className = "",

  onClick,
}: ButtonProps) {

  // =====================================================
  // SYSTEM CLASS MAP
  // =====================================================

  const variantClassMap = {
    primary: "buttonPrimary",

    secondary: "buttonSecondary",

    enterprise: "buttonEnterprise",

    governance: "buttonGovernance",
  };

  const sizeClassMap = {
    sm: "buttonSmall",

    md: "buttonMedium",

    lg: "buttonLarge",
  };

  const buttonClassName = `
    systemButton
    ${variantClassMap[variant]}
    ${sizeClassMap[size]}
    ${fullWidth ? "buttonFullWidth" : ""}
    ${className}
  `;

  // =====================================================
  // EXTERNAL LINK
  // =====================================================

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClassName}
      >
        {icon && (
          <span className="buttonIcon">
            {icon}
          </span>
        )}

        <span>{label}</span>
      </a>
    );
  }

  // =====================================================
  // INTERNAL LINK
  // =====================================================

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClassName}
      >
        {icon && (
          <span className="buttonIcon">
            {icon}
          </span>
        )}

        <span>{label}</span>
      </Link>
    );
  }

  // =====================================================
  // STANDARD BUTTON
  // =====================================================

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClassName}
    >
      {icon && (
        <span className="buttonIcon">
          {icon}
        </span>
      )}

      <span>{label}</span>
    </button>
  );
}





④ /components/FormulaBlock.tsx

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

