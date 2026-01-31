import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Configure Inter for body text (readable and accessible)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configure Playfair Display for headings (professional and safe vibe)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Trauma & Anxiety Therapy Santa Monica",
  description: "Compassionate, trauma-informed therapy for high-achieving adults in Santa Monica and throughout California via telehealth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-[#F9F7F2] text-[#2F3E36]`}
      >
        {children}
      </body>
    </html>
  );
}