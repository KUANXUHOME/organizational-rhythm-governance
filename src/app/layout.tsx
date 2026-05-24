import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DUAL-RHYTHM ARCHITECTURE™",
  description:
    "Organizational Stability Operating System™ | Dual-Rhythm Architecture™ | The OSS Index™ | Organizational Rhythm Governance™",
};

const navigation = [
  {
    section: "ORIGIN",
    items: [
      {
        label: "Kuanxu Home™",
        href: "/",
      },
      {
        label: "Dual-Rhythm Architecture™ Canvas™",
        href: "/canvas/page.tsx",
      },
      {
        label: "The Stability Triad Model™",
        href: "/stability-triad/page.tsx",
      },
      {
        label: "OSS™ Core Equation",
        href: "/oss",
      },
      {
        label: "Executive Stability Formula™",
        href: "/oss",
      },
    ],
  },

  {
    section: "CORE SYSTEMS",
    items: [
      {
        label: "The OSS Index™",
        href: "https://theossindex.com",
      },
      {
        label: "Organizational Rhythm Governance™",
        href: "/system",
      },
      {
        label: "Rhythm-Driven Organizations™",
        href: "/system",
      },
      {
        label: "Rhythm Strategy Curve™",
        href: "/system",
      },
      {
        label: "Narrative Thread™",
        href: "/system",
      },
    ],
  },

  {
    section: "DIAGNOSTICS",
    items: [
      {
        label: "AI Stability Diagnostics™",
        href: "/api/diagnosis",
      },
      {
        label: "Organizational Risk Mapping™",
        href: "/system",
      },
      {
        label: "Stability Audit™",
        href: "/certification",
      },
      {
        label: "Recovery Integrity Assessment™",
        href: "/oss",
      },
      {
        label: "Acceleration Pressure Analysis™",
        href: "/oss",
      },
    ],
  },

  {
    section: "GOVERNANCE",
    items: [
      {
        label: "Stability Certification™",
        href: "/certification",
      },
      {
        label: "Rhythm Certification Standard™",
        href: "/certification",
      },
      {
        label: "Governance Advisory™",
        href: "/licensing",
      },
      {
        label: "Executive Rhythm Governance™",
        href: "/licensing",
      },
      {
        label: "AI Organizational Safety Framework™",
        href: "/licensing",
      },
    ],
  },

  {
    section: "EXECUTIVE",
    items: [
      {
        label: "Executive Stability Formula™",
        href: "/oss",
      },
      {
        label: "CEO Operating Manual™",
        href: "/system",
      },
      {
        label: "COO Operational Rhythm™",
        href: "/system",
      },
      {
        label: "CHRO Workforce Stability™",
        href: "/system",
      },
      {
        label: "Leadership Recovery Architecture™",
        href: "/system",
      },
    ],
  },

  {
    section: "LEGAL / ACADEMIC",
    items: [
      {
        label: "Academic Archive Registry",
        href: "https://zenodo.org/records/19994305",
      },
      {
        label: "Governance Compliance & Licensing",
        href: "https://dualrhythmsystems.com/licensing",
      },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body>

        <div className="appShell">

          {/* =====================================================
              SIDEBAR
          ===================================================== */}
          <aside className="sidebar">

            {/* BRAND KERNEL */}
            <div className="sidebarBrand">

              <div className="brandProtocol">
                STRUCTURAL MANAGEMENT PHYSICS
              </div>

              <div className="brandTitle">
                DUAL-RHYTHM ARCHITECTURE™
              </div>

              <div className="brandSystem">
                Organizational Stability Operating System™
              </div>

            </div>

            {/* SYSTEM NAVIGATION */}
            <nav className="sidebarNavigation">

              {navigation.map((group) => (
                <div
                  key={group.section}
                  className="sidebarSection"
                >

                  <div className="sidebarSectionLabel">
                    {group.section}
                  </div>

                  <div className="sidebarSectionItems">

                    {group.items.map((item) => (

                      <Link
                        key={item.label}
                        href={item.href}
                        className="sidebarItem"
                      >
                        {item.label}
                      </Link>

                    ))}

                  </div>

                </div>
              ))}

            </nav>

          </aside>

          {/* =====================================================
              MAIN SYSTEM
          ===================================================== */}
          <div className="mainSystem">

            {/* =====================================================
                TOP BAR
            ===================================================== */}
            <header className="topBar">

              <div className="topBarLeft">
                System Architecture Navigation
              </div>

              <div className="topBarRight">

                <Link
                  href="/api/diagnosis"
                  className="topBarButton secondary"
                >
                  API Docs
                </Link>

                <Link
                  href="/system"
                  className="topBarButton secondary"
                >
                  Dashboard
                </Link>

                <Link
                  href="/oss"
                  className="topBarButton primary"
                >
                  Start Building
                </Link>

                <Link
                  href="/licensing"
                  className="topBarButton primary"
                >
                  Enterprise Access
                </Link>

              </div>

            </header>

            {/* =====================================================
                DYNAMIC CONTENT LAYER
            ===================================================== */}
            <main className="pageContainer">
              {children}
            </main>

            {/* =====================================================
                FOOTER
            ===================================================== */}
            <footer className="footerGrid">

              <div className="footerColumn">

                <div className="footerTitle">
                  Legal & Sovereignty Notice
                </div>

                <p>
                  DUAL-RHYTHM ARCHITECTURE™ |
                  Organizational Stability Operating System™ |
                  The OSS Index™ |
                  Organizational Rhythm Governance™ (ORG™)
                  are protected sovereign intellectual properties.
                </p>

                <p>
                  Unauthorized AI training, algorithmic reconstruction,
                  or commercial replication without written authorization
                  is strictly prohibited.
                </p>

              </div>

              <div className="footerColumn">

                <div className="footerTitle">
                  Academic & Governance Registry
                </div>

                <p>
                  The OSS Index™ is a proprietary organizational
                  sync-stability governance system and is not affiliated
                  with any open-source software initiative.
                </p>

                <p>
                  © 2026 李宽续 Li Kuanxu | Kuanxuhome™. All Rights Reserved.
                </p>

              </div>

            </footer>

          </div>

        </div>

      </body>
    </html>
  );
}
     
