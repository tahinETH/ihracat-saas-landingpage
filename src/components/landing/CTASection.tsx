"use client"

import Link from "next/link"
import { ArrowRight, Terminal } from "lucide-react"

export default function CTASection() {
  return (
    <section id="cta" className="relative mx-auto grid h-auto w-full grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6 my-20 bg-[#F1F1EF] px-4 lg:px-9 first:mt-4 lg:mt-20 lg:mb-30">
      
      {/* Top Border Line */}
      <div className="col-span-full border-t border-neutral-200 dark:border-neutral-800 pt-12" />

      {/* Left Column: Text Content */}
      <div className="col-span-4 lg:col-span-6 flex flex-col justify-between mb-12 lg:mb-0">
        <div className="flex flex-col gap-6 lg:gap-8">
          
          {/* Badge */}
          <div className="text-pretty font-mono text-[14px] leading-[100%] tracking-[-0.0175rem] inline-flex items-center uppercase gap-3">
            <div className="size-2 transform-gpu rounded-full border border-transparent bg-orange-500 will-change-[background-color]" />
            <p className="whitespace-nowrap text-neutral-500 text-pretty font-mono text-[12px] leading-[100%] tracking-[-0.015rem] uppercase">
              Simdi Baslayin
            </p>
          </div>

          {/* Headline */}
          <h2 className="text-neutral-950 dark:text-white font-normal text-[40px] leading-[100%] tracking-[-0.16rem] lg:tracking-[-0.18rem] lg:-ml-1 lg:text-7xl">
            Ihracatta Yapay <br /> Zeka Devrimi
          </h2>

          {/* Description */}
          <p className="font-mono text-[16px] leading-[140%] tracking-[-0.02rem] lg:text-[18px] lg:tracking-[-0.0225rem] text-neutral-500 dark:text-neutral-400 text-balance lg:max-w-[500px]">
            Dogru alicilari bulun, akilli eslestirme ile onceliklendirin ve kisisellestirilmis rehberlikle satis sureclerinizi hizlandirin.
          </p>
        </div>
      </div>

      {/* Right Column: The "Terminal" CTA Card */}
      <div className="col-span-4 lg:col-span-6 lg:col-start-7 flex items-end">
        <div className="w-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 rounded-lg overflow-hidden shadow-sm">
          
          {/* Terminal Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2 p-3 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="flex gap-1.5 ml-1">
              <div className="size-2.5 rounded-full bg-red-400/80" />
              <div className="size-2.5 rounded-full bg-yellow-400/80" />
              <div className="size-2.5 rounded-full bg-green-400/80" />
            </div>
            <div className="ml-4 flex gap-1">
               <div className="px-3 py-1 rounded-t-sm bg-white dark:bg-neutral-950 border-x border-t border-neutral-200 dark:border-neutral-800 text-[10px] font-mono text-neutral-500 uppercase tracking-tight">
                  bash
               </div>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 flex flex-col gap-6">
            
            {/* Fake Code Block */}
            <div className="font-mono text-[13px] md:text-[14px] space-y-2">
              <div className="flex gap-3 text-neutral-400">
                <span className="text-orange-500 select-none">$</span>
                <span className="text-neutral-800 dark:text-neutral-200">initiate_export_growth --target=global</span>
              </div>
              <div className="flex gap-3 text-neutral-400 opacity-50">
                <span className="select-none text-transparent">$</span>
                <span className="text-neutral-500">analyzing markets... [done]</span>
              </div>
              <div className="flex gap-3 text-neutral-400 opacity-50">
                <span className="select-none text-transparent">$</span>
                <span className="text-neutral-500">finding buyers... [done]</span>
              </div>
              <div className="flex gap-3">
                <span className="text-orange-500 select-none">$</span>
                <span className="animate-pulse w-2 h-5 bg-orange-500 block"></span>
              </div>
            </div>

            {/* Action Buttons styled as inputs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-dashed border-neutral-200 dark:border-neutral-800">
              <Link
                href="#"
                className="flex-1 group relative inline-flex items-center justify-center bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 h-12 px-6 overflow-clip rounded-sm transition-all hover:opacity-90"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <p className="text-pretty font-mono text-[13px] leading-[100%] tracking-[-0.015rem] uppercase">
                    Ucretsiz Baslayin
                  </p>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="#"
                className="group inline-flex items-center justify-center border border-neutral-200 dark:border-neutral-800 bg-transparent h-12 px-6 text-neutral-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors rounded-sm"
              >
                <span className="text-pretty font-mono text-[13px] leading-[100%] tracking-[-0.015rem] uppercase">
                  Demo Talebi
                </span>
              </Link>
            </div>

            <p className="text-center sm:text-left font-mono text-[11px] text-neutral-400 uppercase tracking-tight">
              Kredi karti gerektirmez · 14 gun ucretsiz
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
