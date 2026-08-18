import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Magical Wands · Hand-Drawn Interactive Garden",
  description: "Cast spells with your hands in mid-air — Created by Akshat Singh",
  author: "Akshat Singh",
  creator: "Akshat Singh",
  authors: [{ name: "Akshat Singh", url: "https://github.com/Axshatt" }],
  icons: {
    icon: '/flower-icon.png',
  },
  openGraph: {
    title: "Magical Wands by Akshat Singh",
    description: "Cast ethereal flowers, constellations & 3D light ribbons with your hands",
    url: "https://github.com/Axshatt/Magical-Wands",
    siteName: "Magical Wands",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
        <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" strategy="beforeInteractive" crossOrigin="anonymous" />
        <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js" strategy="beforeInteractive" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
