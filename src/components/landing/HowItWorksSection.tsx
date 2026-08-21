const STEPS = [
  {
    number: '1',
    title: 'Buat akun & dompet',
    description: 'Daftar gratis, lalu tambahkan dompetmu — Cash, Bank, atau E-Wallet.',
    icon: '👤',
  },
  {
    number: '2',
    title: 'Atur budget bulanan',
    description: 'Misalnya: budget makan Rp 1.500.000 per bulan. ARTO siap mengawal.',
    icon: '🎯',
  },
  {
    number: '3',
    title: 'Catat & pantau',
    description: 'Setiap transaksi tercatat, batas pengeluaran harian dihitung ulang otomatis.',
    icon: '⚡',
  },
] as const

export function HowItWorksSection() {
  return (
    <section id="cara-pakai" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Cara Pakai</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Mulai dalam 3 langkah sederhana
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Tidak perlu jadi ahli keuangan. ARTO dirancang agar siapa pun bisa langsung paham.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.number}
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
              className="relative rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lg font-black text-white shadow-md shadow-primary/25"
                >
                  {step.number}
                </span>
                <span aria-hidden="true" className="text-2xl">{step.icon}</span>
              </div>
              <h3 className="mt-5 text-lg font-extrabold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
