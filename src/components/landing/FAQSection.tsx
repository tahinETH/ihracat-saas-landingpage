"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Ihracat Yardimcisi nedir?",
    answer:
      "Ihracat Yardimcisi, Turk ihracatcilarinin uluslararasi pazarlarda potansiyel alicilar bulmasi, sirket istihbarati almasi ve kisisellestirilmis satis stratejileri olusturmasi icin tasarlanmis yapay zeka destekli bir platformdur."
  },
  {
    question: "Pazar arastirmasi nasil calisir?",
    answer:
      "Yapay zeka, ideal musteri profilinizi ve hedef ulkeyi analiz ederek en uygun sektor ve sirketleri belirler. Ardindan sirketleri kesfeder, puanlar ve sirketinizle uyumlulugunu aciklar."
  },
  {
    question: "Eslesme puani ne anlama geliyor?",
    answer:
      "0-100 arasi eslesme puani, bir potansiyel musterinin sirketinizle ne kadar uyumlu oldugunu gosterir. Puan, sektor uyumu, urun eslesmesi, sirket boyutu ve kulturel faktorlere gore hesaplanir."
  },
  {
    question: "Hangi ulkeleri destekliyorsunuz?",
    answer:
      "Avrupa, Kuzey Amerika, Orta Dogu ve Asya'daki 50'den fazla ulkede pazar arastirmasi yapabilirsiniz. Surekli olarak yeni pazarlar ve veri kaynaklari ekliyoruz."
  },
  {
    question: "Verilerim guvenli mi?",
    answer:
      "Evet, tum veriler SSL sifreleme ile korunur ve KVKK uyumlu veri merkezlerinde saklanir. Verilerinizi ucuncu taraflarla paylasmiyoruz."
  },
  {
    question: "Ucretsiz deneme suresi var mi?",
    answer:
      "Evet, 14 gun boyunca tum ozellikleri ucretsiz deneyebilirsiniz. Kredi karti bilgisi gerektirmez."
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className="relative mx-auto grid h-auto w-full grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6 my-20 bg-transparent px-4 lg:px-9">
      
      {/* Top Border */}
      <div className="col-span-full border-t border-neutral-200 dark:border-neutral-800 pt-4 mb-8" />

      {/* Left Column: Header */}
      <div className="col-span-4 lg:col-span-5 mb-12 lg:mb-0">
        <div className="sticky top-24">
          <div className="text-pretty font-mono text-[14px] leading-[100%] tracking-[-0.0175rem] inline-flex items-center uppercase gap-3 mb-6">
            <div className="size-2 rounded-full border border-transparent bg-neutral-400" />
            <p className="whitespace-nowrap text-neutral-500 text-pretty font-mono text-[12px] leading-[100%] tracking-[-0.015rem] uppercase">
              SSS
            </p>
          </div>
          <h2 className="text-neutral-950 dark:text-white font-normal text-[30px] leading-[100%] tracking-[-0.05rem] lg:text-[40px] lg:tracking-[-0.09rem]">
            Sikca Sorulan <br /> Sorular
          </h2>
          
          <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 max-w-[280px]">
            <p className="text-[13px] text-neutral-500 font-mono mb-2">
              Baska sorulariniz mi var?
            </p>
            <a href="mailto:destek@ihracatyardimcisi.com" className="text-[13px] font-mono uppercase text-orange-600 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 group">
              Bize ulasin
              <span className="block h-px w-4 bg-orange-600 group-hover:w-6 transition-all" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: List */}
      <div className="col-span-4 lg:col-span-7">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-t border-neutral-200 dark:border-neutral-800 first:border-t-0 lg:first:border-t"
            >
              <AccordionTrigger className="group py-6 hover:no-underline [&[data-state=open]>div>svg]:rotate-45">
                <div className="flex w-full items-center justify-between">
                  <span className="text-[16px] font-normal text-neutral-950 dark:text-white text-left pr-8 tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {faq.question}
                  </span>
                  <Plus className="size-4 text-neutral-400 transition-transform duration-200 shrink-0" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[14px] font-mono text-neutral-500 dark:text-neutral-400 pb-8 leading-[160%]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}