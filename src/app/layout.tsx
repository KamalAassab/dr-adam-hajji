import type { Metadata } from "next";
import { Alata, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/layout/SmoothScrolling";

const alata = Alata({
  weight: "400",
  variable: "--font-alata",
  subsets: ["latin"],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Dr.ADAM HAJJI Dental Clinic – Exceptional Dental Care",
  description: "Dr.ADAM HAJJI Dental Clinic offers exceptional dental care for the whole family in El Jadida. From routine checkups to advanced treatments, our compassionate team ensures your smile stays healthy.",
};

import { LanguageProvider } from "@/i18n/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${alata.variable} ${ibmPlexArabic.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>
          <SmoothScrolling>
            <Navbar />
            <main className="flex-1 overflow-hidden">{children}</main>
            <Footer />
          </SmoothScrolling>
        </LanguageProvider>
      </body>
    </html>
  );
}
