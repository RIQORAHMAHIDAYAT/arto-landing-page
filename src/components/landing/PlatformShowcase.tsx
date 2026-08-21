import { useMemo, useState } from 'react'
import { EXPO_URL, MOBILE_APK_URL, WEB_APP_URL } from '@/config'
import { ButtonLink } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

type Platform = 'mobile' | 'web'

/** Pola QR dekoratif deterministik (placeholder, bukan QR asli). */
function createQrMatrix(size: number): boolean[][] {
  const matrix: boolean[][] = Array.from({ length: size }, () => Array<boolean>(size).fill(false))

  let seed = 987_654_321
  const random = () => {
    seed = (seed * 1_103_515_245 + 12_345) % 2_147_483_648
    return seed / 2_147_483_648
  }

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      matrix[row][col] = random() > 0.52
    }
  }

  const drawFinder = (startRow: number, startCol: number) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const isBorder = r === 0 || r === 6 || c === 0 || c === 6
        const isCore = r >= 2 && r <= 4 && c >= 2 && c <= 4
        matrix[startRow + r][startCol + c] = isBorder || isCore
      }
    }
  }

  drawFinder(0, 0)
  drawFinder(0, size - 7)
  drawFinder(size - 7, 0)

  return matrix
}

const MOBILE_FEATURES = [
  'Pencatatan transaksi super cepat saat bepergian.',
  'Ringan dan dioptimalkan untuk HP Android entry-level.',
  'Dashboard ringkas dengan batas harian selalu terlihat.',
] as const

const WEB_FEATURES = [
  'Analitik mendalam: tren, kategori, dan rata-rata belanja.',
  'Manajemen multi-dompet dan kategori yang lengkap.',
  'Tampilan lebar untuk memantau budget & goals secara menyeluruh.',
] as const

export function PlatformShowcase() {
  const [platform, setPlatform] = useState<Platform>('mobile')
  const qrMatrix = useMemo(() => createQrMatrix(21), [])

  return (
    <section id="platform" className="scroll-mt-20 border-y border-border/60 bg-surface/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Platform</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Akses ARTO di mana saja
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Catat cepat dari ponsel, analisis mendalam di web. Datamu tetap tersinkron di kedua platform.
          </p>
        </div>

        {/* Tab platform */}
        <div className="mb-10 flex justify-center">
          <div role="tablist" aria-label="Pilih platform" className="inline-flex rounded-xl border border-border bg-surface p-1.5">
            <button
              type="button"
              role="tab"
              id="tab-mobile"
              aria-selected={platform === 'mobile'}
              aria-controls="panel-mobile"
              onClick={() => setPlatform('mobile')}
              className={cn(
                'flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all sm:px-6',
                platform === 'mobile' ? 'bg-background text-primary shadow-sm ring-1 ring-border' : 'text-muted hover:text-foreground',
              )}
            >
              <span aria-hidden="true">📱</span> Android Mobile
            </button>
            <button
              type="button"
              role="tab"
              id="tab-web"
              aria-selected={platform === 'web'}
              aria-controls="panel-web"
              onClick={() => setPlatform('web')}
              className={cn(
                'flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all sm:px-6',
                platform === 'web' ? 'bg-background text-primary shadow-sm ring-1 ring-border' : 'text-muted hover:text-foreground',
              )}
            >
              <span aria-hidden="true">💻</span> Web App
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          {platform === 'mobile' ? (
            <div
              key="mobile"
              role="tabpanel"
              id="panel-mobile"
              aria-labelledby="tab-mobile"
              className="animate-fade-up grid gap-8 rounded-2xl border border-border bg-surface p-6 shadow-xl md:grid-cols-[1fr_auto] md:p-10"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-black">ARTO Mobile</h3>
                  <span className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-primary uppercase">
                    Android · v1.0.0
                  </span>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  Aplikasi Android yang dirancang untuk pencatatan keuangan di saku — cepat, ringan,
                  dan hemat baterai.
                </p>

                <ul className="mt-5 space-y-2.5">
                  {MOBILE_FEATURES.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs text-muted sm:text-sm">
                      <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink size="lg" href={MOBILE_APK_URL}>
                    <span aria-hidden="true">⬇️</span> Download APK Android
                  </ButtonLink>
                  <ButtonLink variant="ghost" size="lg" href={EXPO_URL}>
                    Buka di Expo
                  </ButtonLink>
                </div>
                <p className="mt-3 text-[11px] text-muted italic">
                  * Minimum Android 8.0 (Oreo). Dioptimalkan untuk perangkat entry-level.
                </p>
              </div>

              {/* Area QR */}
              <div className="flex flex-col items-center justify-center gap-3 md:border-l md:border-border md:pl-8">
                <div className="flex h-44 w-44 items-center justify-center rounded-xl border border-border bg-background p-3 text-foreground">
                  <svg viewBox="0 0 21 21" shapeRendering="crispEdges" className="h-full w-full" role="img" aria-label="Placeholder QR code download APK">
                    {qrMatrix.flatMap((row, r) =>
                      row.map((filled, c) =>
                        filled ? <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill="currentColor" /> : null,
                      ),
                    )}
                  </svg>
                </div>
                <p className="max-w-44 text-center text-[11px] leading-snug text-muted">
                  Scan untuk mengunduh APK. Ganti dengan QR resmi sebelum rilis.
                </p>
              </div>
            </div>
          ) : (
            <div
              key="web"
              role="tabpanel"
              id="panel-web"
              aria-labelledby="tab-web"
              className="animate-fade-up grid gap-8 rounded-2xl border border-border bg-surface p-6 shadow-xl md:grid-cols-[1fr_auto] md:p-10"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-black">ARTO Web App</h3>
                  <span className="rounded-md border border-secondary/20 bg-secondary/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-secondary uppercase">
                    Browser Ready
                  </span>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  Aplikasi web responsif untuk pengelolaan keuangan lengkap — dari dashboard sampai
                  analitik — langsung dari browser favoritmu.
                </p>

                <ul className="mt-5 space-y-2.5">
                  {WEB_FEATURES.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs text-muted sm:text-sm">
                      <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-info/10 text-[10px] font-bold text-blue-600 dark:text-blue-400">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <ButtonLink size="lg" href={WEB_APP_URL}>
                    <span aria-hidden="true">🚀</span> Buka Web Application <span aria-hidden="true">→</span>
                  </ButtonLink>
                </div>
                <p className="mt-3 text-[11px] text-muted italic">
                  * Mendukung Chrome, Safari, Edge, Firefox, dan browser mobile modern.
                </p>
              </div>

              {/* Visual mockup browser */}
              <div className="flex flex-col items-center justify-center gap-3 md:border-l md:border-border md:pl-8">
                <div className="w-full max-w-56 overflow-hidden rounded-xl border border-border bg-background">
                  <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-danger/70" />
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-warning/70" />
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-success/70" />
                  </div>
                  <div className="flex h-32 items-center justify-center text-4xl" aria-hidden="true">
                    🌐
                  </div>
                </div>
                <p className="text-center text-[11px] leading-snug text-muted">
                  Dashboard tersinkron antar perangkat.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
