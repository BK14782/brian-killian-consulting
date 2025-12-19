import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "Brian Killian Consulting | Commercial Property & Portfolio Strategy",
    template: "%s | Brian Killian Consulting",
  },
  description:
    "Operational and financial advisory for commercial real estate, specializing in operational reporting, budgeting, business planning, portfolio strategy, asset performance, capital planning, and owner/investor reporting.",
  alternates: {
    canonical: "https://briankillianconsulting.com",
  },
  verification: {
    google: <meta name="google-site-verification" content="3C_UIVfc0azY997QS-qHd-VfVxCvsTIIrPnKaDxHNGw" />
  },
  openGraph: {
    type: "website",
    url: "https://briankillianconsulting.com",
    siteName: "Brian Killian Consulting",
    title: "Brian Killian Consulting | Commercial Property & Portfolio Strategy",
    description:
      "Operational and financial advisory for commercial real estate, specializing in operational reporting, budgeting, business planning, portfolio strategy, asset performance, capital planning, and owner/investor reporting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Killian Consulting | Commercial Property & Portfolio Strategy",
    description:
      "Operational and financial advisory for commercial real estate, specializing in operational reporting, budgeting, business planning, portfolio strategy, asset performance, capital planning, and owner/investor reporting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
