import type { Metadata } from "next";
import { Playfair_Display, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
    variable: "--font-jakarta",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Style & Space | Premium Interior Design & Architecture",
    description:
        "Transform your space with Style & Space. Premium interior design and architecture services for residential, commercial, and educational spaces in Guwahati, Assam.",
    keywords: [
        "interior design",
        "architecture",
        "Guwahati",
        "Assam",
        "home design",
        "commercial design",
        "Style and Space",
    ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body
              className={`${playfair.variable} ${inter.variable} ${jakarta.variable} antialiased`}
          >
              {children}
          </body>
      </html>
  );
}
