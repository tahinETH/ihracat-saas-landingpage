"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Bot, Sparkles, Mail, Linkedin, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function AIAssistantDemo() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const sequence = async () => {
      setStep(0)
      await new Promise(r => setTimeout(r, 1000))
      setStep(1) // Thinking
      await new Promise(r => setTimeout(r, 1500))
      setStep(2) // Card 1
      await new Promise(r => setTimeout(r, 800))
      setStep(3) // Card 2
      await new Promise(r => setTimeout(r, 4000))
      // Loop
    }
    sequence()
  }, [])

  return (
    <div className="w-full h-full bg-[#FAFAFA] flex flex-col font-sans relative overflow-hidden rounded-lg border border-neutral-200 shadow-sm">
      {/* Header */}
      <div className="h-12 border-b border-neutral-200 bg-white flex items-center px-4 justify-between shrink-0">
        <div className="flex items-center gap-2">
            <Bot className="size-4 text-orange-600" />
            <span className="text-xs font-bold text-neutral-900">Satış Asistanı</span>
        </div>
        <div className="text-[10px] text-neutral-400 font-mono">TwistedBarrel Ltd.</div>
      </div>

      <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden relative">
        {/* User Prompt */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="self-end bg-neutral-900 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-xs max-w-[85%] shadow-sm"
        >
            TwistedBarrel için bir satış planı oluştur.
        </motion.div>

        {/* AI Thinking */}
        <AnimatePresence>
            {step === 1 && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="self-start flex items-center gap-2 px-3 py-2 bg-white border border-neutral-100 rounded-2xl rounded-tl-sm shadow-sm"
                >
                    <Sparkles className="size-3 text-orange-500 animate-spin-slow" />
                    <span className="text-[11px] text-neutral-500">Analiz ediliyor...</span>
                </motion.div>
            )}
        </AnimatePresence>

        {/* AI Response Cards */}
        {step >= 2 && (
            <div className="flex flex-col gap-3 w-full">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 mb-1"
                >
                    <div className="size-5 bg-orange-100 rounded-full flex items-center justify-center">
                        <Bot className="size-3 text-orange-600" />
                    </div>
                    <span className="text-xs text-neutral-500">İşte önerilen aksiyon planı:</span>
                </motion.div>

                {/* Card 1: Email */}
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white border border-neutral-200 p-3 rounded-lg shadow-sm group hover:border-orange-300 transition-colors cursor-pointer"
                >
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className="size-6 bg-blue-50 text-blue-600 rounded flex items-center justify-center">
                                <Mail className="size-3" />
                            </div>
                            <span className="text-xs font-bold text-neutral-800">Soğuk E-posta</span>
                        </div>
                        <ArrowRight className="size-3 text-neutral-300 group-hover:text-orange-500" />
                    </div>
                    <p className="text-[11px] text-neutral-500 leading-relaxed pl-8">
                        "Üretim Kapasitesi" açısını kullanarak CEO Steve'e ulaşın.
                    </p>
                </motion.div>

                {/* Card 2: LinkedIn */}
                {step >= 3 && (
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border border-neutral-200 p-3 rounded-lg shadow-sm group hover:border-blue-300 transition-colors cursor-pointer"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className="size-6 bg-blue-50 text-blue-600 rounded flex items-center justify-center">
                                    <Linkedin className="size-3" />
                                </div>
                                <span className="text-xs font-bold text-neutral-800">LinkedIn Bağlantısı</span>
                            </div>
                            <ArrowRight className="size-3 text-neutral-300 group-hover:text-blue-500" />
                        </div>
                        <p className="text-[11px] text-neutral-500 leading-relaxed pl-8">
                            Teknik Müdür John Doe ile bağlantı kurun.
                        </p>
                    </motion.div>
                )}
            </div>
        )}
      </div>
    </div>
  )
}