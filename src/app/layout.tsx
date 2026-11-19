import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FurnMaren | Quiet Objects for Rooms",
  description: "Furniture designed for modern living.",
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