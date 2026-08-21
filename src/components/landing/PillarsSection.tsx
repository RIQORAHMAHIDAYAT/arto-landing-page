import { cn } from '@/lib/cn'

const PILLARS = [
  {
    number: '01',
    title: 'Nyatet',
    subtitle: 'Pencatatan cepat tanpa ribet',
    description:
      'Catat pemasukan dan pengeluaran dalam beberapa sentuhan. Dukungan multi-dompet: Cash, Bank, dan E-Wallet.',
    icon: '📝',
    tone: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  {
    number: '02',
    title: 'Ngerti',
    subtitle: 'Visualisasi keuangan jernih',
    description:
      'Pahami pola pengeluaran lewat ringkasan dan grafik harian yang mudah dibaca — tanpa istilah akuntansi yang rumit.',
    icon: '📊',
    tone: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    number: '03',
    title: 'Ngatur',
    subtitle: 'Dynamic daily spending limit',
    description:
      'Tentukan budget bulanan, lalu biarkan ARTO menghitung batas pengeluaran harian secara dinamis agar budget tidak jebol.',
    icon: '🎯',
    tone: 'border-primary/40 bg-primary/10 text-primary',
  },
  {
    number: '04',
    title: 'Nyimpen',
    subtitle: 'Financial goals terukur',
    description:
      'Wujudkan targetmu — laptop baru, dana darurat, atau liburan — dengan progres tabungan yang terpantau setiap hari.',
    icon: '💰',
    tone: 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  {
    number: '05',
    title: 'Ngembangke',
    subtitle: 'Financial health score',
    description:
      'Evaluasi kesehatan keuanganmu secara berkala lewat skor sederhana berbasis aturan yang objektif dan mudah dipahami.',
    icon: '🌱',
    tone: 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400',
  },
] as const

export function PillarsSection() {
  return (
    <section id="fitur" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Filosofi Produk</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            5 pilar menuju keuangan yang lebih sehat
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            ARTO menerjemahkan prinsip <em className="font-semibold text-foreground not-italic">“Ngerti artone, ngerti uripe”</em>{' '}
            menjadi lima langkah praktis yang bisa kamu jalani setiap hari.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <li
              key={pillar.number}
              data-reveal
              style={{ transitionDelay: `${index * 60}ms` }}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className={cn('flex h-12 w-12 items-center justify-center rounded-xl border text-2xl', pillar.tone)}
                >
                  {pillar.icon}
                </span>
                <span className="text-xs font-bold text-muted/70">Pilar {pillar.number}</span>
              </div>
              <h3 className="text-xl font-extrabold">{pillar.title}</h3>
              <p className="mt-1 text-xs font-semibold text-primary">{pillar.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.description}</p>
            </li>
          ))}

          {/* Kartu penutup identitas */}
          <li
            data-reveal
            style={{ transitionDelay: '300ms' }}
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-8 text-center"
          >
            <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl shadow-md shadow-primary/25">
              💡
            </span>
            <h3 className="mt-4 text-lg font-extrabold">Bukan aplikasi bank</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              ARTO adalah pendamping keuangan pribadi — fokus pada pencatatan, pemahaman, dan disiplin,
              bukan transaksi perbankan.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
