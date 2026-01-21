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
}