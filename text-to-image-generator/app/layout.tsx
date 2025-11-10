import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Text to Image Generator",
  description: "Generate images from text descriptions using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
