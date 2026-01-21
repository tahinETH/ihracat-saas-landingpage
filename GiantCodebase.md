# Giant Codebase

## next.config.ts
```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

## src/app/globals.css
```
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  /* Utilitarian color palette - restrained, functional */
  --color-primary: #ffffff;
  --color-primary-foreground: #09090b;
  --color-secondary: #fafafa;
  --color-secondary-foreground: #09090b;
  --color-muted: #fafafa;
  --color-muted-foreground: #71717a;
  --color-border: #e4e4e7;
  --color-ring: #09090b;
  --color-card: #ffffff;
  --color-card-foreground: #09090b;

  /* Single accent - orange for functional highlights */
  --color-accent: #ea580c;
  --color-accent-foreground: #ffffff;

  /* No radius - utilitarian squares */
  --radius-sm: 0;
  --radius-md: 0;
  --radius-lg: 0;
  --radius-xl: 0;
}

:root {
  --background: #ffffff;
  --foreground: #09090b;
  --card: #ffffff;
  --card-foreground: #09090b;
  --popover: #ffffff;
  --popover-foreground: #09090b;
  --primary: #09090b;
  --primary-foreground: #fafafa;
  --secondary: #fafafa;
  --secondary-foreground: #09090b;
  --muted: #fafafa;
  --muted-foreground: #71717a;
  --accent: #ea580c;
  --accent-foreground: #ffffff;
  --destructive: #dc2626;
  --destructive-foreground: #fafafa;
  --border: #e4e4e7;
  --input: #e4e4e7;
  --ring: #09090b;
  --radius: 0;
}

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  *:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  .skip-to-content {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 100;
    padding: 0.5rem 1rem;
    background: #09090b;
    color: #fff;
    transform: translateY(-200%);
    transition: transform 0.15s ease-out;
  }

  .skip-to-content:focus {
    transform: translateY(0);
  }

  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
    max-width: 65ch;
  }

  ::selection {
    background-color: #09090b;
    color: white;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .text-pretty {
    text-wrap: pretty;
  }

  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }
}

@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## src/app/layout.tsx
```
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
```

## src/app/page.tsx
```
import Navbar from "@/components/landing/Navbar"
import HeroSection from "@/components/landing/HeroSection"
import FeaturesSection from "@/components/landing/FeaturesSection"
import ProductShowcase from "@/components/landing/ProductShowcase"
import HowItWorks from "@/components/landing/HowItWorks"
import CTASection from "@/components/landing/CTASection"
import FAQSection from "@/components/landing/FAQSection"
import Footer from "@/components/landing/Footer"

export const dynamic = "force-static"

export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-col min-h-dvh bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <HowItWorks />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  )
}
```

## src/components/landing/CTASection.tsx
```
"use client"

import Link from "next/link"
import { ArrowRight, Terminal } from "lucide-react"

export default function CTASection() {
  return (
    <section id="cta" className="relative mx-auto grid h-auto w-full grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6 my-20 bg-transparent px-4 lg:px-9 first:mt-4 lg:mt-20 lg:mb-30">
      
      {/* Top Border Line */}
      <div className="col-span-full border-t border-neutral-200 dark:border-neutral-800 pt-12" />

      {/* Left Column: Text Content */}
      <div className="col-span-4 lg:col-span-6 flex flex-col justify-between mb-12 lg:mb-0">
        <div className="flex flex-col gap-6 lg:gap-8">
          
          {/* Badge */}
          <div className="text-pretty font-mono text-[14px] leading-[100%] tracking-[-0.0175rem] inline-flex items-center uppercase gap-3">
            <div className="size-2 transform-gpu rounded-full border border-transparent bg-orange-500 will-change-[background-color]" />
            <p className="whitespace-nowrap text-neutral-500 text-pretty font-mono text-[12px] leading-[100%] tracking-[-0.015rem] uppercase">
              Simdi Baslayin
            </p>
          </div>

          {/* Headline */}
          <h2 className="text-neutral-950 dark:text-white font-normal text-[40px] leading-[100%] tracking-[-0.16rem] lg:tracking-[-0.18rem] lg:-ml-1 lg:text-7xl">
            Ihracatta Yapay <br /> Zeka Devrimi
          </h2>

          {/* Description */}
          <p className="font-mono text-[16px] leading-[140%] tracking-[-0.02rem] lg:text-[18px] lg:tracking-[-0.0225rem] text-neutral-500 dark:text-neutral-400 text-balance lg:max-w-[500px]">
            Dogru alicilari bulun, akilli eslestirme ile onceliklendirin ve kisisellestirilmis rehberlikle satis sureclerinizi hizlandirin.
          </p>
        </div>
      </div>

      {/* Right Column: The "Terminal" CTA Card */}
      <div className="col-span-4 lg:col-span-6 lg:col-start-7 flex items-end">
        <div className="w-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 rounded-lg overflow-hidden shadow-sm">
          
          {/* Terminal Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2 p-3 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="flex gap-1.5 ml-1">
              <div className="size-2.5 rounded-full bg-red-400/80" />
              <div className="size-2.5 rounded-full bg-yellow-400/80" />
              <div className="size-2.5 rounded-full bg-green-400/80" />
            </div>
            <div className="ml-4 flex gap-1">
               <div className="px-3 py-1 rounded-t-sm bg-white dark:bg-neutral-950 border-x border-t border-neutral-200 dark:border-neutral-800 text-[10px] font-mono text-neutral-500 uppercase tracking-tight">
                  bash
               </div>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 flex flex-col gap-6">
            
            {/* Fake Code Block */}
            <div className="font-mono text-[13px] md:text-[14px] space-y-2">
              <div className="flex gap-3 text-neutral-400">
                <span className="text-orange-500 select-none">$</span>
                <span className="text-neutral-800 dark:text-neutral-200">initiate_export_growth --target=global</span>
              </div>
              <div className="flex gap-3 text-neutral-400 opacity-50">
                <span className="select-none text-transparent">$</span>
                <span className="text-neutral-500">analyzing markets... [done]</span>
              </div>
              <div className="flex gap-3 text-neutral-400 opacity-50">
                <span className="select-none text-transparent">$</span>
                <span className="text-neutral-500">finding buyers... [done]</span>
              </div>
              <div className="flex gap-3">
                <span className="text-orange-500 select-none">$</span>
                <span className="animate-pulse w-2 h-5 bg-orange-500 block"></span>
              </div>
            </div>

            {/* Action Buttons styled as inputs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-dashed border-neutral-200 dark:border-neutral-800">
              <Link
                href="#"
                className="flex-1 group relative inline-flex items-center justify-center bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 h-12 px-6 overflow-clip rounded-sm transition-all hover:opacity-90"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <p className="text-pretty font-mono text-[13px] leading-[100%] tracking-[-0.015rem] uppercase">
                    Ucretsiz Baslayin
                  </p>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="#"
                className="group inline-flex items-center justify-center border border-neutral-200 dark:border-neutral-800 bg-transparent h-12 px-6 text-neutral-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors rounded-sm"
              >
                <span className="text-pretty font-mono text-[13px] leading-[100%] tracking-[-0.015rem] uppercase">
                  Demo Talebi
                </span>
              </Link>
            </div>

            <p className="text-center sm:text-left font-mono text-[11px] text-neutral-400 uppercase tracking-tight">
              Kredi karti gerektirmez · 14 gun ucretsiz
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}```

## src/components/landing/FAQSection.tsx
```
"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Ihracat Yardimcisi nedir?",
    answer:
      "Ihracat Yardimcisi, Turk ihracatcilarinin uluslararasi pazarlarda potansiyel alicilar bulmasi, sirket istihbarati almasi ve kisisellestirilmis satis stratejileri olusturmasi icin tasarlanmis yapay zeka destekli bir platformdur."
  },
  {
    question: "Pazar arastirmasi nasil calisir?",
    answer:
      "Yapay zeka, ideal musteri profilinizi ve hedef ulkeyi analiz ederek en uygun sektor ve sirketleri belirler. Ardindan sirketleri kesfeder, puanlar ve sirketinizle uyumlulugunu aciklar."
  },
  {
    question: "Eslesme puani ne anlama geliyor?",
    answer:
      "0-100 arasi eslesme puani, bir potansiyel musterinin sirketinizle ne kadar uyumlu oldugunu gosterir. Puan, sektor uyumu, urun eslesmesi, sirket boyutu ve kulturel faktorlere gore hesaplanir."
  },
  {
    question: "Hangi ulkeleri destekliyorsunuz?",
    answer:
      "Avrupa, Kuzey Amerika, Orta Dogu ve Asya'daki 50'den fazla ulkede pazar arastirmasi yapabilirsiniz. Surekli olarak yeni pazarlar ve veri kaynaklari ekliyoruz."
  },
  {
    question: "Verilerim guvenli mi?",
    answer:
      "Evet, tum veriler SSL sifreleme ile korunur ve KVKK uyumlu veri merkezlerinde saklanir. Verilerinizi ucuncu taraflarla paylasmiyoruz."
  },
  {
    question: "Ucretsiz deneme suresi var mi?",
    answer:
      "Evet, 14 gun boyunca tum ozellikleri ucretsiz deneyebilirsiniz. Kredi karti bilgisi gerektirmez."
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className="relative mx-auto grid h-auto w-full grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6 my-20 bg-transparent px-4 lg:px-9">
      
      {/* Top Border */}
      <div className="col-span-full border-t border-neutral-200 dark:border-neutral-800 pt-4 mb-8" />

      {/* Left Column: Header */}
      <div className="col-span-4 lg:col-span-5 mb-12 lg:mb-0">
        <div className="sticky top-24">
          <div className="text-pretty font-mono text-[14px] leading-[100%] tracking-[-0.0175rem] inline-flex items-center uppercase gap-3 mb-6">
            <div className="size-2 rounded-full border border-transparent bg-neutral-400" />
            <p className="whitespace-nowrap text-neutral-500 text-pretty font-mono text-[12px] leading-[100%] tracking-[-0.015rem] uppercase">
              SSS
            </p>
          </div>
          <h2 className="text-neutral-950 dark:text-white font-normal text-[30px] leading-[100%] tracking-[-0.05rem] lg:text-[40px] lg:tracking-[-0.09rem]">
            Sikca Sorulan <br /> Sorular
          </h2>
          
          <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 max-w-[280px]">
            <p className="text-[13px] text-neutral-500 font-mono mb-2">
              Baska sorulariniz mi var?
            </p>
            <a href="mailto:destek@ihracatyardimcisi.com" className="text-[13px] font-mono uppercase text-orange-600 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 group">
              Bize ulasin
              <span className="block h-px w-4 bg-orange-600 group-hover:w-6 transition-all" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: List */}
      <div className="col-span-4 lg:col-span-7">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-t border-neutral-200 dark:border-neutral-800 first:border-t-0 lg:first:border-t"
            >
              <AccordionTrigger className="group py-6 hover:no-underline [&[data-state=open]>div>svg]:rotate-45">
                <div className="flex w-full items-center justify-between">
                  <span className="text-[16px] font-normal text-neutral-950 dark:text-white text-left pr-8 tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {faq.question}
                  </span>
                  <Plus className="size-4 text-neutral-400 transition-transform duration-200 shrink-0" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[14px] font-mono text-neutral-500 dark:text-neutral-400 pb-8 leading-[160%]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}```

## src/components/landing/FeaturesSection.tsx
```
"use client"

import {
  Search,
  Building2,
  Target,
  MessageSquareText,
  Workflow,
  ClipboardList
} from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Pazar Arastirmasi",
    description: "Hedef pazarlarinizda potansiyel alicilari yapay zeka destekli filtreleme ile hizlica kesfedin."
  },
  {
    icon: Building2,
    title: "Sirket Istihbarati",
    description: "Her potansiyel musteri hakkinda derinlemesine bilgi alin: sektorler, urunler, boyut ve kulturel uyum."
  },
  {
    icon: Target,
    title: "Akilli Eslestirme",
    description: "0-100 arasi puanlama sistemi ile sirketinizle en uyumlu alicilari oncelikli olarak gorun."
  },
  {
    icon: MessageSquareText,
    title: "Yapay Zeka Rehberligi",
    description: "Her potansiyel musteriye nasil yaklasilacagi konusunda kisisellestirilmis oneriler alin."
  },
  {
    icon: Workflow,
    title: "Pipeline Yonetimi",
    description: "Sirketleri satis asamalarindan gecirin, aktiviteleri ve gorevleri takip edin."
  },
  {
    icon: ClipboardList,
    title: "Gorev Takibi",
    description: "Satis gorevlerinizi tarihlerle birlikte olusturun ve takip edin."
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative mx-auto grid h-auto w-full grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6 my-20 bg-transparent px-4 lg:px-9">
      
      {/* Top Border */}
      <div className="col-span-full border-t border-neutral-200 dark:border-neutral-800 pt-4 mb-8" />

      {/* Header */}
      <div className="col-span-full lg:col-span-5 flex flex-col justify-between mb-12 lg:mb-0 lg:pr-8">
        <div>
          <div className="text-pretty font-mono text-[14px] leading-[100%] tracking-[-0.0175rem] inline-flex items-center uppercase gap-3 mb-6">
            <div className="size-2 rounded-full border border-transparent bg-neutral-400" />
            <p className="whitespace-nowrap text-neutral-500 text-pretty font-mono text-[12px] leading-[100%] tracking-[-0.015rem] uppercase">
              Ozellikler
            </p>
          </div>
          <h2 className="text-neutral-950 dark:text-white font-normal text-[30px] leading-[100%] tracking-[-0.05625rem] lg:text-[40px] lg:tracking-[-0.09rem]">
            Ihracatta Basariyi <br/> Getiren Araclar
          </h2>
        </div>
        
       
      </div>

      {/* Features Grid - Clean lines, no background cards */}
      <div className="col-span-full lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-16 mt-8 lg:mt-0">
        {features.map((feature, index) => (
          <div key={feature.title} className="group flex flex-col gap-4">
            
            {/* Icon Box */}
            <div className="flex items-center gap-x-4">
              <span className="grid size-8 place-content-center rounded-sm border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 group-hover:border-orange-500/50 transition-colors duration-200">
                <feature.icon className="size-4 text-neutral-500 group-hover:text-orange-600 transition-colors duration-200" />
              </span>
              <h3 className="text-[16px] font-normal text-neutral-950 dark:text-white tracking-tight group-hover:text-orange-600 transition-colors duration-200">
                {feature.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-pretty font-mono text-[13px] leading-[140%] tracking-[-0.01rem] text-neutral-500 dark:text-neutral-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}```

## src/components/landing/Footer.tsx
```
"use client"

import Link from "next/link"

const footerLinks = {
  product: {
    title: "Urun",
    links: [
      { label: "Ozellikler", href: "#features" },
      { label: "Nasil Calisir", href: "#how-it-works" },
      { label: "Fiyatlandirma", href: "#pricing" },
      { label: "SSS", href: "#faq" }
    ]
  },
  company: {
    title: "Sirket",
    links: [
      { label: "Hakkimizda", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Kariyer", href: "/careers" },
      { label: "Iletisim", href: "/contact" }
    ]
  },
  legal: {
    title: "Yasal",
    links: [
      { label: "Gizlilik", href: "/privacy" },
      { label: "Kosullar", href: "/terms" },
      { label: "KVKK", href: "/kvkk" }
    ]
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mx-auto grid h-auto w-full grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6 bg-transparent px-4 lg:px-9 pb-10">
      
      {/* Top Border */}
      <div className="col-span-full border-t border-neutral-200 dark:border-neutral-800 pt-8 mb-12" />

      {/* Brand Column */}
      <div className="col-span-4 lg:col-span-3 flex flex-col justify-between mb-12 lg:mb-0">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="size-6 bg-neutral-950 dark:bg-white flex items-center justify-center rounded-sm">
                <span className="text-white dark:text-neutral-950 text-[10px] font-mono font-bold">IY</span>
            </div>
            <span className="text-sm font-medium text-neutral-950 dark:text-white">Ihracat Yardimcisi</span>
          </Link>
          <p className="font-mono text-[12px] text-neutral-500 dark:text-neutral-400 max-w-[200px]">
            Yapay zeka ile uluslararasi pazarlarda dogru alicilari bulun.
          </p>
        </div>
      </div>

      {/* Links Columns */}
      <div className="col-span-4 lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
        {Object.entries(footerLinks).map(([key, section]) => (
          <div key={key} className="flex flex-col gap-4">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-mono text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social / Copy Column */}
      <div className="col-span-4 lg:col-span-3 mt-12 lg:mt-0 flex flex-col lg:items-end justify-between">
        <div className="flex gap-4">
            {/* Social Icons - simplified SVG */}
            <a href="#" className="text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="#" className="text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
        </div>
        
        <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-tight mt-8 lg:mt-0">
          © {currentYear} Ihracat Yardimcisi
        </p>
      </div>
    </footer>
  )
}```

## src/components/landing/HeroSection.tsx
```
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Search, Globe, Mail, BarChart3, Users } from "lucide-react"
import { cn } from "@/lib/utils"

// --- 1. Visual Mockups (The wireframes inside the right panel) ---

// Visual for Step 1: Kesfedin (Search/Map)
const DiscoveryVisual = () => (
  <div className="relative w-full h-full flex flex-col pt-12 px-8 pb-8">
    <div className="absolute top-4 right-6 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
      Pazar Arastirmasi
    </div>
    <div className="w-full h-full bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden flex flex-col">
      <div className="h-10 border-b border-neutral-100 flex items-center px-4 gap-2 bg-neutral-50/50">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-neutral-200" />
          <div className="size-2.5 rounded-full bg-neutral-200" />
        </div>
        <div className="ml-auto w-32 h-1.5 bg-neutral-100 rounded-full" />
      </div>
      <div className="p-6 space-y-6">
        {/* Search Bar Mockup */}
        <div className="w-full h-10 rounded-md border border-neutral-200 flex items-center px-3 gap-3">
            <Search className="size-4 text-neutral-300" />
            <div className="h-1.5 w-24 bg-neutral-100 rounded-full" />
        </div>
        {/* Map/Grid Representation */}
        <div className="grid grid-cols-3 gap-3">
            {[1,2,3,4,5,6].map(i => (
                <div key={i} className="aspect-video bg-neutral-50 rounded-sm border border-neutral-100 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 left-2 w-8 h-1 bg-neutral-200 rounded-full" />
                </div>
            ))}
        </div>
      </div>
    </div>
  </div>
)

// Visual for Step 2: Arastirin (Analysis)
const ResearchVisual = () => (
  <div className="relative w-full h-full flex flex-col pt-12 px-8 pb-8 items-center justify-center">
    <div className="absolute top-4 right-6 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
      Sirket Analizi
    </div>
    <div className="w-full max-w-sm bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
      <div className="flex justify-between items-start mb-6">
        <div className="size-10 bg-neutral-100 rounded-sm" />
        <div className="text-right">
            <div className="text-2xl font-mono text-neutral-900">92%</div>
            <div className="text-[10px] text-neutral-400 uppercase">Eslesme</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="w-full h-2 bg-neutral-100 rounded-full" />
        <div className="w-5/6 h-2 bg-neutral-100 rounded-full" />
        <div className="w-4/6 h-2 bg-neutral-100 rounded-full" />
      </div>
      <div className="mt-6 pt-4 border-t border-neutral-100 flex gap-2">
        <div className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-mono rounded-sm">Kultur Uyumu</div>
        <div className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-mono rounded-sm">Hacim</div>
      </div>
    </div>
  </div>
)

// Visual for Step 3: Takip (Pipeline)
const TrackVisual = () => (
  <div className="relative w-full h-full flex flex-col pt-12 px-8 pb-8">
    <div className="absolute top-4 right-6 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
      Pipeline
    </div>
    <div className="flex gap-3 h-full">
        {/* Columns */}
        {[1, 2, 3].map((col) => (
            <div key={col} className="flex-1 bg-neutral-50/50 rounded-lg border border-neutral-200/50 p-3 flex flex-col gap-3">
                <div className="h-1.5 w-12 bg-neutral-200 rounded-full mb-2" />
                <div className="w-full h-20 bg-white border border-neutral-200 rounded-sm shadow-sm" />
                <div className="w-full h-20 bg-white border border-neutral-200 rounded-sm shadow-sm opacity-50" />
            </div>
        ))}
    </div>
  </div>
)

// Visual for Step 4: Kazanin (Communication)
const WinVisual = () => (
  <div className="relative w-full h-full flex flex-col pt-12 px-8 pb-8 items-center justify-center">
    <div className="absolute top-4 right-6 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
      AI Iletisim
    </div>
    <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-neutral-200 p-6 font-mono text-[11px]">
        <div className="flex gap-3 mb-4 text-neutral-400 border-b border-neutral-100 pb-2">
            <span>To: <span className="text-neutral-900">Satinalma Muduru</span></span>
        </div>
        <div className="space-y-2 text-neutral-600">
            <p>Sayin Muller,</p>
            <p>Organik pamuk talebiniz icin <span className="bg-orange-100 text-orange-800 px-1 rounded-sm">ozellestirilmis</span> bir teklif hazirladik.</p>
            <p className="opacity-50">[AI tarafindan olusturulan kisisel paragraf...]</p>
        </div>
        <div className="mt-6 flex justify-end">
            <div className="bg-neutral-900 text-white px-3 py-1.5 rounded-sm flex items-center gap-2">
                Gonder <ArrowRight className="size-3" />
            </div>
        </div>
    </div>
  </div>
)

// --- 2. Data Structure ---

const TABS = [
  {
    id: "step-01",
    label: "Kesfedin",
    title: "Potansiyel alicilari bulun",
    description: "Hedef pazarinizi secin ve yapay zeka milyonlarca veri noktasini tarayarak size en uygun potansiyel alicilari listelesin.",
    visual: <DiscoveryVisual />,
    icon: Globe
  },
  {
    id: "step-02",
    label: "Arastirin",
    title: "Derinlemesine Analiz",
    description: "Umut vadeden sirketler icin yapay zeka destekli istihbarat toplayin. Karar vericileri, ithalat gecmisini ve finansal durumlarini gorun.",
    visual: <ResearchVisual />,
    icon: BarChart3
  },
  {
    id: "step-03",
    label: "Takip Edin",
    title: "Pipeline Yonetimi",
    description: "Tum satis sureclerinizi tek ekrandan yonetin. Aktiviteleri kaydedin, gorevleri organize edin ve hicbir firsati kacirmayin.",
    visual: <TrackVisual />,
    icon: Users
  },
  {
    id: "step-04",
    label: "Kazanin",
    title: "Anlasma Kapatin",
    description: "Yapay zeka rehberligiyle kisisellestirilmis e-postalar yazin, kulturel kodlara uygun iletisim kurun ve satisi tamamlayin.",
    visual: <WinVisual />,
    icon: Mail
  }
]

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const activeContent = TABS[activeTab]

  return (
    <section id="how-it-works" className="relative mx-auto w-full max-w-[1400px] px-4 lg:px-9 my-20 lg:my-32">
        
        {/* Top Label */}
        <div className="flex items-center gap-3 mb-10">
            <div className="size-2 rounded-full bg-orange-600" />
            <span className="text-[12px] font-mono uppercase tracking-tight text-neutral-900">
                Nasil Calisir
            </span>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 h-auto lg:h-[700px]">
            
            {/* LEFT COLUMN: Header + Card + Nav */}
            <div className="lg:col-span-5 flex flex-col h-full relative">
                
                {/* 1. Header */}
                <h2 className="text-[40px] leading-[100%] lg:text-[64px] font-normal tracking-[-0.18rem] text-neutral-950 mb-12">
                    Ihracat surecinizi <br /> otomatize edin.
                </h2>
                <p className="font-mono text-[14px] lg:text-[16px] leading-[150%] text-neutral-500 max-w-md mb-12">
                    Pazar arastirmasindan son imzaya kadar — Ihracat Yardimcisi, yapay zeka gucuyle operasyonlarinizi tek bir akista birlestirir.
                </p>

                {/* 2. Floating Detail Card */}
                <div className="mt-auto mb-10 lg:mb-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeContent.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="w-full bg-[#F5F5F3] border border-neutral-200 rounded-lg p-8 relative overflow-hidden"
                        >
                            {/* Card Decoration */}
                            <div className="absolute top-6 left-6 size-2 bg-orange-600 rounded-full" />
                            <div className="absolute top-6 right-6 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                                0{activeTab + 1} - {activeContent.label}
                            </div>

                            <div className="mt-8">
                                <h3 className="text-[24px] font-normal tracking-tight text-neutral-950 mb-4">
                                    {activeContent.title}
                                </h3>
                                <p className="font-mono text-[13px] leading-[160%] text-neutral-500 mb-8">
                                    {activeContent.description}
                                </p>
                                <button className="group flex items-center gap-2 bg-neutral-950 text-white px-4 py-2 rounded-sm text-[11px] font-mono uppercase tracking-wide hover:bg-neutral-800 transition-colors">
                                    Detayli Incele
                                    <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 3. Navigation List */}
                <div className="lg:absolute lg:bottom-0 lg:left-0 w-full">
                    {/* Visual Progress Bar */}
                    <div className="flex gap-1 mb-4">
                        {TABS.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={cn(
                                    "h-1.5 rounded-full transition-all duration-300", 
                                    idx === activeTab ? "w-8 bg-orange-600" : "w-2 bg-neutral-200"
                                )} 
                            />
                        ))}
                    </div>

                    {/* Nav Items */}
                    <div className="flex flex-col gap-1">
                        {TABS.map((tab, idx) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(idx)}
                                className={cn(
                                    "text-left font-mono text-[12px] uppercase tracking-wider py-1 transition-colors flex items-center gap-3",
                                    activeTab === idx ? "text-orange-600" : "text-neutral-400 hover:text-neutral-600"
                                )}
                            >
                                <span className="opacity-50 w-4">0{idx + 1}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: The Canvas (Dashed Border) */}
            <div className="lg:col-span-7 h-[500px] lg:h-full relative">
                <div className="absolute inset-0 border border-dashed border-neutral-300 rounded-xl bg-[#EFEFED]/50 overflow-hidden">
                    
                    {/* Corner Dot */}
                    <div className="absolute top-6 left-6 size-2 bg-orange-600 rounded-full z-20" />
                    
                    {/* Content Switcher */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute inset-0 size-full"
                        >
                            {activeContent.visual}
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom Label (Decoration) */}
                    <div className="absolute bottom-6 left-6 text-[12px] font-mono text-neutral-900 uppercase tracking-widest z-20">
                        IY-PROCESS-{activeTab + 1}
                    </div>
                    <div className="absolute bottom-6 right-6 text-[12px] font-mono text-neutral-500 tracking-widest z-20 hidden md:block">
                        {activeContent.label}
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}```

## src/components/landing/HowItWorks.tsx
```
"use client"

import { Search, Brain, Workflow, Handshake } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Kesfedin",
    description: "Hedef pazarinizi secin ve yapay zeka potansiyel alicilari bularak listelesin."
  },
  {
    number: "02",
    icon: Brain,
    title: "Arastirin",
    description: "Umut vadeden sirketler icin yapay zeka destekli derinlemesine analiz yapin."
  },
  {
    number: "03",
    icon: Workflow,
    title: "Takip Edin",
    description: "Pipeline'i yonetin, aktiviteleri kaydedin ve gorevleri organize edin."
  },
  {
    number: "04",
    icon: Handshake,
    title: "Kazanin",
    description: "Yapay zeka rehberligiyle satis yaklasimlarinizi gelistirin ve anlasma kapatin."
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative mx-auto grid h-auto w-full grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6 my-20 bg-transparent px-4 lg:px-9">
      
      {/* Top Border */}
      <div className="col-span-full border-t border-neutral-200 dark:border-neutral-800 pt-4 mb-8" />

      {/* Header */}
      <div className="col-span-full lg:col-span-4 mb-12 lg:mb-0">
        <div className="flex flex-col gap-6 sticky top-20">
          <div className="text-pretty font-mono text-[14px] leading-[100%] tracking-[-0.0175rem] inline-flex items-center uppercase gap-3">
            <div className="size-2 rounded-full border border-transparent bg-neutral-400" />
            <p className="whitespace-nowrap text-neutral-500 text-pretty font-mono text-[12px] leading-[100%] tracking-[-0.015rem] uppercase">
              Nasil Calisir
            </p>
          </div>
          <h2 className="text-neutral-950 dark:text-white font-normal text-[30px] leading-[100%] tracking-[-0.05rem] lg:text-[40px] lg:tracking-[-0.09rem]">
            Dort Adimda <br /> Yeni Musteriler Kazanin
          </h2>
        </div>
      </div>

      {/* Steps List - Styled like the "Product" cards in source */}
      <div className="col-span-full lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="group relative flex flex-col rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-6 transition-colors duration-200 hover:border-neutral-400 dark:hover:border-neutral-600"
          >
            {/* Step Header */}
            <div className="flex items-center justify-between mb-6">
               <span className="grid h-6 w-fit place-content-center rounded-sm border px-1.5 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
                  <p className="text-neutral-950 dark:text-white text-pretty font-mono text-[12px] leading-[100%] tracking-[-0.015rem] uppercase">
                    Adim {step.number}
                  </p>
               </span>
               <step.icon className="size-5 text-neutral-400 group-hover:text-orange-500 transition-colors duration-200" />
            </div>

            {/* Content */}
            <div className="mt-auto">
              <h3 className="text-lg font-normal text-neutral-950 dark:text-white mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 leading-relaxed text-pretty">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}```

## src/components/landing/Navbar.tsx
```
"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [mobileMenuOpen])

  const navLinks = [
    { href: "#features", label: "Ozellikler" },
    { href: "#product", label: "Urun" },
    { href: "#how-it-works", label: "Nasil Calisir" },
    { href: "#faq", label: "SSS" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto grid h-16 w-full max-w-[1400px] grid-cols-4 gap-x-4 px-4 lg:grid-cols-12 lg:gap-x-6 lg:px-9 items-center">
        
        {/* Brand */}
        <div className="col-span-2 lg:col-span-3 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-70"
            aria-label="Ihracat Yardimcisi"
          >
            <div className="size-6 bg-neutral-950 dark:bg-white flex items-center justify-center rounded-sm">
              <span className="text-white dark:text-neutral-950 text-[10px] font-mono font-bold">IY</span>
            </div>
            <span className="hidden md:inline-block text-sm font-medium text-neutral-950 dark:text-white tracking-tight">
              Ihracat Yardimcisi
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:col-span-6 lg:flex items-center justify-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-mono text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors uppercase tracking-tight"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="col-span-2 lg:col-span-3 flex items-center justify-end gap-4">
          <Link
            href="#cta"
            className="hidden md:inline-flex h-[28px] items-center justify-center bg-neutral-950 dark:bg-white border border-transparent px-4 text-[12px] font-mono uppercase text-white dark:text-neutral-950 transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-sm"
          >
            Baslayalim
          </Link>

          <button
            type="button"
            className="flex md:hidden size-8 items-center justify-center border border-neutral-200 dark:border-neutral-800 rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="size-4 text-neutral-950 dark:text-white" />
            ) : (
              <Menu className="size-4 text-neutral-950 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white dark:bg-neutral-950 p-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center py-4 text-sm font-mono uppercase text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white border-b border-neutral-100 dark:border-neutral-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8">
              <Link
                href="#cta"
                className="flex h-10 w-full items-center justify-center bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-mono uppercase rounded-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Baslayalim
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}```

## src/components/landing/ProductShowcase.tsx
```
"use client"

import { ArrowUpRight, ChevronDown } from "lucide-react"

function CompanyCard() {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 w-full max-w-md rounded-md overflow-hidden shadow-sm">
      {/* Main Content */}
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          {/* Logo Box */}
          <div className="size-12 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 rounded-sm flex-shrink-0">
            <span className="text-sm font-mono text-neutral-500">AB</span>
          </div>

          {/* Name & Meta */}
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="flex items-baseline justify-between">
              <h3 className="text-[16px] font-normal text-neutral-950 dark:text-white tracking-tight">
                Acme Berlin GmbH
              </h3>
              {/* Score */}
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-normal text-neutral-950 dark:text-white font-mono tabular-nums">92</span>
                <span className="size-2 rounded-full bg-green-500"></span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-1">
              <a href="#" className="text-xs font-mono text-orange-600 hover:text-orange-500 flex items-center gap-0.5">
                acme-berlin.de <ArrowUpRight className="size-2.5" />
              </a>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-xs text-neutral-500 font-mono tabular-nums">50-200 emp</span>
            </div>
          </div>
        </div>

        {/* Analysis Section */}
        <div className="mb-5 space-y-2">
          <div className="flex items-center justify-between">
             <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">Analiz</span>
          </div>
          <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono">
            Tekstil sektorunde faaliyet gosteriyor, organik pamuk urunleri ariyorlar. Turkiye'den tedarik konusunda acik.
          </p>
        </div>

        {/* Tags - Pill style */}
        <div className="flex flex-wrap gap-2 mb-5">
          {['Tekstil', 'Ev Tekstili', 'Organik Pamuk'].map((tag) => (
            <span key={tag} className="inline-flex items-center px-1.5 py-0.5 text-[11px] border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 font-mono uppercase">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Row */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="relative">
            <select
              className="w-full appearance-none bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-sm px-2 py-1.5 pr-6 text-[12px] font-mono text-neutral-900 dark:text-white focus:outline-none focus:border-orange-500"
              defaultValue="proposal"
            >
              <option value="proposal">Teklif Asamasi</option>
              <option value="meeting">Gorusme</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-3 text-neutral-500 pointer-events-none" />
          </div>

          <button className="px-3 py-1.5 text-[11px] font-mono uppercase bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-sm hover:opacity-90 transition-opacity">
            Derin Arastirma
          </button>
        </div>
      </div>

      {/* Footer Toggle */}
      <button className="w-full py-2.5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex items-center justify-center gap-2 text-[11px] font-mono uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
        <ChevronDown className="size-3" />
        Detaylari Goster
      </button>
    </div>
  )
}

export default function ProductShowcase() {
  return (
    <section id="product" className="relative mx-auto grid h-auto w-full grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6 my-20 bg-transparent px-4 lg:px-9">
      
      {/* Top Border */}
      <div className="col-span-full border-t border-neutral-200 dark:border-neutral-800 pt-4 mb-8" />

      {/* Left Content */}
      <div className="col-span-4 lg:col-span-5 flex flex-col justify-center mb-12 lg:mb-0">
        <div className="mb-6">
          <div className="text-pretty font-mono text-[14px] leading-[100%] tracking-[-0.0175rem] inline-flex items-center uppercase gap-3 mb-6">
            <div className="size-2 rounded-full border border-transparent bg-orange-500" />
            <p className="whitespace-nowrap text-neutral-500 text-pretty font-mono text-[12px] leading-[100%] tracking-[-0.015rem] uppercase">
              Birlesik Sirket Karti
            </p>
          </div>
          <h2 className="text-neutral-950 dark:text-white font-normal text-[30px] leading-[100%] tracking-[-0.05rem] lg:text-[40px] lg:tracking-[-0.09rem] mb-6">
            Tum Bilgiler <br/> Tek Ekranda
          </h2>
          <p className="text-pretty font-mono text-[14px] leading-[140%] text-neutral-500 dark:text-neutral-400 lg:max-w-md">
            Her potansiyel musteri icin kapsamli bir gorunum: sirket profili, eslesme puani, pipeline durumu, aktiviteler ve gorevler.
          </p>
        </div>

        {/* Feature List Items */}
        <div className="space-y-6 mt-4">
          {[
            { title: "Akilli Eslesme Puani", desc: "Sirketinizle uyumlulugu 0-100 arasi gorun." },
            { title: "Aktivite Takibi", desc: "Aramalar, e-postalar ve toplantilari kaydedin." },
            { title: "Derinlemesine Arastirma", desc: "Umut vadeden musteriler icin detayli analiz." }
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 group">
              <div className="size-5 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center rounded-sm mt-0.5 group-hover:border-orange-500 transition-colors">
                <div className="size-2 bg-neutral-300 dark:bg-neutral-700 group-hover:bg-orange-500 transition-colors rounded-full" />
              </div>
              <div>
                <h4 className="text-[14px] font-medium text-neutral-900 dark:text-white">{item.title}</h4>
                <p className="text-[13px] font-mono text-neutral-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content - Visual */}
      <div className="col-span-4 lg:col-span-7 flex items-center justify-center lg:justify-end">
        <div className="relative w-full max-w-md lg:mr-12">
            {/* Abstract Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-neutral-100 to-transparent dark:from-neutral-900 rounded-lg -z-10" />
            <CompanyCard />
        </div>
      </div>
    </section>
  )
}```

## src/components/ui/accordion.tsx
```
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-gray-200", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-4 shrink-0 text-gray-400 transition-transform duration-150" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-[accordion-up_150ms_ease-out] data-[state=open]:animate-[accordion-down_150ms_ease-out]"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

## src/components/ui/badge.tsx
```
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gray-900 text-white",
        secondary:
          "border-gray-200 bg-gray-50 text-gray-700",
        destructive:
          "border-transparent bg-red-600 text-white",
        outline: "text-gray-900 border-gray-200",
        success:
          "border-emerald-200/50 bg-emerald-100/70 text-emerald-700",
        warning:
          "border-amber-200/50 bg-amber-100/70 text-amber-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
```

## src/components/ui/button.tsx
```
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gray-900 text-white hover:bg-gray-800",
        destructive:
          "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border border-gray-200 bg-white hover:bg-gray-50 text-gray-900",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "hover:bg-gray-100 text-gray-900",
        link: "text-gray-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-sm",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

## src/components/ui/card.tsx
```
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border border-gray-200 bg-white text-gray-900",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-medium leading-none", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

## src/lib/utils.ts
```
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

