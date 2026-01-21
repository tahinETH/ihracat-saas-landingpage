"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Search, Globe, Mail, BarChart3, Users } from "lucide-react"
import { cn } from "@/lib/utils"

// --- 1. Visual Mockups (The wireframes inside the right panel) ---

// Visual for Step 1: Kesfedin (Search/Map)
const DiscoveryVisual = () => (
  <div className="relative w-full h-full flex flex-col pt-12 px-8 pb-8">
    <div className="absolute top-4 right-6 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
      Pazar Arastirmasi
    </div>
    <div className="w-full h-full bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden flex flex-col">
      <div className="h-10 border-b border-neutral-100 flex items-center px-4 gap-2 bg-neutral-50/50">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-neutral-200" />
          <div className="size-2.5 rounded-full bg-neutral-200" />
        </div>
        <div className="ml-auto w-32 h-1.5 bg-neutral-100 rounded-full" />
      </div>
      <div className="p-6 space-y-6">
        {/* Search Bar Mockup */}
        <div className="w-full h-10 rounded-md border border-neutral-200 flex items-center px-3 gap-3">
            <Search className="size-4 text-neutral-300" />
            <div className="h-1.5 w-24 bg-neutral-100 rounded-full" />
        </div>
        {/* Map/Grid Representation */}
        <div className="grid grid-cols-3 gap-3">
            {[1,2,3,4,5,6].map(i => (
                <div key={i} className="aspect-video bg-neutral-50 rounded-sm border border-neutral-100 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 left-2 w-8 h-1 bg-neutral-200 rounded-full" />
                </div>
            ))}
        </div>
      </div>
    </div>
  </div>
)

// Visual for Step 2: Arastirin (Analysis)
const ResearchVisual = () => (
  <div className="relative w-full h-full flex flex-col pt-12 px-8 pb-8 items-center justify-center">
    <div className="absolute top-4 right-6 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
      Sirket Analizi
    </div>
    <div className="w-full max-w-sm bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
      <div className="flex justify-between items-start mb-6">
        <div className="size-10 bg-neutral-100 rounded-sm" />
        <div className="text-right">
            <div className="text-2xl font-mono text-neutral-900">92%</div>
            <div className="text-[10px] text-neutral-400 uppercase">Eslesme</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="w-full h-2 bg-neutral-100 rounded-full" />
        <div className="w-5/6 h-2 bg-neutral-100 rounded-full" />
        <div className="w-4/6 h-2 bg-neutral-100 rounded-full" />
      </div>
      <div className="mt-6 pt-4 border-t border-neutral-100 flex gap-2">
        <div className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-mono rounded-sm">Kultur Uyumu</div>
        <div className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-mono rounded-sm">Hacim</div>
      </div>
    </div>
  </div>
)

// Visual for Step 3: Takip (Pipeline)
const TrackVisual = () => (
  <div className="relative w-full h-full flex flex-col pt-12 px-8 pb-8">
    <div className="absolute top-4 right-6 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
      Pipeline
    </div>
    <div className="flex gap-3 h-full">
        {/* Columns */}
        {[1, 2, 3].map((col) => (
            <div key={col} className="flex-1 bg-neutral-50/50 rounded-lg border border-neutral-200/50 p-3 flex flex-col gap-3">
                <div className="h-1.5 w-12 bg-neutral-200 rounded-full mb-2" />
                <div className="w-full h-20 bg-white border border-neutral-200 rounded-sm shadow-sm" />
                <div className="w-full h-20 bg-white border border-neutral-200 rounded-sm shadow-sm opacity-50" />
            </div>
        ))}
    </div>
  </div>
)

// Visual for Step 4: Kazanin (Communication)
const WinVisual = () => (
  <div className="relative w-full h-full flex flex-col pt-12 px-8 pb-8 items-center justify-center">
    <div className="absolute top-4 right-6 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
      AI Iletisim
    </div>
    <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-neutral-200 p-6 font-mono text-[11px]">
        <div className="flex gap-3 mb-4 text-neutral-400 border-b border-neutral-100 pb-2">
            <span>To: <span className="text-neutral-900">Satinalma Muduru</span></span>
        </div>
        <div className="space-y-2 text-neutral-600">
            <p>Sayin Muller,</p>
            <p>Organik pamuk talebiniz icin <span className="bg-orange-100 text-orange-800 px-1 rounded-sm">ozellestirilmis</span> bir teklif hazirladik.</p>
            <p className="opacity-50">[AI tarafindan olusturulan kisisel paragraf...]</p>
        </div>
        <div className="mt-6 flex justify-end">
            <div className="bg-neutral-900 text-white px-3 py-1.5 rounded-sm flex items-center gap-2">
                Gonder <ArrowRight className="size-3" />
            </div>
        </div>
    </div>
  </div>
)

// --- 2. Data Structure ---

const TABS = [
  {
    id: "step-01",
    label: "Kesfedin",
    title: "Potansiyel alicilari bulun",
    description: "Hedef pazarinizi secin ve yapay zeka milyonlarca veri noktasini tarayarak size en uygun potansiyel alicilari listelesin.",
    visual: <DiscoveryVisual />,
    icon: Globe
  },
  {
    id: "step-02",
    label: "Arastirin",
    title: "Derinlemesine Analiz",
    description: "Umut vadeden sirketler icin yapay zeka destekli istihbarat toplayin. Karar vericileri, ithalat gecmisini ve finansal durumlarini gorun.",
    visual: <ResearchVisual />,
    icon: BarChart3
  },
  {
    id: "step-03",
    label: "Takip Edin",
    title: "Pipeline Yonetimi",
    description: "Tum satis sureclerinizi tek ekrandan yonetin. Aktiviteleri kaydedin, gorevleri organize edin ve hicbir firsati kacirmayin.",
    visual: <TrackVisual />,
    icon: Users
  },
  {
    id: "step-04",
    label: "Kazanin",
    title: "Anlasma Kapatin",
    description: "Yapay zeka rehberligiyle kisisellestirilmis e-postalar yazin, kulturel kodlara uygun iletisim kurun ve satisi tamamlayin.",
    visual: <WinVisual />,
    icon: Mail
  }
]

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const activeContent = TABS[activeTab]

  return (
    <section id="how-it-works" className="relative mx-auto w-full max-w-[1400px] px-4 lg:px-9 my-20 lg:my-32">
        
        {/* Top Label */}
        <div className="flex items-center gap-3 mb-10">
            <div className="size-2 rounded-full bg-orange-600" />
            <span className="text-[12px] font-mono uppercase tracking-tight text-neutral-900">
                Nasil Calisir
            </span>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 h-auto lg:h-[700px]">
            
            {/* LEFT COLUMN: Header + Card + Nav */}
            <div className="lg:col-span-5 flex flex-col h-full relative">
                
                {/* 1. Header */}
                <h2 className="text-[40px] leading-[100%] lg:text-[64px] font-normal tracking-[-0.18rem] text-neutral-950 mb-12">
                    Ihracat surecinizi <br /> otomatize edin.
                </h2>
                <p className="font-mono text-[14px] lg:text-[16px] leading-[150%] text-neutral-500 max-w-md mb-12">
                    Pazar arastirmasindan son imzaya kadar — Ihracat Yardimcisi, yapay zeka gucuyle operasyonlarinizi tek bir akista birlestirir.
                </p>

                {/* 2. Floating Detail Card */}
                <div className="mt-auto mb-10 lg:mb-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeContent.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="w-full bg-[#F5F5F3] border border-neutral-200 rounded-lg p-8 relative overflow-hidden"
                        >
                            {/* Card Decoration */}
                            <div className="absolute top-6 left-6 size-2 bg-orange-600 rounded-full" />
                            <div className="absolute top-6 right-6 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                                0{activeTab + 1} - {activeContent.label}
                            </div>

                            <div className="mt-8">
                                <h3 className="text-[24px] font-normal tracking-tight text-neutral-950 mb-4">
                                    {activeContent.title}
                                </h3>
                                <p className="font-mono text-[13px] leading-[160%] text-neutral-500 mb-8">
                                    {activeContent.description}
                                </p>
                                <button className="group flex items-center gap-2 bg-neutral-950 text-white px-4 py-2 rounded-sm text-[11px] font-mono uppercase tracking-wide hover:bg-neutral-800 transition-colors">
                                    Detayli Incele
                                    <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 3. Navigation List */}
                <div className="lg:absolute lg:bottom-0 lg:left-0 w-full">
                    {/* Visual Progress Bar */}
                    <div className="flex gap-1 mb-4">
                        {TABS.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={cn(
                                    "h-1.5 rounded-full transition-all duration-300", 
                                    idx === activeTab ? "w-8 bg-orange-600" : "w-2 bg-neutral-200"
                                )} 
                            />
                        ))}
                    </div>

                    {/* Nav Items */}
                    <div className="flex flex-col gap-1">
                        {TABS.map((tab, idx) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(idx)}
                                className={cn(
                                    "text-left font-mono text-[12px] uppercase tracking-wider py-1 transition-colors flex items-center gap-3",
                                    activeTab === idx ? "text-orange-600" : "text-neutral-400 hover:text-neutral-600"
                                )}
                            >
                                <span className="opacity-50 w-4">0{idx + 1}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: The Canvas (Dashed Border) */}
            <div className="lg:col-span-7 h-[500px] lg:h-full relative">
                <div className="absolute inset-0 border border-dashed border-neutral-300 rounded-xl bg-[#EFEFED]/50 overflow-hidden">
                    
                    {/* Corner Dot */}
                    <div className="absolute top-6 left-6 size-2 bg-orange-600 rounded-full z-20" />
                    
                    {/* Content Switcher */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute inset-0 size-full"
                        >
                            {activeContent.visual}
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom Label (Decoration) */}
                    <div className="absolute bottom-6 left-6 text-[12px] font-mono text-neutral-900 uppercase tracking-widest z-20">
                        IY-PROCESS-{activeTab + 1}
                    </div>
                    <div className="absolute bottom-6 right-6 text-[12px] font-mono text-neutral-500 tracking-widest z-20 hidden md:block">
                        {activeContent.label}
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}