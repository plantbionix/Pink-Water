import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.plantbionix.com"),
  title: "Plant Bionix — functional water from Kerala",
  description:
    "Three Kerala heartwoods, portioned into single-serve sachets. One per litre, nothing else added. Daha Pink, Daha Amber and Daha Gold. Join the waitlist.",
  openGraph: {
    title: "Plant Bionix — functional water from Kerala",
    description:
      "Three Kerala heartwoods in single-serve sachets. One per litre, nothing else added.",
    url: "https://www.plantbionix.com",
    siteName: "Plant Bionix",
    images: ["/products/product-0189.jpg"],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
