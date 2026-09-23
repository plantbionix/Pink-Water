import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.plantbionix.com"),
  title: "Plant Bionix — something is coming",
  description:
    "Plain water is a missed opportunity. Something is coming to fix that. Join the waitlist to be the first to know.",
  alternates: {
    canonical: "https://www.plantbionix.com",
  },
  verification: {
    google: "M5_4zQdiSBw8xVa9JCPC_CKDsV9yhrUaQMj9DtQrkt8",
  },
  openGraph: {
    title: "Plant Bionix — something is coming",
    description: "Plain water is a missed opportunity. Join the waitlist.",
    url: "https://www.plantbionix.com",
    siteName: "Plant Bionix",
    images: ["/products/product-0189.jpg"],
    locale: "en_IN",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Plant Bionix",
  url: "https://www.plantbionix.com",
  logo: "https://www.plantbionix.com/favicon.ico",
  email: "sales@plantbionix.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
