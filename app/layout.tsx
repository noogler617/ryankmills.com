import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Ryan Mills",
    template: "%s | Ryan Mills",
  },
  description:
    "Ryan Mills — ethical hacker, tinkerer, and builder. Exploring cybersecurity, hands-on projects, and creative tech solutions.",
  keywords: [
    "Ryan Mills",
    "ethical hacker",
    "cybersecurity",
    "penetration testing",
    "infosec",
    "tinkerer",
    "developer",
    "ryankmills.com",
  ],
  authors: [{ name: "Ryan Mills", url: "https://ryankmills.com" }],
  creator: "Ryan Mills",
  metadataBase: new URL("https://ryankmills.com"),
  openGraph: {
    title: "Ryan Mills",
    description:
      "Ethical hacker, tinkerer, and builder. Exploring cybersecurity, hands-on projects, and creative tech solutions.",
    url: "https://ryankmills.com",
    siteName: "Ryan Mills",
    images: [
      {
        url: "/og.png",
        width: 1920,
        height: 1080,
        alt: "Ryan Mills — ryankmills.com",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ryan Mills",
    card: "summary_large_image",
    description:
      "Ethical hacker, tinkerer, and builder.",
  },
  icons: {
    shortcut: "/favicon.png",
  },
  alternates: {
    canonical: "https://ryankmills.com",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head />
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SEFT87W2VZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SEFT87W2VZ');
          `}
        </Script>
      </body>
    </html>
  );
}