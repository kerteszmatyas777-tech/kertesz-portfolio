import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kerteszmatyas.hu"),
  title: {
    default: "Kertész Mátyás | Brand Identity & Graphic Designer",
    template: "%s | Kertész Mátyás",
  },
  description:
    "Kertész Mátyás is a Hungary-based brand identity and graphic designer creating memorable visual identities, print design and digital communication for ambitious businesses.",
  keywords: [
    "brand identity designer",
    "graphic designer Hungary",
    "visual identity",
    "logo design",
    "print design",
    "arculattervező",
    "grafikus",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Kertész Mátyás",
    title: "Kertész Mátyás | Brand Identity & Graphic Designer",
    description:
      "Strategic brand identities, print design and visual communication for ambitious businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kertész Mátyás | Brand Identity & Graphic Designer",
    description:
      "Strategic brand identities, print design and visual communication for ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kertész Mátyás",
    url: "https://www.kerteszmatyas.hu",
    email: "kerteszmatyas777@gmail.com",
    description:
      "Brand identity and graphic design for ambitious businesses in Hungary and beyond.",
    areaServed: "Hungary",
    sameAs: [
      "https://www.instagram.com/kerteszmatyas_grafikus/",
      "https://www.linkedin.com/in/m%C3%A1ty%C3%A1s-kert%C3%A9sz-89856a267",
      "https://www.facebook.com/profile.php?id=61571713991529",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${montserrat.variable} min-h-screen bg-[#F8F9FB] antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
