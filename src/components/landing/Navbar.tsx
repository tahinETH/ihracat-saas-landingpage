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
}