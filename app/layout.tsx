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
  title: "Plant Bionix — functional water",
  description:
    "Three Kerala heartwoods, portioned into single-serve sachets. One per litre, nothing else added. Daha Pink, Daha Amber and Daha Gold. Join the waitlist.",
  openGraph: {
    title: "Plant Bionix — functional water",
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
      className={`${poppins.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
