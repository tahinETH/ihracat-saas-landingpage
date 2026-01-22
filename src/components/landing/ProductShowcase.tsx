"use client"

import { ArrowUpRight, ChevronDown } from "lucide-react"

function CompanyCard() {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 w-full max-w-md rounded-md overflow-hidden shadow-sm">
      {/* Main Content */}
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          {/* Logo Box */}
          <div className="size-12 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 rounded-sm flex-shrink-0">
            <span className="text-sm font-mono text-neutral-500">AB</span>
          </div>

          {/* Name & Meta */}
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="flex items-baseline justify-between">
              <h3 className="text-[16px] font-normal text-neutral-950 dark:text-white tracking-tight">
                Acme Berlin GmbH
              </h3>
              {/* Score */}
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-normal text-neutral-950 dark:text-white font-mono tabular-nums">92</span>
                <span className="size-2 rounded-full bg-green-500"></span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-1">
              <a href="#" className="text-xs font-mono text-orange-600 hover:text-orange-500 flex items-center gap-0.5">
                acme-berlin.de <ArrowUpRight className="size-2.5" />
              </a>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-xs text-neutral-500 font-mono tabular-nums">50-200 emp</span>
            </div>
          </div>
        </div>

        {/* Analysis Section */}
        <div className="mb-5 space-y-2">
          <div className="flex items-center justify-between">
             <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">Analiz</span>
          </div>
          <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono">
            Tekstil sektorunde faaliyet gosteriyor, organik pamuk urunleri ariyorlar. Turkiye'den tedarik konusunda acik.
          </p>
        </div>

        {/* Tags - Pill style */}
        <div className="flex flex-wrap gap-2 mb-5">
          {['Tekstil', 'Ev Tekstili', 'Organik Pamuk'].map((tag) => (
            <span key={tag} className="inline-flex items-center px-1.5 py-0.5 text-[11px] border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 font-mono uppercase">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Row */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="relative">
            <select
              className="w-full appearance-none bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-sm px-2 py-1.5 pr-6 text-[12px] font-mono text-neutral-900 dark:text-white focus:outline-none focus:border-orange-500"
              defaultValue="proposal"
            >
              <option value="proposal">Teklif Asamasi</option>
              <option value="meeting">Gorusme</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-3 text-neutral-500 pointer-events-none" />
          </div>

          <button className="px-3 py-1.5 text-[11px] font-mono uppercase bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-sm hover:opacity-90 transition-opacity">
            Derin Arastirma
          </button>
        </div>
      </div>

      {/* Footer Toggle */}
      <button className="w-full py-2.5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex items-center justify-center gap-2 text-[11px] font-mono uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
        <ChevronDown className="size-3" />
        Detaylari Goster
      </button>
    </div>
  )
}

export default function ProductShowcase() {
  return (
    <section id="product" className="relative mx-auto grid h-auto w-full grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6 my-20 bg-[#F2F2F0] px-4 lg:px-9">
      
      {/* Top Border */}
      <div className="col-span-full border-t border-neutral-200 dark:border-neutral-800 pt-4 mb-8" />

      {/* Left Content */}
      <div className="col-span-4 lg:col-span-5 flex flex-col justify-center mb-12 lg:mb-0">
        <div className="mb-6">
          <div className="text-pretty font-mono text-[14px] leading-[100%] tracking-[-0.0175rem] inline-flex items-center uppercase gap-3 mb-6">
            <div className="size-2 rounded-full border border-transparent bg-orange-500" />
            <p className="whitespace-nowrap text-neutral-500 text-pretty font-mono text-[12px] leading-[100%] tracking-[-0.015rem] uppercase">
              Birlesik Sirket Karti
            </p>
          </div>
          <h2 className="text-neutral-950 dark:text-white font-normal text-[30px] leading-[100%] tracking-[-0.05rem] lg:text-[40px] lg:tracking-[-0.09rem] mb-6">
            Tum Bilgiler <br/> Tek Ekranda
          </h2>
          <p className="text-pretty font-mono text-[14px] leading-[140%] text-neutral-500 dark:text-neutral-400 lg:max-w-md">
            Her potansiyel musteri icin kapsamli bir gorunum: sirket profili, eslesme puani, pipeline durumu, aktiviteler ve gorevler.
          </p>
        </div>

        {/* Feature List Items */}
        <div className="space-y-6 mt-4">
          {[
            { title: "Akilli Eslesme Puani", desc: "Sirketinizle uyumlulugu 0-100 arasi gorun." },
            { title: "Aktivite Takibi", desc: "Aramalar, e-postalar ve toplantilari kaydedin." },
            { title: "Derinlemesine Arastirma", desc: "Umut vadeden musteriler icin detayli analiz." }
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 group">
              <div className="size-5 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center rounded-sm mt-0.5 group-hover:border-orange-500 transition-colors">
                <div className="size-2 bg-neutral-300 dark:bg-neutral-700 group-hover:bg-orange-500 transition-colors rounded-full" />
              </div>
              <div>
                <h4 className="text-[14px] font-medium text-neutral-900 dark:text-white">{item.title}</h4>
                <p className="text-[13px] font-mono text-neutral-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content - Visual */}
      <div className="col-span-4 lg:col-span-7 flex items-center justify-center lg:justify-end">
        <div className="relative w-full max-w-md lg:mr-12">
            {/* Abstract Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-neutral-100 to-transparent dark:from-neutral-900 rounded-lg -z-10" />
            <CompanyCard />
        </div>
      </div>
    </section>
  )
}
