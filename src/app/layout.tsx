import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SkipToContent from "@/components/accessibility/SkipToContent";
import { TrustBar } from "@/components/trust/TrustSignals";
import { cn } from "@/lib/utils";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  preload: true,
});

const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "FNS50322 Course Comparison",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://fns50322.com.au",
  code: process.env.NEXT_PUBLIC_QUALIFICATION_CODE || "FNS50322",
  qualification: process.env.NEXT_PUBLIC_QUALIFICATION_NAME || "Diploma of Finance and Mortgage Broking Management",
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.code} ${siteConfig.qualification} | Compare RTOs Australia`,
    template: `%s | ${siteConfig.code}`,
  },
  description: `Independent comparison of ${siteConfig.code} ${siteConfig.qualification} providers. Compare mortgage broker courses, transparent pricing, completion rates, and career outcomes. Become a licensed mortgage broker in Australia.`,
  keywords: [
    "FNS50322",
    "FNS50322 assessment answers",
    "Diploma of Finance Mortgage Broking course",
    "Become a mortgage broker Australia",
    "FNS50322 vs FNS50320",
    "mortgage broker qualification",
    "MFAA membership requirements",
    "FBAA accredited courses",
    "finance broker training",
    "credit representative course",
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.code} Course Comparison | Become a Mortgage Broker`,
    description: `Find the best ${siteConfig.qualification} provider in Australia. Compare RTOs, pricing, and outcomes.`,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#047857",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteSchema()),
          }}
        />
      </head>
      <body
        className={cn(
          "font-body antialiased min-h-screen flex flex-col",
          "overflow-x-hidden max-w-[100vw]",
          inter.variable,
          poppins.variable
        )}
      >
        <SkipToContent />
        <Header />
        <TrustBar />
        <main id="main-content" className="flex-grow overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <Toaster position="bottom-right" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
