"use client"

import { motion } from "framer-motion"
import { Search, Globe, CheckCircle2, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const COMPANIES = [
  { name: "Absolute Machine Tools", loc: "US", score: 92, ind: "Machinery", status: "High Fit" },
  { name: "Setarms LLC", loc: "US", score: 88, ind: "Defense", status: "Good Fit" },
  { name: "Barrel Monkey LLC", loc: "US", score: 85, ind: "Components", status: "Good Fit" },
  { name: "General Dynamics", loc: "US", score: 95, ind: "Defense", status: "High Fit" },
  { name: "Sturm, Ruger & Co.", loc: "US", score: 82, ind: "Firearms", status: "Moderate" },
]

export default function MarketResearchDemo() {
  const [step, setStep] = useState(0)

  // Simulation Loop
  useEffect(() => {
    const sequence = async () => {
      setStep(0) // Reset
      await new Promise(r => setTimeout(r, 500))
      setStep(1) // Searching
      await new Promise(r => setTimeout(r, 1500))
      setStep(2) // Results appear
      await new Promise(r => setTimeout(r, 4000)) 
      // Loop ends or restarts handled by parent usually, 
      // but self-contained reset for demo purposes:
      // setStep(0) 
    }
    sequence()
  }, [])

  return (
    <div className="w-full h-full bg-[#F8F9FA] flex overflow-hidden rounded-lg border border-neutral-200 shadow-sm font-sans select-none">
      
      {/* Sidebar - Global Reach */}
      <div className="w-16 sm:w-48 border-r border-neutral-200 bg-white flex flex-col shrink-0 transition-all duration-500">
        <div className="p-4 border-b border-neutral-100 hidden sm:block">
          <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-3">Hedef Pazar</div>
          <div className="space-y-2">
            {[
              { code: 'US', name: 'United States', active: true },
              { code: 'DE', name: 'Germany', active: false },
              { code: 'GB', name: 'United Kingdom', active: false },
              { code: 'TR', name: 'Turkey', active: false },
            ].map((c) => (
              <div 
                key={c.code} 
                className={cn(
                  "flex items-center gap-2 p-1.5 rounded-sm text-[12px] font-medium transition-colors", 
                  c.active ? "bg-orange-50 text-orange-700" : "text-neutral-500"
                )}
              >
                <span className="font-mono text-[10px] bg-neutral-100 px-1.5 py-0.5 rounded-sm text-neutral-500">{c.code}</span>
                <span className="truncate">{c.name}</span>
                {c.active && <div className="ml-auto size-1.5 bg-orange-500 rounded-full animate-pulse" />}
              </div>
            ))}
            <div className="pt-2 pl-2 text-[10px] text-neutral-400 font-mono">+42 Ülke</div>
          </div>
        </div>
        {/* Mobile Sidebar Icon View */}
        <div className="flex flex-col items-center pt-4 gap-4 sm:hidden">
            <Globe className="size-4 text-orange-600" />
            <div className="w-1 h-8 bg-neutral-100 rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-white relative">
        
        {/* Search Header */}
        <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-3 bg-white shrink-0">
          <Search className={cn("size-4 transition-colors", step === 1 ? "text-orange-500 animate-pulse" : "text-neutral-400")} />
          <div className="flex-1">
             {step === 0 && <span className="text-[13px] text-neutral-300">Pazar aranıyor...</span>}
             {step === 1 && (
                <motion.div 
                    layoutId="search-text"
                    className="text-[13px] text-neutral-800 font-medium"
                >
                    Machinery importers in <span className="text-orange-600 bg-orange-50 px-1 rounded-sm">United States</span>
                </motion.div>
             )}
             {step >= 2 && (
                <div className="text-[13px] text-neutral-800 font-medium">
                    Machinery importers in <span className="text-orange-600 bg-orange-50 px-1 rounded-sm">United States</span>
                </div>
             )}
          </div>
          {step >= 2 && (
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hidden sm:flex items-center gap-2 px-2 py-1 bg-green-50 text-green-700 rounded-full border border-green-100"
             >
                <span className="size-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold">243 Sonuç</span>
             </motion.div>
          )}
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-hidden relative p-4">
            {step < 2 ? (
                // Loading State
                <div className="space-y-4 mt-2">
                    {[1,2,3,4].map(i => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                            className="h-16 w-full bg-neutral-50 rounded border border-neutral-100" 
                        />
                    ))}
                </div>
            ) : (
                // Results List
                <div className="space-y-2">
                    {COMPANIES.map((co, i) => (
                        <motion.div
                            key={co.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex items-center gap-4 p-3 bg-white border border-neutral-100 rounded-lg hover:border-orange-200 hover:shadow-sm transition-all cursor-default"
                        >
                            {/* Avatar */}
                            <div className="size-10 rounded-sm bg-neutral-100 flex items-center justify-center text-[10px] font-bold text-neutral-500 shrink-0 uppercase">
                                {co.name.substring(0,2)}
                            </div>
                            
                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-[13px] font-semibold text-neutral-900 truncate pr-4">{co.name}</h4>
                                    <span className={cn(
                                        "text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-sm tabular-nums",
                                        co.score >= 90 ? "bg-green-100 text-green-700" : "bg-neutral-100 text-neutral-600"
                                    )}>
                                        {co.score}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-[10px] text-neutral-500 font-mono">{co.ind}</span>
                                    <span className="size-0.5 bg-neutral-300 rounded-full" />
                                    <div className="flex items-center gap-1 text-[10px] text-neutral-400">
                                        <CheckCircle2 className="size-2.5 text-blue-500" />
                                        <span>Verified</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Arrow */}
                            <ChevronRight className="size-4 text-neutral-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
      </div>
    </div>
  )
}