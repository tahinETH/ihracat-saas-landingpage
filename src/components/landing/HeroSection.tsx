"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Globe, BarChart3, Bot, Briefcase, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

// Import demo components
import MarketResearchDemo from "@/components/landing/demos/MarketResearchDemo"
import DeepResearchDemo from "@/components/landing/demos/DeepResearchDemo"
import AIAssistantDemo from "@/components/landing/demos/AIAssistantDemo"
import CRMDemo from "@/components/landing/demos/CRMDemo"

const TABS = [
  {
    id: "market",
    label: "Pazar Araştırması",
    title: "50-200+ Potansiyel Alıcı",
    description: "Hedef ülke ve sektörü seçin. AI 75-120 özel sorgu çalıştırır, her firmayı 0-100 puanlar.",
    visual: <MarketResearchDemo />,
    icon: Globe
  },
  {
    id: "deep",
    label: "Derin Araştırma",
    title: "6 Aşamalı İstihbarat",
    description: "Karar vericiler, öncelikler, son gelişmeler ve yaklaşım stratejisi. 4-8 saat yerine 5 dakika.",
    visual: <DeepResearchDemo />,
    icon: BarChart3
  },
  {
    id: "assistant",
    label: "AI Satış Asistanı",
    title: "İçerik Üretimi",
    description: "Firma bağlamını yükleyin, Türkçe sorun. E-posta, LinkedIn mesajı ve satış stratejisi anında hazır.",
    visual: <AIAssistantDemo />,
    icon: Bot
  },
  {
    id: "crm",
    label: "CRM",
    title: "Pipeline Yönetimi",
    description: "Araştırmadan gelen firmalar tek tıkla CRM'e. Aktivite takibi, hatırlatıcılar, süreç yönetimi.",
    visual: <CRMDemo />,
    icon: Briefcase
  }
]

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const activeContent = TABS[activeTab]

  // Auto-switch logic: 6 seconds interval
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % TABS.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isPaused])

  const handleManualClick = (idx: number) => {
    setActiveTab(idx)
    setIsPaused(true)
  }

  return (
    <section className="relative mx-auto w-full max-w-[1400px] px-4 lg:px-9 py-20 lg:py-32">
        
        {/* Top Tag */}
        <div className="flex items-center gap-3 mb-10">
            <div className="size-2 rounded-full bg-orange-600 animate-pulse" />
            <span className="text-[12px] font-mono uppercase tracking-tight text-neutral-900">
                Yapay Zeka İhracat Asistanı
            </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-12 h-auto lg:h-[680px]">

            {/* LEFT COLUMN: Copy & Navigation */}
            <div className="lg:col-span-4 flex flex-col h-full relative z-10">
                
                <h1 className="text-[40px] leading-[110%] lg:text-[64px] font-normal tracking-[-0.18rem] text-neutral-950 mb-8">
                    Doğru alıcıyı bulun. <br/>
                    <span className="text-orange-600">Satışı kapatın.</span>
                </h1>
                
                <p className="font-mono text-[14px] lg:text-[16px] leading-[160%] text-neutral-500 max-w-md mb-10 text-pretty">
                    İhracat departmanınızın süper gücü. Pazar araştırması, firma istihbaratı ve yapay zeka destekli satış stratejileri tek platformda.
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                    <button className="bg-neutral-950 text-white h-12 px-6 rounded-sm text-[13px] font-mono uppercase hover:bg-neutral-800 transition-colors flex items-center gap-2">
                        Ücretsiz Deneyin
                        <ArrowRight className="size-3.5" />
                    </button>
                    <button className="border border-neutral-200 text-neutral-900 h-12 px-6 rounded-sm text-[13px] font-mono uppercase hover:bg-neutral-50 transition-colors">
                        Demo İzle
                    </button>
                </div>

                {/* Vertical Tab Navigation */}
                <div className="mt-auto hidden lg:flex flex-col gap-2">
                    {TABS.map((tab, idx) => (
                        <button
                            key={tab.id}
                            onClick={() => handleManualClick(idx)}
                            className="group relative flex items-start gap-4 p-4 text-left rounded-lg transition-colors hover:bg-neutral-50/80"
                        >
                            {/* Active Indicator Line */}
                            {activeTab === idx && (
                                <motion.div 
                                    layoutId="activeTabLine"
                                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-600 rounded-l-lg"
                                />
                            )}
                            
                            <div className={cn(
                                "mt-1 size-5 shrink-0 transition-colors duration-300",
                                activeTab === idx ? "text-orange-600" : "text-neutral-400 group-hover:text-neutral-600"
                            )}>
                                <tab.icon className="size-full" />
                            </div>
                            
                            <div>
                                <h4 className={cn(
                                    "font-medium text-[14px] transition-colors",
                                    activeTab === idx ? "text-neutral-900" : "text-neutral-500 group-hover:text-neutral-700"
                                )}>
                                    {tab.label}
                                </h4>
                                <AnimatePresence>
                                    {activeTab === idx && (
                                        <motion.p 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="text-[12px] text-neutral-500 font-mono mt-1 leading-relaxed max-w-sm overflow-hidden"
                                        >
                                            {tab.title}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* RIGHT COLUMN: The Visual Display */}
            <div className="lg:col-span-8 h-[500px] lg:h-full relative">
                {/* Dashed Border Container */}
                <div className="absolute inset-0 border border-dashed border-neutral-300 rounded-xl bg-[#FAFAFA] p-4 lg:p-5 flex flex-col overflow-hidden">

                    {/* Visual Browser Window Wrapper */}
                    <div className="relative flex-1 w-full h-full shadow-2xl shadow-neutral-200/50 rounded-lg bg-white overflow-hidden flex flex-col border border-neutral-200">
                         {/* Visual Top Bar */}
                         <div className="h-8 bg-neutral-50 border-b border-neutral-100 flex items-center px-4 gap-2 shrink-0">
                            <div className="flex gap-1.5">
                                <div className="size-2.5 rounded-full bg-neutral-300" />
                                <div className="size-2.5 rounded-full bg-neutral-300" />
                            </div>
                            <div className="ml-auto flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 uppercase">
                                <Sparkles className="size-3 text-orange-500" />
                                {activeContent.label}
                            </div>
                         </div>

                         {/* Content Switcher */}
                         <div className="relative flex-1 bg-white overflow-hidden p-2">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="size-full"
                                >
                                    {activeContent.visual}
                                </motion.div>
                            </AnimatePresence>
                         </div>
                    </div>

                    {/* Decorative Bottom Label */}
                    <div className="absolute bottom-2 right-4 text-[10px] font-mono text-neutral-400 uppercase tracking-widest pointer-events-none">
                        Fig {activeTab + 1}.0
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}
