"use client"

import { motion, AnimatePresence } from "framer-motion"
import { 
  Bot, 
  Mail, 
  Linkedin, 
  Search, 
  Check, 
  ArrowRight,
  BrainCircuit,
  Lightbulb,
  Loader2
} from "lucide-react"
import { useEffect, useState } from "react"

// --- TYPES & DATA ---
type StepType = 'idle' | 'analyzing' | 'searching' | 'strategizing' | 'drafting' | 'complete'

export default function AIAssistantDemo() {
  const [status, setStatus] = useState<StepType>('idle')
  const [currentThought, setCurrentThought] = useState("")
  
  // Simulation Loop
  useEffect(() => {
    const runSimulation = async () => {
      // RESET
      setStatus('idle')
      setCurrentThought("Waiting for input...")
      await new Promise(r => setTimeout(r, 1000))

      // PHASE 1: ANALYZING
      setStatus('analyzing')
      setCurrentThought("Scanning TechFlow Systems public data...")
      await new Promise(r => setTimeout(r, 1500))
      
      setCurrentThought("Analyzing annual report for supply chain risks...")
      await new Promise(r => setTimeout(r, 1500))

      // PHASE 2: SEARCHING (Person Card)
      setStatus('searching')
      setCurrentThought("Identifying Procurement Directors in Berlin...")
      await new Promise(r => setTimeout(r, 1500))

      // PHASE 3: STRATEGIZING (Strategy Card)
      setStatus('strategizing')
      setCurrentThought("Formulating value proposition based on delivery speed...")
      await new Promise(r => setTimeout(r, 1500))

      // PHASE 4: DRAFTING (Messages)
      setStatus('drafting')
      setCurrentThought("Drafting personalized outreach in EN & DE...")
      await new Promise(r => setTimeout(r, 2000))

      // DONE
      setStatus('complete')
      setCurrentThought("Analysis complete. Ready for review.")
    }

    runSimulation()
  }, [])

  return (
    <div className="w-full h-full bg-[#F8F9FA] flex flex-col font-sans relative overflow-hidden rounded-lg border border-neutral-200 shadow-sm select-none">
      
      {/* --- HEADER --- */}
      <div className="h-12 border-b border-neutral-200 bg-white flex items-center px-4 justify-between shrink-0 z-20 relative">
        <div className="flex items-center gap-2.5">
          <div className="size-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-md flex items-center justify-center shadow-sm">
            <Bot className="size-3.5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-neutral-900 leading-none">Sales Agent</span>
            <span className="text-[9px] text-neutral-400 font-mono mt-0.5">Active • TechFlow Systems</span>
          </div>
        </div>
      </div>

      {/* --- MAIN CANVAS --- */}
      <div className="flex-1 p-4 overflow-hidden relative flex flex-col gap-4">
        
        {/* 1. USER PROMPT */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="self-end bg-white border border-neutral-200 text-neutral-800 px-4 py-3 rounded-2xl rounded-tr-sm text-xs shadow-sm max-w-[90%] shrink-0"
        >
            <p className="leading-relaxed font-medium">
                TechFlow Systems için bir satış stratejisi hazırla. Tedarik zinciri sorunlarına odaklan ve karar vericiye ulaş.
            </p>
        </motion.div>

        {/* 2. AGENT WORKSPACE */}
        <div className="flex-1 flex flex-col gap-3 min-h-0">
            
            {/* A. Compact Thinking Bar (One-Liner) */}
            <AnimatePresence mode="wait">
                {status !== 'idle' && (
                    <motion.div 
                        key="status-bar"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 px-3 py-2 bg-white border border-neutral-200/60 rounded-full shadow-sm w-fit max-w-full"
                    >
                        {status === 'complete' ? (
                             <div className="size-4 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                <Check className="size-2.5 text-green-600" />
                             </div>
                        ) : (
                             <BrainCircuit className="size-3.5 text-orange-500 animate-pulse shrink-0" />
                        )}
                        
                        <motion.span 
                            key={currentThought}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-mono text-neutral-600 truncate"
                        >
                            {currentThought}
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* B. Dynamic Result Cards (Scrollable Area) */}
            <div className="flex-1 relative overflow-y-auto pr-1 space-y-3 pb-2 mask-linear-fade">
                
                {/* 1. PERSON FOUND */}
                <AnimatePresence>
                    {(status === 'searching' || status === 'strategizing' || status === 'drafting' || status === 'complete') && (
                         <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className="bg-white border border-neutral-200 rounded-lg p-3 shadow-sm"
                         >
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="size-5 bg-blue-50 text-blue-600 rounded flex items-center justify-center">
                                        <Search className="size-3" />
                                    </div>
                                    <span className="text-[10px] font-bold text-neutral-500 uppercase">Karar Verici</span>
                                </div>
                                <div className="px-1.5 py-0.5 bg-green-50 text-green-700 text-[9px] rounded font-bold border border-green-100 flex items-center gap-1">
                                    <Check className="size-2" /> Verified
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="size-10 bg-neutral-100 rounded-full flex items-center justify-center border border-neutral-200 relative">
                                    <span className="text-xs font-bold text-neutral-600">SC</span>
                                    <div className="absolute -bottom-0.5 -right-0.5 size-4 bg-[#0A66C2] rounded-full flex items-center justify-center border border-white">
                                        <Linkedin className="size-2 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-neutral-900">Sarah Chen</h4>
                                    <p className="text-[10px] text-neutral-500">Director of Operations</p>
                                    <div className="flex gap-2 mt-1">
                                        <span className="text-[9px] text-neutral-400">Berlin, Germany</span>
                                    </div>
                                </div>
                            </div>
                         </motion.div>
                    )}
                </AnimatePresence>

                {/* 2. STRATEGY INSIGHT */}
                <AnimatePresence>
                    {(status === 'strategizing' || status === 'drafting' || status === 'complete') && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white border border-neutral-200 rounded-lg p-3 shadow-sm"
                        >
                             <div className="flex items-center gap-2 mb-3">
                                <div className="size-5 bg-orange-50 text-orange-600 rounded flex items-center justify-center">
                                    <Lightbulb className="size-3" />
                                </div>
                                <span className="text-[10px] font-bold text-neutral-500 uppercase">Önerilen Yaklaşım</span>
                            </div>
                            <div className="space-y-2">
                                <div className="p-2.5 bg-neutral-50 rounded border border-neutral-100">
                                    <h5 className="text-[11px] font-semibold text-neutral-800 mb-1">🔥 Pain Point: Üretim Gecikmeleri</h5>
                                    <p className="text-[10px] text-neutral-600 leading-relaxed">
                                        TechFlow'un raporunda "hammadde tedarik sürelerinin uzaması" risk olarak belirtilmiş. Üretim kapasitemizin boşluğunu ve <strong>48 saatte teslimat</strong> garantimizi öne çıkarın.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 3. DRAFTED MESSAGES */}
                <AnimatePresence>
                     {(status === 'drafting' || status === 'complete') && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-1 gap-2"
                        >
                            {/* Email Draft */}
                            <div className="bg-white border border-neutral-200 p-3 rounded-lg shadow-sm group hover:border-blue-300 transition-colors cursor-pointer">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <Mail className="size-3 text-blue-600" />
                                        <span className="text-[10px] font-bold text-neutral-700">Soğuk E-posta Taslağı (EN)</span>
                                    </div>
                                    <ArrowRight className="size-3 text-neutral-300 group-hover:text-blue-500" />
                                </div>
                                <div className="pl-5 border-l-2 border-neutral-100">
                                    <p className="text-[10px] font-mono text-neutral-800 font-medium mb-1">Subject: Solving TechFlow's lead time bottlenecks</p>
                                    <p className="text-[10px] text-neutral-500 leading-relaxed line-clamp-2">
                                        Hi Sarah, I read about TechFlow's expansion in Berlin. With current supply chain volatility, securing reliable component flow is critical...
                                    </p>
                                </div>
                            </div>

                            {/* LinkedIn Draft */}
                            <div className="bg-white border border-neutral-200 p-3 rounded-lg shadow-sm group hover:border-blue-300 transition-colors cursor-pointer">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <Linkedin className="size-3 text-[#0A66C2]" />
                                        <span className="text-[10px] font-bold text-neutral-700">LinkedIn Mesajı (DE)</span>
                                    </div>
                                    <ArrowRight className="size-3 text-neutral-300 group-hover:text-[#0A66C2]" />
                                </div>
                                <div className="pl-5 border-l-2 border-neutral-100">
                                    <p className="text-[10px] text-neutral-500 leading-relaxed line-clamp-2">
                                        Hallo Sarah, Glückwunsch zur Werkserweiterung! Wir helfen Herstellern wie TechFlow, die Lieferzeiten um 40% zu verkürzen...
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                     )}
                </AnimatePresence>

            </div>
        </div>
      </div>
    </div>
  )
}