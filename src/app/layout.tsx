import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
    "Nationwide operational and financial advisory for commercial real estate, specializing in operational reporting, budgeting, business planning, portfolio strategy, asset performance, capital planning, and owner/investor reporting.",
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
      "Nationwide operational and financial advisory for commercial real estate, specializing in operational reporting, budgeting, business planning, portfolio strategy, asset performance, capital planning, and owner/investor reporting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Killian Consulting | Commercial Property & Portfolio Strategy",
    description:
      "Nationwide operational and financial advisory for commercial real estate, specializing in operational reporting, budgeting, business planning, portfolio strategy, asset performance, capital planning, and owner/investor reporting.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

