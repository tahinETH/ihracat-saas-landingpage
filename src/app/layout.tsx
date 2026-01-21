import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ihracat Yardimcisi | Yapay Zeka Destekli Ihracat Asistani",
  description:
    "Yapay zeka ile uluslararasi pazarlarda dogru alicilari bulun. Pazar arastirmasi, sirket istihbarati ve kisisellestirilmis satis stratejileri.",
  keywords: [
    "ihracat",
    "yapay zeka",
    "B2B satis",
    "pazar arastirmasi",
    "uluslararasi ticaret",
    "ihracat asistani",
    "sirket istihbarati"
  ],
  authors: [{ name: "Ihracat Yardimcisi" }],
  openGraph: {
    title: "Ihracat Yardimcisi | Yapay Zeka Destekli Ihracat Asistani",
    description:
      "Yapay zeka ile uluslararasi pazarlarda dogru alicilari bulun ve kazanin.",
    type: "website",
    locale: "tr_TR",
    siteName: "Ihracat Yardimcisi"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ihracat Yardimcisi | Yapay Zeka Destekli Ihracat Asistani",
    description:
      "Yapay zeka ile uluslararasi pazarlarda dogru alicilari bulun ve kazanin."
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          Icerige atla
        </a>
        {children}
      </body>
    </html>
  )
}
