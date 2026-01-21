"use client"

import { motion } from "framer-motion"
import { Search, Globe, ExternalLink, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const COMPANIES = [
  {
    name: "Absolute Machine Tools",
    loc: "US",
    score: 92,
    website: "absolutemachine.com",
    match: "Deep hole drilling machinery expertise aligns with SELSA's precision barrel manufacturing capabilities",
    tags: ["CNC Machinery", "Deep Hole Drilling", "Automation Systems"]
  },
  {
    name: "Positive Instruments LLC",
    loc: "US",
    score: 89,
    website: "positiveinstruments.com",
    match: "Specialized in firearms testing equipment, natural customer for SELSA's barrel production systems",
    tags: ["Testing Equipment", "Firearms Tech", "Quality Control"]
  },
  {
    name: "Setarms Defense Solutions",
    loc: "US",
    score: 88,
    website: "setarms.com",
    match: "Active defense contractor with ongoing procurement needs for specialized barrel manufacturing",
    tags: ["Defense Contractor", "Military Equipment", "Precision Parts"]
  },
  {
    name: "Wilson Combat",
    loc: "US",
    score: 86,
    website: "wilsoncombat.com",
    match: "Premium firearms manufacturer requiring high-precision barrel finishing equipment",
    tags: ["Firearms Manufacturing", "Custom Barrels", "Premium Market"]
  },
  {
    name: "Krieger Barrels Inc.",
    loc: "US",
    score: 85,
    website: "kriegerbarrels.com",
    match: "Leading barrel manufacturer, potential partner for advanced finishing technology",
    tags: ["Barrel Production", "Precision Manufacturing", "Custom Firearms"]
  },
]

export default function MarketResearchDemo() {
  const [step, setStep] = useState(0)

  // Simulation Loop - Show results immediately
  useEffect(() => {
    const sequence = async () => {
      setStep(0) // Reset
      await new Promise(r => setTimeout(r, 200))
      setStep(2) // Show results immediately
    }
    sequence()
  }, [])

  return (
    <div className="w-full h-full bg-[#F8F9FA] flex overflow-hidden rounded-lg border border-neutral-200 shadow-sm font-sans select-none">

      {/* Sidebar - Global Reach */}
      <div className="w-16 sm:w-52 border-r border-neutral-200 bg-white flex flex-col shrink-0 transition-all duration-500">
        <div className="p-3 border-b border-neutral-100 hidden sm:block">
          <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider mb-2">Hedef Pazarlar</div>
          <div className="space-y-1 max-h-[450px] overflow-y-auto">
            {[
              { code: '🇺🇸', name: 'United States', active: true },
              { code: '🇩🇿', name: 'Algeria', active: false },
              { code: '🇰🇿', name: 'Kazakhstan', active: false },
              { code: '🇷🇸', name: 'Serbia', active: false },
              { code: '🇦🇪', name: 'UAE', active: false },
              { code: '🇫🇷', name: 'France', active: false },
              { code: '🇹🇷', name: 'Türkiye', active: false },
              { code: '🇷🇺', name: 'Russia', active: false },
              { code: '🇯🇵', name: 'Japan', active: false },
              { code: '🇲🇽', name: 'Mexico', active: false },
              { code: '🇨🇺', name: 'Cuba', active: false },
              { code: '🇩🇪', name: 'Germany', active: false },
              { code: '🇬🇧', name: 'UK', active: false },
              { code: '🇮🇹', name: 'Italy', active: false },
              { code: '🇪🇸', name: 'Spain', active: false },
            ].map((c) => (
              <div
                key={c.name}
                className={cn(
                  "flex items-center gap-2 p-1.5 rounded-sm text-[11px] font-medium transition-colors",
                  c.active ? "bg-orange-50 text-orange-700" : "text-neutral-500 hover:bg-neutral-50"
                )}
              >
                <span className="text-[14px]">{c.code}</span>
                <span className="truncate">{c.name}</span>
                {c.active && <div className="ml-auto size-1.5 bg-orange-500 rounded-full animate-pulse" />}
              </div>
            ))}
          </div>
          <div className="pt-3 text-[9px] text-neutral-400 font-mono">+32 Ülke</div>
        </div>
        {/* Mobile Sidebar Icon View */}
        <div className="flex flex-col items-center pt-4 gap-4 sm:hidden">
            <Globe className="size-4 text-orange-600" />
            <div className="w-1 h-8 bg-neutral-100 rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-white relative">

        {/* Context Header - Who we're matching for */}
        <div className="border-b border-neutral-200 px-4 py-2.5 bg-gradient-to-r from-orange-50/50 to-white shrink-0">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-700 shrink-0">
              S
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold text-neutral-900">Şirket Eşleşmeleri: SELSA Makina</div>
              <div className="text-[9px] text-neutral-500 font-mono">En uyumlu potansiyel müşteriler</div>
            </div>
          </div>
        </div>

        {/* Search Header */}
        <div className="h-12 border-b border-neutral-200 flex items-center px-4 gap-3 bg-white shrink-0">
          <Search className="size-3.5 text-neutral-400" />
          <div className="flex-1 min-w-0">
            <div className="text-[12px] text-neutral-800 font-medium truncate">
                Barrel manufacturing equipment buyers · <span className="text-orange-600">United States</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 rounded-sm border border-green-100"
          >
            <span className="size-1 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[9px] font-bold tabular-nums">127 Eşleşme</span>
          </motion.div>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto relative px-3 py-3 space-y-2.5">
            {step < 2 ? (
                // Loading State
                <div className="space-y-3">
                    {[1,2,3,4].map(i => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                            className="h-24 w-full bg-neutral-50 rounded-lg border border-neutral-100"
                        />
                    ))}
                </div>
            ) : (
                <>
                    {/* Results List - First Batch */}
                    {COMPANIES.map((co, i) => (
                        <motion.div
                            key={co.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="group bg-white border border-neutral-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all cursor-pointer p-3"
                        >
                            <div className="flex items-start gap-3">
                                {/* Avatar */}
                                <div className="size-9 rounded bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-[11px] font-bold text-blue-700 shrink-0 uppercase">
                                    {co.name.substring(0,2)}
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    {/* Header Row */}
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <h4 className="text-[12px] font-semibold text-neutral-900 leading-tight">{co.name}</h4>
                                        <span className={cn(
                                            "text-[10px] font-mono font-bold px-1.5 py-0.5 rounded tabular-nums shrink-0",
                                            co.score >= 90 ? "bg-green-100 text-green-700" :
                                            co.score >= 85 ? "bg-emerald-50 text-emerald-600" :
                                            "bg-neutral-100 text-neutral-600"
                                        )}>
                                            {co.score}
                                        </span>
                                    </div>

                                    {/* Website */}
                                    <a className="inline-flex items-center gap-1 text-[10px] text-blue-600 hover:text-blue-700 mb-1.5 group/link">
                                        {co.website}
                                        <ExternalLink className="size-2.5 opacity-50 group-hover/link:opacity-100" />
                                    </a>

                                    {/* Match Reason */}
                                    <p className="text-[10px] text-neutral-600 leading-relaxed mb-2 text-pretty">
                                        {co.match}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1">
                                        {co.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[9px] px-1.5 py-0.5 bg-neutral-100 text-neutral-600 rounded font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Arrow */}
                                <ChevronRight className="size-4 text-neutral-300 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all shrink-0 mt-1" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Skeleton Loading - More Results */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2.5 pt-1 pb-2"
                    >
                        {[1,2,3].map(i => (
                            <motion.div
                                key={`skeleton-${i}`}
                                initial={{ opacity: 0.2 }}
                                animate={{ opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.15 }}
                                className="h-24 w-full bg-neutral-50/80 rounded-lg border border-neutral-100/50"
                            />
                        ))}
                    </motion.div>
                </>
            )}
        </div>

        {/* Fixed Pagination Footer */}
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="border-t border-neutral-200 bg-white px-4 py-2.5 flex items-center justify-center gap-2 shrink-0"
          >
            <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wide">
              Sayfa 1 / 10
            </div>
            <div className="size-1 bg-neutral-300 rounded-full" />
            <div className="text-[10px] font-mono text-neutral-500 tabular-nums">
              127 toplam eşleşme
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}