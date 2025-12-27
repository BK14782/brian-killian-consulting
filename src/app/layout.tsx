import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SchemaPerson from "@/components/SchemaPerson";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://briankillianconsulting.com"),
  title: {
    default:
      "Brian Killian Consulting | Commercial/Residential Property & Portfolio Strategy",
    template: "%s | Brian Killian Consulting",
  },
  description:
    "Nationwide operational and financial advisory for commercial/residential real estate, specializing in operational reporting, budgeting, business planning, portfolio strategy, asset performance, capital planning, and owner/investor reporting.",
  alternates: {
    canonical: "https://briankillianconsulting.com",
  },
  verification: {
    google: "3C_UIVfc0azY997QS-qHd-VfVxCvsTIIrPnKaDxHNGw",
  },
  openGraph: {
    type: "website",
    url: "https://briankillianconsulting.com",
    siteName: "Brian Killian Consulting",
    title: "Brian Killian Consulting | Commercial Property & Portfolio Strategy",
    description:
      "Nationwide operational and financial advisory for commercial/residential real estate, specializing in operational reporting, budgeting, business planning, portfolio strategy, asset performance, capital planning, and owner/investor reporting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Killian Consulting | Commercial Property & Portfolio Strategy",
    description:
      "Nationwide operational and financial advisory for commercial/residential real estate, specializing in operational reporting, budgeting, business planning, portfolio strategy, asset performance, capital planning, and owner/investor reporting.",
  },
};

// NOTE: the URL to a public asset should NOT include /public
// If your file is /public/banners/logo-01.jpg, the URL is /banners/logo-01.jpg
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://briankillianconsulting.com/#organization",
  name: "Brian Killian Consulting",
  url: "https://briankillianconsulting.com",
  logo: "https://briankillianconsulting.com/banners/logo-01.jpg",
  sameAs: ["https://www.linkedin.com/in/briannkillian/"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["English"],
      url: "https://briankillianconsulting.com/contact",
    },
  ],
  areaServed: "US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {/* Organization schema (sitewide) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        {/* Person schema (sitewide) */}
        <SchemaPerson />

        {/* App content */}
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9556P3Q5N4"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9556P3Q5N4');
          `}
        </Script>
      </body>
    </html>
  );
}
