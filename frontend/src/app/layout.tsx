import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Роздягайся, поговоримо — комедія, яка змінить ваше уявлення про відвертість",
  description: "Комедія «Роздягайся, поговоримо» — це справжній ураган сміху, несподіванок і пікантних моментів! Купуйте квитки онлайн.",
  keywords: [
    "театр Київ",
    "комедія Київ",
    "купити квиток на виставу",
    "Роздягайся поговоримо",
    "театр комедія",
    "афіша Київ",
    "театр 2025",
    "український театр"
  ],
  openGraph: {
    title: "Роздягайся, поговоримо — комедія, яка змінить ваше уявлення про відвертість",
    description: "Комедія «Роздягайся, поговоримо» — це справжній ураган сміху, несподіванок і пікантних моментів! Купуйте квитки онлайн.",
    url: "https://www.rozdyahaysyapohovorymo.com.ua//",
    type: "website",
    locale: "uk_UA"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://www.rozdyahaysyapohovorymo.com.ua//"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K7MHBSRZ');`}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K7MHBSRZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
