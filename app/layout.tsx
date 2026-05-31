import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NKV Enterprises | Appliance Repair Service",
  description:
    "NKV Enterprises provides professional washing machine, chimney, AC, refrigerator, and appliance repair services with fast doorstep support.",
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
