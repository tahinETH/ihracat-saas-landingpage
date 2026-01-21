"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Mail, Phone, MessageSquare, Plus, Clock, CheckCircle2, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const PIPELINE_COLUMNS = [
  { id: "new", label: "Yeni", count: 4, color: "orange" },
  { id: "contacted", label: "İletişimde", count: 2, color: "blue" },
  { id: "interested", label: "İlgili", count: 1, color: "purple" },
  { id: "negotiating", label: "Müzakere", count: 1, color: "green" },
]

const ACTIVITY_LOG = [
  { type: "email", text: "Tanışma e-postası gönderildi", time: "Az önce", icon: Mail },
  { type: "note", text: "Karar verici: Steve Johnson (CEO)", time: "2 dk", icon: MessageSquare },
  { type: "task", text: "Takip araması planlandı", time: "5 dk", icon: Phone },
]

export default function CRMDemo() {
  const [step, setStep] = useState(0)
  const [cardPosition, setCardPosition] = useState<'new' | 'contacted'>('new')
  const [showActivity, setShowActivity] = useState(false)
  const [activityIndex, setActivityIndex] = useState(0)

  useEffect(() => {
    const sequence = async () => {
      // Reset
      setStep(0)
      setCardPosition('new')
      setShowActivity(false)
      setActivityIndex(0)

      await new Promise(r => setTimeout(r, 600))
      setStep(1) // Show card in "new"

      await new Promise(r => setTimeout(r, 1200))
      setCardPosition('contacted') // Move card
      setStep(2)

      await new Promise(r => setTimeout(r, 800))
      setShowActivity(true) // Show activity panel
      setStep(3)

      // Stagger activity items
      await new Promise(r => setTimeout(r, 400))
      setActivityIndex(1)
      await new Promise(r => setTimeout(r, 400))
      setActivityIndex(2)
      await new Promise(r => setTimeout(r, 400))
      setActivityIndex(3)

      await new Promise(r => setTimeout(r, 3000))
      // Loop handled by parent
    }
    sequence()
  }, [])

  return (
    <div className="w-full h-full bg-[#F8F8F7] flex font-sans overflow-hidden rounded-lg border border-neutral-200 shadow-sm">

      {/* Left: Kanban Board */}
      <div className="flex-1 p-3 flex gap-2 overflow-hidden">
        {PIPELINE_COLUMNS.map((col, colIdx) => (
          <div
            key={col.id}
            className={cn(
              "flex-1 flex flex-col gap-2 min-w-0",
              colIdx >= 2 && "hidden sm:flex",
              colIdx >= 3 && "opacity-50"
            )}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between px-1.5 py-1">
              <div className="flex items-center gap-1.5">
                <div className={cn(
                  "size-1.5 rounded-full",
                  col.color === "orange" && "bg-orange-500",
                  col.color === "blue" && "bg-blue-500",
                  col.color === "purple" && "bg-purple-500",
                  col.color === "green" && "bg-green-500",
                )} />
                <span className="text-[9px] font-medium text-neutral-600 uppercase tracking-wide">{col.label}</span>
              </div>
              <span className="text-[9px] font-mono text-neutral-400 tabular-nums">{col.count}</span>
            </div>

            {/* Cards Area */}
            <div className="flex-1 flex flex-col gap-1.5 min-h-0">
              {/* Static placeholder cards */}
              {col.id === "new" && (
                <div className="bg-white/60 p-2 rounded border border-neutral-200/50 shadow-sm">
                  <div className="h-2 w-14 bg-neutral-100 rounded mb-1.5" />
                  <div className="h-1.5 w-full bg-neutral-50 rounded" />
                </div>
              )}

              {/* The animated card */}
              {col.id === cardPosition && step >= 1 && (
                <motion.div
                  layoutId="crm-main-card"
                  className="bg-white p-2.5 rounded border border-neutral-200 shadow-sm relative"
                >
                  <div className={cn(
                    "absolute left-0 top-2 w-0.5 h-5 rounded-r-sm",
                    cardPosition === "new" ? "bg-orange-500" : "bg-blue-500"
                  )} />

                  <div className="pl-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[10px] font-bold text-neutral-800">TwistedBarrel</h4>
                      <span className="text-[8px] font-mono text-green-700 bg-green-50 px-1 rounded tabular-nums">92</span>
                    </div>

                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="text-[8px] text-neutral-500">ABD</span>
                      <span className="size-0.5 bg-neutral-300 rounded-full" />
                      <span className="text-[8px] text-neutral-500">Silah Üretimi</span>
                    </div>

                    {cardPosition === "contacted" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2 pt-2 border-t border-neutral-100"
                      >
                        <div className="flex items-center gap-1 text-[8px] text-blue-600">
                          <Clock className="size-2.5" />
                          <span>Yarın 14:00 - Takip araması</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* More placeholder cards */}
              {col.id === "contacted" && cardPosition === "new" && (
                <div className="bg-white/40 p-2 rounded border border-neutral-200/30 shadow-sm">
                  <div className="h-2 w-16 bg-neutral-100 rounded mb-1.5" />
                  <div className="h-1.5 w-10 bg-neutral-50 rounded" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right: Activity Panel */}
      <AnimatePresence>
        {showActivity && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 160, opacity: 1 }}
            className="border-l border-neutral-200 bg-white flex flex-col overflow-hidden hidden sm:flex"
          >
            {/* Activity Header */}
            <div className="px-3 py-2 border-b border-neutral-100">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-medium text-neutral-600 uppercase tracking-wide">Aktiviteler</span>
                <Plus className="size-3 text-neutral-400" />
              </div>
            </div>

            {/* Activity List */}
            <div className="flex-1 p-2 space-y-1.5 overflow-hidden">
              {ACTIVITY_LOG.map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  animate={activityIndex > idx ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-2 p-1.5 rounded hover:bg-neutral-50 group cursor-default"
                >
                  <div className={cn(
                    "size-5 rounded flex items-center justify-center shrink-0 mt-0.5",
                    activity.type === "email" && "bg-blue-50 text-blue-600",
                    activity.type === "note" && "bg-neutral-100 text-neutral-500",
                    activity.type === "task" && "bg-orange-50 text-orange-600",
                  )}>
                    <activity.icon className="size-2.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] text-neutral-700 leading-tight">{activity.text}</p>
                    <span className="text-[8px] text-neutral-400">{activity.time}</span>
                  </div>
                </motion.div>
              ))}

              {/* Task checkbox animation */}
              {activityIndex >= 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 p-1.5 mt-2 bg-green-50 border border-green-100 rounded"
                >
                  <CheckCircle2 className="size-3 text-green-600" />
                  <span className="text-[9px] text-green-700">Görev tamamlandı</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}