"use client"

import { Search, Brain, Workflow, Handshake } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Kesfedin",
    description: "Hedef pazarinizi secin ve yapay zeka potansiyel alicilari bularak listelesin."
  },
  {
    number: "02",
    icon: Brain,
    title: "Arastirin",
    description: "Umut vadeden sirketler icin yapay zeka destekli derinlemesine analiz yapin."
  },
  {
    number: "03",
    icon: Workflow,
    title: "Takip Edin",
    description: "Pipeline'i yonetin, aktiviteleri kaydedin ve gorevleri organize edin."
  },
  {
    number: "04",
    icon: Handshake,
    title: "Kazanin",
    description: "Yapay zeka rehberligiyle satis yaklasimlarinizi gelistirin ve anlasma kapatin."
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative mx-auto grid h-auto w-full grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6 my-20 bg-transparent px-4 lg:px-9">
      
      {/* Top Border */}
      <div className="col-span-full border-t border-neutral-200 dark:border-neutral-800 pt-4 mb-8" />

      {/* Header */}
      <div className="col-span-full lg:col-span-4 mb-12 lg:mb-0">
        <div className="flex flex-col gap-6 sticky top-20">
          <div className="text-pretty font-mono text-[14px] leading-[100%] tracking-[-0.0175rem] inline-flex items-center uppercase gap-3">
            <div className="size-2 rounded-full border border-transparent bg-neutral-400" />
            <p className="whitespace-nowrap text-neutral-500 text-pretty font-mono text-[12px] leading-[100%] tracking-[-0.015rem] uppercase">
              Nasil Calisir
            </p>
          </div>
          <h2 className="text-neutral-950 dark:text-white font-normal text-[30px] leading-[100%] tracking-[-0.05rem] lg:text-[40px] lg:tracking-[-0.09rem]">
            Dort Adimda <br /> Yeni Musteriler Kazanin
          </h2>
        </div>
      </div>

      {/* Steps List - Styled like the "Product" cards in source */}
      <div className="col-span-full lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="group relative flex flex-col rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-6 transition-colors duration-200 hover:border-neutral-400 dark:hover:border-neutral-600"
          >
            {/* Step Header */}
            <div className="flex items-center justify-between mb-6">
               <span className="grid h-6 w-fit place-content-center rounded-sm border px-1.5 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
                  <p className="text-neutral-950 dark:text-white text-pretty font-mono text-[12px] leading-[100%] tracking-[-0.015rem] uppercase">
                    Adim {step.number}
                  </p>
               </span>
               <step.icon className="size-5 text-neutral-400 group-hover:text-orange-500 transition-colors duration-200" />
            </div>

            {/* Content */}
            <div className="mt-auto">
              <h3 className="text-lg font-normal text-neutral-950 dark:text-white mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 leading-relaxed text-pretty">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}