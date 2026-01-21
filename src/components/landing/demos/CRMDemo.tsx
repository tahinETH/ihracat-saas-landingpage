"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { useEffect, useState } from "react"

export default function CRMDemo() {
  const [stage, setStage] = useState<'new' | 'contacted'>('new')

  useEffect(() => {
    const cycle = async () => {
      setStage('new')
      await new Promise(r => setTimeout(r, 1500))
      setStage('contacted')
      await new Promise(r => setTimeout(r, 4500))
    }
    cycle()
  }, [])

  return (
    <div className="w-full h-full bg-[#F3F3F2] p-4 flex gap-3 font-sans overflow-hidden rounded-lg border border-neutral-200 shadow-sm">
      
      {/* Column 1: Yeni Fırsatlar */}
      <div className="flex-1 flex flex-col gap-3 min-w-[120px]">
        <div className="flex items-center justify-between text-[10px] font-medium text-neutral-500 uppercase tracking-wider px-1">
            <span>Yeni Fırsatlar</span>
            <span className="bg-neutral-200 text-neutral-600 px-1.5 rounded-full text-[9px]">4</span>
        </div>
        
        {/* Background Cards */}
        <div className="bg-white p-3 rounded border border-neutral-200/50 shadow-sm opacity-60">
             <div className="h-2 w-16 bg-neutral-100 rounded mb-2" />
             <div className="h-1.5 w-full bg-neutral-50 rounded" />
        </div>

        {/* THE MOVING CARD */}
        {stage === 'new' && (
            <motion.div 
                layoutId="crm-card-unique"
                className="bg-white p-3 rounded border border-neutral-200 shadow-sm relative group z-10"
            >
                 <div className="absolute left-0 top-3 w-1 h-6 bg-orange-500 rounded-r-sm" />
                 <h4 className="text-xs font-bold text-neutral-800 mb-1 pl-2">TwistedBarrel</h4>
                 <div className="flex items-center gap-2 mt-2 pl-2">
                    <span className="text-[9px] bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded border border-orange-100">Yüksek Puan</span>
                 </div>
                 <div className="flex items-center justify-between mt-3 pl-2 border-t border-neutral-50 pt-2">
                    <div className="flex -space-x-1.5">
                        <div className="size-4 rounded-full bg-neutral-200 border border-white" />
                        <div className="size-4 rounded-full bg-neutral-300 border border-white" />
                    </div>
                    <span className="text-[9px] text-neutral-400">Bugün</span>
                 </div>
            </motion.div>
        )}
      </div>

      {/* Column 2: İletişime Geçildi */}
      <div className="flex-1 flex flex-col gap-3 min-w-[120px]">
        <div className="flex items-center justify-between text-[10px] font-medium text-neutral-500 uppercase tracking-wider px-1">
            <span>İletişime Geçildi</span>
            <span className="bg-neutral-200 text-neutral-600 px-1.5 rounded-full text-[9px]">2</span>
        </div>

        {/* THE MOVING CARD ARRIVES HERE */}
        {stage === 'contacted' && (
            <motion.div 
                layoutId="crm-card-unique"
                className="bg-white p-3 rounded border border-neutral-200 shadow-sm relative z-10"
            >
                 <div className="absolute left-0 top-3 w-1 h-6 bg-blue-500 rounded-r-sm" />
                 <h4 className="text-xs font-bold text-neutral-800 mb-1 pl-2">TwistedBarrel</h4>
                 <div className="flex items-center gap-2 mt-2 pl-2">
                    <span className="text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-100">Email Gönderildi</span>
                 </div>
                 <div className="flex items-center justify-between mt-3 pl-2 border-t border-neutral-50 pt-2">
                     <div className="flex items-center gap-1 text-[9px] text-neutral-400">
                        <Calendar className="size-3" />
                        <span>Yarın Takip</span>
                     </div>
                 </div>
            </motion.div>
        )}

         <div className="bg-white p-3 rounded border border-neutral-200/50 shadow-sm opacity-40">
             <div className="h-2 w-20 bg-neutral-100 rounded mb-2" />
             <div className="h-1.5 w-full bg-neutral-50 rounded" />
        </div>
      </div>

      {/* Column 3: Müzakere (Static) */}
       <div className="flex-1 flex flex-col gap-3 min-w-[120px] opacity-40 hidden sm:flex">
        <div className="flex items-center justify-between text-[10px] font-medium text-neutral-500 uppercase tracking-wider px-1">
            <span>Müzakere</span>
        </div>
        <div className="bg-white p-3 rounded border border-neutral-200/50 shadow-sm">
             <div className="h-2 w-12 bg-neutral-100 rounded mb-2" />
        </div>
      </div>
    </div>
  )
}