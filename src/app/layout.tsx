import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Khandaker Industries LLC",
  description: "Premier manpower supply, visa processing and travel solutions — Bangladesh to Saudi Arabia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
