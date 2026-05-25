// =========================================================
// /components/Button.tsx
// DUAL-RHYTHM ARCHITECTURE™
// System Interaction Layer
// FINAL SYSTEM VERSION
// =========================================================

import Link from "next/link";
import { ReactNode } from "react";

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
  children: ReactNode;

  href?: string;

  external?: boolean;

  variant?: ButtonVariant;

  size?: ButtonSize;

  fullWidth?: boolean;

  icon?: ReactNode;

  className?: string;

  onClick?: () => void;
}

// =========================================================
// COMPONENT
// =========================================================

export default function Button({
  children,

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

        <span>{children}</span>
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

        <span>{children}</span>
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

      <span>{children}</span>
    </button>
  );
}
