import type { Metadata } from "next";
import { Poppins, Baloo_2 } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.plantbionix.com"),
  title: "PLANT BIONIX | Functional Water",
  description:
    "Kerala's original functional water, one pack per litre, nothing else added. Meet Pink Water, DAHA Amber and DAHA Gold. Join the waitlist.",
  alternates: {
    canonical: "https://www.plantbionix.com",
  },
  verification: {
    google: "M5_4zQdiSBw8xVa9JCPC_CKDsV9yhrUaQMj9DtQrkt8",
  },
  openGraph: {
    title: "PLANT BIONIX | Functional Water",
    description:
      "Kerala's functional water, one pack per litre, nothing else added.",
    url: "https://www.plantbionix.com",
    siteName: "PLANT BIONIX",
    images: ["/products/product-0189.jpg"],
    locale: "en_IN",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PLANT BIONIX",
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
      className={`${poppins.variable} ${baloo.variable} h-full antialiased`}
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
