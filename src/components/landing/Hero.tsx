import { WEB_APP_URL } from '@/config'
import { ButtonLink } from '@/components/ui/Button'

const HERO_CHIPS = [
  { icon: '💳', label: 'Multi-Dompet' },
  { icon: '📉', label: 'Dynamic Limit' },
  { icon: '📊', label: 'Grafik Jernih' },
  { icon: '🎯', label: 'Financial Goals' },
  { icon: '🪴', label: 'Health Score' },
  { icon: '⚡', label: 'Catat Super Cepat' },
] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 md:pt-24 md:pb-24">
      {/* Dekorasi latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-120px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-140px] bottom-0 h-[320px] w-[320px] rounded-full bg-secondary/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge tagline */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[11px] font-bold tracking-wide text-primary shadow-sm sm:text-xs">
            <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            NGERTI ARTONE, NGERTI URIPE
          </div>

          {/* Headline besar */}
          <h1 className="animate-fade-up delay-100 mt-6 max-w-4xl text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Kelola uang lebih bijak,
            <br />
            <span className="text-primary">tanpa bikin pusing.</span>
          </h1>

          {/* Copy pendukung */}
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            ARTO membantu kamu nyatet, ngerti, ngatur, nyimpen, dan ngembangke keuangan — lengkap
            dengan <strong className="font-semibold text-foreground">batas pengeluaran harian dinamis</strong>{' '}
            yang dihitung otomatis setiap kali kamu mencatat transaksi.
          </p>

          {/* CTA ganda */}
          <div className="animate-fade-up delay-300 mt-8 flex w-full flex-col items-center gap-3.5 sm:w-auto sm:flex-row">
            <ButtonLink size="lg" href={WEB_APP_URL} className="w-full px-8 sm:w-auto">
              Gunakan ARTO Web <span aria-hidden="true">→</span>
            </ButtonLink>
            <ButtonLink variant="ghost" size="lg" href="#platform" className="w-full sm:w-auto">
              <span aria-hidden="true">📱</span> Download Android
            </ButtonLink>
          </div>

          {/* Chip fitur */}
          <ul className="mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-2.5" aria-label="Fitur unggulan ARTO">
            {HERO_CHIPS.map((chip) => (
              <li
                key={chip.label}
                className="flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5"
              >
                <span aria-hidden="true">{chip.icon}</span>
                {chip.label}
              </li>
            ))}
          </ul>

          {/* Pratinjau dashboard */}
          <figure className="mt-14 w-full max-w-5xl rounded-2xl border border-border/80 bg-surface p-4 text-left shadow-2xl sm:p-6">
            <div className="mb-4 flex flex-col justify-between gap-3 border-b border-border pb-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-extrabold text-primary">
                  A
                </span>
                <div>
                  <figcaption className="text-sm font-bold">Pratinjau Dashboard ARTO</figcaption>
                  <p className="text-xs text-muted">Periode Agustus 2026 · Dompet Cash &amp; Bank</p>
                </div>
              </div>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-success" />
                Budget aman · sisa 18 hari
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-xs font-medium text-muted">Total Saldo</p>
                <p className="mt-1 text-xl font-extrabold">Rp 12.450.000</p>
                <p className="mt-2 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  ↑ Masuk bulan ini Rp 5.200.000
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-xs font-medium text-muted">Pengeluaran Bulan Ini</p>
                <p className="mt-1 text-xl font-extrabold">Rp 2.750.000</p>
                <p className="mt-2 text-[11px] font-medium text-muted">Dari total budget Rp 4.500.000</p>
              </div>

              <div className="rounded-xl border border-primary/40 bg-primary/5 p-4">
                <p className="text-xs font-bold text-primary">Batas Harian Dinamis</p>
                <p className="mt-1 text-xl font-extrabold text-primary">
                  Rp 97.200 <span className="text-xs font-normal text-muted">/hari</span>
                </p>
                <p className="mt-2 text-[11px] font-medium text-muted">Terpakai hari ini Rp 45.000</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-border bg-background p-4">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                <span>Status batas harian hari ini</span>
                <span className="text-primary">Sisa Rp 52.200 — aman</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-border" role="presentation">
                <div className="h-full w-[46%] rounded-full bg-primary" />
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-muted">
                <span>Pengeluaran hari ini Rp 45.000</span>
                <span>Batas aman Rp 97.200</span>
              </div>
            </div>

            <figcaption className="mt-3 text-center text-[11px] text-muted italic">
              Angka di atas adalah data contoh untuk presentasi, bukan data pengguna.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
