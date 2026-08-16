import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileContactBar from "@/components/layout/MobileContactBar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Solar Company in Karachi`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "solar company Karachi",
    "solar installation Karachi",
    "hybrid solar system Karachi",
    "solar panels Karachi",
    "solar inverter Karachi",
    "lithium battery solar Karachi",
    "residential solar Karachi",
    "commercial solar Karachi",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Solar Company in Karachi`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Solar Company in Karachi`,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  telephone: site.phoneDisplay,
  email: site.email,
  areaServed: site.serviceArea,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "PK",
  },
  url: site.url,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pb-[64px] md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileContactBar />
      </body>
    </html>
  );
}
