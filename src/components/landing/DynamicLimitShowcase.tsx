import { useState } from 'react'
import { formatRupiah } from '@/lib/currency'

const CHECKLIST = [
  {
    bold: 'Hemat hari ini?',
    text: 'Sisa batas besok otomatis bertambah.',
  },
  {
    bold: 'Boros hari ini?',
    text: 'Batas besok disesuaikan agar budget bulanan tetap aman.',
  },
  {
    bold: 'Tanpa hitung manual',
    text: 'ARTO yang menghitung ulang setiap kali kamu mencatat transaksi.',
  },
] as const

export function DynamicLimitShowcase() {
  const [budget, setBudget] = useState(1_500_000)
  const [spent, setSpent] = useState(450_000)
  const [remainingDays, setRemainingDays] = useState(20)

  const remainingBudget = Math.max(0, budget - spent)
  const dailyLimit = remainingDays > 0 ? Math.round(remainingBudget / remainingDays) : 0
  const isDepleted = spent >= budget

  return (
    <section id="daily-limit" className="scroll-mt-20 border-y border-border/60 bg-surface/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Penjelasan */}
          <div data-reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Fitur Unggulan</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Dynamic daily spending limit
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Pernah membuat budget bulanan, lalu kehabisan uang di tengah bulan karena tidak tahu
              berapa batas aman belanja per hari?
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              ARTO menghitung batas harian secara otomatis dan real-time dengan formula sederhana:
            </p>

            <p className="my-6 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 font-mono text-sm font-bold text-primary shadow-sm">
              daily_limit = remaining_budget / remaining_days
            </p>

            <ul className="space-y-3">
              {CHECKLIST.map((item) => (
                <li key={item.bold} className="flex items-start gap-2.5 text-sm text-muted">
                  <span aria-hidden="true" className="mt-0.5 font-bold text-primary">✓</span>
                  <span>
                    <strong className="font-semibold text-foreground">{item.bold}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Simulator interaktif */}
          <div data-reveal className="rounded-2xl border border-border bg-surface p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between gap-3 border-b border-border pb-4">
              <h3 className="text-base font-bold">Simulator batas harian</h3>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Coba langsung
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                  <label htmlFor="sim-budget">Total budget bulanan</label>
                  <output htmlFor="sim-budget" className="font-bold text-primary">
                    {formatRupiah(budget)}
                  </output>
                </div>
                <input
                  id="sim-budget"
                  type="range"
                  min={500_000}
                  max={5_000_000}
                  step={100_000}
                  value={budget}
                  onChange={(event) => {
                    const next = Number(event.target.value)
                    setBudget(next)
                    if (spent > next) setSpent(next)
                  }}
                  className="w-full cursor-pointer accent-primary"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                  <label htmlFor="sim-spent">Sudah terpakai</label>
                  <output htmlFor="sim-spent" className="font-bold text-danger">
                    {formatRupiah(spent)}
                  </output>
                </div>
                <input
                  id="sim-spent"
                  type="range"
                  min={0}
                  max={budget}
                  step={25_000}
                  value={spent}
                  onChange={(event) => setSpent(Number(event.target.value))}
                  className="w-full cursor-pointer accent-danger"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                  <label htmlFor="sim-days">Sisa hari bulan ini</label>
                  <output htmlFor="sim-days" className="font-bold">
                    {remainingDays} hari
                  </output>
                </div>
                <input
                  id="sim-days"
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={remainingDays}
                  onChange={(event) => setRemainingDays(Number(event.target.value))}
                  className="w-full cursor-pointer accent-secondary"
                />
              </div>

              <div
                aria-live="polite"
                className={
                  isDepleted
                    ? 'rounded-xl border border-danger/40 bg-danger/10 p-5 text-center'
                    : 'rounded-xl border border-primary/40 bg-primary/10 p-5 text-center'
                }
              >
                <p className={`text-xs font-bold tracking-wider uppercase ${isDepleted ? 'text-danger' : 'text-primary'}`}>
                  {isDepleted ? 'Budget sudah terpakai habis' : 'Batas aman pengeluaran per hari'}
                </p>
                <p className={`mt-2 text-3xl font-black ${isDepleted ? 'text-danger' : 'text-primary'}`}>
                  {formatRupiah(dailyLimit)}
                </p>
                <p className="mt-2 text-xs text-muted">
                  Sisa budget {formatRupiah(remainingBudget)} dibagi {remainingDays} hari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
