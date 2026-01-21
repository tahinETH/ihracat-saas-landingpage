"use client"

import {
  Search,
  Building2,
  Target,
  MessageSquareText,
  Workflow,
  ClipboardList
} from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Pazar Arastirmasi",
    description: "Hedef pazarlarinizda potansiyel alicilari yapay zeka destekli filtreleme ile hizlica kesfedin."
  },
  {
    icon: Building2,
    title: "Sirket Istihbarati",
    description: "Her potansiyel musteri hakkinda derinlemesine bilgi alin: sektorler, urunler, boyut ve kulturel uyum."
  },
  {
    icon: Target,
    title: "Akilli Eslestirme",
    description: "0-100 arasi puanlama sistemi ile sirketinizle en uyumlu alicilari oncelikli olarak gorun."
  },
  {
    icon: MessageSquareText,
    title: "Yapay Zeka Rehberligi",
    description: "Her potansiyel musteriye nasil yaklasilacagi konusunda kisisellestirilmis oneriler alin."
  },
  {
    icon: Workflow,
    title: "Pipeline Yonetimi",
    description: "Sirketleri satis asamalarindan gecirin, aktiviteleri ve gorevleri takip edin."
  },
  {
    icon: ClipboardList,
    title: "Gorev Takibi",
    description: "Satis gorevlerinizi tarihlerle birlikte olusturun ve takip edin."
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative mx-auto grid h-auto w-full grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6 my-20 bg-transparent px-4 lg:px-9">
      
      {/* Top Border */}
      <div className="col-span-full border-t border-neutral-200 dark:border-neutral-800 pt-4 mb-8" />

      {/* Header */}
      <div className="col-span-full lg:col-span-5 flex flex-col justify-between mb-12 lg:mb-0 lg:pr-8">
        <div>
          <div className="text-pretty font-mono text-[14px] leading-[100%] tracking-[-0.0175rem] inline-flex items-center uppercase gap-3 mb-6">
            <div className="size-2 rounded-full border border-transparent bg-neutral-400" />
            <p className="whitespace-nowrap text-neutral-500 text-pretty font-mono text-[12px] leading-[100%] tracking-[-0.015rem] uppercase">
              Ozellikler
            </p>
          </div>
          <h2 className="text-neutral-950 dark:text-white font-normal text-[30px] leading-[100%] tracking-[-0.05625rem] lg:text-[40px] lg:tracking-[-0.09rem]">
            Ihracatta Basariyi <br/> Getiren Araclar
          </h2>
        </div>
        
       
      </div>

      {/* Features Grid - Clean lines, no background cards */}
      <div className="col-span-full lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-16 mt-8 lg:mt-0">
        {features.map((feature, index) => (
          <div key={feature.title} className="group flex flex-col gap-4">
            
            {/* Icon Box */}
            <div className="flex items-center gap-x-4">
              <span className="grid size-8 place-content-center rounded-sm border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 group-hover:border-orange-500/50 transition-colors duration-200">
                <feature.icon className="size-4 text-neutral-500 group-hover:text-orange-600 transition-colors duration-200" />
              </span>
              <h3 className="text-[16px] font-normal text-neutral-950 dark:text-white tracking-tight group-hover:text-orange-600 transition-colors duration-200">
                {feature.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-pretty font-mono text-[13px] leading-[140%] tracking-[-0.01rem] text-neutral-500 dark:text-neutral-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}