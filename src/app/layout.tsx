import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khandaker Industries LLC",
  description: "Premier manpower supply, visa processing and travel solutions — Bangladesh to Saudi Arabia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
