const METRICS = [
  {
    title: '100% Dinamis',
    description: 'Batas pengeluaran harian dihitung ulang otomatis setiap transaksi tercatat.',
  },
  {
    title: '< 5 Detik',
    description: 'Waktu yang dibutuhkan untuk mencatat pemasukan atau pengeluaran harian.',
  },
  {
    title: '0 Akses Bank',
    description: 'Tanpa koneksi rekening bank — data finansialmu tetap sepenuhnya milikmu.',
  },
  {
    title: '2 Platform',
    description: 'Tersedia di Web App responsif dan aplikasi Android yang ringan.',
  },
] as const

export function MetricsStrip() {
  return (
    <section aria-label="Keunggulan ARTO dalam angka" className="border-y border-border/80 bg-surface/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => (
            <div key={metric.title} data-reveal className="flex flex-col">
              <dt className="sr-only">{metric.title}</dt>
              <dd className="text-2xl font-black tracking-tight text-primary sm:text-3xl">{metric.title}</dd>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{metric.description}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
