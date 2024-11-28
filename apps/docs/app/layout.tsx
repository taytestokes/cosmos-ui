import type { Metadata } from "next";
import Link from "next/link";
import { ThemeProvider } from "./_components/theme-provider/theme-provider";
import { ThemeSwitcher } from "./_components/theme-switcher/theme-switcher";

import "@spirit-ui/theme/reset";
import "@spirit-ui/theme/styles";

import * as styles from "./layout.css";

export const metadata: Metadata = {
  title: "Spirit UI",
  description: "Documentation for the Spirit UI Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html className={styles.html} lang="en">
        <body>
          <div className={styles.container}>
            <header className={styles.header}>
              <div className={styles.headerContent}>
                <h3>Spirit UI</h3>
                <ThemeSwitcher />
              </div>
            </header>
            <main className={styles.main}>
              <aside className={styles.sidebar}>
                <div className={styles.sidebarSection}>
                  <p className={styles.sidebarSectionLabel}>Getting Started</p>
                  <nav className={styles.sidebarSectionNav}>
                    <li>
                      <Link
                        className={styles.sidebarSectionLink}
                        href="/introduction"
                      >
                        <span>Introduction</span>
                      </Link>
                    </li>
                  </nav>
                </div>
                <div className={styles.sidebarSection}>
                  <p className={styles.sidebarSectionLabel}>Foundations</p>
                  <nav className={styles.sidebarSectionNav}>
                    <li>
                      <Link
                        className={styles.sidebarSectionLink}
                        href="/colors"
                      >
                        <span>Colors</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={styles.sidebarSectionLink}
                        href="/colors"
                      >
                        <span>Spacing</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={styles.sidebarSectionLink}
                        href="/colors"
                      >
                        <span>Typography</span>
                      </Link>
                    </li>
                  </nav>
                </div>
              </aside>
              <div className={styles.content}>{children}</div>
            </main>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
