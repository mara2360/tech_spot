import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://techspotblog.vercel.app"),
  title: "TechSpot — Ideas for the next internet",
  description: "Independent technology journalism on AI, security, development, open source, and the ideas reshaping our world.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "TechSpot — Ideas for the next internet",
    description: "Clear-eyed reporting on the tools, people, and ideas reshaping technology.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 904, alt: "TechSpot — Ideas for the next internet" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSpot — Ideas for the next internet",
    description: "Clear-eyed reporting on the tools, people, and ideas reshaping technology.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
