import { WEB_APP_URL } from '@/config'
import { ButtonLink } from '@/components/ui/Button'

const PRODUCT_LINKS = [
  { label: 'Aplikasi Web', href: WEB_APP_URL },
  { label: 'ARTO Mobile (APK)', href: '#platform' },
  { label: 'Fitur Utama', href: '#fitur' },
] as const

const RESOURCE_LINKS = [
  { label: 'Cara Pakai', href: '#cara-pakai' },
  { label: 'Batas Harian Dinamis', href: '#daily-limit' },
  { label: 'Pertanyaan Umum', href: '#faq' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* Banner CTA penutup */}
        <div className="relative mb-16 overflow-hidden rounded-3xl bg-primary px-6 py-10 text-center text-white shadow-xl shadow-primary/25 sm:px-12 sm:py-14">
          <span aria-hidden="true" className="pointer-events-none absolute -top-6 -right-4 text-[120px] leading-none opacity-10 select-none">
            📉
          </span>
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
            Siap ngerti keuanganmu hari ini?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/85">
            Mulai catat, pahami pola pengeluaran, dan jaga budget dengan batas harian dinamis —
            semuanya gratis.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <ButtonLink variant="white" size="lg" href={WEB_APP_URL} className="w-full sm:w-auto">
              Daftar Web Sekarang
            </ButtonLink>
            <ButtonLink variant="outline-light" size="lg" href="#platform" className="w-full sm:w-auto">
              <span aria-hidden="true">📱</span> Download ARTO Mobile
            </ButtonLink>
          </div>
        </div>

        {/* Info brand + tautan */}
        <div className="grid gap-10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#" className="flex w-fit items-center gap-2.5" aria-label="ARTO — kembali ke atas">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-extrabold text-white shadow-md shadow-primary/25">
                A
              </span>
              <span className="text-xl font-extrabold tracking-tight">ARTO</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Personal financial tracker yang membantu kamu memahami dan mengatur keuangan harian
              dengan cara sederhana.
            </p>
            <p className="mt-3 text-sm font-semibold text-foreground italic">
              “Ngerti artone, ngerti uripe.”
            </p>
          </div>

          <nav aria-label="Tautan produk">
            <h3 className="mb-4 text-xs font-bold tracking-widest uppercase">Produk</h3>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Tautan bantuan">
            <h3 className="mb-4 text-xs font-bold tracking-widest uppercase">Jelajahi</h3>
            <ul className="space-y-2.5">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bar bawah */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted">© {year} ARTO Financial Tracker. Seluruh hak cipta dilindungi.</p>
          <p className="rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-[10px] text-muted">
            v1.0.0
          </p>
        </div>
      </div>
    </footer>
  )
}
