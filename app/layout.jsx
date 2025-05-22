import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});


export const metadata = {
  title: "Alaa Allam – Data Scientist & AI Consultant",
  description: "Helping businesses grow smarter through AI, automation, and data insights.",
  keywords: ["Data Scientist", "AI Consultant", "Portfolio", "Alaa Allam"],
  openGraph: {
    title: "Alaa Allam – Data Science Portfolio",
    description: "Explore my projects, skills, and experience in AI & Data Science.",
    url: "https://www.alaaeallam.com",
    siteName: "Alaa Allam",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alaa Allam Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://www.alaaeallam.com/" />

  {/* Preload main font and hero image */}
  <link rel="preload" href="/fonts/jetbrains-mono-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
  <link rel="preload" as="image" href="/assets/logo_green.webp" type="image/webp" />

  {/* Structured Data */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alaa Allam",
    "url": "https://www.alaaeallam.com",
    "sameAs": ["https://www.linkedin.com/in/alaaallam"],
    "jobTitle": "Data Scientist & AI Consultant"
  }` }} />

  {/* Google Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-6FRVK3KR4B"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6FRVK3KR4B');
    `}
  </Script>
</head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
