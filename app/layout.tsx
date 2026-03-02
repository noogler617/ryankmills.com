import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
//import { Analytics } from "./components/analytics";
//import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "ryankmills.com",
    template: "%s | ryankmills.com",
  },
  description: "Ethical hacker, tinkerer, and builder.",
  openGraph: {
    title: "ryankmills.com",
    description:
      "Ethical hacker, tinkerer, and builder.",
    url: "https://ryankmills.com",
    siteName: "ryankmills.com",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
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
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
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
      <head>
        
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
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
