import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nvk-webiste.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NKV Enterprises | Home Appliance Repair Service",
    template: "%s | NKV Enterprises",
  },
  description:
    "NKV Enterprises provides doorstep washing machine, chimney, AC, microwave, geyser, purifier, refrigerator, and home appliance repair services with fast technician visits.",
  keywords: [
    "NKV Enterprises",
    "NVK Enterprises",
    "NVK Enterprices",
    "NKV Enterprices",
    "nvk enterprices",
    "nvk website",
    "repair those products",
    "appliance repair service",
    "home appliance repair",
    "doorstep appliance repair",
    "washing machine repair",
    "washing machine service",
    "chimney service",
    "chimney repair",
    "kitchen chimney cleaning",
    "AC repair",
    "AC service",
    "microwave repair",
    "microwave oven repair",
    "geyser repair",
    "geyser service",
    "purifier service",
    "water purifier repair",
    "refrigerator repair",
    "fridge repair",
    "Hyderabad appliance repair",
    "Secunderabad appliance repair",
  ],
  applicationName: "NKV Enterprises",
  authors: [{ name: "NKV Enterprises" }],
  creator: "NKV Enterprises",
  publisher: "NKV Enterprises",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "NKV Enterprises | Home Appliance Repair Service",
    description:
      "Book doorstep appliance repair for washing machines, chimneys, ACs, microwaves, geysers, purifiers, and more. Visit cost starts at Rs.199.",
    siteName: "NKV Enterprises",
  },
  twitter: {
    card: "summary_large_image",
    title: "NKV Enterprises | Home Appliance Repair Service",
    description:
      "Fast doorstep home appliance repair service by NKV Enterprises. Call or WhatsApp for technician support.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
