"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Clock, Users, Lightbulb, Building2 } from "lucide-react"
import { useEffect, useState } from "react"

const COMPANY = {
  name: "Absolute Machine Tools, Inc.",
  industry: "Machinery Manufacturing",
  country: "United States",
  website: "https://absolutemachine.com/",
  logo: "A",
}

const ANALYSIS = {
  score: 92,
  label: "Mükemmel Eşleşme",
  size: "Large",
  date: "25.12.2025 08:02:16",
  rationale: "There is strong product/service alignment as Absolute Machine Tools, Inc. focuses on CNC machine tools and automation, which complements Selsa Makina's high-precision machinery. The strategic fit is excellent with both companies operating in North American and global markets.",
}

const DECISION_MAKERS = [
  { name: "Steve Ortner", role: "Başkan ve İcra Kurulu Başkanı" },
  { name: "Klaus Miller", role: "Satıştan Sorumlu Başkan Yardımcısı" },
  { name: "Courtney Ortner", role: "Pazarlama Direktörü" },
]

const INSIGHTS = [
  "Dağıtım Ortaklığı Fırsatı: Kuzey Amerika için \"ana ithalatçı ve distribütör\" olarak Absolute Machine Tools, Selsa Makina'nın ABD pazarına genişlemesi için ideal bir potansiyel ortak olmaktadır.",
  "Ürün Sinerjisi Mevcut: Absolute hali hazırda \"delik delme ve finisaj makineleri\" satıyor; bu mevcut bir müşteri tabanına ve bilgi birikimine sahip olduğunu gösteriyor.",
  "Öne Çıkan Farkları Vurgulayın: Sunumunuzu maliyet avantajı ve 4-5 ay gibi kısa teslim süresi üzerine kurun.",
]

export default function DeepResearchDemo() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const sequence = async () => {
      setStep(0)
      await new Promise(r => setTimeout(r, 300))
      setStep(1) // Show header
      await new Promise(r => setTimeout(r, 400))
      setStep(2) // Show analysis
      await new Promise(r => setTimeout(r, 500))
      setStep(3) // Show rest
      await new Promise(r => setTimeout(r, 5000))
    }
    sequence()
  }, [])

  return (
    <div className="w-full h-full bg-[#F8F9FA] flex flex-col font-sans overflow-hidden rounded-lg border border-neutral-200 shadow-sm text-[11px]">

      {/* Company Header */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-3 bg-white border-b border-neutral-200 flex items-center justify-between shrink-0"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded bg-blue-100 flex items-center justify-center text-sm font-bold text-blue-700 shrink-0">
                {COMPANY.logo}
              </div>
              <div>
                <h2 className="text-sm font-bold text-neutral-900">{COMPANY.name}</h2>
                <div className="flex items-center gap-2 text-[10px] text-neutral-500 mt-0.5">
                  <span className="px-1.5 py-0.5 bg-neutral-100 rounded">{COMPANY.industry}</span>
                  <span>{COMPANY.country}</span>
                  <a className="text-emerald-600 flex items-center gap-0.5">
                    {COMPANY.website.replace('https://', '')} <ExternalLink className="size-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">

        {/* Strategic Analysis Card */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg border border-neutral-200 p-4"
            >
              <div className="flex items-center gap-1 text-[9px] text-neutral-400 uppercase tracking-wider mb-3">
                <span className="size-1.5 bg-neutral-300 rounded-full" />
                Stratejik Uyum Analizi
              </div>

              <div className="flex gap-4">
                {/* Score Circle */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative size-16">
                    <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#e5e5e5" strokeWidth="3" />
                      <motion.circle
                        cx="18" cy="18" r="15" fill="none" stroke="#10b981" strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="94.2"
                        initial={{ strokeDashoffset: 94.2 }}
                        animate={{ strokeDashoffset: 94.2 * (1 - ANALYSIS.score / 100) }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-neutral-900 tabular-nums">{ANALYSIS.score}</span>
                      <span className="text-[8px] text-neutral-400">/ 100</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-medium mt-1">{ANALYSIS.label}</span>
                </div>

                {/* Analysis Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] text-neutral-400 uppercase">Şirket Büyüklüğü</span>
                    <span className="text-[10px] font-medium text-neutral-700 flex items-center gap-1">
                      <Building2 className="size-3" /> {ANALYSIS.size}
                    </span>
                  </div>
                  <div className="text-[9px] text-neutral-400 uppercase mb-1">Eşleşme Gerekçesi</div>
                  <p className="text-[10px] text-neutral-600 leading-relaxed line-clamp-3">
                    {ANALYSIS.rationale}
                  </p>
                  <div className="flex items-center gap-1 text-[9px] text-neutral-400 mt-2">
                    <Clock className="size-3" />
                    <span>Analiz Tarihi: {ANALYSIS.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Two Column Layout */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-3"
            >
              {/* Decision Makers */}
              <div className="bg-white rounded-lg border border-neutral-200 p-3">
                <div className="flex items-center gap-1.5 text-[9px] text-neutral-400 uppercase tracking-wider mb-2">
                  <Users className="size-3" />
                  Karar Vericiler
                </div>
                <div className="space-y-2">
                  {DECISION_MAKERS.map((person, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-[10px] font-medium text-neutral-800">{person.name}</span>
                      <span className="text-[8px] px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded truncate max-w-[80px]">
                        {person.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sales Insights */}
              <div className="bg-white rounded-lg border border-neutral-200 p-3">
                <div className="flex items-center gap-1.5 text-[9px] text-neutral-400 uppercase tracking-wider mb-2">
                  <Lightbulb className="size-3" />
                  Satış İçgörüleri
                </div>
                <div className="space-y-1.5">
                  {INSIGHTS.slice(0, 2).map((insight, idx) => (
                    <p key={idx} className="text-[9px] text-neutral-600 leading-relaxed line-clamp-2">
                      <span className="text-amber-500 mr-1">💡</span>
                      {insight}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
