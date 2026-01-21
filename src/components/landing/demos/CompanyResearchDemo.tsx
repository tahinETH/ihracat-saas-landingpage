"use client"

import { motion } from "framer-motion"
import { ExternalLink, ChevronDown, CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"

export default function CompanyResearchDemo() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const sequence = async () => {
      setStep(0) // Skeleton
      await new Promise(r => setTimeout(r, 500))
      setStep(1) // Basic Info Loads
      await new Promise(r => setTimeout(r, 1000))
      setStep(2) // Score Calculates
      await new Promise(r => setTimeout(r, 1000))
      setStep(3) // Analysis Text Types out
      await new Promise(r => setTimeout(r, 5000))
      // Loop
    }
    sequence()
  }, [])

  return (
    <div className="w-full h-full bg-white flex flex-col font-sans select-none overflow-hidden rounded-lg border border-neutral-200 shadow-sm p-6 relative">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-4">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0.5, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="size-12 bg-neutral-100 border border-neutral-200 rounded-sm flex items-center justify-center overflow-hidden"
          >
             <span className="text-xl font-bold text-neutral-400">Tb.</span>
          </motion.div>
          
          <div className="space-y-1">
            <motion.div 
                className="h-5 w-32 bg-neutral-100 rounded-sm"
                animate={step >= 1 ? { backgroundColor: "transparent", width: "auto" } : {}}
            >
                {step >= 1 && <h3 className="text-lg font-bold text-neutral-900 leading-none">TwistedBarrel</h3>}
            </motion.div>

            <motion.div 
                className="flex items-center gap-2 h-4 w-40 bg-neutral-50 rounded-sm"
                animate={step >= 1 ? { backgroundColor: "transparent" } : {}}
            >
                {step >= 1 && (
                    <>
                        <span className="text-xs text-neutral-500 font-mono">twistedbarrel.com</span>
                        <span className="text-xs text-neutral-300">•</span>
                        <span className="text-xs text-neutral-500">Small (10-50)</span>
                    </>
                )}
            </motion.div>
            
            {step >= 1 && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1 text-[10px] text-orange-600 font-medium pt-1">
                    Web sitesi <ExternalLink className="size-2.5" />
                </motion.div>
            )}
          </div>
        </div>

        {/* Score Badge */}
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={step >= 2 ? { scale: 1, opacity: 1 } : {}}
            className="flex flex-col items-center justify-center size-12 border border-green-200 bg-green-50 rounded-md"
        >
          <span className="text-lg font-bold text-green-700 leading-none">92</span>
          <span className="text-[8px] uppercase font-bold text-green-600 mt-0.5">PUAN</span>
        </motion.div>
      </div>

      {/* Action Bar */}
      <div className="flex gap-2 mb-8">
        <div className="flex-1 h-9 border border-neutral-200 rounded-sm flex items-center justify-between px-3 bg-white">
          <span className="text-xs text-neutral-600">Yeni Firma</span>
          <ChevronDown className="size-3 text-neutral-400" />
        </div>
        <motion.div 
            animate={step === 2 ? { scale: [1, 1.05, 1], backgroundColor: ["#0a0a0a", "#ea580c", "#0a0a0a"] } : {}}
            transition={{ duration: 0.5 }}
            className="h-9 px-4 bg-neutral-950 rounded-sm flex items-center justify-center"
        >
          <span className="text-xs text-white font-medium">Derin Araştırma</span>
        </motion.div>
      </div>

      {/* Analysis Section */}
      <div className="space-y-4 mb-8">
        <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">Eşleşme Analizi</div>
        <div className="space-y-2">
            {step < 3 ? (
                <>
                    <div className="h-2 w-full bg-neutral-100 rounded-full animate-pulse" />
                    <div className="h-2 w-[98%] bg-neutral-100 rounded-full animate-pulse delay-75" />
                    <div className="h-2 w-[95%] bg-neutral-100 rounded-full animate-pulse delay-100" />
                </>
            ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                    <p className="text-[11px] leading-relaxed text-neutral-600">
                        <span className="text-green-700 font-medium bg-green-50 px-1 rounded-sm">High Alignment:</span> Selsa Makina's deep hole drilling machinery directly addresses their core barrel production process.
                    </p>
                    <p className="text-[11px] leading-relaxed text-neutral-600">
                         Strategic fit is strong with Selsa's active U.S. market expansion.
                    </p>
                </motion.div>
            )}
        </div>
      </div>

      {/* Sectors / Tags */}
      <div className="space-y-3">
          <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">Sektörler</div>
          <div className="flex flex-wrap gap-2">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={step >= 1 ? { opacity: 1, x: 0 } : {}}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-medium rounded-sm border border-blue-100"
              >
                  Firearms & Barrel Production
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={step >= 1 ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="px-2 py-1 bg-neutral-50 text-neutral-600 text-[10px] rounded-sm border border-neutral-100"
              >
                  Defense Manufacturing
              </motion.div>
          </div>
      </div>
    </div>
  )
}