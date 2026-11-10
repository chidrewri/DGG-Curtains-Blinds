import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import { getSiteUrl } from "@/config/site";
import "./globals.css";

// "CURTAINS & BLINDS" lettering in the brand kit.
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lato",
});

// "DGG" lettering in the brand kit (DejaVu Serif, free license, self-hosted).
const dejavuSerif = localFont({
  src: [
    { path: "../fonts/DejaVuSerif-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/DejaVuSerif-Italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/DejaVuSerif-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  display: "swap",
  variable: "--font-dejavu-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
};

export const viewport: Viewport = {
  themeColor: "#0B2744",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${lato.variable} ${dejavuSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
