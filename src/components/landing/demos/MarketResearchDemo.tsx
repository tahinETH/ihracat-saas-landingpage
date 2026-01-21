"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Search, Globe, ExternalLink, ChevronRight, Sparkles, ArrowRight, Loader2, ChevronDown } from "lucide-react"
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
  const [viewState, setViewState] = useState<"idle" | "input" | "searching" | "results">("idle")
  
  useEffect(() => {
    const sequence = async () => {
      // 1. Idle (Empty Form)
      setViewState("idle")
      await new Promise(r => setTimeout(r, 1000))

      // 2. Input (Fast Fill)
      setViewState("input")
      await new Promise(r => setTimeout(r, 800))

      // 3. Searching (Loader)
      setViewState("searching")
      await new Promise(r => setTimeout(r, 1500))

      // 4. Results (Show Dashboard)
      setViewState("results")
      await new Promise(r => setTimeout(r, 8000)) // Hold results for 8s
      
      // Loop
      sequence()
    }
    sequence()
  }, [])

  return (
    <div className="w-full h-full bg-[#FAFAFA] relative overflow-hidden rounded-lg border border-neutral-200 shadow-sm font-sans select-none flex flex-col">

      {/* 
        --------------------------------------------------
        SCENE 1: INPUT / INITIATION CARD
        (Visible during idle, input, searching)
        --------------------------------------------------
      */}
      <AnimatePresence>
        {viewState !== "results" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-20 flex items-center justify-center p-6 bg-[#FAFAFA]"
          >
            <div className="w-full max-w-sm bg-white rounded-xl shadow-lg shadow-black/5 border border-neutral-200 p-6 flex flex-col gap-5">
              
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <div className="size-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-sm">
                  <Sparkles className="size-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Pazar Araştırması</h3>
                  <p className="text-[11px] text-neutral-500">Hedef kriterleri belirleyin</p>
                </div>
              </div>

              {/* Input Simulation */}
              <div className="space-y-3">
                {/* Industry Input */}
                <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-neutral-400 font-medium ml-1">Ne arıyorsunuz?</label>
                    <div className="h-10 px-3 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-between text-xs transition-colors duration-300">
                         {viewState === "idle" ? (
                            <span className="text-neutral-400">Örn: Makine, Tekstil...</span>
                         ) : (
                            <motion.div layoutId="input-text" className="flex items-center gap-2">
                                <span className="text-neutral-900 font-medium">Barrel Manufacturing Equipment</span>
                            </motion.div>
                         )}
                         <Search className="size-3.5 text-neutral-400" />
                    </div>
                </div>

                {/* Country Input */}
                <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-neutral-400 font-medium ml-1">Hedef Ülke</label>
                    <div className="h-10 px-3 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-between text-xs transition-colors duration-300">
                         <div className="flex items-center gap-2">
                             {viewState === "idle" ? (
                                <span className="text-neutral-400">Ülke Seçin</span>
                             ) : (
                                <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
                                    <span className="text-lg leading-none">🇺🇸</span>
                                    <span className="text-neutral-900 font-medium">United States</span>
                                </motion.div>
                             )}
                         </div>
                         <ChevronDown className="size-3.5 text-neutral-300" />
                    </div>
                </div>
              </div>

              {/* Action Button */}
              <button 
                className={cn(
                    "h-10 w-full rounded-lg flex items-center justify-center gap-2 text-xs font-bold transition-all mt-2",
                    viewState === "searching" 
                        ? "bg-neutral-100 text-neutral-400" 
                        : "bg-neutral-900 text-white shadow-md hover:bg-neutral-800"
                )}
              >
                {viewState === "searching" ? (
                    <>
                        <Loader2 className="size-3.5 animate-spin" />
                        Pazar araştırması yapılıyor...
                    </>
                ) : (
                    <>
                        Araştırmayı Başlat
                        <ArrowRight className="size-3.5" />
                    </>
                )}
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 
        --------------------------------------------------
        SCENE 2: DASHBOARD RESULTS
        (Visible when viewState === 'results')
        --------------------------------------------------
      */}
      <motion.div 
        className="flex-1 flex overflow-hidden w-full h-full bg-[#F8F9FA]"
        initial={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
        animate={viewState === "results" ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0.2, scale: 1.02, filter: "blur(4px)" }}
        transition={{ duration: 0.5 }}
      >
        {/* Sidebar - Global Reach */}
        <div className="w-16 sm:w-52 border-r border-neutral-200 bg-white flex flex-col shrink-0">
          <div className="p-3 border-b border-neutral-100 hidden sm:block">
            <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider mb-2">Hedef Pazarlar</div>
            <div className="space-y-1 overflow-hidden">
              {[
                { code: '🇺🇸', name: 'United States', active: true },
                { code: '🇩🇿', name: 'Algeria', active: false },
                { code: '🇰🇿', name: 'Kazakhstan', active: false },
                { code: '🇷🇸', name: 'Serbia', active: false },
                { code: '🇦🇪', name: 'UAE', active: false },
                { code: '🇫🇷', name: 'France', active: false },
              ].map((c) => (
                <div
                  key={c.name}
                  className={cn(
                    "flex items-center gap-2 p-1.5 rounded-sm text-[11px] font-medium transition-colors",
                    c.active ? "bg-orange-50 text-orange-700" : "text-neutral-500"
                  )}
                >
                  <span className="text-[14px]">{c.code}</span>
                  <span className="truncate">{c.name}</span>
                  {c.active && <div className="ml-auto size-1.5 bg-orange-500 rounded-full animate-pulse" />}
                </div>
              ))}
            </div>
            <div className="pt-2 text-[9px] text-neutral-400 font-mono">+32 Ülke</div>
          </div>
          {/* Mobile Sidebar Icon View */}
          <div className="flex flex-col items-center pt-4 gap-4 sm:hidden">
              <Globe className="size-4 text-orange-600" />
              <div className="w-1 h-8 bg-neutral-100 rounded-full" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 bg-white relative">

          {/* Context Header */}
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
                  Barrel manufacturing equipment · <span className="text-orange-600">United States</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 rounded-sm border border-green-100"
            >
              <span className="size-1 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-bold tabular-nums">127 Eşleşme</span>
            </motion.div>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto relative px-3 py-3 space-y-2.5">
            {viewState === "results" && (
                <>
                    {/* Results List - Fast Reveal */}
                    {COMPANIES.map((co, i) => (
                        <motion.div
                            key={co.name}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                            className="group bg-white border border-neutral-200 rounded-lg hover:border-orange-300 hover:shadow-sm transition-all cursor-pointer p-3"
                        >
                            <div className="flex items-center gap-3">
                                <div className="size-9 rounded bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-[11px] font-bold text-blue-700 shrink-0 uppercase">
                                    {co.name.substring(0,2)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                        <h4 className="text-[12px] font-semibold text-neutral-900 truncate">{co.name}</h4>
                                        <span className={cn(
                                            "text-[10px] font-mono font-bold px-1.5 py-0.5 rounded tabular-nums shrink-0",
                                            co.score >= 90 ? "bg-green-100 text-green-700" :
                                            co.score >= 85 ? "bg-emerald-50 text-emerald-600" :
                                            "bg-neutral-100 text-neutral-600"
                                        )}>
                                            {co.score}
                                        </span>
                                    </div>
                                    {/* Abstract details skeleton to keep it clean */}
                                    <div className="flex gap-1.5 mt-1.5 opacity-60">
                                        <div className="h-1.5 w-16 bg-neutral-200 rounded" />
                                        <div className="h-1.5 w-12 bg-neutral-200 rounded" />
                                        <div className="h-1.5 w-24 bg-neutral-200 rounded" />
                                    </div>
                                </div>
                                <ChevronRight className="size-4 text-neutral-300 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Big Eye-Catching Total at Bottom */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col items-center justify-center py-6"
                    >
                        <div className="text-[32px] font-bold text-orange-600 tabular-nums leading-none mb-1">
                            127
                        </div>
                        <div className="text-[12px] font-semibold text-neutral-700">
                            şirket bulundu
                        </div>
                    </motion.div>
                </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}