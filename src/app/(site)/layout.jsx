import "@/assets/css/style.css";

export const metadata = {
  title: "Kumo Ramen",
  description: "Kumo Ramen — Bristol",
  icons: {
    // Standard browser favicon
    icon: [
      { url: "/assets/images/Kumofavicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/images/Kumofavicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/images/Kumofavicon/favicon.ico",       sizes: "any" },
    ],
    // Apple home screen icon
    apple: [
      { url: "/assets/images/Kumofavicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    // Android / PWA icons
    other: [
      { rel: "icon", url: "/assets/images/Kumofavicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/assets/images/Kumofavicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
