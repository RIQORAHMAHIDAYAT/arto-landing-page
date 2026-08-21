import { useState } from 'react'
import { cn } from '@/lib/cn'

const FAQS = [
  {
    question: 'Apa itu ARTO?',
    answer:
      'ARTO adalah personal financial tracker yang membantu kamu mencatat transaksi, memahami pola pengeluaran, dan menjaga budget bulanan — dengan fitur unggulan batas pengeluaran harian dinamis.',
  },
  {
    question: 'Apakah ARTO gratis?',
    answer:
      'Ya. Seluruh fitur utama ARTO — pencatatan transaksi, budget, batas harian dinamis, analitik dasar, financial goals, dan financial health — dapat digunakan secara gratis.',
  },
  {
    question: 'Bagaimana cara kerja batas pengeluaran harian dinamis?',
    answer:
      'ARTO membagi sisa budget-mu dengan sisa hari pada periode budget. Kalau kamu hemat hari ini, batas besok otomatis naik. Kalau boros, batas besok menyesuaikan agar budget bulanan tetap aman.',
  },
  {
    question: 'Apakah ARTO terhubung ke rekening bank saya?',
    answer:
      'Tidak. ARTO tidak meminta kredensial bank maupun menghubungkan rekening secara otomatis. Kamu mencatat transaksi sendiri, sehingga data finansialmu tetap sepenuhnya di tanganmu.',
  },
  {
    question: 'Apa bedanya ARTO Web dan ARTO Mobile?',
    answer:
      'ARTO Web dirancang untuk dashboard lengkap dan analisis mendalam di layar besar. ARTO Mobile dioptimalkan untuk pencatatan super cepat dari ponsel Android, termasuk perangkat entry-level.',
  },
] as const

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pertanyaan yang sering diajukan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Semua hal dasar yang perlu kamu ketahui tentang ARTO.
          </p>
        </div>

        <ul className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <li
                key={faq.question}
                data-reveal
                style={{ transitionDelay: `${index * 50}ms` }}
                className={cn(
                  'overflow-hidden rounded-2xl border bg-surface transition-colors',
                  isOpen ? 'border-primary/40 ring-2 ring-primary/15' : 'border-border hover:border-primary/30',
                )}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold sm:text-base">{faq.question}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className={cn('h-5 w-5 shrink-0 text-primary transition-transform duration-200', isOpen && 'rotate-180')}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={buttonId} className="animate-fade-up px-5 pb-5">
                    <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
