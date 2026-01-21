"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Building2, Users, Lightbulb, Package, Newspaper, CheckCircle2, Target } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function CompanyResearchDemo() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const sequence = async () => {
      setStep(0)
      await new Promise(r => setTimeout(r, 600))  // Header
      setStep(1) // Analysis
      await new Promise(r => setTimeout(r, 800))  // Row 1 (People/Insights)
      setStep(2) // Row 2 (Products/News)
      await new Promise(r => setTimeout(r, 800))  // Row 3 (Priorities)
      setStep(3) 
      await new Promise(r => setTimeout(r, 8000))
      // Loop handled by parent
    }
    sequence()
  }, [])

  return (
    <div className="w-full h-full bg-[#FAFAFA] flex flex-col font-sans overflow-hidden rounded-lg border border-neutral-200 shadow-sm text-[11px] select-none">

      {/* 
        1. COMPANY HEADER 
      */}
      <div className="px-4 py-3 bg-white border-b border-neutral-200 flex items-center justify-between shrink-0 h-16">
        <div className="flex items-center gap-3 w-full">
            <div className="size-10 rounded-lg bg-gradient-to-br from-blue-50 to-neutral-100 border border-neutral-200 flex items-center justify-center text-sm font-bold text-neutral-400 shrink-0">
                <Building2 className="size-5" />
            </div>
            <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-neutral-900 truncate">Absolute Machine Tools, Inc.</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-700 rounded text-[9px] font-medium border border-green-100 flex items-center gap-1">
                        <CheckCircle2 className="size-2.5" /> Verified
                    </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                    <span className="truncate">Machinery Manufacturing</span>
                    <span className="size-1 bg-neutral-300 rounded-full" />
                    <span>United States</span>
                    <span className="size-1 bg-neutral-300 rounded-full" />
                    <span className="text-blue-600 flex items-center gap-0.5 cursor-pointer hover:underline">
                        absolutemachine.com <ExternalLink className="size-2.5" />
                    </span>
                </div>
            </div>
        </div>
      </div>

      {/* 
        SCROLLABLE DASHBOARD CONTENT 
      */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 relative">
        
        {/* SECTION 1: STRATEGIC FIT */}
        <AnimatePresence>
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                    <span className="size-1.5 bg-orange-500 rounded-full" />
                    Stratejik Uyum Analizi
                 </div>
                 <div className="text-[10px] text-neutral-400">AI Confidence: High</div>
              </div>

              <div className="flex gap-5 items-center">
                {/* Score Circle */}
                <div className="relative size-16 shrink-0">
                    <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#f5f5f5" strokeWidth="3" />
                      <motion.circle
                        cx="18" cy="18" r="15" fill="none" stroke="#24b53c" strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="94.2"
                        initial={{ strokeDashoffset: 94.2 }}
                        animate={{ strokeDashoffset: 94.2 * (1 - 0.92) }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-neutral-900 tabular-nums">92</span>
                    </div>
                </div>

                {/* Analysis Text Skeleton/Content */}
                <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Mükemmel Eşleşme</span>
                    </div>
                    {step === 0 ? (
                        <div className="space-y-1.5 animate-pulse">
                            <div className="h-2 w-full bg-neutral-100 rounded-full" />
                            <div className="h-2 w-[90%] bg-neutral-100 rounded-full" />
                            <div className="h-2 w-[75%] bg-neutral-100 rounded-full" />
                        </div>
                    ) : (
                        <motion.p 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            className="text-[10px] text-neutral-600 leading-relaxed text-pretty"
                        >
                            <strong className="text-neutral-900">Güçlü Ürün Sinerjisi:</strong> Absolute Machine Tools, CNC ve otomasyon odaklı yapısıyla, SELSA'nın yüksek hassasiyetli üretim kapasitesi için ideal bir dağıtım ortağıdır.
                        </motion.p>
                    )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SECTION 2: ROW 1 (Decision Makers & Insights) */}
        <div className="grid grid-cols-2 gap-3">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg border border-neutral-200 p-3 shadow-sm flex flex-col gap-3 h-full"
            >
                <div className="flex items-center gap-1.5 text-[9px] text-neutral-400 uppercase tracking-wider font-bold">
                    <Users className="size-3" /> Karar Vericiler
                </div>
                <div className="space-y-2.5 flex-1">
                    {[
                        { name: "Steve Ortner", role: "President & CEO", badge: "Primary" },
                        { name: "Klaus Miller", role: "VP of Sales", badge: "Influencer" },
                        { name: "Courtney O.", role: "Director of Marketing", badge: null }
                    ].map((p, i) => (
                        <div key={i} className="flex items-start justify-between group">
                            <div className="flex gap-2">
                                <div className="size-6 bg-neutral-100 rounded-full flex items-center justify-center text-[9px] font-bold text-neutral-500">
                                    {p.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-[10px] font-medium text-neutral-900 leading-none">{p.name}</div>
                                    <div className="text-[9px] text-neutral-500 mt-0.5">{p.role}</div>
                                </div>
                            </div>
                            {p.badge && (
                                <span className={cn("text-[8px] px-1 py-0.5 rounded font-medium", p.badge === "Primary" ? "bg-orange-50 text-orange-700" : "bg-blue-50 text-blue-700")}>
                                    {p.badge}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg border border-neutral-200 p-3 shadow-sm flex flex-col gap-3 h-full"
            >
                <div className="flex items-center gap-1.5 text-[9px] text-neutral-400 uppercase tracking-wider font-bold">
                    <Lightbulb className="size-3" /> Satış İçgörüleri
                </div>
                <div className="space-y-2 flex-1">
                     <div className="p-2 bg-neutral-50 rounded border border-neutral-100">
                        <div className="text-[9px] font-bold text-neutral-800 mb-1">💡 Dağıtım Fırsatı</div>
                        <p className="text-[9px] text-neutral-600 leading-relaxed">
                            Kuzey Amerika pazarı için "ana distribütör" arayışındalar.
                        </p>
                     </div>
                     <div className="p-2 bg-neutral-50 rounded border border-neutral-100">
                        <div className="text-[9px] font-bold text-neutral-800 mb-1">🚀 Rekabet Avantajı</div>
                        <p className="text-[9px] text-neutral-600 leading-relaxed">
                            4-5 aylık teslim sürelerinizi vurgulayın.
                        </p>
                     </div>
                </div>
            </motion.div>
        </div>

        {/* SECTION 3: ROW 2 (Products & News) */}
        <div className="grid grid-cols-2 gap-3">
             <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={step >= 2 ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg border border-neutral-200 p-3 shadow-sm flex flex-col gap-3 h-full"
            >
                 <div className="flex items-center gap-1.5 text-[9px] text-neutral-400 uppercase tracking-wider font-bold">
                    <Package className="size-3" /> Ürün & Hizmetler
                </div>
                <div className="flex flex-wrap gap-1.5 content-start">
                    {["CNC Lathes", "Automation", "Wire EDM", "Finishing", "Turnkey Solutions"].map((tag) => (
                        <span key={tag} className="px-1.5 py-1 bg-neutral-50 border border-neutral-100 text-neutral-600 rounded text-[9px] font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={step >= 2 ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg border border-neutral-200 p-3 shadow-sm flex flex-col gap-3 h-full"
            >
                 <div className="flex items-center gap-1.5 text-[9px] text-neutral-400 uppercase tracking-wider font-bold">
                    <Newspaper className="size-3" /> Son Gelişmeler
                </div>
                <div className="space-y-2">
                    <div className="flex gap-2 items-start">
                         <div className="mt-1 size-1 bg-blue-500 rounded-full shrink-0" />
                         <p className="text-[9px] text-neutral-600 leading-snug">
                            <span className="text-neutral-900 font-medium">Expansion:</span> New tech center opened in Illinois (Q4 2024).
                         </p>
                    </div>
                    <div className="flex gap-2 items-start">
                         <div className="mt-1 size-1 bg-blue-500 rounded-full shrink-0" />
                         <p className="text-[9px] text-neutral-600 leading-snug">
                            <span className="text-neutral-900 font-medium">Partnership:</span> Strategic alliance with FANUC.
                         </p>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* SECTION 4: BUSINESS PRIORITIES (New Section) */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={step >= 3 ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg border border-neutral-200 p-3 shadow-sm"
        >
             <div className="flex items-center gap-1.5 text-[9px] text-neutral-400 uppercase tracking-wider font-bold mb-3">
                <Target className="size-3" /> İş Öncelikleri
            </div>
            <div className="grid grid-cols-1 gap-2">
                {[
                    { title: "Müşteri Karlılığı", desc: "Üreticilerle iş birliği yaparak verimliliği artırmak." },
                    { title: "Kapsamlı Çözüm", desc: "Sadece makine değil, otomasyon ve mühendislik hizmeti sunmak." },
                   
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2 rounded-md hover:bg-neutral-50 transition-colors">
                         <div className="mt-1 size-1.5 bg-orange-500 rounded-full shrink-0" />
                         <div className="flex-1">
                            <h5 className="text-[10px] font-bold text-neutral-900 leading-none mb-1">{item.title}</h5>
                            <p className="text-[9px] text-neutral-500 leading-normal">{item.desc}</p>
                         </div>
                    </div>
                ))}
            </div>
        </motion.div>

      </div>
    </div>
  )
}